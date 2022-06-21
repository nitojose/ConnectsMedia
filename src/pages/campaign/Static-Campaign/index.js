import React,{useEffect,useState} from 'react';
import { Url,notImage,isLoggin,imgUrl } from '../../../GLOBAL/global';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container,Row,Col,Spinner } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {AiOutlineClose} from 'react-icons/ai';
import dateFormat from 'dateformat';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../../CheckoutForm';

var sessionstorage = require('sessionstorage');


export default function Index() {

  const[post,setpost] = useState([]);

  const [frame,setFrame] = React.useState(false);
    const [spinner,setSpinner] = React.useState(false);

    const stripePromise = loadStripe("pk_live_51KlNyrDp5HAOMMnMOfq5yKAHtb3WHJZyNLO6YK1so2QeT7gkDdqmHh15HH9A9UDdzMLTjdIyWQxFWTKz4QhWZHV800AA2sYk40");


  let history = useHistory();

    useEffect(() => {
        logginornot();
        getMillionPosts();

      },[post!== null]);

    async function logginornot()
    {
        const cust =  await isLoggin();
        console.log("cust",cust);
        if(cust === null)
        {
        history.push('/login');
        }
    

    }


    async function getMillionPosts()
    {
        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }

        await axios({
        method: 'post',
        url: Url+'getStaticPosts',
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
            setpost(response.data);
            // console.log("mpost",Mpost)
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

  return (
  
<>
<div style={{marginTop:100}}>
        <Container>
        <Row>
            {post.map((mpost,id) => (
                <Col xl={6} sm={12} md={12} xxl={6} className="mt-3 mb-5">
                    <div className='mpost-div'>
                        <img src={mpost.photo === (undefined || null) ? notImage :(imgUrl+mpost.photo)} alt='million' className='img-card-post'/>

                        <div className='inner-div'>
                            <h1 className='text-center'>{mpost.camp_title}</h1>
                            <p>{mpost.camp_desc}</p>
                          
                        </div>
                            <div className='months'>
                                <div>Cost : $<span className='bold-text'>{mpost.camp_cost}.00 /month</span></div>
                                <label >Number of Months : </label>
                                <select className='btnstyle' id="months" required={true} >
                                    <option value="1">1 month</option>
                                    <option value="2">2 month</option>
                                    <option value="3">3 month</option>
                                    <option value="4">4 month</option>
                                    <option value="5">5 month</option>
                                    <option value="6">6 month</option>
                                    <option value="7">7 month</option>
                                    <option value="8">8 month</option>
                                    <option value="9">9 month</option>
                                    <option value="10">10 month</option>
                                    <option value="11">11 month</option>
                                    <option value="12">12 month</option>
                                </select>
                                 {(!spinner ===false )? (<> <button className='align-center ' >Purchase</button> {spinner && 
                      <Spinner
                    
                      style={{marginLeft:'95%'}}
                        animation="border"
                        
                        role="status"
                        
                      >
                  
                    </Spinner>} </>)
                
                      : (<><button className='align-center ' onClick={(e) => purchaseCamp(e,mpost)}>Purchase</button>{ spinner && 
                      <Spinner
                 
                   
                        animation="border"
                        
                        role="status"
                        
                      >
                  
                    </Spinner> }</>)
                
                }
                                
                            </div>
                            
                        </div>
                        
                        
                   
                    
                </Col>
                 ))}
            </Row>

            {frame === true &&

                confirmAlert({

                    customUI: ({onClose}) => {
                        return (
                            <div className="payment ">

                                <AiOutlineClose className='Ai-close pointer' onClick={()=>onClose()} size={28}/>

                            <Elements stripe={stripePromise} >
                                <CheckoutForm visibility={true} />
                            </Elements>


                    </div>
                        
                        );
                        
                    }
                })

            }

        </Container>
  

        <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
    </div>
</>
    );

    function purchaseCamp(e,mpost)
    {
        setSpinner(true)
        var months = document.getElementById("months").value;
        // console.log("months",months);

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        formdata.append("customer_id",customer_id);
        formdata.append("event_id",mpost.camp_id);
        formdata.append("order_item","CAMPAIGN");
        formdata.append("order_amt",mpost.camp_cost);
        formdata.append("months",months);


        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'post'
        }

        axios({
        method: 'post',
        url: Url+'Event_order',
        data:formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log("mpost-res",response.data.message);
            if(response.data.message === "Created")
            {
                setSpinner(false);
                toast.success("Order Created ,Now You can do  Payment!!",{autoClose:3000});
                sessionstorage.setItem("campOrder",JSON.stringify(response.data));
                // setTimeout(() => history.push('/payment-form'),3000);
                setFrame(true);
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }

}
