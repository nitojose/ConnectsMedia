import React,{useEffect} from 'react';
import { Container,Row,Col,Table,Button,Modal,Card } from 'react-bootstrap';
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import '../../style/messages.scss';
import dateFormat from 'dateformat';
import { useHistory,Link} from "react-router-dom";
import { FcLeftDown,FcRightUp } from "react-icons/fc";
import Parallax from 'react-rellax'
var sessionstorage = require('sessionstorage');

export default function Index() {
    let history = useHistory();
    const [length,setLength] = React.useState(0);
    
    const [allmessages,setAlmessages]= React.useState([{}]);
   
   

    useEffect(() => {

        getDatas();

      },[allmessages!== null]);


    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            // get all messages where msg_type = "I"

            await axios.get(Url+'getmessages', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                // console.log(response.data.data);
                setAlmessages(response.data.data);
                setLength(allmessages.length)
            })
            .catch((error) => {
                console.log('error ' + error);
            });

    }


    
  return (
      <>      
      
    <div>

    <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
        <Container>
            <h2 className='text-center my-5'>Messages</h2>
            
                        <div className='view-msg mb-5'>
                           

                            {length >0 ?(
                            
                            
                              
                                    <Row >
                          {allmessages.map((data, idx) => (
                            
                              <>
                                <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                  <Card className='card-event '>
                                 
                                    <div className='card-header-color align-start' >
                                      <div className='space-between'>
                                        <p className='px-5 pt-2 bold-text'></p>

                                        <p className='px-5  light-white pt-2'>Message Type</p>
                                        <p className='px-5 arrow-color mt-2'>{data.msg_type===("I"||"R")?
                                        (<FcRightUp /> ):(<FcLeftDown /> )}</p>
                                        
                                        
                                      </div>
                                    </div>
                                    <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card'/>

                                    <Card.Body className='card-bg mt-5'>
                                      
                                      {/* <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='card-bg'/> */}

                                          <div className='space-between text-color mt-5'>
                                            <p className=''>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</p>
                                            <p>Order date</p>
                                        
                                          </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <textarea className='msg_textarea' disabled={true} rows={3}>{data.msg_user}</textarea>
                                              <p>message</p>
                                              
                                            </div>
                                            <hr className='text-color'></hr>



                                          <div className='space-between text-color '>
                                            <p className=' '>{data.msg_status === "Read"?<span className='green'>Read</span> :<span className='error'>NotRead</span>} </p>
                                            <p>Status</p>
                                            
                                          </div>


                                          <div className='text-center'>
                                                <span><Button variant="dark" className='px-5 b-3'onClick={() => viewall(data)}>view</Button></span>
                                            </div>
                                        

                                    </Card.Body>
                                  
                                  </Card>
                                
                                </Col>
                                </>
                          ))}
                                </Row>
                            ):(<><p className='bold-text error'>No message send yet !!</p></>)}
                        </div>
                

        </Container>
    </div>
    </>

    );

    

    function viewall(data)
    {
       
        sessionstorage.setItem("relatedMsg",JSON.stringify(data));
        history.push('/related-msgs');
        history.go(0);
    }

    
    
}
