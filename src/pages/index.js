import React from 'react'
import MainScreen from '../pages/MainScreen/index'
import Registration from '../pages/Registration/index'
import PackageDetails from './Packages/package_details'
import Login from './Login/Index'
import Profile from './Profile/index'
import ResetPassword from './ResetPassword/index'
import {useLocation} from "react-router-dom"
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

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import Navbar from '../components/header/navbar'
import UserHeader from '../components/header/UserHeader'

export default function Index() {
    let data = useLocation();

    return (
            <>
            <div>

            <Switch>
                
                <Route exact path="/">

                    <Mainscreen />

                </Route>

                

                <Router>

                 <UserHeader/>
                

                    <Route exact path='/registration' >
                        
                        <Registration name={data.name}/>

                    </Route>

                    <Route exact path='/home'>

                        <MainScreen />

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
                
                

                {/* <Route exact path='/sidebar'>
                    <Sidebar />
                </Route> */}
                
                {/* <Route exact path="/Home1" component={Home}/>
                <Route exact path="/About1" component={About}/>
                <Route exact path="/whyconnect1" component={Whyconnect}/>
                <Route exact path="/service1" component={Service}/>
                <Route exact path="/package1" component={Package}/>
                <Route exact path="/statistics1" component={Statistics}/>
                <Route exact path="/contact1" component={Contact}/>
                <Route exact path="/faq1" component={Faq}/>
                <Route exact path="/campaigns1" component={Campaign}/>
 */}

            </Switch>
            {/* <Footer /> */}
        </div>
        </>

    )
}
