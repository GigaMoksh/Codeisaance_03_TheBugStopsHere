import React from "react";
import { Link, createSearchParams } from "react-router-dom";

const ListTile = ({ doc }) => {
  var date = new Date(doc.updatedAt);
  var options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <tr class="border-b hover:bg-blue-100 bg-gray-100">
      <td class="p-3 px-5">{doc.filename}</td>
      <td class="p-3 px-5">{date.toLocaleDateString("en-US", options)}</td>
      <td class="p-3 px-5 flex justify-end">
        <button
          type="button"
          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          <Link to={`/verify/?userId=${doc.userId}&token=${doc.token}`}>
            View
          </Link>
        </button>
        <button
          type="button"
          class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Copy Link
        </button>
      </td>
    </tr>
  );
};

export default ListTile;
