import React ,{useState} from 'react';
import { Row,Col, Container } from 'react-bootstrap'
import Parallax from 'react-rellax'
import { useForm } from 'react-hook-form';
import Buttons from '../../components/Packages/Buttons';
import { Form } from 'react-bootstrap';
import { Link ,useHistory } from 'react-router-dom';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
import '../../style/login.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');


export default function Index() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    let history  =new useHistory();

    function onSubmit(data)
    {
      
      // console.log(data);
     let formdata = new FormData();
     formdata.append('name',data.name);
     formdata.append('email',data.email);
     formdata.append('password',data.pass);
     

     
          const headers ={
            'Content-Type': 'multipart/form-data'
          }

        axios({
        method: 'post',
        url: Url+'login',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            

            if(response.data === "Email Not verified")
            {
              toast.warning("Verify EmailId !");
              history.push('/login')
            }
            else
            {
              sessionstorage.setItem("token",response.data.token);
              sessionstorage.setItem("customerId",response.data.id);
              history.push('/home')
            }
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    
    }

  return (
  
  <div>

    <Container className='' >
      
      <Row >

           
                
                <Col xl={4} sm={12} md={12} xxl={5} className='py-5 my-5'>

                <Parallax speed={-3} >  
                  <img src={require('../../assets/images/login.png')} height={500} width={500} alt="hands" />
                </Parallax>
                </Col>

                <Col></Col>

                <Col xl={8} sm={12} md={12} xxl={5} className='py-5 my-5'>
                  
                  <Parallax speed={-3}>
                    <h6 className='heading'>Login</h6>
                    <p className='para-content'>Come To The Fold And More Jesus Viral</p>
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Name" type="text"  {...register("name" , { required: true })} className='textbox login-box' /> </Col>
                           
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Email" type="email" {...register("email" , { required: true })} className='textbox login-box'/> </Col>
                            
                        </Row>

            

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Password" type="password" {...register("pass" , { required: true })} className='textbox login-box'/> </Col>
                            
                        </Row>

                        <Row className='extraRowSpace'>
                          <Buttons text="Login" type="submit" />
                        {/* <input type="submit" /> */}
                        </Row>
                        
                        

                        <Row align="center" >
                          <Col> To Become New User? &nbsp;
                          <Link to='/registration'>Register</Link></Col>
                        </Row>

                        <Row align="center" >
                         
                          <Link to='/forgot_password'>forgot password</Link>
                        </Row>
            
                      
                    
                    </Form>


                    </Parallax>
                </Col>
             
            </Row>
            
            </Container>
            <ToastContainer />
  </div>
  );
}
