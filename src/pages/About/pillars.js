import React from 'react'
import { Row } from 'react-bootstrap'

import { FaArrowDown } from "react-icons/fa"
import '../../style/about.scss'
import  Parallax from 'react-rellax';

export default function pillars() {
    return (
        <div className='pillarSection my-5'>
            <Parallax speed={-2.5}>
                <img src={require('../../assets/images/Group 148.png')} alt='header section' width='100%' height='100%'/>
            </Parallax>
            <Row md={{ span: 6, offset: 3 }} >
            <Parallax speed={1}>
                <p className='about-pillar'>Pillars</p>
                <FaArrowDown id='pillarIcon'/>
                </Parallax>
            </Row>
            
        </div> 
    )
}
