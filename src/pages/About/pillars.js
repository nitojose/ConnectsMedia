import React from 'react'
import { Row } from 'react-bootstrap'

import { FaArrowDown } from "react-icons/fa"
import '../../style/about.scss'

export default function pillars() {
    return (
        <div className='pillarSection'>
            <img src={require('../../assets/images/Group 148.png')} alt='header section' width='100%' height='100%'/>
            <Row md={{ span: 6, offset: 3 }} >
                <p id='about-pillar'>Pillars</p>
                <FaArrowDown id='pillarIcon'/>
            </Row>
            
        </div> 
    )
}
