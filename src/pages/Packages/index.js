import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/package.scss'
import Card from  '../../components/Packages/Cards'
import green from '../../assets/pkg-bg/Group 476.png'
import yellow from '../../assets/pkg-bg/Group 477.png'
import pink from '../../assets/pkg-bg/Group 478.png'

export default function index() {
    return (
        <Container style={{paddingBottom:'10rem'}} className='my-5'>
             <p className='campaign_text'>Packages</p>

             <Row className='py-5'>

                <Col xl={4} sm={12} md={12} xxl={4} className='py-5'>
                    <Card heading="Standard" month="month" rating="2.4" ratingColor="#E4115E" img={pink}></Card>
                 </Col>

                 <Col xl={4} sm={12} md={12} xxl={4} className='py-5'>
                    <Card heading="Comprehensive" month="month" rating="5" ratingColor="#E3B630" img={yellow}></Card>
                 </Col>


                 <Col xl={4} sm={12} md={12} xxl={4} className='py-5'>
                     <Card heading="Customized" month="month" rating="3.5" ratingColor="#0EAE83" img={green}></Card>
                 </Col>

             </Row>
        </Container>
    )
}
