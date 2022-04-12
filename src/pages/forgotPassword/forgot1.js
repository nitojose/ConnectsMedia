import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import Parallax from 'react-rellax'
import { useForm } from 'react-hook-form';
import Buttons from '../../components/Packages/Buttons';
import { Form } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import { Url } from '../../GLOBAL/global';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    
    let history = new useHistory();

    function onSubmit(data)
    {
      

        if(data.pass1 === data.pass2)
        {
            let formdata = new FormData();
     
             formdata.append('email',data.email);
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
                //handle success
                console.log(response.data.data.message);
                if(response.data.data.message === "Password updated successfully.")
                {
                    toast.success("password reset successfully !!",{autoClose:3000});
                    setTimeout(() => history.push('/login'),3000);
                }
                // history.push('/home');
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }
        else
        {
            toast.error('password doesnot match !!',{autoclose:2000});
            setTimeout(() => history.push('/reset_password'),2000);
        }

    
    }
    
  return (
      <div>

<Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>

          <Container className='my-5'>
          <Parallax speed={-3}>
                    <h6 className='heading my-5'>forgot Password</h6>
                    
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Email" type="email" {...register("email" , { required: true })} className='textbox login-box'/> </Col>
                            
                        </Row>

            

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox login-box'/> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox login-box'/> </Col>
                        </Row>

                        <Row className='extraRowSpace'>
                          <Buttons text="Reset " type="submit" />
                        {/* <input type="submit" /> */}
                        </Row>
                    
                    </Form>


                    </Parallax>
          </Container>
          <ToastContainer/>
      </div>
  );
}
