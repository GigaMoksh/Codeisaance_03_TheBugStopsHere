import React from "react";
import ListTile from "./ListTile";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from 'react-icons/io5'
const VerifiedDoc = () => {
  const doc = {
    name: "Omkar Bhostekar",
    filename: "Birth certificate",
  };
  return (
    <div class="h-full text-gray-900 bg-gray-200">
      <div class="p-3 flex">
        <h1 class="text-3xl">Verified Documents</h1>
      </div>
      <div class="px-3 py-4 flex flex-col justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-2 px-5">Name</th>
              <th class="text-left p-2 px-5">FileName</th>
              <th></th>
            </tr>
            <ListTile doc={doc} />
            <ListTile doc={doc} />
            <ListTile doc={doc} />
          </tbody>
        </table>
        <Link to="/upload-doc">
          <IoAddCircleOutline className="text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default VerifiedDoc;
