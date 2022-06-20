import React from 'react';
import { Container,Row,Col,Spinner,Button } from 'react-bootstrap';
import axios from 'axios';
import Parallax from 'react-rellax'
import { useForm } from 'react-hook-form';
import Buttons from '../../components/Packages/Buttons';
import { Form } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import { Url,picture,imgUrl } from '../../GLOBAL/global';
import {RiLockPasswordFill} from 'react-icons/ri';
import {AiOutlineCamera,AiOutlineBars} from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FiPackage} from 'react-icons/fi';
import {BsFillKanbanFill } from "react-icons/bs";
var sessionstorage = require('sessionstorage');

export default function Index() {

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const[spinner,setspinner] = React.useState(false);
    const [customerInfo,setCustomerInfo] = React.useState();
    
    let history = new useHistory();

    async function getUserInfo()
    {
        const token = sessionstorage.getItem("token");
        
        let formdata = new FormData();
        const customer_id = sessionstorage.getItem("customerId");

        formdata.append("customer_id",customer_id);
        
        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }

        await axios({
            method: 'post',
            url: Url+'getProfile',
            data: formdata,
            headers: headers
            })
            .then(function (response) {
                //handle success
               
                console.log("getprofile",response.data.data[0]);
                setCustomerInfo(response.data.data[0]);
               
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    
    }

    function onSubmit(data)
    {
        console.log("hello");
        setspinner(true);
        if(data.pass1 === data.pass2)
        {
            let formdata = new FormData();
     
            formdata.append('email',customerInfo.cust_email);
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

    React.useEffect(() => {
        getUserInfo();
    },[])

    var clicks = 1;
    function onTapFun(){
      clicks+=1;
      console.log('taped succesfuly')
     //  document.getElementsByClassName('pro-sidebar')
    //  alert();
     const cursor = document.querySelector('.pro-sidebar');
     const body = document.querySelector('.body-two')

     if(window.innerWidth<=850){

        if(clicks==clicks+1){
       body.setAttribute("style",'max-width: 100vw;');
 
       cursor.setAttribute("style", 'display:none;max-width:10px;');}
       else{
        cursor.setAttribute("style", 'display:block;max-width: 100%;');
        body.setAttribute("style",'max-width:100vw-20.5vw;')
  
      }}
      else{
        if(clicks%2==0){
            body.setAttribute("style",'max-width: 100vw;');
      
            cursor.setAttribute("style", 'display:none;max-width:10px;');}
            else{
             cursor.setAttribute("style", 'display:block;max-width: 100%;');
             body.setAttribute("style",'max-width:100vw-20.5vw;')
       
           }
      }
 
    }
    
  return (
      <>



          {/* <Container >

          <div className='profileBefore' >
            <img src={customerInfo === undefined ?picture :(imgUrl+customerInfo.cover_photo)} alt="cover" className='cover-img-dash' />
           
        </div> 

        <div className='row-flex-align'>

          <div className='profileDiv'>
            <div className='profileInner'>
              <img className='cover-img-dash' src={customerInfo === undefined ?picture :(imgUrl+customerInfo.photo)} alt="profile" style={{objectFit:'contain'}}/>
              


            </div>
            
          </div>
            <div className='header-banner' style={{marginLeft:'245px'}}>
                <RiLockPasswordFill color='black' className='mt-4 mx-4' size={22}/>
                <p className='header-banner-text'>Change Password</p>
            </div>
        </div> */}
        

        <Container className='body-two'>




<div className='image-sectioning-two'>
      
      <div className='profileBefore-two' >
              <img src={customerInfo === undefined ?picture :(imgUrl+customerInfo.cover_photo)} alt="Avatar" className='cover-img-dash-image' />
             
          </div> 
  
  
          <div className='row-flex-align-two'>
  
              <div className='profileInner'>
                <img className='cover-img-dash' src={customerInfo === undefined ?picture :(imgUrl+customerInfo.photo)} alt="profile"
                //  style={{objectFit:'contain'}}
                 />
                
              </div>
             
  
  
            <div className='header-banner-two'>
            <div className='background-color-text'>
          <AiOutlineBars color='black' className='bsFillKanbanFill' onClick={()=>onTapFun()}/>
  <div className='icon-tab-block'>
          <RiLockPasswordFill color='black' className='icon-tab'/>

          <p className='header-banner-text'>Change Password</p>
          </div>
          </div>
            </div>
            </div>
            <div className='button-background-req'></div>
            
  
          </div>

            
                <div className='view-msg '>
                    <Row className='align-div pwd-div mb-5'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                        

                        <Row  className=''>
                            <Col sm={12} md={12} xl={12} xxl={12}>  <input placeholder="Email" type="email" {...register("emailid")} className='textbox login-box'  style={{color:'#aaa'}} defaultValue={customerInfo === undefined?'':customerInfo.cust_email} readOnly={true}/> </Col>
                            
                        </Row>
                       
            

                        <Row  className=''>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox login-box'/> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox login-box'/> </Col>
                        </Row>

                        <Row className='extraRowSpace'>
                       
                            {(!spinner ===false )? (<> <Buttons  text="Change Password" type="submit" ></Buttons> {spinner && 
                            <Spinner
                          
                            style={{marginLeft:'60%',marginTop:'-3.5rem'}}
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

                  
                   
          </Container>
          <ToastContainer position="top-center"  style={{marginTop:'50vh'}}/>
      </>
  );
}
