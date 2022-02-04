import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/package.scss'
import Card from  '../../components/Packages/Cards'
import green from '../../assets/pkg-bg/Group 476.png'
import yellow from '../../assets/pkg-bg/Group 477.png'
import pink from '../../assets/pkg-bg/Group 478.png'
import Parallax from 'react-rellax'



export default function index() {


    return (
        <Container style={{paddingBottom:'10rem'}} className='my-5 padding-top padding-top-60 pkg_div'>
            <Parallax speed={-2.5}>
             {/* <p className='campaign_text center-align pkg_text' style={{marginTop:'15rem'}}>Packages</p> */}
             {/* pkg-text */}
            </Parallax>
             <Row className='margin-top-53'>

                <Col xl={4} sm={12} md={12} xxl={4} className=''>
                 
                    <p className='campaign_text center-align pkg-text' style={{marginTop:'15rem'}}>Packages</p>

            
                </Col> 

                <Col xl={4} sm={12} md={12} xxl={4} className=''>
              
                        <Card heading="Standard" month="month" rating="2.4" ratingColor="#E4115E" img={pink} speed="-4.2" servicelist="/standard-list" ></Card>
                 
                 </Col>

                {/* <Col xl={4} sm={12} md={12} xxl={4} className=''>
                 
                        <Card heading="Comprehensive" month="month" rating="5" ratingColor="#E3B630" img={yellow} speed="-4.2"></Card>

                   
                </Col> */}


                 <Col xl={4} sm={12} md={12} xxl={4} className=''>

                 
                    <Card heading="Customized" month="month" rating="3.5" ratingColor="#0EAE83" img={green} speed="-4.2" servicelist="/customized-list" ></Card>
                   
                 </Col>

             </Row>
        </Container>
    )
}
