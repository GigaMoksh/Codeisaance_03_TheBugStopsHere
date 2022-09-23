import React from 'react'
// import Sidebar from './Sidebar'
import { FaGem, FaHeart} from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'
import { GrDocumentText } from 'react-icons/gr'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
const UserDashboard = () => {
  return (
    <div className='h-screen'>
      {/* <Sidebar/> */}
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <SubMenu title="Documents" icon={<GrDocumentText />}>
            <MenuItem>Verified</MenuItem>
            <MenuItem>Pending</MenuItem>
          </SubMenu>
          <MenuItem icon={<BsGear />}>Setting</MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  )
}

export default UserDashboard