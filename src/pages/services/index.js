import React from 'react'
import '../../style/service.scss'
import { Row,Col } from 'react-bootstrap'
import { FaArrowDown } from "react-icons/fa"

export default function index() {
    return (
        <div style={{paddingBottom:'15rem',backgroundColor:'#1c1d1e',marginLeft:'12rem'}} >
            <Row>
                <Col xl={3} >
                    <p id='service_text'>Services</p>
                    <div id='vertical_line'></div>
                    <FaArrowDown id='serviceIcon'/>
                </Col>

                <Col xl={6}>
                    <div id='service_1'>
                    <img src={require('../../assets/images/Group 186.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                    <div className='items_list'>
                        <ul class="dashed">
                            <li>Live-Stream Services: Increase viewership & followers</li>
                            <li>Customized Videos</li>
                            <li>Create Short Videos from Sermons</li>
                            <li>Personalized Shorts</li>
                        </ul>
                    </div>

                    <p id='vertical_text'>Youtube Management</p>
                    

                </div>


                <div id='service_1'>
                    <img src={require('../../assets/images/Group 192.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                    <div className='items_list'>
                        <ul class="dashed">
                            <li>Live-Stream Services: Increase viewership & followers</li>
                            <li>Customized Videos</li>
                            <li>Create Short Videos from Sermons</li>
                            <li>Personalized Shorts</li>
                        </ul>
                    </div>
                    <p id='vertical_text'>Facebook Management</p>

                </div>


                <div id='second_col'>

                    <div id='service_1'>
                        <img src={require('../../assets/images/Group 191.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                        <div className='items_list'>
                            <ul class="dashed">
                                <li>Live-Stream Services: Increase viewership & followers</li>
                                <li>Customized Videos</li>
                                <li>Create Short Videos from Sermons</li>
                                <li>Personalized Shorts</li>
                            </ul>
                        </div>
                        <p id='vertical_text'>Instagram Management</p>

                    </div>



                    <div id='service_1'>
                        <img src={require('../../assets/images/Group 193.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                        <div className='items_list'>
                            <ul class="dashed">
                                <li>Live-Stream Services: Increase viewership & followers</li>
                                <li>Customized Videos</li>
                                <li>Create Short Videos from Sermons</li>
                                <li>Personalized Shorts</li>
                            </ul>
                        </div>
                    
                            <p id='vertical_text'>Advertisement Management</p>

                        
                    </div>
                </div>
                </Col>

                <Col xl={3}>
                </Col>
            </Row>
            

            
         
                
        </div>
    )
}
