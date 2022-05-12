import React from 'react'
import { Container,Row,Col,Table,Button, Card } from 'react-bootstrap';
import { useHistory} from "react-router-dom";
import {Url,isLoggin,picture,imgUrl} from '../../GLOBAL/global';
import {AiOutlineCamera} from 'react-icons/ai';
import {FiPackage} from 'react-icons/fi';
import axios from 'axios' 
var sessionstorage = require('sessionstorage');

export default function Index() {

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

        <div className='header-banner' style={{marginLeft:'245px',width:'30%'}}>
        <FiPackage color='black' className='mt-4 mx-4' size={22}/>
        <p className='header-banner-text'>Package List</p>
        </div>

    
    </div>

        <div className='view-msg  ' style={{borderRadius:'8px'}}>
                <div className='align-div pwd-div'>
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
