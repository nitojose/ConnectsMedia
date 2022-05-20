/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react';
import { Container,Row,Col,Spinner,Button } from 'react-bootstrap';
import Buttons from '../../components/Packages/Buttons';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import  Parallax  from 'react-rellax';
import axios from 'axios'
import { Url,isLoggin, notImage,picture,imgUrl } from '../../GLOBAL/global';
import { useHistory,Link} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CgUserAdd} from 'react-icons/cg';
import {AiOutlineCamera} from 'react-icons/ai';
import ImageUploader from 'react-images-upload';
var sessionstorage = require('sessionstorage');


export default function Index() {

    const [customerInfo,setCustomerInfo] = useState({});
    const [spinner,setSpinner] = React.useState(false);
    let history = useHistory();
    const [upload,setaupload] = React.useState(false);
    
    const [profileUpload,setProfileupload] = React.useState({});
    const [coverUpload,setCoverupload] = React.useState({});

    useEffect(()=>{
        
        logginornot();
        getUserInfo();
    },[])
    async function logginornot()
    {
      const cust =  await isLoggin();
    //   console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
    }
  
   

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
    

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });


    function onSubmit(data)
    {
        
        setSpinner(true);
        const customer_id = sessionstorage.getItem("customerId");
        console.log("id",customer_id);
     let formdata = new FormData();
     formdata.append('name',data.name?data.name:customerInfo.cust_name);
     formdata.append('email',customerInfo.cust_email);
     formdata.append('phone',data.phone?data.phone:customerInfo.cust_phone);
     formdata.append('ministry',data.ministry?data.ministry:customerInfo.cust_ministry);
     formdata.append('address',data.add?data.add:customerInfo.cust_address);
     formdata.append('customer_id',customer_id);   

     console.log(formdata);
    
     const token = sessionstorage.getItem("token");

     const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }

        axios({
        method: 'post',
        url: Url+'ProfileUpdate',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            // console.log("success");
            console.log(response.data);
            setSpinner(false);
            if(response.data === "profile Updated Successfully")
            {
              toast.success("Profile Updated Successfully",{autoClose:3000});
              setTimeout(() => history.push('/dashboard'),3000)
            }
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }

    async function filechoose(e,pic)
    {
        
      
        const token = sessionstorage.getItem("token");
        
        let formdata = new FormData();
        const customer_id = sessionstorage.getItem("customerId");

        formdata.append("customer_id",customer_id);
        formdata.append("photo",e.target.files[0]);
        
        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }


            if(pic === "profile")
            {
                setProfileupload(URL.createObjectURL(e.target.files[0]));

                await axios({
                method: 'post',
                url: Url+'profilephoto',
                data: formdata,
                headers: headers
                })
                .then(function (response) {
                    console.log("file upload",response.data);
                    if(response.data.photo !== "")
                    {
                        toast.success('Profie picture Updated!..',3000);
                    }
                    
                    
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
            }
            else
            {

                setCoverupload(URL.createObjectURL(e.target.files[0]));
                await axios({
                    method: 'post',
                    url: Url+'coverphoto',
                    data: formdata,
                    headers: headers
                    })
                    .then(function (response) {
                         console.log("file upload",response.data);
                        if(response.data.photo !== "")
                        {
                            toast.success('Cover picture Updated!..',3000);
                        }
                        
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
            }
        
    }

    // function viewImageUpload(type)
    // {
    //     setPic(type);
    //     setaupload(!upload);
    // }

    // function onImageChange(e)
    // {
    //     console.log("file",e)
        
    // }

  return (
      <>
    

        <Container>

        <div className='profileBefore' >

            {Object.keys(coverUpload).length === 0 ? (<img src={customerInfo.cover_photo === (undefined || null)?picture :(imgUrl+customerInfo.cover_photo)} className='cover-img-dash' />):(<><img src={coverUpload?coverUpload : picture} className='cover-img-dash' /></>)}
            
            <div className='cover-camera'>
                <label htmlFor="cover-image"><AiOutlineCamera  size={24} className="pointer" /></label> 

                <input type="file" onChange={(e) => filechoose(e,"cover")} className="filetype"  id="cover-image"/>
            </div>
        </div>   

            <div className='row-flex-align'>

                <div className='profileDiv'>
                <div className='profileInner' >
                    
                  

                    {Object.keys(profileUpload).length === 0 ? (<img src={customerInfo.photo === (undefined || null) ? picture :(imgUrl+customerInfo.photo)}  style={{objectFit:'contain'}} />):(<><img src={profileUpload?profileUpload : picture} /></>)}

                

                    <div className='img-camera'>
                        <label htmlFor='group_image'><AiOutlineCamera  size={24} /></label> 
        
                        <input type="file" onChange={(e) => filechoose(e,"profile")} className="filetype" style={{visibility:'hidden'}}id="group_image"/>
                        
                    </div>  
                    

                </div>
                
                </div>

                <div className='header-banner' style={{marginLeft:'245px'}}>
                    <CgUserAdd color='black' className='mt-4 mx-4' size={22}/>
                    <p className='header-banner-text'>Profile</p>
                </div>

            </div>

            <div className='view-msg '>
                

                    <Row className='align-div pwd-div  mb-5'>

{/*                     
                    <ImageUploader
                       className={upload?'imageup':'notimageup'}
                       fileContainerStyle={{backgroundColor:'#f2d1b5'}}
                       withIcon={true}
                       buttonText='Choose images'
                       onChange={(e) => filechoose(e)}
                       imgExtension={['.jpg', '.gif', '.png', '.gif']}
                       maxFileSize={5242880}
                 />
          */}
                    <Form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                        <Row >
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Name" type="text"  {...register("name" )} className='textbox login-box' defaultValue={customerInfo.cust_name} /> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}> <input placeholder="Ministry" type="text" {...register('ministry')} className='textbox login-box' defaultValue={customerInfo.cust_ministry} /> </Col>

                        </Row>

                        <Row  >
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Email" type="email"  className='textbox login-box' value={customerInfo.cust_email} disabled={true} style={{color:'#aaa',backgroundColor:'#f7f4f4'}}/> </Col>

                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Phone" type="tel-in" {...register("phone")} className='textbox login-box' value={customerInfo.cust_phone}/> </Col>

                        </Row>

                        <Row  >
                            
                            <Col sm={12} md={12} xl={12} xxl={12}>
                                <textarea placeholder="Full Address" {...register("add" , { required: true })} className='textbox '  rows={3} defaultValue={customerInfo.cust_address==='undefined'?'':customerInfo.cust_address} disabled={false} inputMode={'text'}></textarea></Col>

                        </Row>

                        {/* <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Password" type="password" {...register("pass1" , { required: true })} className='textbox'/> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Re-Password" type="password"  {...register("pass2" , { required: true })} className='textbox'/> </Col>
                        </Row> */}

                        <Row className='extraRowSpace'>
                        {(!spinner === false)? <Buttons text="Update " type="submit" disabled={true} /> : <Buttons text="Update " type="submit" />} 

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
                    </Row>

            </div> 
               
        </Container>
        <ToastContainer  position="top-center"  style={{marginTop:'50vh'}}/>
   
    </>
  );

 
}
