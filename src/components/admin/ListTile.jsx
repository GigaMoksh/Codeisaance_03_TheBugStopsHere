import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const ListTile = ({ doc }) => {
  const onApproveClickListener = () => {
    addCertificate(doc.username, doc.filename, doc.fileurl, doc.userId);
  };
  const { addCertificate, addNewDocRequest } = useContext(AppContext);

  return (
    <tr class="border-b hover:bg-blue-100 bg-gray-100">
      <td class="p-3 px-5">{doc.username}</td>
      <td class="p-3 px-5">{doc.filename}</td>
      <td class="p-3 px-5 flex justify-end">
        <button
          type="button"
          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          View
        </button>
        <button
          onClick={onApproveClickListener}
          type="button"
          class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Approve
        </button>
        <button
          type="button"
          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default ListTile;
