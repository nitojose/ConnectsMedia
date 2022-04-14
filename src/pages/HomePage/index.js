import React from 'react';
import Home from '../../pages/home/index'
import About from '../../pages/About/index'
// import Features from '../../pages/About/features'
import Service from '../../pages/services/index'
import Campaign from '../../pages/campaign/index'
import Package from '../../pages/Packages/index'
import Contact from '../../pages/contact/contact'
import Whyconnect from '../../pages/About/whyconnect'
import Pillars from '../../pages/About/pillars'
import Statistics from '../../pages/statistics/index';
import Faq from '../../pages/faq/index';
import Give from '../../pages/Give/index';
import Testimonial from '../../pages/Testimonial/index';
import {  animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Section from '../Section';
import Navbar from '../../components/header/navbar';

import Registration from '../Registration/index'
import PackageDetails from '../Packages/package_details'
import Login from '../Login/Index'
import Profile from '../Profile/index'
import ResetPassword from '../ResetPassword/index'
import {useLocation,useParams} from "react-router-dom"
import CustomizedList from '../Packages/customizedList'
import StandardList from '../Packages/standardList'
import Questionnaire from '../Packages/Questionnaire'
import EventsCreation from '../campaign/Events/createForm'
import MillionPosts from '../campaign/millionPosts/index'
import StaticPosts from '../campaign/Static-Campaign/index'
import Messages from '../Messages/Index'
import Orders from '../Orders/index'
import EachOrder from '../Orders/eachOrder'
import Relatedmsgs from '../Messages/Relatedmsgs'
import Enquiry from '../Enquiry/Index'
import '../../style/main.scss'
import Mainscreen from '../MainScreen/index'
import Requets from '../pendingRequest/Index';

import PendingReq from '../pendingRequest/pendingRequest';
import Forgotpwd from '../forgotPassword/Index';
import Forgotpwd1 from '../forgotPassword/forgot1'
import EachRequest from '../pendingRequest/EachRequest'
import UserHeader from '../../components/header/UserHeader'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/seamless-scroll-polyfill/lib/bundle.min.cjs';


export default function Index() {

let data = useLocation();
  return (
    <>


<Router>
                    <UserHeader/>

                <Route exact path='/registration' >
                    
                    <Registration name={data.name}/>

                </Route>

                <Route exact path='/faq'>
                    <Faq />
                </Route>

                    <Route exact path='/pkg-details'>

                <PackageDetails />

                </Route>

                <Route exact path='/login'>

                    <Login />

                </Route>

                <Route exact path='/login/:standard-list'>

                <Login  />

                </Route>


                <Route exact path='/login/:customized-list'>

                <Login  />

                </Route>

                <Route exact path='/profile'>

                   <Profile />

                </Route>

                <Route exact path='/reset_password'>

                    <ResetPassword />

                    </Route>

                    <Route exact path='/forgot_password'>

                    <Forgotpwd />

                    </Route>

                    <Route exact path='/forgot_password1'>

                    <Forgotpwd1 />

                    </Route>

               
                <Route exact path='/order-view'>
                 
                    <EachOrder order={data.order} type={data.type} />
                
                </Route>

                <Route exact path='/customized-list'>

                    <CustomizedList />

                </Route>


                <Route exact path='/standard-list'>

                    <StandardList />

                </Route>


                <Route exact path='/Questionnaire/:id'>

                   
                    <Questionnaire />
                </Route>

                <Route exact path='/events-creation'>

                    <EventsCreation />

                </Route>

                <Route exact path='/million-posts'>

                    <MillionPosts />

                </Route>

                <Route exact path='/staticPosts'>

                    <StaticPosts />

                </Route>
                
                <Route exact path='/messages'>

                    <Messages />

                </Route>

                <Route exact path='/orders'>

                    <Orders  />

                </Route>

                <Route exact path='/pending_req/:id'>

                    <EachRequest/>

                </Route>


                <Route exact path='/pending_req'>

                    <EachRequest data={data.data}/>

                </Route>

                

                
                <Route exact path='/request/:type/:id'>

                    <Requets/>
                    
                </Route>

                <Route exact path='/my-requests'>
                    <PendingReq />
                </Route>

                <Route exact path='/related-msgs'>
                    <Relatedmsgs data={data.data}/>
                </Route>

                <Route exact path='/gene-enquiry'>
                    <Enquiry/>
                </Route>

                </Router>
    </>
  );

}
