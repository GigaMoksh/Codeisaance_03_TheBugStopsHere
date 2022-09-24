import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import FileImg from "../../assests/file.png";
import { Link, useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import { SyncLoader } from "react-spinners";
import swal from "sweetalert";
import { encrypt } from "../../utils/secure";

const UploadDoc = () => {
  const navigate = useNavigate();
  const styles = {
    container: `absolute inset-0 w-full h-full m-auto`,
    inputForm: `relative z-10 opacity-0 h-full w-full cursor-pointer`,
    bgimage: `h-screen w-full object-cover transition duration-300`,
    uploadcontainer: `absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center`,
  };

  const onSubmitClickListener = async () => {
    console.log(file);
    if (!file) return;
    const cid = await uploadFile(file);
    const url = "https://" + cid + ".ipfs.w3s.link/" + rawFileName;
    console.log(url);
    const res = await addNewDocRequest(filename, url);
    await swal("", "Successfully Uploaded!", "success");
    navigate("/");
    // var fileReader = new FileReader();
    // var base64;
    // fileReader.onload = function (fileLoadedEvent) {
    //   base64 = fileLoadedEvent.target.result;
    // };
    // fileReader.readAsDataURL(file);
    // console.log(base64);
    // const enc = encrypt(base64);
    // console.log("encrypted: ", enc);
  };
  const fileTypes = ["PDF"];

  const handleFile = (file) => {
    setFile(file);
    setRawFileName(file.name);
  };

  const { addNewDocRequest, isUploading, uploadFile, addNewRequest } =
    useContext(AppContext);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [rawFileName, setRawFileName] = useState("");

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {isUploading ? (
        <div>
          <SyncLoader color="#36d7b7" />
        </div>
      ) : (
        <form className="flex flex-col items-center p-10 bg-cyan-200 shadow-md">
          <div className="my-5"><h1 className="TEXT-CENTER">Upload Document</h1></div>
          <div class="form-floating mb-3 xl:w-96">
            <input
              type="text"
              autocomplete="off"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="filename"
              placeholder="Add a file name"
              onInput={(e) => setFilename(e.target.value)}
            />
          </div>
          <div class="mt-20">
            <FileUploader
              handleChange={handleFile}
              multiple={false}
              name="file"
              types={fileTypes}
            />
          </div>
          <div className="flex w-full justify-evenly gap-x-10">
            <Link
              to="/"
              className="m-auto mt-[16px] w-full block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Back
            </Link>
            <div
              className="m-auto mt-[16px] w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={onSubmitClickListener}
            >
              Submit
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default UploadDoc;
