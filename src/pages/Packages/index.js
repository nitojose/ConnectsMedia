import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/package.scss'
import Card from  '../../components/Packages/Cards'

export default function index() {
    return (
        <Container style={{paddingBottom:'10rem'}}>
             <p className='campaign_text'>Packages</p>

             <Row>
                 <Col xl={4} >
                    <Card heading="Standard" month="month" rating="2.4" ratingColor="#fc0298 "></Card>
                 </Col>

                 <Col xl={4}>
                    <Card heading="Comprehensive" month="month" rating="5" ratingColor="#F1C40F"></Card>
                 </Col>


                 <Col xl={4}>
                     <Card heading="Customized" month="month" rating="3.5" ratingColor="#04a00a"></Card>
                 </Col>


             </Row>
        </Container>
    )
}
