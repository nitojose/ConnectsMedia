import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/campaign.scss'
import Outerbox from '../../components/campaign/outerbox';
import pic1 from '../../assets/images/OBJECTS.png';



export default function index() {
    return (
        <Container style={{marginTop:'5rem'}}>
            
            <p className='campaign_text'>Campaigns</p>

            <Row className='my-5 mx-5 my-0'>
                <Col sm={12} md={12} xl={4}>

                    <Outerbox image="pic1" alt="cam-img1" text="Upcoming Events" content="Share your calender here.we will pick all your future events from here.">
                        
                    </Outerbox>

                </Col>


                <Col sm={12} md={12} xl={4} style={{marginTop:'3rem'}}>


                        <Outerbox image="pic1" alt="cam-img1" text="Million Posts" content="Register and support for this special campaign and we will take care of the rest to share jesus content everywhere.">
                        
                        </Outerbox>
                    
                </Col>


                <Col sm={12} md={12} xl={4} style={{marginTop:'6rem'}}>

                        <Outerbox image="pic1" alt="cam-img1" text="Strengthening Marriage" content="Register and support for this special campaign and we will keep on posting bible scripttures,inspirational content about importance of marriage on social media.">
                        
                        </Outerbox>
                    
                </Col>
            </Row>


            <Row className='mx-5 my-5'>
                <Col sm={12} md={12} xl={4} className='my-0'>

                    <Outerbox image="pic1" alt="cam-img1" text="Youth Section" content="Share your calender here.We will pick all your future events from here.">
                        
                    </Outerbox>

                </Col>


                <Col sm={12} md={12} xl={4} style={{marginTop:'3rem'}}>


                        <Outerbox image="pic1" alt="cam-img1" text="Pray For Israel" content="Sign up for this campaign to show love for israel and we will post videos and posters on your behalf.psalm 122:6 pray for the peace of jerusalem.May they prosper who love you.">
                        
                        </Outerbox>
                    
                </Col>


                <Col sm={12} md={12} xl={4} style={{marginTop:'6rem'}}>

                        <Outerbox image="pic1" alt="cam-img1" text="Evangelism" content="Register and do your part to spread gospel.We will spread savings knowledge of jesus to the unsaved world on social media.">
                        
                        </Outerbox>
                    
                </Col>
            </Row>
          
        </Container>


    )
}
