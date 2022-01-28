import React from 'react';
import { Row,Col, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Textbox from '../../components/TextBox'
import TextArea from '../../components/TextArea';
import Buttons from '../../components/Packages/Buttons';
import { useHistory,Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Button } from 'bootstrap';
import Parallax from 'react-rellax'

export default function Index() {

  let history = useHistory();


  //  const [register, handleSubmit] = useForm();

  //  const onSubmit = data => console.log(data);
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  function onSubmit(data)
  {
    console.log(data);
    history.push('/pkg-details');
  }


  return (
  
    <div style={{marginTop:'10rem'}} >
      <Container >
      
      <Row >

           
                
                <Col xl={4} sm={12} md={12} xxl={5} className='py-5 my-5'>

                <Parallax speed={-3} >  
                  <img src={require('../../assets/images/hands.png')} height={500} width={500} alt="hands" />
                </Parallax>
                </Col>

                <Col></Col>

                <Col xl={8} sm={12} md={12} xxl={5} className='py-5 my-5'>
                  
                  <Parallax speed={-3}>
                    <h6 className='heading'>Register</h6>
                    <p className='para-content'>Come To The Fold And More Jesus Viral</p>
                    
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
                          <Buttons text="Register" type="submit" />
                        {/* <input type="submit" /> */}
                        </Row>
                        

                        <Row align="center" >
                          <Col>Already Have An Account? &nbsp;
                          <Link to='/sign-in'>Sign in</Link></Col>
                        </Row>
                      
                    
                    </Form>


                    </Parallax>
                </Col>
             
            </Row>
            
            </Container>
    </div>
  );



}
