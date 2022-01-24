import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import { AiOutlineMail } from "react-icons/ai"; 
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai"; 
import { FaYoutube } from "react-icons/fa";
import Textbox from '../../components/TextBox'
import Form from 'react-bootstrap/Form'
import TextArea from '../../components/TextArea';
import Buttons from '../../components/Packages/Buttons';

export default function contact() {

    
    return (
        <Container>
            <Row>
            <p className='paragrah' >Let's Get In Touch</p>
                <Col xl={4} sm={12} md={12} xxl={5} className='py-5'>

                    
                    <h6 className='heading'>Connect Media</h6>
                    <p className='para-content'> Curabitur Mollis Bibendum Luctus.Duis Suscipit vitas Dui Send Suscipt.Vestibulam Auctor Nunc Vitas Diam Eleifend,In Maximum Metus Sollicitudin.Quisque Vitae Sodales Lectus.Nam Parttiar Justo Sed Mi Finibus, Vel Tristique Risus Faucibus.</p>

                    <div style={{marginTop:'2rem'}}>

                        <Row className='media-icon'>
                            <Col xl={3} sm={2} md={3} xxl={1} > <AiOutlineMail className='icon' /> </Col>
                            <Col xl={9} sm={10} md={9} xxl={11} > Connect@Connectmedianetworks.Us</Col>
                        </Row>

                        <Row className='media-icon'>
                            <Col xl={1} sm={2} md={3} xxl={1} > <FaFacebookF className='icon' /> </Col>
                            <Col xl={11} sm={10} md={3} xxl={11} > @Connectmedianetworks</Col>
                        </Row>

                        <Row className='media-icon'>
                            <Col xl={3} sm={2} md={3} xxl={1} > <AiOutlineInstagram className='icon' /> </Col>
                            <Col xl={9} sm={10} md={9} xxl={11} > Connect_Media_Networks</Col>
                        </Row>

                        <Row className='media-icon'>
                            <Col xl={3} sm={2} md={3} xxl={1} > <FaYoutube className='icon' /> </Col>
                            <Col xl={9} sm={10} md={3} xxl={11} > Connect Media Networks</Col>
                        </Row>
                        
                        

                    </div>

                </Col>

                <Col></Col>

                <Col xl={8} sm={12} md={12} xxl={5} className='py-5'>
                  
                    <h6 className='heading'>Leave Message</h6>
                    <p para-content>Curabitur Mollis Bibendum Luctus Duis Suscipit<br></br> Vitas Dui Sed Suscipit</p>
                    
                    <Form>
                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <Textbox placeholder="Name" type="text" /> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}> <Textbox placeholder="Email" type="text" /> </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <Textbox placeholder="Contact No" type="text" /> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <Textbox placeholder="Subject" type="text" /> </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}> <TextArea placeholder="Message"/> </Col>
                        </Row>

                        <Buttons text="SUBMIT REQUEST" />
                    
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}
