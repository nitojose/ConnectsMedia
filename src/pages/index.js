import React from 'react'
import MainScreen from '../pages/MainScreen/index'
import Registration from '../pages/Registration/index'
import PackageDetails from './Packages/package_details'
import Login from './Login/Index'
import Profile from './Profile/index'
import ChangePassword from './ResetPassword/index'
import {useLocation,useParams} from "react-router-dom"
import CustomizedList from './Packages/customizedList'
import StandardList from './Packages/standardList'
import Questionnaire from './Packages/Questionnaire'
import EventsCreation from '../pages/campaign/Events/createForm'
import MillionPosts from '../pages/campaign/millionPosts/index'
import StaticPosts from '../pages/campaign/Static-Campaign/index'
import Messages from '../pages/Messages/Index'
import Orders from '../pages/Orders/index'
import EachOrder from './Orders/eachOrder'
import Relatedmsgs from './Messages/Relatedmsgs'
import Enquiry from '../pages/Enquiry/Index'
import '../style/main.scss'
import Mainscreen from '../../src/pages/MainScreen/index'
import Requets from '../pages/pendingRequest/Index';
import Faq from '../../src/pages/faq/index';
import PendingReq from '../../src/pages/pendingRequest/pendingRequest'
import Forgotpwd from '../../src/pages/forgotPassword/Index'
import Forgotpwd1 from '../../src/pages/forgotPassword/forgot1'
import EachRequest from '../../src/pages/pendingRequest/EachRequest'
import PaymentForm from '../../src/pages/Payment/index';
import EventPending from './pendingRequest/EventPending';
import Sidebar from '../components/sidebar/Sidebar';
import GetCampaign from '../User/Campaign/Index';
import DashHome from "../User/Dashboard/Index";

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import UserHeader from '../components/header/UserHeader'
import Navbar from '../components/header/navbar'

import RequestPkg from '../User/Packages/Requests';
import RequestEvent from "../User/Events/Request";

import OrderEvent from "../User/Events/Order";
import OrderPack from "../User/Packages/Order";
import OrderCamp from "../User/Campaign/Order";

import SentMessage from "../User/Message/Outbox";
import RecieveMsg from "../User/Message/Inbox";
import MsgView from '../User/Message/MsgView';

import Dashboard from "../User/Dashboard/Index";
import GetPackages from '../User/Packages/Index';

import RaiseReq from '../User/RaiseRequest/Index';

// import Pagination from './paginationTable';

export default function Index() {
    let data = useParams();
  

    return (
            <>
            <div>

           
            <Switch>
                <Route exact path="/">
                    
                <MainScreen />
            
                </Route>

                <Route exact path='/home'>

                <MainScreen />

                </Route>

                {/* <Sidebar/> */}

                <Route exact path='/dashboard'>
                    <Sidebar/>
                   <DashHome/>
                  
                </Route>

                <Route exact path='/sidebar'>
                    <Sidebar/>
                   
                </Route>



                <Route exact path='/login' >
                 <UserHeader/>
                    <Login />

                </Route>
               
               

               <Route exact path='/registration' >
                <UserHeader/>
                    <Registration />

                </Route>

                {/* <Route exact path='/faq'>
                <UserHeader/>
               
                    <Faq />
                </Route> */}
            

                <Route exact path='/login/:standard-list'>
                <UserHeader/>
                <Login  />

                </Route>


                <Route exact path='/login/:customized-list'>
                <UserHeader/>
                <Login  />

                </Route>

                <Route exact path='/profile'>
                    <Sidebar/>
                   <Profile />

                </Route>

                

                    <Route exact path='/forgot_password'>
                        <UserHeader/>
                        <Forgotpwd />

                    </Route>


                    <Route exact path='/forgot_password1/:email'>
                    <UserHeader/>
                    <Forgotpwd1 />

                    </Route>

                    <Route exact path='/raise-request'>
                        <Sidebar/>
                        <RaiseReq/>

                    </Route>

                    

               
                <Route exact path='/order-view'>
                    <Sidebar/>
                    <EachOrder />
                
                </Route>

                <Route exact path='/change_password'>
                         <Sidebar/>
                    <ChangePassword />

                </Route>

                <Route exact path='/customized-list'>
                <UserHeader/>
                    <CustomizedList />

                </Route>


                <Route exact path='/standard-list'>
                     <UserHeader/>
                    <StandardList />

                </Route>


                {/* <Route exact path='/Questionnaire/:id'>

                <UserHeader/>
                    <Questionnaire />
                </Route> */}

                <Route exact path='/events-creation'>
                <UserHeader/>
                    <EventsCreation />

                </Route>

                <Route exact path='/million-posts'>
                <UserHeader/>
                    <MillionPosts />

                </Route>

                <Route exact path='/staticPosts'>
                    <UserHeader/>
                    <StaticPosts />

                </Route>
                
                {/* <Route exact path='/messages'>
               
                <Sidebar/>
                 
                </Route> */}


               

                {/* <Route exact path='/orders'>
                <UserHeader/>
                    <Orders  />

                </Route> */}

                <Route exact path='/request/package'>
               
                    <Sidebar/>
                    <RequestPkg  />
                    
                </Route>

                <Route exact path='/request/event'>
               
                    <Sidebar/>
                   < RequestEvent/>
                </Route>

                <Route exact path='/order/event'>
                
                    <Sidebar/>
                   
                   < OrderEvent/>
                </Route>


                <Route exact path='/order/package'>
                
                    <Sidebar/>
                   
                   < OrderPack/>
                </Route>


                <Route exact path='/order/campaign'>
                
                    <Sidebar/>
                   
                   < OrderCamp/>
                </Route>


                <Route exact path='/message/Outbox'>
                
                    <Sidebar/>
                   
                   < SentMessage/>
                </Route>


                <Route exact path='/message/Inbox'>
                
                    <Sidebar/>
                   
                   < RecieveMsg/>
                </Route>


                <Route exact path='/message/msgView'>
                
                    <Sidebar/>
                   <MsgView/>
                   
                </Route>


                <Route exact path='/pending_req/:id'>
                <Sidebar/>
                    <EachRequest/>

                </Route>

                <Route exact path='/pending_req'>
                <Sidebar/>
                    <EachRequest/>

                </Route>


                <Route exact path='/request-pkg'>
                    <Sidebar/>
                    <EachRequest/>

                </Route>


                <Route exact path='/request-event'>
                <Sidebar/>
                    <EventPending/>

                </Route>

               
                <Route exact path='/request/:type/:id'>
                <Sidebar/>
                    <Requets/>
                    
                </Route>

                {/* <Route exact path='/my-requests'>
                <Sidebar/>
                    <PendingReq />
                </Route> */}

                {/* <Route exact path='/related-msgs'>
                <Sidebar/>
                    <Relatedmsgs/>
                </Route> */}


                    <Route exact path='/getCampaigns'>
                        <Sidebar/>
                        <GetCampaign/>
                    
                    </Route>

                    <Route exact path='/getPackages'>
                        <Sidebar/>
                        <GetPackages/>
                    
                    </Route>

                <Route exact path='/payment-form'>
                    <Sidebar/>
                    <PaymentForm/>
                    
                </Route>

                {/* <Route exact path='/gene-enquiry'>
                 <Sidebar/>
                    <Enquiry/>
                </Route> */}

{/* <Route exact path ="/pagination">
                <Pagination/>
</Route> */}
                
               
            </Switch>
            {/* <Footer /> */}
        </div>
        </>

    )
}
