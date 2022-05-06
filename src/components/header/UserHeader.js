
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
import {MdDashboard} from 'react-icons/md';
var sessionstorage = require('sessionstorage');

// console.log('token is',sessionstorage.getItem('token'));
// console.log("userheader",window.location.pathname)




export default function UserHeader() {

    let history = useHistory();
    const[orderCount,setOrderCount] =React.useState(0);

    const [homePath,setHomePath] = React.useState(false);



    useEffect(() => {

        if(window.location.pathname === ('/home' || '/' || '/forgot-password'))
        {
            setHomePath(true)
        }

       

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        async function getDatas()
        {
            await axios.get(Url+'ordercount', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                console.log(response.data.count);
                setOrderCount(response.data.count);
                // setAlmessages(response.data.data);
                // setLength(allmessages.length)
            })
            .catch((error) => {
                console.log('error ' + error);
            });
        }

        getDatas();

        

      },[]);


  return (
       
    <section className='navbar'>
   
        {/* header logo */}
            <div id="page-head">
            <div id="page-logo"><a href="/">
            <img src={require('../../../src/assets/imgs/connect-media-logo.png')}  alt='header-logo-img' onClick={()=>home()}/></a></div>
            <div id="head-filler"></div>
            <div id="user-menu">

            {sessionstorage.getItem('token')!== null  ? (<>
                
                {/* <Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className='menu-btn pointer'>
                                <FaUserTie size={35} className='menu-nav' color='white'/>
                                </Dropdown.Toggle>



                                <Dropdown.Menu style={{border: 'none'}}>  
                                        <Dropdown.Item onClick={LogOut}>LogOut</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>history.push('/home')}>Home</Dropdown.Item>
                                        <Dropdown.Item onClick={profileInfo}>Modify Profile</Dropdown.Item>
                                        <Dropdown.Item href="/my-requests">My Requests</Dropdown.Item>
                                        <Dropdown.Item href="/orders">My Orders <span className='nav-count'>{orderCount}</span></Dropdown.Item>
                                        <Dropdown.Item href="/messages">Messages</Dropdown.Item>
                                        <Dropdown.Item href="/gene-enquiry">General Enquiry</Dropdown.Item>
                                
                                    
                                </Dropdown.Menu>
                        </Dropdown> */}
                        <Dropdown variant="Secondary" id="dropdown-basic " className='menu-btn pointer dash-menu' onClick={() => history.push('/dashboard')}> <MdDashboard size={35} color='white' className='menu-btn pointer'/> </Dropdown>
            </>):(homePath ? (<><Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className='menu-btn pointer'>
                                <FaUserTie size={35} className='menu-nav' color='white'/>
                                </Dropdown.Toggle>



                                <Dropdown.Menu style={{border: 'none'}}>  
                                        <Dropdown.Item onClick={homePage()}>Home</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                        </Dropdown></>):(<></>))}

                    
            </div>
            <div id="page-menu">
            <div id="nav-icon">
            <span></span>
            <span> </span>
            <span></span>
            <span> </span>
            <span> </span>
            </div>
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
    function profileInfo()
    {
        history.push('/profile');
    }

    function LogOut()
    {
        sessionstorage.clear();
        history.push('/login');
    }
    function homePage()
    {
        
        history.push('/');
    }

}
