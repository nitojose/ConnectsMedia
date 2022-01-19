import React from 'react'
import Navbar from '../components/header/navbar'
import Home from '../pages/home/index'
import About from '../pages/About/index'
import Pillars from '../pages/About/pillars'
import Features from '../pages/About/features'
import Service from '../pages/services/index'
import Campaign from '../pages/campaign/index'
import '../style/main.scss'


export default function index() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Pillars />
            <Features />
            <Service />
            <Campaign />
        </div>
    )
}
