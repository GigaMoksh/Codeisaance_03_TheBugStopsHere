import React from "react";

const ListTile = ({ doc }) => {
  return (
    <tr class="border-b hover:bg-blue-100 bg-gray-100">
      <td class="p-3 px-5">{doc.name}</td>
      <td class="p-3 px-5">{doc.filename}</td>
      <td class="p-3 px-5 flex justify-end">
        <button
          type="button"
          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default ListTile;
