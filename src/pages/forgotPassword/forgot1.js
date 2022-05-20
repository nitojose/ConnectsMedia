import React from 'react';
import { Container,Row,Col,Spinner, } from 'react-bootstrap';
import axios from 'axios';
import Parallax from 'react-rellax'
import { useForm } from 'react-hook-form';
import Buttons from '../../components/Packages/Buttons';
import { Form } from 'react-bootstrap';
import { Link,useHistory,useParams } from 'react-router-dom';
import { Url } from '../../GLOBAL/global';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const [spinner,setspinner] = React.useState(false);
    
    let history = new useHistory();
    const emailid  = useParams();
   console.log("email",emailid.email)

    function onSubmit(data)
    {
      
        console.log("hello");
        setspinner(true);
        if(data.pass1 === data.pass2)
        {
            let formdata = new FormData();
     
            formdata.append('email',emailid.email);
            formdata.append('password',data.pass1);
     

     
            const headers ={
                'Content-Type': 'multipart/form-data'
            }

            axios({
            method: 'post',
            url: Url+'resetPassword',
            data: formdata,
            headers: headers
            })
            .then(function (response) {
                setspinner(false);
                //handle success
                console.log(response.data.data.message);
                if(response.data.data.message === "Password updated successfully.")
                {
                    toast.success("Password updated successfully. !!",{autoClose:3000});
                    setTimeout(() => history.push('/dashboard'),3000)
                }
               
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }
        else
        {
            setspinner(false);
            toast.error('password doesnot match !!',{autoclose:2000});
            // setTimeout(() => history.push('/change_password'),2000);
            
        }
    }
    
  return (
      <div>



          <Container className='password-forgot'>
          <Parallax speed={-3}>
          <div className='view-msg '>
                    <Row className='align-div pwd-div '>
                    <Form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                        

                        <Row  className=''>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Email" type="email" {...register("emailid")} className='textbox login-box'  style={{color:'#aaa'}} defaultValue={emailid.email} readOnly={true}/> </Col>
                            
                        </Row>
                       
            

                        <Row  className=''>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox login-box'/> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox login-box'/> </Col>
                        </Row>

                        <Row className='extraRowSpace'>
                       
                            {(!spinner ===false )? (<> <Buttons  text="Change Password" type="submit" ></Buttons> {spinner && 
                            <Spinner
                          
                            style={{marginLeft:'61%',marginTop:'-3.5rem'}}
                              animation="border"
                              
                              role="status"
                              
                            >
                        
                          </Spinner>} </>)
                      
                            : (<><Buttons  text="Change Password"  type="submit"></Buttons>{ spinner && 
                            <Spinner
                      
                        
                              animation="border"
                              
                              role="status"
                              
                            >
                        
                          </Spinner> }</>) 
                      
                      }
                      {/* <Buttons  text="Change Password"  type="submit"></Buttons> */}
                        </Row>
                    
                    </Form>
                </Row>
                </div>

                  </Parallax>
                   
          </Container>
          <ToastContainer position="top-center"  style={{marginTop:'50vh'}}/>
      </div>
  )
}
