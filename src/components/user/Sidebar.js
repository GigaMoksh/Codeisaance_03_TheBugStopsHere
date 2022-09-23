import { FaGem, FaHeart } from 'react-icons/fa'
import { BsGear } from 'react-icons/bs'
import { GrDocumentText } from 'react-icons/gr'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react'
import { ConnectButton } from 'web3uikit';

const SideBar = () => {
    return (
        <ProSidebar>
            <SidebarHeader>
                <h1 className='text-bold mt-[16px] mb-[16px] text-center'>DigiSec</h1>
            </SidebarHeader>
            <Menu iconShape="square">
                <SubMenu defaultOpen={true} title="Documents" icon={<GrDocumentText />}>
                    <MenuItem>Verified</MenuItem>
                    <MenuItem>Pending</MenuItem>
                </SubMenu>
                <MenuItem icon={<BsGear />}>Setting</MenuItem>
            </Menu>
            <SidebarFooter className='mt-auto p-10'>
                <ConnectButton />
            </SidebarFooter>
        </ProSidebar>
    )
}

export default SideBar