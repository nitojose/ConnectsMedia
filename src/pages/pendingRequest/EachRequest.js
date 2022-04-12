import React from 'react'
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,Button,Modal } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,imgUrl } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';

var sessionstorage = require('sessionstorage');

export default function EachRequest(props) {

    const {id} = useParams();
    const [pkgList,setpkgList] = React.useState([{}]);
    // const [pkgData,setPkgData] = React.useState({});
    let history = useHistory();

    console.log("props" ,props.data)
    const pkgData = props.data;

    console.log("data" ,pkgData)

   
  return (
    
    <div>
       <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
         
                                    <Container>

                                        <div className='vertical-text '>
                                            <p>PACKAGE</p>
                                        </div>
                                        <div className='sec-pkg-section mt-5'>
                                            <div className=' '>
                                                <h2>{pkgData.pack.packages_type === "STD" ? "STANDRAD ":"CUSTOMIZED "}<span className='warning'>PACKAGE</span></h2>
                                                <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                            </div>
                                            <p className='heading bold-text py-3'>Package Details</p>
                                            <p>Package Cost : <span className='bold-text'>{pkgData.pack.packages_cost}</span></p>
                                            <p>Selected Months : <span className='bold-text'>{pkgData.pack.months}</span></p>
                                            <p>Drive Id : <a href={pkgData.pack.drive_id} target="_blank" rel="noreferrer">click here</a></p>

                                            <p className='heading bold-text py-3'>{pkgData.spec.length === 0 ? '':"Specifications"}</p>
                                            {
                                                pkgData.spec &&
                                              pkgData.spec.map((p,id)  =>
                                                <div className=''>
                                                    <p>{p.pspec_text}</p>
                                                    <p>{p.pspec_ans}</p>

                                                </div>
                                            )}
                                            
                                            <p className='heading bold-text py-3'>{pkgData.question.length ===0 ? "":'Questionnaire'}</p>
                                            {pkgData.question && pkgData.question.map((d,id) =>
                                            
                                            
                                            <>
                                            
                                            <Row >
                                                <Col xxl={6} xl={6} md={6} sm={6} > 
                                                    <p>{d.pspec_text}</p>
                                                </Col>

                                                <Col xxl={6} xl={6} md={6} sm={6}> 
                                                    <p className='text-end'>{d.pspec_ans}</p> 
                                                </Col>
                                                <hr></hr>
                                            </Row>
                                            </>

                                            )}
                                               

                                        </div>

                                  
                                        </Container>
                      
                  {/* </div> */}
         
                    </div>

  )
}
