import React, { useContext, useEffect } from "react";
import ListTile from "./ListTile";
import { AppContext } from "../../context/AppContext";

const AdminPending = ({ type }) => {
  useEffect(() => {
    (async () => {
      queryAdminRequestsByStatus(type);
    })();
  }, [type]);

  const {
    addCertificate,
    verifyCertificate,
    addNewDocRequest,
    queryUserRequestsByUserId,
    queryAdminRequestsByStatus,
    adminRequests,
    setAdminRequests,
  } = useContext(AppContext);

  return (
    <div class="h-full text-gray-900 bg-gray-200">
      <div class="p-3 flex">
        <h1
          className="capitalize text-4xl"
          class="text-3xl"
        >{`${type} Requests`}</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-center p-2 px-5">UserId</th>
              <th class="text-center p-2 px-5">FileName</th>
              <th></th>
            </tr>
            {adminRequests.length !== 0 ? (
              adminRequests.map((doc) => <ListTile doc={doc} type={type} />)
            ) : (
              <div className="py-8">No Pending requests</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPending;
