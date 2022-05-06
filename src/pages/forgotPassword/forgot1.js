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
    const [spinner,setSpinner] = React.useState(false);
    
    let history = new useHistory();
    const { email } = useParams();
   

    function onSubmit(data)
    {
      
        console.log("hello")
        setSpinner(true);
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
                setSpinner(false);
                if(response.data.data.message === "Password updated successfully.")
                {
                    toast.success("password reset successfully !!",{autoClose:3000});
                    setTimeout(() => history.push('/dashboard'),3000);
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
          
            setSpinner(false);
        }

    
    }
    
  return (
      <div>



          <Container className='pwd-div'>
          <Parallax speed={-3}>
                    <h6 className='heading text-center mt-5'>Change Password</h6>
                    
                    
                    <Form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                        

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Email" type="email" {...register("email" , { required: true })} className='textbox ' value={email} disabled={true}/> </Col>
                            
                        </Row>

            

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox '/> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox '/> </Col>
                        </Row>

                        
                        <Row className='extraRowSpace'>
                       
                                {(!spinner ===false )? (<> <Buttons text="Submit" type="submit" disabled={true}/> {spinner && 
                                <Spinner
                                
                                style={{marginLeft:'56%',marginTop:'-3.5rem'}}
                                    animation="border"
                                    
                                    role="status"
                                    
                                >
                            
                                </Spinner>} </>)
                            
                                : (<><Buttons text="Submit" type="submit" />{ spinner && 
                                <Spinner
                            
                            
                                    animation="border"
                                    
                                    role="status"
                                    
                                >
                            
                                </Spinner> }</>)
                            
                            }
                       
                        </Row>

                    
                    </Form>


                    </Parallax>
          </Container>
          <ToastContainer  position="top-center"  style={{marginTop:'50vh'}}/>
      </div>
  )
}
