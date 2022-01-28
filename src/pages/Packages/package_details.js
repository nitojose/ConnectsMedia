import React from 'react';
import { Row,Col, Container } from 'react-bootstrap'
import Card from  '../../components/Packages/details_card'
import pink from '../../assets/pkg-bg/Group 478.png'

import Parallax from 'react-rellax'

export default function package_details() {
  return( 
  
  <div>

        <Container >
      
            <Row >
  
                <Col xl={4} sm={12} md={12} xxl={5} className='py-5 my-5'>

                    <Parallax speed={-3} >  
                   
                        <Card heading="Standard" rating="2.4" ratingColor="#E4115E" speed="-4.2"></Card>

                    </Parallax>
                </Col>

                <Col></Col>

                <Col xl={8} sm={12} md={12} xxl={5} className='py-5 my-5'>
                  

                  <Parallax speed={-3}>
                        <h6 className='heading'>Register</h6>
                        <p className='para-content'>Come To The Fold And More Jesus Viral</p>
                    
                    

                    </Parallax>
                </Col>
             
            </Row>
            
        </Container>

  </div>
  
  );
}
