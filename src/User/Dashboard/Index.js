/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../style/dashboard.scss';
import {FaShoppingBag} from 'react-icons/fa';
import {MdPendingActions,MdDashboard} from 'react-icons/md';
import {CgUserAdd} from 'react-icons/cg';
import axios from 'axios';
import {Url,isLoggin,picture} from '../../GLOBAL/global';
import { useHistory,Link} from "react-router-dom";
import {MdAddPhotoAlternate} from 'react-icons/md';
import {AiOutlineCamera} from 'react-icons/ai';
var sessionstorage = require('sessionstorage');

export default function Index() {
    console.log("dash");
    const history = new useHistory();

    const[orderCount,setOrderCount] = React.useState();
    const[pendCount,setpendCount] = React.useState();
    const[processCount,setprocessCount] = React.useState();
    const [customerInfo,setCustomerInfo] = React.useState();
    console.log("first")
   async function logginornot()
    {
      console.log("login")
      const cust =  await isLoggin();
      console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
    }

    React.useEffect(async () => {
      console.log("useeffect")
     await logginornot();
     

     

     await getDatas();

      

     await getUserInfo();
      

    },[logginornot]);

    async function getUserInfo()
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

    async function getDatas()
    {
      console.log("second")

      const token = sessionstorage.getItem("token");
      const customer_id = sessionstorage.getItem("customerId");
        await axios.get(Url+'ordercount', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
        .then(response => {
            // If request is good...
            console.log(response.data);
            setOrderCount(response.data.count);
            setpendCount(response.data.Pending_count);
            setprocessCount(response.data.Process_count);
            // setAlmessages(response.data.data);
            // setLength(allmessages.length)
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }
  return (
    <>

    
   <Container >
      <div className='header-banner dash-header' style={{marginLeft:'245px',width:'80%',marginTop:'0rem'}}>
        <MdDashboard color='black' className='mt-4 mx-4' size={22}/>
        <p className='header-banner-text'>Welcome <span className='ministry'>{customerInfo === undefined ? "" : customerInfo.cust_ministry}</span></p>
      </div>

        <div className='profileBefore' >
            <img src={customerInfo === undefined ?picture :('http://connectmedia.gitdr.com/public/'+customerInfo.cover_photo)} alt="cover"  className='profileBefore'  width='100%'/>
           
        </div>  
    
        <div className='row-flex-align' style={{marginTop:'7rem'}}>

            <div className='profileDiv'>
              <div className='profileInner'>
                <img src={customerInfo === undefined ?picture :('http://connectmedia.gitdr.com/public/'+customerInfo.photo)} alt="profile" style={{objectFit:'contain'}}/>
                {/* <div className='img-camera'>
                    <AiOutlineCamera color='black' size={24} />
                </div>   */}


              </div>
              
            </div>
     
     
            <div className='dash-card'>
              <p className='dash-text '>My Orders</p>
                <div className=''>
                  <p className=' number-text '>{orderCount}</p>
                </div>
            
              <div className='dash-band'>
                <FaShoppingBag size={22} className='mx-3 mt-3'/>
              </div>

            </div>
     
            <div className='dash-card'>
              <p className='dash-text '>Pending Orders </p>

              <div className=''>
                  <p className=' number-text '>{pendCount}</p>
                </div>

                  <div className='dash-band'>
                    <MdPendingActions size={22} className='mx-3 mt-3'/>
                  </div>

            </div>
     
     
            <div className='dash-card'>
            <p className='dash-text '>Processing Orders</p>
                <div className=''>
                  <p className=' number-text '>{processCount}</p>
                </div>

                <div className='dash-band'>
                  <CgUserAdd size={22} className='mx-3 mt-3' />
                </div>    

            </div>
     

        </div>

   
        {/* <div className='home-links' >
          <div className='inner-links '>
            <p className='heading-links'>Purchase Campaigns</p> 
            <div className='button-links'>
              <button onClick={() => history.push('/events-creation')}>
                Upcoming Events
              </button>

              <button onClick={() => history.push('/million-posts')}>
                Mission
              </button>

              <button onClick={() => history.push('/million-posts')}>
              Strengthening Marriage
              </button>

              </div>

              <div className='button-links'>

              <button onClick={()=>history.push('/staticPosts')}>
              Youth Section
              </button>

              <button onClick={()=>history.push('/staticPosts')}>
              Pray For Israel
              </button>

              <button onClick={()=>history.push('/staticPosts')}>
              Evangelism
              </button>

            </div>
            
          </div>

          <div className='inner-links '>
            <p className='heading-links'>Purchase Package</p> 
            <div className='button-links'>
              <button onClick={()=>history.push('/standard-list')}>
                Standard
              </button>

              <button onClick={()=>history.push('/customized-list')}>
                Customized
              </button>

            </div>
            
          </div>
        </div> */}
     
   </Container>
    
   </>
  )
}
