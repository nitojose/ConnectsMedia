import React from 'react'
import { Card } from 'react-bootstrap'
import '../../style/package.scss'
import StarRating from 'react-star-ratings';
import { BsCheckCircle } from "react-icons/bs";

import Button from './Buttons';

export default function Cards(props) {

    const rating = parseFloat(props.rating);
    const color = props.ratingColor;

    const package_details =[
        'For up To 2 Social Media Platforms','3 Posts Per Week','All Images Graphics And Copywriting included.Featured Videos Avilable','Messaging And Comment Moderation Included','Boosted Post Add-On Avilable']
    return (

        <Card className='card-box'>
            <div className='header py-3'>
            <div className='header'>
                    <img src={props.img} alt="img1" width={200} className='bg-img'/>
                    <h4 className='zindex'>{props.heading }</h4>
                    <div className='rating'>
                        <StarRating
                            rating={rating}
                            starRatedColor={props.ratingColor}
                            numberOfStars={5}
                            name='stars'

                            starDimension={15}
                            // starSpacing={2}
                            ignoreInlineStyles={false}
                        />
                    </div>

                    <p className='py-1 zindex'>{props.month}</p>

                </div>

                <Card className='inner-box'>
                    {package_details.map(name => (  
                        <>
                             <BsCheckCircle className='checkIcon' color={props.ratingColor}/> 
                            <div className='pkg-content'>{name} </div>
                            <p></p>
                        </>
                    ))}  
                    
                </Card>

                <Button text="GO" color={color} />
                
               
                
            </div>
            

        </Card>
    )
}
