import React, { useState } from "react";
import FileImg from "../../assests/file.png";
import { Link } from "react-router-dom";
const UploadDoc = () => {
  const styles = {
    container: `absolute inset-0 w-full h-full m-auto`,
    inputForm: `relative z-10 opacity-0 h-full w-full cursor-pointer`,
    bgimage: `h-screen w-full object-cover transition duration-300`,
    uploadcontainer: `absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center`,
  };

  const [file, setFile] = useState("");
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form className="flex flex-col items-center ">
        <div class="">
          <div class="relative group w-full h-64 flex justify-center items-center">
            <div class="absolute inset-0 w-full h-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300"></div>

            <input
              accept=".pdf"
              className={styles.inputForm}
              type="file"
              name="bgfile"
              id="bgfile"
            />

            <div className={styles.uploadcontainer}>
              <div class="space-y-6 text-center">
                <img
                  src={FileImg}
                  class="sm:w-40 w-32 m-auto"
                  alt="illustration"
                />
                <p class="text-gray-700 text-lg">
                  Drag and drop a file or{" "}
                  <label
                    for="dragOver"
                    title="Upload a file"
                    class="relative z-20 cursor-pointer text-blue-500 hover:text-blue-600 block"
                  >
                    Upload a file
                  </label>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly gap-x-10">
          <Link
            to="/userDashboard"
            className="m-auto mt-[16px] w-full block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Back
          </Link>
          <div className="m-auto mt-[16px] w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            <Link
            //  to="/userDashboard"
            >
              Submit
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadDoc;
