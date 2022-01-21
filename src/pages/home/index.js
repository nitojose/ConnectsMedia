import React from 'react'
import { FaArrowDown } from "react-icons/fa"
import '../../style/home.scss'
import { Container,Row,Col } from 'react-bootstrap'

export default function index() {
    return (
        <>

<           Container className='page margin-25vh'>
               
               <h4 className='header-title'>Connecting your </h4> <br></br> <h4 className='header-title font-mono'> church </h4> <br></br>
               <h4 className='header-title'>to the world</h4>
         
            </Container>



            <Container className='headerSection'>
            <Row sm={12} md={12} xl={12} xxl={12}>

                <img src={require('../../assets/images/Group 148.png')} alt='header section' width='100%' height='100%' style={{marginTop:'15rem'}}/>
                </Row>
                <Row sm={4} xl={4} md={4}>
                <h5 className='header-aboutus'>About Us</h5> </Row>
                <Row sm={4} xl={2} xxl={4}><FaArrowDown className='aboutIcon'/></Row>
               

            </Container>


        
        </>
        // <div>
        //     <div className='' style={{ height: '300px'}}>
        //         <h4 className='header-title'>Connecting your <br></br> church <br></br>to the world</h4>
        //     </div>

        //     <div className='headerSection'>
                // <img src={require('../assets/images/Group 148.png')} alt='header section' width='100%' height='100%'/>
                // <h5 className='header-aboutus'>About Us</h5>
                // <FaArrowDown className='aboutIcon'/>
        //     </div>  
        // </div>
    )
}
