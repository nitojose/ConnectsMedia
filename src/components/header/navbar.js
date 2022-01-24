import React from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import '../../style/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList } from "react-icons/bs";
export default function Navbar() {
    return (
        <>
      
            <Container className='navbar'>
               
                    <img src={require('../../assets/images/logo.png')}  alt='header-logo-img'/>

                    <BsList className='menu-nav'/>
                
            </Container>
        </>
      
    )
}
