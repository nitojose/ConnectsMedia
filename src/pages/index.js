import React from 'react'
import Navbar from '../components/header/navbar'
import MainScreen from '../pages/MainScreen/index'
import Footer from '../components/Footer/index'
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
import {
    BrowserRouter as Router,
  
    Route,

    Switch
  } from 'react-router-dom';

export default function Index() {
    let data = useLocation();
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    
                    <Registration />

                </Route>

                <Route exact path='/registration' >
                    
                    <Registration name={data.name}/>

                </Route>

                    <Route exact path='/pkg-details'>

                <PackageDetails />

                </Route>

                <Route exact path='/login'>

                    <Login serviceType={data.serviceType} />

                </Route>

                <Route exact path='/profile'>

                   <Profile />

                </Route>

                <Route exact path='/forgot_password'>

                    <ResetPassword />

                </Route>

                <Route exact path='/home'>

                    <MainScreen />

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

                <Route exact path='/order-view'>
                    <EachOrder order={data.order} />
                </Route>

                <Route exact path='/related-msgs'>
                    <Relatedmsgs data={data.data}/>
                </Route>

                <Route exact path='/gene-enquiry'>
                    <Enquiry/>
                </Route>


            </Switch>
            <Footer />
            
        </div>
    )
}
