import React from 'react'
import MainScreen from '../pages/MainScreen/index'
import Registration from '../pages/Registration/index'
import PackageDetails from './Packages/package_details'
import Login from './Login/Index'
import Profile from './Profile/index'
import ResetPassword from './ResetPassword/index'
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
import Homepage from '../../src/pages/HomePage/index'
import PaymentForm from '../../src/pages/Payment/index'

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import UserHeader from '../components/header/UserHeader'

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

                {/* <Homepage /> */}

               {/* <Router> */}
                    {/* <UserHeader/> */}

                <Route exact path='/registration' >
                <UserHeader/>
                    <Registration name={data.name}/>

                </Route>

                <Route exact path='/faq'>
                <UserHeader/>
                    <Faq />
                </Route>
                
                    <Route exact path='/pkg-details'>
                    <UserHeader/>
                <PackageDetails />

                </Route>

                <Route exact path='/login'>
                <UserHeader/>
                    <Login />

                </Route>

                <Route exact path='/login/:standard-list'>
                <UserHeader/>
                <Login  />

                </Route>


                <Route exact path='/login/:customized-list'>
                <UserHeader/>
                <Login  />

                </Route>

                <Route exact path='/profile'>
                <UserHeader/>
                   <Profile />

                </Route>

                <Route exact path='/reset_password'>
                <UserHeader/>
                    <ResetPassword />

                    </Route>

                    <Route exact path='/forgot_password'>
                    <UserHeader/>
                    <Forgotpwd />

                    </Route>

                    <Route exact path='/forgot_password1'>
                    <UserHeader/>
                    <Forgotpwd1 />

                    </Route>

               
                <Route exact path='/order-view'>
                <UserHeader/>
                    <EachOrder />
                
                </Route>

                <Route exact path='/customized-list'>
                <UserHeader/>
                    <CustomizedList />

                </Route>


                <Route exact path='/standard-list'>
                <UserHeader/>
                    <StandardList />

                </Route>


                <Route exact path='/Questionnaire/:id'>

                <UserHeader/>
                    <Questionnaire />
                </Route>

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
                
                <Route exact path='/messages'>
                <UserHeader/>
                    <Messages />

                </Route>

                <Route exact path='/orders'>
                <UserHeader/>
                    <Orders  />

                </Route>

                <Route exact path='/pending_req/:id'>
                <UserHeader/>
                    <EachRequest/>

                </Route>


                <Route exact path='/pending_req'>
                <UserHeader/>
                    <EachRequest/>

                </Route>

                

                
                <Route exact path='/request/:type/:id'>
                <UserHeader/>
                    <Requets/>
                    
                </Route>

                <Route exact path='/my-requests'>
                <UserHeader/>
                    <PendingReq />
                </Route>

                <Route exact path='/related-msgs'>
                <UserHeader/>
                    <Relatedmsgs/>
                </Route>

                <Route exact path='/payment-form'>
                <UserHeader/>
                <PaymentForm/>
                    
                </Route>

                <Route exact path='/gene-enquiry'>
                <UserHeader/>
                    <Enquiry/>
                </Route>

                {/* </Router> */}

                {/* <Route exact path='/sidebar'>
                    <Sidebar />
                </Route>
                 */}
                {/* <Route exact path="/Home1" component={Home}/>
                <Route exact path="/About1" component={About}/>
                <Route exact path="/whyconnect1" component={Whyconnect}/>
                <Route exact path="/service1" component={Service}/>
                <Route exact path="/package1" component={Package}/>
                <Route exact path="/statistics1" component={Statistics}/>
                <Route exact path="/contact1" component={Contact}/>
                <Route exact path="/faq1" component={Faq}/>
                <Route exact path="/campaigns1" component={Campaign}/> */}


            </Switch>
            {/* <Footer /> */}
        </div>
        </>

    )
}
