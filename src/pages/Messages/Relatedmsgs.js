import React,{useEffect} from 'react';
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import '../../style/messages.scss';
import { Container,Row,Col,Table,Button,Modal,Card } from 'react-bootstrap';
import dateFormat from 'dateformat';
import { FcLeftDown,FcRightUp } from "react-icons/fc";
import Parallax from 'react-rellax'
import { useHistory} from "react-router-dom";
import {FaArrowUp,FaArrowDown} from 'react-icons/fa';
var sessionstorage = require('sessionstorage');

export default function Relatedmsgs() {

    const[relatedMsg,setRelatedMsg] = React.useState([{}]);
    const msg =  JSON.parse(sessionstorage.getItem("relatedMsg"))
    console.log("pkgdata",msg)
    
    const [modelmsg,setmodelmsg] = React.useState(false);
    const [length,setLength] = React.useState(0);

    let history = useHistory();

    useEffect(() => {

        getDatas();

      },[]);



        async function getDatas()
        {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            // get all messages where msg_type = "I"

            await axios.get(Url+'getfullmessages', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id,parent_msg:msg.msg_id} })
            .then(response => {
                // If request is good...
                console.log("related",response.data);
                setRelatedMsg(response.data.data);
                setLength(relatedMsg.length);

            })
            .catch((error) => {
                console.log('error ' + error);
            });

        }


  return (
  <div>

        
        <Container>
          
        <div className='header-banner' style={{marginLeft:'245px'}}>
          <FaArrowUp color='black' className='mt-4 mx-2' size={22}/> <FaArrowDown color='black' className='mt-4 ' size={22}/>
          <p className='header-banner-text' style={{marginLeft:'5rem'}}>Related Messages</p>
      </div>
                 
                        <div className='view-msg'>
                            {/* <p>Purchased Items</p> */}
                            {relatedMsg.length !== 0 ? ( 
                            
                              
                               <>
                                <Row className='align-div'>
                               {relatedMsg.map((data, idx) => (
                                  
                                    <>
                                      <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                        <Card className='card-event '>
                                       
                                          <div className='card-header-color align-start' >
                                            <div className='space-between'>
                                              <p className='px-5 pt-2 bold-text'></p>
      
                                              <p className='px-5 arrow-color mt-2'>{data.msg_type===("I"||"R")?<FcRightUp />:<FcLeftDown />}</p>
                                              <p className='px-5  light-white pt-2'>Message Type</p>
                                              
                                            </div>
                                          </div>
                                          <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card' />
      
                                          <Card.Body className='card-bg mt-5'>
                                            
                                           
      
                                                <div className='space-between text-color mt-5'>
                                                  <p className=''>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</p>
                                                  <p>Order date</p>
                                              
                                                </div>
                                                  <hr className='text-color'></hr>
      
      
                                                <div className='space-between text-color '>
                                                  <textarea className=' msg_textarea' disabled={true} rows={3}>{data.msg_user}</textarea>
                                                    <p>message</p>
                                                    
                                                  </div>
                                                  <hr className='text-color'></hr>
      
      
      
                                                <div className='space-between text-color '>
                                                  <p className=' bold-text'>{data.msg_status === "Read"?<span className='green'>Read</span> :<span className='error'>NotRead</span>} </p>
                                                  <p>Status</p>
                                                  
                                                </div>
      
      
                                               
                                              
      
                                          </Card.Body>
                                        
                                        </Card>
                                      
                                      </Col>
                                      </>
                                ))}
                                      </Row>
                                      </>
                            ):(<><p className='bold-text error'>No Related Messages Send Yet !!</p></>)}
                                   
                                    
                                
                           

                        </div>
                 


                    {
                        modelmsg &&

                        <Modal.Dialog className='modal-msg'>
                            <Modal.Header >
                                <Modal.Title style={{color:'black'}}>Replay  </Modal.Title>
                                {/* <p style={{color:'black'}}>message : {Pmsg.msg_user} </p> */}
                              
                            </Modal.Header>

                            <Modal.Body>
                                <input type="text" placeholder='type here ..' id="message" className='msg-text' />
                              
                            </Modal.Body>

                            <Modal.Footer>

                                
                                <Button variant="secondary" onClick={closebtn}>Close</Button>
                            
                                <Button variant="dark" onClick={()=>ReplayToMsg()}>Send</Button>
                              
                                
                            </Modal.Footer>
                        </Modal.Dialog>
                    }
                    
                

        </Container>
    </div>
  );

  function closebtn()
    {
        setmodelmsg(false)
    }
    

    

    

    function ReplayToMsg()
    {
        
        var msg = document.getElementById('message').value;
        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();

        


        // formdata.append("customer_id",customer_id);
        // formdata.append("order_id",Pmsg.msg_order);
        // formdata.append("message",msg);
        // formdata.append("msg_parentmsg",Pmsg.msg_parentmsg===0?Pmsg.msg_id:Pmsg.msg_parentmsg);
        // formdata.append("msg_type",'R');


        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }

        axios({
        method: 'post',
        url: Url+'Message',
        data:formdata,
        headers: headers
        })
        .then(function (response) {
                    //handle success
            console.log(response.data);
          
            setmodelmsg(false);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
   

                
    }
}
