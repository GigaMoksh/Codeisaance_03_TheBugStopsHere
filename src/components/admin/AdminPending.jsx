import React, { useContext } from "react";
import ListTile from "./ListTile";
import { AppContext } from "../../context/AppContext";

const AdminPending = () => {
  const doc = {
    name: "Omkar Bhostekar",
    filename: "Birth certificate",
  };

  const onApproveListener = () => {
    console.log("clicked");
    addCertificate();
  };

  const { addCertificate } = useContext(AppContext);

  return (
    <div class="h-full text-gray-900 bg-gray-200">
      <div class="p-3 flex">
        <h1 class="text-3xl">Users</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-2 px-5">Name</th>
              <th class="text-left p-2 px-5">FileName</th>
              <th></th>
            </tr>
            <ListTile doc={doc} onApprove={onApproveListener} />
            <ListTile doc={doc} onApprove={onApproveListener} />
            <ListTile doc={doc} onApprove={onApproveListener} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPending;
