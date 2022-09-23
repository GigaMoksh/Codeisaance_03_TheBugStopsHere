import React, { useState } from "react";
import { FaGem, FaHeart } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import AdminPending from "./AdminPending";

const Admin = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-screen flex">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem onClick={() => setCurrent(0)} icon={<FaGem />}>
            Pending Requests
          </MenuItem>
          <MenuItem onClick={() => setCurrent(1)} icon={<BsGear />}>
            Setting
          </MenuItem>
        </Menu>
      </ProSidebar>
      <div className="h-screen w-full bg-red-50">
        {current == 0 ? <AdminPending /> : <div>Settings</div>}
      </div>
    </div>
  );
};

export default Admin;
