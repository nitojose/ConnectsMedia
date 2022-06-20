/* eslint-disable import/first */
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import '../../style/messages.scss';
import dateFormat from 'dateformat';
import {AiOutlineCamera} from 'react-icons/ai';
import {MdQuestionAnswer} from 'react-icons/md';
import axios from 'axios';
import { Url,picture,imgUrl } from '../../GLOBAL/global';
var sessionstorage = require('sessionstorage');
import {FaArrowDown} from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";
import Footer from '../../components/Footer';


export default function MsgView() {

   const msgData = JSON.parse(sessionstorage.getItem("msgview"));
   const [customerInfo,setCustomerInfo] = React.useState();
    console.log(msgData);

        async function getInfos()
        {
        console.log("get cust info")
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

    React.useEffect(() => {
        getInfos();
    })
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
          <AiOutlineBars color='green' className='bsFillKanbanFill' onClick={()=>onTapFun()}/>
  <div className='icon-tab-block'>
          <FaArrowDown color='black' className='icon-tab'/>

          <p className='header-banner-text'>Outbox</p>
          </div>
          </div>
            </div>
            </div>
            <div className='button-background-req'></div>
            
  
          </div>
                
            
          <div className='view-msg px-5 '>

<div className='msg-align mb-5'>

    <Row>
        <Col className='flex-center'>
        <p>Date : {''} {msgData.created_at !== null? dateFormat(msgData.created_at, "mmmm dS, yyyy"):""}</p>
        {/* <p>Status : {''} {msgData.msg_status}</p> */}
        </Col>



        <Col className='flex-center'>

             <div class="msg-container">
                 {/* <div class="arrow">
                     <div class="outer"></div>
                 <div class="inner"></div> 
                 </div> */}
                 <div class="message-body">
                     <p>{msgData.msg_user} </p>
                 </div>
             </div>
        </Col>
    </Row>

     

 </div>

</div>
          


        
                        <Footer/>
        </Container>







  )
}
