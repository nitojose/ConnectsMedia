import React from 'react'
import { Container } from 'react-bootstrap';
import {AiOutlineCamera} from 'react-icons/ai';
import {MdPendingActions} from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Url,picture,isLoggin } from '../../GLOBAL/global';
var sessionstorage = require('sessionstorage');

export default function Index() {

    const [customerInfo,setCustomerInfo] = React.useState();
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


    async function logginornot()
    {
      const cust =  await isLoggin();
      console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
    }

    React.useEffect(() => {
        logginornot();
        getInfos();
    })

  const type = sessionstorage.getItem("reqType");
    const history = new useHistory();
  return (
    <Container>
     <div className='profileBefore' >
            <img src={customerInfo === undefined ?picture :('http://connectmedia.gitdr.com/public/'+customerInfo.cover_photo)} alt="cover" className='profileBefore' />
           
        </div> 

        <div className='row-flex-align'>

          <div className='profileDiv'>
            <div className='profileInner'>
              <img src={customerInfo === undefined ?picture :('http://connectmedia.gitdr.com/public/'+customerInfo.photo)} alt="profile" style={{objectFit:'contain'}}/>
              


            </div>
            
          </div>

          <div className='header-banner' style={{marginLeft:'8px',width:'40%'}}>
            <MdPendingActions color='black' className='mt-4 mx-4' size={22}/>
            <p className='header-banner-text'>{type} Request</p>
          </div>


         
      </div>


      <div className='view-msg'>
          <div className='msg-align'>

              {type === "Package"? 
              (<>
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
                                            
                                            <button onClick={()=>history.push('/standard-list')}>Buy</button>
                                            
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
                                            
                                            <button onClick={()=>history.push('/customized-list')}>Buy</button>
                                           
                                            </div>
                                        </div>
                                    </div>
                                  </div>

              </>):


              (<>

                                <div id="campaigns" style={{borderRadius:'8px'}}>
                                        <div>

                                        <ul style={{width:'70%',alignSelf:'center'}}>

                                        <li >
                                            <h2>Upcoming Event</h2>
                                            <img className='mt-3' src={require('../../../src/assets/imgs/mike.png')} alt="Campaigns for Upcoming Events"/>
                                            <span className='text-center mt-3'>Share your calendar here. We will pick all your future events from here</span>
                                                        <button onClick={()=>history.push('/events-creation')} className='mt-3'>Start Here</button>
                                                    
                                        </li>

                                        
                                     
                                        </ul>
                                    </div>
                    </div>

              </>)}

          </div>
      </div>

    </Container>

  )


 
}
