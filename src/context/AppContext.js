import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { certificateAbi, certificateAddress } from "../lib/constants";
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formattedAccount, setFormattedAccount] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [addNewRequest, setAddNewRequest] = useState(false);
  const [newReqIsLoading, setNewReqIsLoading] = useState(false);
  const [adminRequests, setAdminRequests] = useState([]);
  const [userDocs, setUserDocs] = useState([]);
  const [isDocsLoading, setIsDocsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU1RDkwQTY4NzAxNTdhOUJjQjU5Nzk3MjI1NzcxMjU4MUQ0NzkwQTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM5NzM2MjI0NTIsIm5hbWUiOiJEaWdpc2VjIn0.eEIg4_etr_LMXjGG1e1YADA6iRgLtPKs4lfzr82te2Y",
  });

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
    isInitialized,
  } = useMoralis();

  const {
    data: userData,
    error: userDataError,
    isLoading: userDataIsLoading,
  } = useMoralisQuery("_User");

  useEffect(() => {
    (async () => {
      if (!isWeb3Enabled) {
        await enableWeb3();
      }

      if (isAuthenticated) {
        const currentUsername = await user?.get("nickname");
        setUsername(currentUsername);
        const account = await user?.get("ethAddress");
        setCurrentAccount(account);
        console.log("current account", account);
        setIsAdmin(account === "0xdde031790af8847d81044ced61da91c085abef7a");
        const formatAccount = account.slice(0, 5) + "..." + account.slice(-5);
        setFormattedAccount(formatAccount);
        console.log(account);
        console.log(formatAccount);
        console.log(userData);
      } else {
        setCurrentAccount("");
        setFormattedAccount("");
        setIsAdmin(false);
      }
    })();
  }, [
    isWeb3Enabled,
    isAuthenticated,
    authenticate,
    currentAccount,
    setUsername,
    user,
    username,
  ]);

  const addNewDocRequest = async (filename, fileurl) => {
    setNewReqIsLoading(true);
    setAddNewRequest(false);
    const Request = Moralis.Object.extend("requests");
    const request = new Request();
    request.set("userId", user.attributes.ethAddress);
    request.set("filename", filename);
    request.set("fileurl", fileurl);
    request.set("status", "pending");
    request.set("username", user.attributes.username);
    request.save().then(
      (request) => {
        console.log("New object created with objectId: " + request.id);
        setNewReqIsLoading(false);
        setAddNewRequest(true);
        return true;
      },
      (error) => {
        console.log(
          "Failed to create new object, with error code: " + error.message
        );
        return false;
      }
    );
    return false;
  };

  const queryUserRequestsByUserId = async (status) => {
    setUserDocs([]);
    setIsDocsLoading(true);
    const Request = Moralis.Object.extend("requests");
    const query = new Moralis.Query(Request);
    query.equalTo("userId", user.attributes.ethAddress);
    query.equalTo("status", status);
    const results = await query.find();
    const res = results.map((result) => {
      return result.attributes;
    });
    console.log(res);
    setIsDocsLoading(false);
    setUserDocs(res);
  };

  const queryAdminRequestsByStatus = async (status) => {
    const Request = Moralis.Object.extend("requests");
    const query = new Moralis.Query(Request);
    query.equalTo("status", status);
    const results = await query.find();
    const res = results.map((result) => {
      return result.attributes;
    });
    console.log(res);
    setAdminRequests(res);
  };

  const getRequestDetail = async (userId, token) => {
    const Request = Moralis.Object.extend("requests");
    const query = new Moralis.Query(Request);
    query.equalTo("userId", userId);
    query.equalTo("token", token);
    const results = await query.find();
    const res = results.map((result) => {
      return result.attributes;
    });
    console.log(res);
    return res[0];
  };

  const deleteRequest = async (userId, fileurl) => {
    const Request = Moralis.Object.extend("requests");
    const query = new Moralis.Query(Request);
    query.equalTo("userId", userId);
    query.equalTo("status", "pending");
    query.equalTo("fileurl", fileurl);
    const obj = await query.first();
    if (obj) {
      obj.destroy().then(
        () => {
          console.log("deleted");
          queryUserRequestsByUserId("pending");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const addCertificate = async (username, filename, url, userId) => {
    const id = Math.random().toString(36).substring(2, 15);
    const key = "1234567890";
    const options = {
      contractAddress: certificateAddress,
      functionName: "addCertificate",
      abi: certificateAbi,
      params: {
        _userName: username,
        _fileName: filename,
        _url: url,
        _id: id,
        _key: key,
        _user: userId,
      },
    };
    // console.log(user);
    console.log("before execute");
    const res = await Moralis.executeFunction(options);
    console.log("afeter execute function");
    console.log("res: ", res);
    updateToStatus("approved", "pending", userId, filename, res.hash, id);
  };

  const updateToStatus = async (
    status,
    fetch,
    userId,
    filename,
    token,
    certId
  ) => {
    const Request = Moralis.Object.extend("requests");
    const query = new Moralis.Query(Request);
    query.equalTo("userId", userId);
    query.equalTo("filename", filename);
    const obj = await query.first();
    obj.set("status", status);
    obj.set("token", token);
    obj.set("certId", certId);
    obj.save().then(
      (obj) => {
        queryAdminRequestsByStatus(fetch);
      },
      (error) => {
        console.log(
          "Failed to update object, with error code: " + error.message
        );
      }
    );
  };

  const verifyCertificate = async (userId, certId) => {
    const options = {
      contractAddress: certificateAddress,
      functionName: "getCertificate",
      abi: certificateAbi,
      params: {
        _user: userId,
        _id: certId,
      },
    };
    console.log("before verification");
    const res = await Moralis.executeFunction(options);
    console.log(res);
  };

  const uploadFile = async (file) => {
    setIsUploading(true);
    const cid = await client.put([file]);
    console.log("stored cid: ", cid);
    setIsUploading(false);
    return cid;
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        isInitialized,
        addCertificate,
        verifyCertificate,
        addNewDocRequest,
        queryUserRequestsByUserId,
        queryAdminRequestsByStatus,
        adminRequests,
        setAdminRequests,
        userDocs,
        setUserDocs,
        isDocsLoading,
        getRequestDetail,
        isAdmin,
        uploadFile,
        isUploading,
        newReqIsLoading,
        addNewRequest,
        deleteRequest,
        updateToStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
