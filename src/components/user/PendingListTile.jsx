import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const PendingListTile = ({ doc }) => {
  const { deleteRequest } = useContext(AppContext);

  const deleteHandler = async () => {
    deleteRequest(doc.userId, doc.fileurl);
  };

  var date = new Date(doc.updatedAt);
  var options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <tr class="border-b hover:bg-blue-100 bg-gray-100">
      <td class="p-3 px-5">{doc.filename}</td>
      <td class="p-3 px-5">{date.toLocaleDateString("en-US", options)}</td>
      <td class="p-3 px-5 flex justify-end">
        <button
          type="button"
          class="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PendingListTile;
