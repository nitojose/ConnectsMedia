import React from 'react'
import { FaArrowDown } from "react-icons/fa"
import '../../style/home.scss'
import { Container,Row,Col } from 'react-bootstrap'
import  Parallax from 'react-rellax';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
    return (
        <>
   
           
            <Container className='page margin-25vh' >
                {/* margin-25vh */}
                    <Parallax speed={0}>
              
                        <h4 className='header-title'>Connecting your </h4> <br></br> <h4 className='header-title font-mono'> church </h4> <br></br>
                        <h4 className='header-title'>to the world</h4>
                    </Parallax>
                
            </Container>
            

           
            <Container className='headerSection' style={{marginTop:'-40rem'}}>

                <Row sm={12} md={12} xl={12} xxl={12}>
                    <Parallax speed={5}>
                        <img src={require('../../assets/images/Group 148.png')} alt='header section' width='100%' height='100%' style={{marginTop:'15rem'}}/>
                   </Parallax>
                </Row>
                
                
                    <Row sm={4} xl={4} md={4}>
                        <Parallax speed={-1}>
                                <h5 className='header-aboutus'>About Us</h5> 
                        </Parallax>
                    </Row>


                    <Row sm={4} xl={2} xxl={4}>
                        <Parallax speed={-1}>
                                <FaArrowDown className='aboutIcon'/>
                        </Parallax>
                    </Row>
                

            </Container>
       

        
        </>
      
    )
}
