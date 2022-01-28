import React from 'react'
import Navbar from '../components/header/navbar'
import MainScreen from '../pages/MainScreen/index'
import Footer from '../components/Footer/index'
import Registration from '../pages/Registration/index'
import PackageDetails from './Packages/package_details'

import '../style/main.scss'
import {
    BrowserRouter as Router,
  
    Route,

    Switch
  } from 'react-router-dom';

export default function index() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    
                    <MainScreen />
                </Route>

                <Route exact path='/registration'>

                    <Registration />

                </Route>

                <Route exact path='/pkg-details'>

                <PackageDetails />

                </Route>


            </Switch>
            <Footer />
            
        </div>
    )
}
