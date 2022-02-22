import React, { useEffect ,useRef} from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/campaign.scss'
import Outerbox from '../../components/campaign/outerbox';
import pic1 from '../../assets/images/Group 338.png';
import pic2 from '../../assets/images/OBJECTS.png';
import pic3 from '../../assets/images/hands.png';
import pic4 from '../../assets/images/Group 364.png';
import pic5 from '../../assets/images/Group 376.png';
import pic6 from '../../assets/images/cross.png';
import Parallax from 'react-rellax'

export default function Campaigns() {


    return (
        <>
        <Container  > 
        {/* style={{marginTop:'5rem'}} */}
            <Parallax speed={-2} >
                <p className='campaign_text top-10 padding-top-82'>Campaigns</p>
            
            </Parallax>

            <Row className=' mx-5 my-0 ' >
                <Col sm={12} md={12} xl={4} xxl={4} className='my-0 py-0' >

              

                         <Outerbox image={pic1} alt="cam-img1" text="Upcoming Events" content="Share your calender here.we will pick all your future events from here." width="150" height="150" marginTop="0rem" speed="-3.2" slug="/events-creation">
                        
                        
                        </Outerbox>
                  

                </Col>


                <Col sm={12} md={12} xl={4} xxl={4}  className='my-3 py-3'>

             
                        <Outerbox image={pic2} alt="cam-img1" text="Million Posts" content="Register and support for this special campaign and we will take care of the rest to share jesus content everywhere."
                        width="250" height="250" marginTop="-5rem" speed="-3.4" slug="/million-posts">
                        
                        </Outerbox>

                
                    
                </Col>


                <Col sm={12} md={12} xl={4} xxl={4}  className='my-5 py-5'>

                  
                        <Outerbox image={pic3} alt="cam-img1" text="Strengthening Marriage" content="Register and support for this special campaign and we will keep on posting bible scripttures,inspirational content about importance of marriage on social media." width="280" height="200" marginTop="1.6rem" speed="-3.6" slug="/staticPosts">
                        
                        </Outerbox>
                    
                    
                </Col>
            </Row>

                {/* second row */}

            <Row className='mx-5 my-5 padding-top-20 margin-top-10'>
                <Col sm={12} md={12} xl={4} xxl={4} className=' ' >

                  
                        <Outerbox image={pic4} alt="cam-img1" text="Youth Section" content="Share your calender here.We will pick all your future events from here." width="250" height="230" marginTop="-5rem" speed="-3.4">
                            
                        </Outerbox>

                  
                </Col>


                <Col sm={12} md={12} xl={4} xxl={4}  className=''>

                   
                        <Outerbox image={pic5} alt="cam-img1" text="Pray For Israel" content="Sign up for this campaign to show love for israel and we will post videos and posters on your behalf.psalm 122:6 pray for the peace of jerusalem.May they prosper who love you." width="120" height="120" marginTop="3rem" speed="-3.6">
                        
                        </Outerbox>
                    
                </Col>


                <Col sm={12} md={12} xl={4} xxl={4}  className=''>

                    
                        <Outerbox image={pic6} alt="cam-img1" text="Evangelism" content="Register and do your part to spread gospel.We will spread savings knowledge of jesus to the unsaved world on social media."
                        width="230" height="230" marginTop="0rem" speed="-3.8">
                        
                        </Outerbox>

                   
                    
                </Col>
            </Row>
          
        </Container>
        </>

    )
}
