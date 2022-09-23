import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { BsCheckCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import PDFViewer from "./PDFViewer";

const Verify = ({ u, token }) => {
  useEffect(() => {
    (async () => {
      verifyCertificate("0x48D527dEBF9F32096CB5DcB385346C1d4ad929EE", "2");
    })();
  }, []);
  const { verifyCertificate } = useContext(AppContext);
  const isVerified = true;
  console.log("user: ", u);
  return (
    <div className="flex flex-row">
      <div className="relative p-10 mt-5 w-4/5">
        <PDFViewer />
      </div>
      <div className="p-5 pt-10 pb-10 mt-5 flex flex-col items-center w-2/5">
        <div className="flex items-center justify-center flex-col gap-y-4 w-full">
          {isVerified ? (
            <BsCheckCircle className="text-[150px] text-green-500 hover:scale-75" />
          ) : (
            <ImCross className="text-[150px] text-red-500 hover:scale-75" />
          )}
          <p className="mt-4 text-[25px]">
            {isVerified ? "Verified" : "Not Verified"}
          </p>
        </div>
        <div class="flex items-center mt-6 w-full">
          <div class="">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name :
            </label>
          </div>
          <div class="md:w-2/3">
            <p class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              Prateek Vishwakarma
            </p>
          </div>
        </div>
        <div class="flex items-center mt-6 w-full">
          <div class="">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              File name :
            </label>
          </div>
          <div class="md:w-2/3">
            <p class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              Document.pdf
            </p>
          </div>
        </div>
        <div class="flex items-center mt-6 w-full">
          <div class="">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Etherscan :
            </label>
          </div>
          <div class="md:w-2/3">
            <p class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              google.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
