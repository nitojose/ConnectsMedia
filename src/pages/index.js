import React from 'react'
import Navbar from '../components/header/navbar'
import Home from '../pages/home/index'
import About from '../pages/About/index'
import '../style/main.scss'


export default function index() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
        </div>
    )
}
