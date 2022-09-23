import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { certificateAbi, certificateAddress } from "../lib/constants";
import { ethers } from "ethers";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formattedAccount, setFormattedAccount] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [addNewRequest, setAddNewRequest] = useState("");
  const [newReqIsLoading, setNewReqIsLoading] = useState(false);
  const [adminRequests, setAdminRequests] = useState([]);
  const [userDocs, setUserDocs] = useState([]);
  const [isDocsLoading, setIsDocsLoading] = useState(false);

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
        const formatAccount = account.slice(0, 5) + "..." + account.slice(-5);
        setFormattedAccount(formatAccount);
        console.log(account);
        console.log(formatAccount);
        console.log(userData);
      } else {
        setCurrentAccount("");
        setFormattedAccount("");
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
    const Request = Moralis.Object.extend("requests");
    const request = new Request();
    request.set("userId", user.attributes.ethAddress);
    request.set("filename", filename);
    request.set("fileurl", fileurl);
    request.set("status", "pending");
    request.set("username", user.attributes.username);
    request.save().then(
      (request) => {
        alert("New object created with objectId: " + request.id);
      },
      (error) => {
        alert("Failed to create new object, with error code: " + error.message);
      }
    );
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
    updateToApproved(userId, filename, res.hash, id);
  };

  const updateToApproved = async (userId, filename, token, certId) => {
    const Request = Moralis.Object.extend("requests");
    const query = new Moralis.Query(Request);
    query.equalTo("userId", userId);
    query.equalTo("filename", filename);
    const obj = await query.first();
    obj.set("status", "approved");
    obj.set("token", token);
    obj.set("certId", certId);
    obj.save().then(
      (obj) => {
        queryAdminRequestsByStatus("pending");
      },
      (error) => {
        alert("Failed to update object, with error code: " + error.message);
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

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
