import React,{useEffect} from "react";
import { ElementsConsumer, CardElement ,useElements,useStripe} from "@stripe/react-stripe-js";
import axios from 'axios';
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory,Link} from "react-router-dom";
import { Url } from "../GLOBAL/global";
var sessionstorage = require('sessionstorage');

export default function CheckoutForm()
{

  
  const subId = sessionstorage.getItem("subId");
   const amount =  sessionstorage.getItem("amount");
    const orderId =  sessionstorage.getItem("orderId");
  let history = useHistory();
const stripe = useStripe();
const elements = useElements();
const [success,setSuccess] = React.useState(false);

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#303238",
        fontSize: "16px",
        fontFamily: "sans-serif",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "#CFD7DF"
        }
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238"
        }
      }
    }
  };

  const billingDetails =
  {
      name:"liviya",
      email:"dev4.imitpark@gmail.com",
      address:{
          city:"ijk",
          line1:"123",
          state:"kerala",
          postal_code:680701
      }
  }


    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: billingDetails
        }) 
    

    if(!error)
    {
        try{
            const {id} = paymentMethod 
            const res = await axios.post("https://connectmedia.gitdr.com/api/stripe",{
                amount:1000,
                id
            })

            if(res)
            {
                console.log("res",res.data)
                let p = res.data.paymentintent;
                let s = res.data.setupintent;
                let client_secret = p.client_secret;
                console.log(client_secret);
                // setSuccess(true);


                var iframe = document.createElement('iframe');
                var myCont = document.getElementById('iframecont');
                iframe.src = p.next_action.use_stripe_sdk.stripe_js;
                iframe.width = '100%';
                iframe.height = 400;
                myCont.appendChild(iframe);

                // toast.success("payment Success",{autoClose:10000});

                // setTimeout(() => history.push( { pathname: '/orders'}),20000)

                const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            
        }

        var data = new FormData();
        console.log(subId)
        data.append("suborder_id",subId);
        data.append("order_id",orderId);
        data.append("amount",amount);
            
           

            axios({
                method: 'post',
                url: Url+'paybefore',
                data: data,
                headers: headers
                })
                .then(function (response) {
                    //handle success
                    console.log("pay Before",response); 

                        var data1 = new FormData();
                        data1.append("transaction_id",response.data.id);
                        data1.append("order_id",response.data.txn_order);
                        data1.append("status","Success");
                        data1.append("suborder_id",response.data.txn_suborder);

                        axios({
                            method: 'post',
                            url: Url+'payafter',
                            data: data1,
                            headers: headers
                            })
                            .then(function (response) {
                                //handle success
                                console.log("pay After",response); 
            
                                toast.success('Payment Success!!',{autoClose:5000});
                                setTimeout(() => history.push('/orders'),6000);
                            })
                            .catch(function (response) {
                                //handle error
                                console.log(response);
                            
                            });

                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                   
                });

                
        
            }
        }
        catch(error)
        {
            console.log("error",error)
        }
    }

    else
    {
        console.log("error1",error)
    }
}

  
    return (
      <Container className="mx-5 px-5 my-3 py-5">
       
        
            <form onSubmit={handleSubmit}>
          {/* <CardSection /> */}
          <CardElement options={CARD_ELEMENT_OPTIONS} />
          <button  className="btn-pay space-between" onClick={()=>payment()} >
            Submit
          </button>
        </form>

        <div id="iframecont">

        </div>
       

         

<ToastContainer/>
         
      </Container>
    );
  

    function payment()
    {
      toast.warning("payment initiated .!",{autoClose:2500});
    }
}

