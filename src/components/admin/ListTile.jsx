import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const ListTile = ({ doc, type }) => {
  const onApproveClickListener = () => {
    addCertificate(doc.username, doc.filename, doc.fileurl, doc.userId);
  };
  const { addCertificate, addNewDocRequest, updateToStatus } =
    useContext(AppContext);

  const onRejectListener = () => {
    updateToStatus(
      "rejected",
      type,
      doc.userId,
      doc.filename,
      doc.token,
      doc.certId
    );
  };

  return (
    <tr class="border-b hover:bg-blue-100 bg-gray-100">
      <td class="p-3 px-5">{doc.username}</td>
      <td class="p-3 px-5">{doc.filename}</td>
      <td class="p-3 px-5 flex justify-end">
        <Link to="/view" state={{ fileurl: doc.fileurl }}>
          <div
            type="button"
            class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            View
          </div>
        </Link>
        {(type === "rejected" || type === "pending") && (
          <button
            onClick={onApproveClickListener}
            type="button"
            class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Approve
          </button>
        )}

        {(type === "approved" || type === "pending") && (
          <button
            type="button"
            onClick={onRejectListener}
            class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Reject
          </button>
        )}
      </td>
    </tr>
  );
};

export default ListTile;
