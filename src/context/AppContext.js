import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import {
  amazonAbi,
  amazonCoinAddress,
  certificateAbi,
  certificateAddress,
} from "../lib/constants";
import { ethers } from "ethers";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis();

  const addCertificate = async () => {
    const username = "omkarbhostekar";
    const filename = "abc.pdf";
    const url = "https://abc.com/xyz";
    const id = "1";
    const key = "1234";
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
        _user: user.attributes.ethAddress,
      },
    };
    // console.log(user);
    const res = await Moralis.executeFunction(options);
    console.log(res);
  };

  return (
    <AppContext.Provider
      value={{
        addCertificate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
