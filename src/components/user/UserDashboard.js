import React, {useState} from 'react'
// import Sidebar from './Sidebar'
import { FaGem, FaHeart } from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'
import { GrDocumentText } from 'react-icons/gr'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { ConnectButton } from 'web3uikit';
import VerifiedDoc from './VerifiedDoc';
import PendingDoc from './PendingDoc';
import UserSetting from './UserSetting';
const UserDashboard = () => {
  const [current, setcurrent] = useState(0)
  return (
    <div className='h-screen flex overflow-scroll'>
      <div className='sticky top-0'>
        <ProSidebar>
          <SidebarHeader>
            <h1 className='text-bold mt-[16px] mb-[16px] text-center'>DigiSec</h1>
          </SidebarHeader>
          <Menu iconShape="square">
            <SubMenu defaultOpen={true} title="Documents" icon={<GrDocumentText />}>
              <MenuItem onClick={()=>{setcurrent(0)}}>Verified</MenuItem>
              <MenuItem onClick={()=>{setcurrent(1)}}>Pending</MenuItem>
            </SubMenu>
            <MenuItem onClick={()=>{setcurrent(3)}} icon={<BsGear />}>Setting</MenuItem>
          </Menu>
          <SidebarFooter className='mt-auto p-10'>
            <ConnectButton />
          </SidebarFooter>
        </ProSidebar>
      </div>
      <div className='h-screen w-full bg-red-50'>
        {
          current==0
          ?
          <VerifiedDoc/>
          :
          (current==1?<PendingDoc/>:<UserSetting/>)
        }
      </div>
    </div>
  )
}

export default UserDashboard