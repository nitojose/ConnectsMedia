import React,{useEffect,useState} from 'react';
import { Container,Row,Col,Card,Button,Modal,Table } from 'react-bootstrap';
import '../../style/order.scss'
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import { FcLeftDown,FcRightUp } from "react-icons/fc";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';
import {FiInfo} from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


var sessionstorage = require('sessionstorage');


export default function Index() {

    let history = useHistory();

    const [allmessages,setAlmessages]= React.useState([]);
    const [adminGene,setAdminGene] = React.useState([]);
   
   

    useEffect(() => {

        getDatas();

      },[allmessages!== null]);


    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            // get all messages where msg_type = "I"

            await axios.get(Url+'getGeneral', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
              
                //console.log(response.data.data);
                setAlmessages(response.data.data);
            })
            .catch((error) => {
                console.log('error ' + error);
            });


            await axios.get(Url+'getGeneral', { headers: { Authorization: `Bearer ${token}` }})
            .then(response => {
                
                // console.log(response.data.data);
                setAdminGene(response.data.data);
            })
            .catch((error) => {
                console.log('error ' + error);
            });

    }

  return (
  
  <Container>

      <div className='header-banner' style={{marginLeft:'245px'}}>
        <FiInfo color='black' className='mt-4 mx-4' size={22}/>
        <p className='header-banner-text'>General Enquiry</p>
      </div>

                    <div style={{marginLeft:'20rem'}}>

                          <Modal.Dialog className='modal-msg mt-5'>
                            <Modal.Header style={{backgroundColor:'#000914',color:'#fff'}} >
                                <Modal.Title >General Enquiry </Modal.Title>
                               
                            </Modal.Header>

                            <Modal.Body>
                                <textarea placeholder='type here ..' id="message" className='msg-text' />
                            </Modal.Body>

                            <Modal.Footer>

                                
                                
                                
                                   <Button variant="dark" onClick={()=>sentmessage()}>Send</Button>
                                
                                
                            </Modal.Footer>
                        </Modal.Dialog>

                    </div>
                        

                     
                 
                        <div className='view-msg'>
                          
                                  
                               
                            <Row className='align-div'>
                                {allmessages.length >0 ? allmessages.map((data, idx) => (
                            
                              <>
                                <Col xxl={6} xl={6} md={12} sm={12} className='center-align '>
                                  <Card className='card-event mt-5'>
                                 
                                    <div className='card-header-color align-start' >
                                      <div className='space-between'>
                                        <p className='px-5 pt-2 bold-text'></p>
                                        
                                        <p className='px-5 arrow-color mt-2'>{data.msg_type===("I"||"R")?<FcRightUp/>:<FcLeftDown />}</p>
                                        <p className='px-5  light-white pt-2'>Message Type</p>
                                        
                                      </div>
                                    </div>
                                    <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card' />

                                    <Card.Body className='card-bg mt-5'>
                                      
                                      {/* <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='card-bg'/> */}

                                          <div className='space-between text-color mt-5'>
                                            <p className=''>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</p>
                                            <p>Order date</p>
                                        
                                          </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <textarea className='bold-text msg_textarea' disabled={true} rows={3}>{data.msg_user}</textarea>
                                              <p>message</p>
                                              
                                            </div>
                                            <hr className='text-color'></hr>



                                          <div className='space-between text-color '>
                                            <p className=' '>{data.msg_status === "Read"?<span className='green'>Read</span> :<span className='error'>NotRead</span>} </p>
                                            <p>Status</p>
                                            
                                          </div>


                                          
                                        

                                    </Card.Body>
                                  
                                  </Card>
                                
                                </Col>
                                </>
                          )):""}




                        {adminGene.length > 0 ? adminGene.map((data, idx) => (
                            
                            <>
                              <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                <Card className='card-event '>
                               
                                  <div className='card-header-color align-start' >
                                    <div className='space-between'>
                                      <p className='px-5 pt-2 bold-text'></p>
                                      
                                      <p className='px-5 arrow-color mt-2'>{data.msg_type===("I"||"R")?(<><FcRightUp/></>):(<><FcLeftDown /> </>)}</p>
                                      <p className='px-5  light-white pt-2'>Message Type</p>
                                      
                                    </div>
                                  </div>
                                  <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card' />

                                  <Card.Body className='card-bg mt-5'>
                                    
                                    {/* <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='card-bg'/> */}

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
                        )):""}

                        {allmessages.length === 0 && adminGene.length === 0 ? <p className='bold-text error'>No Message Send Yet !!</p>: ''}



                        </Row>
                               
                        </div>
                 


                   
               
        
            <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
        

  </Container>);


   
    function sentmessage()
    {
        var msg = document.getElementById('message').value;
        console.log(msg)

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        formdata.append("customer_id",customer_id);
        formdata.append("order_id",0);
        formdata.append("message",msg);
        formdata.append("msg_parentmsg",0);
        formdata.append("msg_type",'I');


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
            toast.success("message send !!")
            getDatas();
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }
    
}
