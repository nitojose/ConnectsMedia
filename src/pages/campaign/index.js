import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/campaign.scss'
import Button from 'react-bootstrap/Button';


export default function index() {
    return (
        <Container style={{marginTop:'5rem'}}>
            
            <p className='campaign_text'>Campaigns</p>

            <Row>
                <Col>
                    <div className='box'>
                        <img src={require('../../assets/images/Group 338.png')} alt="microphone" className='cam_img'/>

                        <div className='vertical_text'>
                            <p>Upcoming Events</p>
                        </div>

                        <Button variant="outline-warning" className='go-button'>Go</Button>
                        
                    </div>
                </Col>
            </Row>
          
        </Container>


    )
}
