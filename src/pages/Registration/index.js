'use strict';
import React,{useState} from 'react';
import { Row,Col, Container,Button ,Spinner} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Textbox from '../../components/TextBox'
import TextArea from '../../components/TextArea';
import Buttons from '../../components/Packages/Buttons';
import { useHistory,Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
// import { Button } from 'bootstrap';
import Parallax from 'react-rellax'
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
import {Alert}  from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');


export default function Index(props) {

  let history = useHistory();
  console.log("props",props.name);
  
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const [spinner,setSpinner] = React.useState(false);

  function onSubmit(data)
  {
    
    setSpinner(true);
     let formdata = new FormData();
     formdata.append('name',data.name);
     formdata.append('email',data.email);
     formdata.append('password',data.pass2);
     formdata.append('phone',data.phone);
     formdata.append('ministry',data.ministry);
     formdata.append('address',data.add);

     
    
     
          const headers ={
            'Content-Type': 'multipart/form-data'
          }

        axios({
        method: 'post',
        url: Url+'register',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
           console.log(response.data);
           setSpinner(false);
            if(response.data.message === "Registered Successfully...")
            {
              sessionstorage.setItem("token",response.data.token);
              sessionstorage.setItem("customerId",response.data.id);
              toast.success("Registration Success ! , Verify Email Id !",{autoClose:3000});

              setTimeout(() => history.push( { pathname: '/login', serviceType: props.name}),3000)
              
            }
            

            if(response.data === "email already exists")
            {
              toast("Email Already Exists !",{autoClose:3000});
              setTimeout(() => history.push('/login'),3000)
            }
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });



          // history.push('/pkg-details');
  }



  return (
  
    <div>
      <Container >

    
      <Row >

           
                
                <Col xl={4} sm={12} md={12} xxl={5} className='py-5 my-5'>

                <Parallax speed={-3} >  
                  <img src={require('../../assets/images/register.png')} height={500} width={500} alt="hands" />
                </Parallax>
                </Col>

                <Col></Col>

                <Col xl={4} sm={12} md={12} xxl={5} className='py-5 my-5'>
                  
                  <Parallax speed={-3}>
                    <h6 className='heading'>Register</h6>
                    <p className='para-content'>Come To Fold And Make Jesus Viral</p>
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Name" type="text"  {...register("name" , { required: true })} className='textbox' /> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}> <input placeholder="Ministry" type="text" {...register('ministry' , { required: true })} className='textbox' /> </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Email" type="email" {...register("email" , { required: true })} className='textbox'/> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Phone" type="tel-in" {...register("phone" , { required: true })} className='textbox'/> </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}><textarea placeholder="Full Address" {...register("add" , { required: true })} className='textbox textArea' rows={3}></textarea></Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox'/> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox'/> </Col>
                        </Row>

                        <Row className='extraRowSpace'>
                         {(!spinner === false)?<Buttons text="Register" type="submit" disabled={true} />:<Buttons text="Register" type="submit" /> } 

                         {spinner && 
                          <Spinner
                        
                            style={{marginLeft:'58%',marginTop:'-3.5rem'}}
                            animation="border"
                            
                            role="status"
                            
                          >
                        
                          </Spinner>
                        
                      }
                       
                        </Row>
                        

                        <Row align="center" >
                          <Col>Already Have An Account? &nbsp;
                          <Link to='/login' style={{color:'black'}}>Sign in</Link></Col>
                        </Row>

                        
                      
                    
                    </Form>


                    </Parallax>
                </Col>
             
            </Row>

            

            <ToastContainer  position="top-center"  style={{marginTop:'50vh'}}/>
            
            </Container>
    </div>
  );



}
