import React from 'react';
import { Container,Row,Col,Spinner,Button } from 'react-bootstrap';
import axios from 'axios';
import Parallax from 'react-rellax'
import { useForm } from 'react-hook-form';
import Buttons from '../../components/Packages/Buttons';
import { Form } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import { Url } from '../../GLOBAL/global';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const [spinner,setSpinner] = React.useState(false);
    
    let history = new useHistory();

    function onSubmit(data)
    {
      
      setSpinner(true);
     let formdata = new FormData();
     
     formdata.append('email',data.email);
        formdata.append('link',"http://connect.gitdr.com/reset_password");
     

     
          const headers ={
            'Content-Type': 'multipart/form-data'
          }

        axios({
        method: 'post',
        url: Url+'password/email',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            setSpinner(false);
            if(response.data.msg === "Reset password link sent on your email id.")
            {
                toast.success("Reset password link sent on your email id. !!",{autoClose:3000});
                setTimeout(() => history.push('/login',3000))
            }
           
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    
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
                    <h6 className='heading my-5'>Forgot Password</h6>
                    
                    
                    <Form onSubmit={handleSubmit(onSubmit)} className='my-5 py-5'>
                        

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Email" type="email" {...register("email" , { required: true })} className='textbox login-box'/> </Col>
                            
                        </Row>

            

                        
                        <Row className='extraRowSpace'>
                         {(!spinner === false)? <Buttons text="Submit " type="submit" disabled={true} /> : <Buttons text="Submit " type="submit" />} 

                         {spinner && 
                      <Spinner
                    
                          style={{marginLeft:'53%',marginTop:'-3.5rem'}}
                        animation="border"
                       
                        role="status"
                        
                      >
                        </Spinner>
                     
                    }
                       
                        </Row>
                    
                    </Form>


                    </Parallax>
                    


                    <ToastContainer position="top-center"  style={{marginTop:'50vh'}}/>
          </Container>
          
      </div>
  );
}
