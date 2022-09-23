import React, { useContext, useEffect } from "react";
import ListTile from "./ListTile";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
const VerifiedDoc = () => {
  useEffect(() => {
    (async () => {
      queryUserRequestsByUserId("approved");
    })();
  }, []);
  const { userDocs, queryUserRequestsByUserId, isDocsLoading } =
    useContext(AppContext);
  return (
    <div class="h-full text-gray-900 bg-gray-200">
      <div class="p-3 flex">
        <h1 class="text-3xl">Verified Documents</h1>
      </div>
      <div class="px-3 py-4 flex flex-col justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="p-2 px-5 text-center">FileName</th>
              <th class="p-2 px-5 text-center">Verified On</th>
              <th></th>
            </tr>
            {isDocsLoading ? (
              <div className="py-8 w-full justify-center">Loading...</div>
            ) : userDocs.length !== 0 ? (
              userDocs.map((doc) => <ListTile doc={doc} />)
            ) : (
              <div className="py-8">No Pending requests</div>
            )}
          </tbody>
        </table>
        <Link className="w-fit" to="/upload-doc">
          <IoAddCircleOutline className="text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default VerifiedDoc;
