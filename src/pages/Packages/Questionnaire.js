import React from 'react';
import { useForm } from 'react-hook-form';
import { Container,Row,Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Buttons from '../../components/Packages/Buttons';
import { Link } from 'react-router-dom';
import SelectButton from '../../components/Packages/SelectButton';
import Service from '../../components/Packages/servicelist'

export default function Questionnaire() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

    function onSubmit(data)
  {
      console.log(data);
  }

  return (
    <div>

        <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Name and address of your ministry/church" type="text"  {...register("ministry" , { required: true })} className='textbox' /> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}> 

                            <label>How many branches do you have?</label>

                                <select name="branches" {...register("branches" , { required: true })} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                        
                                </select>
                            
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  
                            
                                <label>Total active members on premises?</label>
                                
                                <select name="members" {...register("members" , { required: true })} >
                                    <option value="not sure">Not Sure</option>
                                    <option value="1-30">1-30</option>
                                    <option value="30-60">30-60</option>
                                    <option value="60-90">60-90</option>
                                    
                        
                                </select>

                            </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  

                            <label>Active online regular viewers?</label>
                                
                                <select name="viewers" {...register("viewers" , { required: true })} >
                                    <option value="not sure">Not Sure</option>
                                    <option value="1-30">1-30</option>
                                    <option value="30-60">30-60</option>
                                    <option value="60-90">60-90</option>
                                    
                        
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}>
                            <label>How often do you live stream in a week?</label>
                                
                                <select name="liveStream" {...register("liveStream" , { required: true })} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                        
                                </select>
                            </Col>
                        </Row>
                       
                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <textarea placeholder="What are the challenges you face right now?" {...register("challenges" , { required: true })} className='textbox textArea' rows={3}></textarea>  </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>
                                <label>What are your goals using our services? </label>

                                <Service id="In 1 year we want to expand our online reach" name="In 1 year we want to expand our online reach" value="In 1 year we want to expand our online reach"/>

                                <Service id="We are a new church. We want to make our presence in the current location" name="We are a new church. We want to make our presence in the current location" value="We are a new church. We want to make our presence in the current location"/>

                                <Service id="We are planting new churches in new locations. We want to attract new members in different areas" name="We are planting new churches in new locations. We want to attract new members in different areas" value="We are planting new churches in new locations. We want to attract new members in different areas"/>

                                <Service id="All of the above" name="All of the above" value="All of the above"/>
                                
                            </Col>

                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  
                            
                                <label>How serious are you to take your online presence to the next level?</label>
                                
                                <select name="online-presence" {...register("online-presence" , { required: true })} >
                                    <option value="SURE">HIGH. We see great potential in this approach</option>
                                    <option value="MEDIUM">MEDIUM. Exploring the options</option>
                                    <option value="LOW">LOW. Testing the waters</option>
                                 
                                </select>

                            </Col>
                            
                        </Row>

                        <Row className='extraRowSpace'>
                          <Buttons text="Register" type="submit" />
                            {/* <input type="submit" /> */}
                        </Row>
                        

                        <Row align="center" >
                          <Col>Already Have An Account? &nbsp;
                          <Link to='/login'>Sign in</Link></Col>
                        </Row>

                        
                      
                    
                    </Form>

        </Container>

    </div>
    );
}
