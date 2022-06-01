import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../CheckoutForm';
import {AiOutlineCamera} from 'react-icons/ai';
import {MdPayment} from 'react-icons/md';
import { Url,isLoggin,picture,imgUrl } from '../../GLOBAL/global';
import axios from 'axios';


import React from 'react'
import { Container } from "react-bootstrap";
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

  React.useEffect(() => {
    getInfos();
  })

    const stripePromise = loadStripe("pk_live_51KlNyrDp5HAOMMnMOfq5yKAHtb3WHJZyNLO6YK1so2QeT7gkDdqmHh15HH9A9UDdzMLTjdIyWQxFWTKz4QhWZHV800AA2sYk40");


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
                <MdPayment color='black' className='mt-4 mx-4' size={22}/>
                <p className='header-banner-text'>Change Password</p>
            </div>

        </div>
        
    <div className="payment ">
       
            <Elements stripe={stripePromise} >
                <CheckoutForm  visibility={true} />
            </Elements>


    </div>
    </Container>
  )
}
