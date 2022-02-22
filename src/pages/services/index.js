import React from 'react'
import '../../style/service.scss'
import { Row,Col } from 'react-bootstrap'
import { FaArrowDown } from "react-icons/fa"
import Card from '../../components/services/cards'
import img1 from '../../assets/images/Group 186.png'
import img3 from '../../assets/images/Group 192.png'
import img2 from '../../assets/images/Group 191.png'
import img4 from '../../assets/images/Group 193.png'
import  Parallax from 'react-rellax';


export default function index() {
    const itemList1 = ["Live-Stream Services: Increase viewership & followers",
        "Customized Videos",
        "Create Short Videos from Sermons",
        "Personalized Shorts"]

    const itemList2 =["Live-Stream Services: Increase viewership & followers",
        "Customized Videos",
        "Create Short Videos from Sermons",
        "Done-for-you pictures",
        "Personalized Reels",
        "Instagram Stories"]

        const itemList3 =["Live-Stream Services: Increase viewership & followers",
        "Customized Videos",
        "Create Short Videos from Sermons",
        "Done-for-you pictures",
        "Personalized Reels",
        "Facebook Stories"]

        const itemList4 =["Google advertising",
        "Facebook advertising",
        "Customized Videos",
        "Youtube advertising"]

    return (
        <div >
            <Row className='service-main-div'>
                <Col xl={3} md={12} sm={12} xxl={3} className='text_service'>
                    <Parallax speed={-2.5}>
                        <p className='service_text '>Services</p>
                        <div className='vertical_line '></div>
                        <FaArrowDown className='serviceIcon '/>
                    </Parallax>

                </Col>

                <Col xl={9} md={12} sm={12} xxl={9}>

                    <Row>
                        <Col sm={12} md={12} xl={6} xxl={6}>
                            <Card width="150" height="140"  alt="youtube icon" image={img1} imgId="youtube_icon"
                             list={itemList1} text="Youtube Management"></Card>
                        </Col>


                        <Col sm={12} md={12} xl={6} xxl={6} className=''>

                        <Card width="150" height="140"  alt="youtube icon" image={img2} imgId="youtube_icon" list={itemList2} text="Instagram Management"></Card>
                        </Col>


                    </Row>

                    <Row >

                        <Col sm={12} md={12} xl={6} xxl={6}>
                            <Card width="150" height="140"  alt="youtube icon" image={img3} imgId="youtube_icon" list={itemList3} text="Facebook Management"></Card>
                        </Col>


                        <Col sm={12} md={12} xl={6} xxl={6} className='margin-top-15rm'>

                        <Card width="150" height="140"  alt="youtube icon" image={img4} imgId="youtube_icon" list={itemList4} text="Advertisement Management"></Card>
                        </Col>


                    </Row>
                    
                    
                </Col>

            </Row>
            

            
         
                
        </div>
    )
}


