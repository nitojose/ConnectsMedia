import React from 'react'
import { Container,Row,Col,Table,Button, Card } from 'react-bootstrap';
import { useHistory} from "react-router-dom";
import {Url,isLoggin,picture,imgUrl} from '../../GLOBAL/global';
import {AiOutlineCamera} from 'react-icons/ai';
import {FiPackage} from 'react-icons/fi';
import {BsFillKanbanFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import Footer from '../../components/Footer';

import axios from 'axios' 
var sessionstorage = require('sessionstorage');

export default function Index() {

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
    const[customerInfo,setCustomerInfo] = React.useState();

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

    let history = new useHistory();

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
          <AiOutlineBars color='black' className='bsFillKanbanFill' onClick={()=>onTapFun()}/>
  <div className='icon-tab-block'>
          <FiPackage color='black' className='icon-tab'/>

          <p className='header-banner-text'>Packages List</p>
          </div>
          </div>
            </div>
            </div>
            <div className='button-background-req'></div>
            
  
          </div>

        <div className='view-msg  ' style={{borderRadius:'8px'}}>
                <div className='align-div pwd-div mb-5'>
                    <div class="main-packages dash-packages">
                                                <div class="package-wrap">
                                                    <div class="package">
                                                        <h4>Standard</h4>
                                                        <div class="content">
                                                            <ul>
                                                                <li><i class="fa fa-check-circle"></i>3 Done-for-you Posts Per Week<br></br>(1 video, 2 pictures / posters)</li>
                                                                <li><i class="fa fa-check-circle"></i>Upto 2 Social Media Platforms</li>
                                                                <li><i class="fa fa-check-circle"></i>Post Boosting – for more views</li>
                                                                <li><i class="fa fa-check-circle"></i>1 Ad Promotion per month</li>                            
                                                                <li><i class="fa fa-check-circle"></i>All Images, Graphics Copyrighting included</li>
                                                            </ul>
                                                        </div>
                                                        <div align="center">
                                                        {sessionstorage.getItem('token') ===null ?(
                                                            <>
                                                        <button onClick={()=>redirecttoList("std")}>Register</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/standard-list')}>Buy</button>
                                                        </>
                                                        )
                                                        }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="package-wrap">
                                                    <div class="package">
                                                        <h4>Custom</h4>
                                                        <div class="content">
                                                            <ul>
                                                                <li><i class="fa fa-check-circle"></i>Register and check all our services </li>
                                                                <li><i class="fa fa-check-circle"></i>Pick the services that suits your ministry needs</li>
                                                            </ul>
                                                        </div>
                                                        <div align="center">
                                                        {sessionstorage.getItem('token') ===null ?(
                                                            <>
                                                        <button onClick={()=> redirecttoList("custom")}>Register</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/customized-list')}>Buy</button>
                                                        </>
                                                        )
                                                        }
                                                        </div>
                                                    </div>
                                                </div>
                    </div>
                </div>
        </div>
        <Footer/>
    </Container>
    
  )

  function redirecttoList(type)
    {
        

        if(type === "std")
        {
            sessionstorage.setItem("list","standard-list");
            history.push('/login/standard-list');
            history.go(0);
        }
        if(type === "custom"){
            sessionstorage.setItem("list","customized-list");
            history.push('/login/customized-list');
            history.go(0);
        }
    }
}
