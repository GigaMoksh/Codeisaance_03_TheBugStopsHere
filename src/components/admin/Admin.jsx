import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { FaGem, FaHeart } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import AdminPending from "./AdminPending";

const Admin = () => {
  const [current, setCurrent] = useState(0);
  const { isAdmin } = useContext(AppContext);
  console.log("isAdmin", isAdmin);
  return (
    <div>
      {isAdmin ? (
        <div className="h-screen flex">
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem onClick={() => setCurrent(0)} icon={<FaGem />}>
                Pending Requests
              </MenuItem>
              <MenuItem onClick={() => setCurrent(1)} icon={<BsGear />}>
                Approved Requests
              </MenuItem>
              <MenuItem onClick={() => setCurrent(2)} icon={<BsGear />}>
                Rejected Requests
              </MenuItem>
            </Menu>
          </ProSidebar>
          <div className="h-screen w-full bg-red-50">
            {current == 0 ? (
              <AdminPending type="pending" />
            ) : current == 1 ? (
              <AdminPending type="approved" />
            ) : (
              <AdminPending type="rejected" />
            )}
          </div>
        </div>
      ) : (
        <div className="w-full justify-center my-12">
          Only Admin is allowed to access this page
        </div>
      )}
    </div>
  );
};

export default Admin;
