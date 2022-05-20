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


  return (
   <Container>


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
                    <MdQuestionAnswer color='black' className='mt-4 mx-4' size={22}/>
                    <p className='header-banner-text'>Message</p>
                </div>

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

       


   </Container>
  )
}
