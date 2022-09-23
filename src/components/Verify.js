import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BsCheckCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import PDFViewer from "./PDFViewer";
import { useSearchParams } from "react-router-dom";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");
  useEffect(() => {
    (async () => {
      const detail = await getRequestDetail(userId, token);
      setIsVerified(detail.status === "approved");
      setName(detail.username);
      setFilename(detail.filename);
      setFileurl(detail.fileurl);
      var date = new Date(detail.updatedAt);
      var options = { year: "numeric", month: "long", day: "numeric" };
      setVerifiedOn(date.toLocaleDateString("en-US", options));
      setEtherScanLink(`https://rinkeby.etherscan.io/tx/${detail.token}`);
      console.log(detail);
    })();
  }, []);
  const { getRequestDetail } = useContext(AppContext);
  const [isVerified, setIsVerified] = useState(false);
  const [name, setName] = useState("");
  const [filename, setFilename] = useState("");
  const [fileurl, setFileurl] = useState("");
  const [etherScanLink, setEtherScanLink] = useState("");
  const [verifiedOn, setVerifiedOn] = useState("");

  return (
    <div className="flex flex-row">
      <div className="relative p-10 mt-5 w-4/5">
        {fileurl && <PDFViewer fileurl={fileurl} />}
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
              {name}
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
              {filename}
            </p>
          </div>
        </div>
        <div class="flex items-center mt-6 w-full">
          <div class="">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Verified On :
            </label>
          </div>
          <div class="md:w-2/3">
            <p class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {verifiedOn}
            </p>
          </div>
        </div>
        <div class="flex items-center mt-8 w-full justify-center">
          {etherScanLink && (
            <button
              type="button"
              class="mr-3 text-md bg-green-500 hover:bg-green-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline"
              onClick={() => window.open(etherScanLink, "_blank")}
            >
              View Certificate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
