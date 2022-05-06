import React,{useState} from 'react';
import { Container,Row,Col,Spinner } from 'react-bootstrap';
import Parallax from 'react-rellax';
import { Link,useHistory} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form'
import Buttons from '../../../components/Packages/Buttons';
import { Url,isLoggin } from '../../../GLOBAL/global';
import axios from 'axios'
import Button from '../../../components/Button'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');

export default function CreateForm() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const [showForm,setShowForm] = useState(true);
    const [payButton,setPayButton] = useState(false);
    const [eventId,setEventId] = useState('');
    const [spinner,setSpinner] = React.useState(false);

    let history = useHistory();

    async function logginornot()
    {
      const cust =  await isLoggin();
      console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
    }
  
    React.useEffect(() => {
  
      logginornot();
    },[]);



  function onSubmit(data)
  {
    setSpinner(true);
    const customer_id =  sessionstorage.getItem("customerId");
    const token = sessionstorage.getItem("token");
    

    var formdata = new FormData();



    formdata.append("customer_id",customer_id);
    formdata.append("event_title",data.title);
    formdata.append("event_from",data.from);
    formdata.append("event_to",data.to);
    
   
    const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }

    
    axios({
        method: 'post',
        url: Url+'Events',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            setSpinner(false)
            console.log(response.data);
            if(response.data.message === "event Created Successfully")
            {
                toast.success("Event Created Successfully !",{autoClose:3000});


                
                setEventId(response.data.id);
                  setTimeout(() => 
                              confirmAlert({
                                title: 'Thanks,.',
                                message: 'you can view the order request in Request -> Events section',
                                buttons: [
                                  {
                                    label: 'Yes',
                                    onClick: () => history.push('/dashboard')
                                  },
                                  
                                ]
                              }),3000);
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
  }

 return(
     <div>
         {/* <Parallax speed={5}>
            <img src={require('../../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax> */}

         <Container className='my-5'>
            <Row >
                <Col xl={6} sm={12} md={12} xxl={5} className='py-5 my-5'>

                    <Parallax speed={5} >  
                    <p className='para-content'>A small description</p> 
                    </Parallax>
                </Col>

              

                <Col xl={6} sm={12} md={12} xxl={5} className='py-5 my-5'>
    
                <Parallax speed={5}>
                   {showForm && 
                    <h5 className='heading'>Create Event</h5>
                   }
        
                     {showForm && 
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col sm={12} md={12} xl={12} xxl={12}> 
                        <div style={{display: 'flex',flexDirection: 'row'}} className='' >
                         {/* {/ <label >event tile:</label> /} */}
                         <label style={{display: 'flex',justifyContent: 'center',alignItems:'center',alignSelf: 'center'}} >Title:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                         <input placeholder="Event Title" type="text"  {...register("title" , { required: true })} className='textbox login-box' /> 
                         </div>
                         </Col>
                       
                    </Row>

                    <Row>
                        <Col sm={12} md={12} xl={12} xxl={12}>
                            <div style={{display: 'flex',flexDirection: 'row'}} className='' >
                            <label style={{display: 'flex',justifyContent: 'center',alignItems:'center',alignSelf: 'center'}} >From:</label>&nbsp;&nbsp;
                              <input type="date" placeholder="From Date"  {...register("from" , { required: true })} className='textbox login-box'/>
                              </div>
                         </Col>
                        
                    </Row>

        

                    <Row>
                        <Col sm={8} md={12} xl={12} xxl={12}>
                        <div style={{display: 'flex',flexDirection: 'row'}} className='' >
                            <label style={{display: 'flex',justifyContent: 'center',alignItems:'center',alignSelf: 'center'}} >To:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <input type="date" placeholder="To Date" {...register("to" , { required: true })} className='textbox login-box'/> 
                            </div>
                        </Col>
                        
                    </Row>

                    <Row className='extraRowSpace'>
                      <Buttons text="Create" type="submit" />
                      {spinner && <Spinner animation="border" style={{marginLeft:'22.5rem',marginTop:'-3.5rem'}}></Spinner>}
                    </Row>
                    

                
                </Form> 
                }


                    </Parallax>
                    </Col>
             </Row>
             <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
         </Container>
     </div>
 )

 

}
