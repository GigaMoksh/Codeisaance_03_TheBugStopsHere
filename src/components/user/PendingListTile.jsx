import React from "react";

const PendingListTile = ({ doc }) => {
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
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PendingListTile;
