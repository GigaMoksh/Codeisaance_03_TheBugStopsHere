import React, { useState } from "react";
import { Link, createSearchParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ListTile = ({ doc, isRejected }) => {
  var date = new Date(doc.updatedAt);
  var options = { year: "numeric", month: "long", day: "numeric" };
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

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
        {isRejected ? (
          <></>
        ) : (
          <CopyToClipboard
            text={`localhost:3000/verify/?userId=${doc.userId}&token=${doc.token}`}
            onCopy={onCopyText}
          >
            <div className="copy-area">
              <button
                type="button"
                class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Copy Link
              </button>
              {isCopied && <span>Copied!</span>}
            </div>
          </CopyToClipboard>
          // <button
          //   type="button"
          //   class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          // >
          //   Copy Link
          // </button>
        )}
      </td>
    </tr>
  );
};

export default ListTile;
