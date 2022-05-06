
import React,{useEffect, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory} from "react-router-dom";
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import { Dropdown } from 'react-bootstrap';

import { animateScroll as scroll } from "react-scroll";
import { HashLink as Link} from 'react-router-hash-link';
import { FaUserTie }  from "react-icons/fa";
import axios from 'axios';
import { Url } from '../../GLOBAL/global';
var sessionstorage = require('sessionstorage');

// console.log('token is',sessionstorage.getItem('token'));


export default function LogoHeader() {

    let history = useHistory();
    
   

  return (
       
    <section className='navbar' style={{position:'static'}}>
   
        {/* header logo */}
            <div id="page-head">

                <div id="page-logo"><a href="/">
                    <img src={require('../../../src/assets/imgs/connect-media-logo.png')}  alt='header-logo-img' onClick={()=>home()}/></a>
                </div>
            
            </div>
           
    {/* header logo end */}
    </section>
  )

  function home()
    {
        history.push('/home');
        // scroll.scrollToTop();
    }
   

}
