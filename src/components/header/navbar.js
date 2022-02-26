import React,{useState} from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import '../../style/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useHistory,Link} from "react-router-dom";
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import { Dropdown } from 'react-bootstrap';
var sessionstorage = require('sessionstorage');

const styles = StyleSheet.create({
    bounce: {
      animationName: fadeInUp,
      animationDuration: '10s'
    }
})

export default function Navbar() {

    

    let history = useHistory();

    return (
        <>
      
            <Container className='navbar'>
               
                    <img src={require('../../assets/images/logo.png')}  alt='header-logo-img' onClick={()=>home()}/>

                    <div className='center-align'>
                        <FiUser className='menu-nav' onClick={profileInfo}  />     
                        {/* <BsList className='menu-nav' onClick={sidebar}/> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className='menu-btn pointer'>
                               Menu
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/orders">My Orders</Dropdown.Item>
                                <Dropdown.Item href="/messages">Messages</Dropdown.Item>
                                <Dropdown.Item href="/gene-enquiry">General Enquiry</Dropdown.Item>
                                <Dropdown.Item onClick={signout}>Signout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    
                
            </Container>

            {/* <Container className='profile_div'>
                {console.log("hello")}
            </Container> */}
        </>
      
    )

    

    function profileInfo()
    {
        history.push('/profile');
    }

    function signout()
    {
        sessionstorage.clear();
        history.push('/login');
    }

    function home()
    {
        history.push('/home');
    }

}
