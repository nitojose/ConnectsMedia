import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import { FiPlusCircle } from "react-icons/fi"
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import { FaQuestion } from "react-icons/fa"
import '../../style/features.scss'
import  Parallax from 'react-rellax';
// import bg from '../../assets/images/Group 148.png'

export default function features() {
    return (
        <>
        <div className='feature-list' style={{marginLeft:'15rem'}}> 

        <Container className="feature_align my-5">

            <Row>
                <Col sm={6} md={6} xl={6} xxl={6}>
                    <Parallax speed={-2}>
                        <div className='div1'>
                            <img src={require('../../assets/images/Rectangle 37.png')} alt='header section' width={350} height={350}/>
                            <p id='vision'>Our Vision</p>
                        
                            <FiPlusCircle id='plusIcon1'/>
                            <FiArrowRight id='rightIcon1' />
                            <p id='descri_icon'>to be a tool for churches and ministries ,<br></br>to be a tool for churches and ministries</p>
                    
                        </div>
                    </Parallax>
                
                </Col>

                <Col sm={6} md={6} xl={6} xxl={6} className='section_1'>

                <Parallax speed={-2}>
                    <div className='div2'>
                        <img src={require('../../assets/images/Rectangle 38.png')} alt='header section' width={350} height={350}/>
                        <p className='mission'>Our Mission</p>
                    
                        <FiPlusCircle className='plusIcon2'/>
                        <FiArrowLeft className='rightIcon2' />
                        <p className='descri_icon2'> to be a tool for churches and<br></br> ministries ,to be a tool for churches<br></br> and ministries</p>

                    </div>
                    </Parallax>
                
                </Col>

            </Row>


            <Row className='Second-row'>
                <Col sm={6} md={6} xl={6} xxl={6}>

                <Parallax speed={-2}>
                    <div className='div3'>
                        <img src={require('../../assets/images/Rectangle 37.png')} alt='header section' width={350} height={350}/>
                        <p className='statement'>Faith Statement</p>
                
                        <FiPlusCircle className='plusIcon3'/>
                        <FiArrowRight className='rightIcon3' />
                        <p className='descri_icon3'>to be a tool for churches and ministries ,<br></br>to be a tool for churches and ministries</p>
                    </div>
                    
                    </Parallax>
                </Col>


                <Col sm={6} md={6} xl={6} xxl={6} className='section_2'>

                <Parallax speed={-2}>
                    <div className='div4'>
                        <img src={require('../../assets/images/Rectangle 40.png')} alt='header section' width={350} height={350}/>
                        <p className='values'>Core Values</p>
                    
                        <FiPlusCircle className='plusIcon4'/>
                        <FiArrowLeft className='rightIcon4' />
                        <p className='descri_icon4'>to be a tool for churches and <br></br> ministries ,to be a tool for churches <br></br>and ministries</p>
                    </div>
                </Parallax>

                </Col>

            </Row>


        </Container>
            
        </div>


        <Parallax speed={-2.5} >
            <div className='why-connect py-5'>
                
                <p className='whyconnect-text'>Why Connect</p>

                    <FaQuestion className='questionIcon' />
                    
                <ul class="bar">
                    
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,like when you import a non-existent JavaScript module. </li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error, like when you import a non-existent JavaScript module. </li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. </li>
                    +<li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module.</li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. </li>
                    <li> . If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module. If you make a typo or accidentally delete an important file, you will see a compilation error,  like when you import a non-existent JavaScript module.</li>
                </ul>
               
            </div>
            </Parallax>
            </>
    )
}
