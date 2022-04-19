import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useHistory } from 'react-router-dom';
import {FaHome,FaShoppingBag,FaArrowDown,FaArrowUp,FaInstagram,FaYoutube} from 'react-icons/fa'
import {FiPackage,FiInfo} from 'react-icons/fi'
import {MdEmojiEvents,MdCampaign,MdQuestionAnswer,MdPendingActions,MdPermContactCalendar,MdOutlineMail,MdFacebook} from 'react-icons/md'
import {CgProfile,CgUserAdd} from 'react-icons/cg'
import {GrLinkedin} from 'react-icons/gr'

export default function Sidebar()
{
  let history = useHistory();


  return(
    <>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} className="">
        <div style={{flex:1,heigth:'90rem'}}>    

          <ProSidebar style={{width:'300px',}}>
            <Menu iconShape="square">
              <MenuItem onClick={() => home()} icon={<FaHome/>}>Home</MenuItem>
                <SubMenu title="Orders"  icon={<FaShoppingBag/>} >
                  <MenuItem icon={<FiPackage/>}>Packages</MenuItem>
                  <MenuItem icon={<MdEmojiEvents/>}>Events </MenuItem>
                  <MenuItem icon={<MdCampaign/>}>Campaigns </MenuItem>
                </SubMenu>

                <SubMenu title="Requests" icon={<MdPendingActions/>} >
                  <MenuItem icon={<FiPackage/>}>Packages</MenuItem>
                  <MenuItem icon={<MdEmojiEvents/>}>Events </MenuItem>
                  <MenuItem icon={<MdCampaign/>}>Campaigns </MenuItem>
                </SubMenu>

                <SubMenu icon={<MdQuestionAnswer/>} title="Messages"  >
                  <MenuItem icon={<FaArrowUp/>}>Sent</MenuItem>
                  <MenuItem icon={<FaArrowDown/>}>Receive </MenuItem>
                
                </SubMenu>

                <MenuItem icon={<FiInfo/>}>General Enquiry </MenuItem>

                <SubMenu title="Profile" icon={<CgProfile/>} >
                  <MenuItem icon={<CgUserAdd/>}>Modify Profile</MenuItem>
                  
                </SubMenu>

                {/* <SubMenu title="Contact Us" icon={<MdPermContactCalendar/>} open={true}>
                <MenuItem icon={<MdOutlineMail/>}>connect@connectmedianetworks.com</MenuItem>
                <MenuItem icon={<MdFacebook/>}>@Connectmedianetworks</MenuItem>
                <MenuItem icon={<FaInstagram/>}>ConnectMediaNetworks</MenuItem>
                <MenuItem icon={<FaYoutube/>}>Connect Media Networks</MenuItem>
                <MenuItem icon={<GrLinkedin/>}>ConnectMediaNetworks</MenuItem>
                </SubMenu> */}

            </Menu>
          </ProSidebar>
        </div>

        <div>
        
        </div>
    </div>

    </>
  )

  function home(){
    history.push('/');
  }
}

