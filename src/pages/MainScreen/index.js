import React from 'react';
import Home from '../../pages/home/index'
import About from '../../pages/About/index'
import Pillars from '../../pages/About/pillars'
import Features from '../../pages/About/features'
import Service from '../../pages/services/index'
import Campaign from '../../pages/campaign/index'
import Package from '../../pages/Packages/index'
import Contact from '../../pages/contact/contact'

export default function index() {
  return (
    <div>
                    <Home />
                    <About />
                    <Pillars />
                    <Features />
                    <Service />
                    <Campaign />
                    <Package />
                    <Contact />
    </div>
  
  );
}
