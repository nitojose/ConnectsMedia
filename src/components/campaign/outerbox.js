import React from 'react'
import { Card } from 'react-bootstrap'
import '../../style/campaign.scss'
import Button from 'react-bootstrap/Button';

export default function outerbox(props) {

    // const imagepath = '../../assets/images/';
    return (

    
        <Card className='box'>

            {console.log(props.image)}

            <img src={(props.image)} alt={props.alt} className='cam_img' width={150} height={150}/>

            <div className='vertical_text'>
                <p>{props.text}</p>
            </div>

            <div className='content '>
                <p>{props.content}</p>
            </div>

            <div className='go-button'>
                <Button variant="outline-warning" className='px-4' >Go</Button>
            </div>

        </Card> 

        
    )
}
