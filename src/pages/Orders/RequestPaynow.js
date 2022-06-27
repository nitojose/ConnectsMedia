
import React from 'react';
import { Container,Row,Col,Card,Button,Modal } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,notImage,isLoggin,imgUrl } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link,useParams} from "react-router-dom";
import Parallax from 'react-rellax'
import { toast, ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import {AiOutlineClose} from 'react-icons/ai';
import dateFormat from 'dateformat';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../CheckoutForm';
import { AiOutlineBars } from "react-icons/ai";
import Footer from '../../components/Footer';

var sessionstorage = require('sessionstorage');

export default  function EachOrder() {
    let history = useHistory();

    const stripePromise = loadStripe("pk_live_51KlNyrDp5HAOMMnMOfq5yKAHtb3WHJZyNLO6YK1so2QeT7gkDdqmHh15HH9A9UDdzMLTjdIyWQxFWTKz4QhWZHV800AA2sYk40");


    
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
    },[]);

   
    const {id} = useParams();
    const [subOrder,setSubOrder] = React.useState([]);
    const [Order,setOrder] =React.useState({});
    const [frame,setFrame] = React.useState(false);
    const [subId,setSubId] = React.useState();
    // const[type,setType] = React.useState('');
    // const[orderId,setOrderId] = React.useState();
    const [type,setType] = React.useState();
    const [orderItemId,setOrderItemId] =  React.useState();
    const [modelmsg,setmodelmsg] = React.useState(false);
   

    const[orderDet,setorderDet] = React.useState({});

    // const type =  sessionstorage.getItem("orderType");
    const order =  JSON.parse(sessionstorage.getItem("orderID"))

    // console.log("oId",id)
    

    React.useEffect( ()=>
    {
      
       
        getOrderDet();
         

    },[]);

    

    async function getOrderDet()
        {
            const token = sessionstorage.getItem("token");
            const customer_id =  sessionstorage.getItem("customerId");
    
            var data1 = new FormData();
            data1.append("customer_id",customer_id);
            data1.append("order_id",id);
            
    
            const headers ={
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
                
              }
    
            await axios({
                method: 'post',
                url: Url+'getorderid',
                data: data1,
                headers: headers
                })
                .then(function (response) {
                    //handle success
                    console.log("res",response.data); 
                    setOrderItemId(response.data.order.order_itemid);
                    setorderDet(response.data);
                    setType(response.data.order.order_item);


                    var data = new FormData();
                    data.append("customer_id",customer_id);
                    data.append("order_id",response.data.order.order_id);
                    // data.append("item",response.data.order.order_item)

                    const headers ={
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods': 'POST'
                    }

                    axios({
                        method: 'post',
                        url: Url+'getorderbyid',
                        data: data,
                        headers: headers
                        })
                        .then( function (response) {
                            //handle success
                            console.log("pkg /event order",response.data); 
                            setSubOrder(response.data.suborder);
                            setOrder(response.data.order);
                            // console.log("sss",response.data.suborder)
                        
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
    
        };
        
       
    
   

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
  
    <div>
        <Container className='body-two'>



                            { type === "CAMPAIGN" || type ==="EVENT"  ? (

                                <>
                                {/* {console.log("order",orderDet.order_details.plan[0].event_id)} */}
                                
                                    <div className='vertical-text-pkg-two '>
                                    <AiOutlineBars size={20} color='black' className='bsFillKanbanFill2 pointer cover-camera3' onClick={()=>onTapFun()}/>

                                        <p>{orderDet.order_details.plan[0].camp_type === "MPOST"?<span style={{color:'#F1C40F',fontFamily:"cursive"}}>Million </span>:<span style={{color:'#F1C40F',fontFamily:"cursive"}}>Static </span>}<span >POSTS</span></p>
                                    </div>

                                    {/* <div className='vertical-text camp-text'>
                                      <p>{type === "camp" ?"CAMPAIGN":""}</p> 
                                        <p>{orderDet.order_details.plan[0].camp_type === "MPOST"?<span style={{color:'#F1C40F',fontFamily:"cursive"}}>Million </span>:<span style={{color:'#F1C40F',fontFamily:"cursive"}}>Static </span>}<span >POSTS</span></p>
                                    
                                    </div> */}

                                    <div className='second_section_2'>

                                        <div className=''>
                                            <h2>{orderDet.order_details.plan[0].camp_type === "MPOST"?"MILLION ":"STATIC "}<span className='warning'>POSTS</span></h2>
                                            <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                        </div>


                                        <div className='space-between camp-400'>
                                            <img src={orderDet.order_details.plan[0].photo === (undefined || null) ?notImage :imgUrl+orderDet.order_details.plan[0].photo} alt={orderDet.order_details.plan[0].order_id} width='250px' height='600px' style={{height:'400px',width:'380px',borderRadius:'20px'}} className='mt-5 mx-5'/>

                                            <div className='font-12 content-end'>
                                                <p> Tittle : <span >{orderDet.order_details.plan[0].camp_title?orderDet.order_details.plan[0].camp_title:orderDet.order_details.plan[0].event_title }</span></p>

                                               {type === "camp"? <p >Cost : <span className='bold-text'> $ { orderDet.order.order_amt}.00 /month</span></p> : <p >Cost :<span className='bold-text'>${orderDet.order.order_amt}.00 </span></p>} 

                                                <p>Date : <span >{dateFormat(orderDet.order_details.plan[0].event_from, "mmmm dS, yyyy")+"  -  "+dateFormat(orderDet.order_details.plan[0].event_to, "mmmm dS, yyyy")} </span></p>

                                                <p className='underline'> Description </p>
                                            
                                                <p style={{marginTop:'-1rem;'}}><span>{orderDet.order_details.plan[0].camp_desc?orderDet.order_details.plan[0].camp_desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "} </span></p>
                                                
                                                <Button variant="light" className='px-5 ' onClick={()=>sent()}>Message</Button>

                                            </div>



                                        </div>




                                    </div>

                                    <div>

                                    {subOrder.length !==0 ? <Container className='event-suborder'>
                                        <div className='view-msg'>
                                        <table className="table table-striped table-light ">
                                                <thead class="thead-dark">
                                                    <tr className='bold-text'>
                                                        <th className='bold-text' scope="col">Bill Id</th>
                                                        <th className='bold-text' scope="col">Bill Date</th>
                                                        <th  className='bold-text' scope="col">Status</th>
                                                        <th className='bold-text' scope="col"></th>   
                                                    </tr>
                                                </thead>
                                                <tbody>
                                    {subOrder && subOrder.map((s,id) =>(
                                        
                                                        
                                                            <>
                                                                <tr>
                                                                    <td >{s.sorder_id}</td>
                                                                    <td >{dateFormat(s.sorder_billdt, "mmmm dS, yyyy")}</td>
                                                                    <td >{s.sorder_status === "Invoiced" ? (<span className='bold-text green'>{s.sorder_status}</span>):(<span className='bold-text'>{s.sorder_status}</span>)}</td>
                                                                    <td>{s.sorder_status === "Invoiced"? (<><Button variant="light" className='mx-2' onClick={()=>paynow(s.sorder_id,order.order.order_amt,order.order.order_id)}>Pay Now</Button></>):(<></>)}</td>
                                                                </tr>
                                                            </>
                                                        
                                                                        
                                                
                                        ))
                                    }
                                    </tbody>
                                        </table>
                                        </div>
                                        </Container>:(<></>)}
                                    </div>

                                    
                                </>

                                )
                                    : 
                                    (
                                        type==="PACKAGE" ? (
                                        
                                     <>
                                   
                                      
                                        <div className='vertical-text-pkg-two  '>
                                        <AiOutlineBars size={20} color='black' className='bsFillKanbanFill2 pointer cover-camera3' onClick={()=>onTapFun()}/>

                                            <p>{orderDet.order_details.PACKAGE.packages_type === "STD" ? <span style={{color:'#F1C40F',fontFamily:"cursive"}}>Standard </span>:<span style={{color:'#F1C40F',fontFamily:"cursive"}}>Customized </span>}PACKAGE</p>
                                        </div>


                                        <div className=' '>


                                            <div className=''>
                                                <h2>{orderDet.order_details.PACKAGE.packages_type === "STD" ? "STANDRAD " :"CUSTOMIZED " }<span className='warning'> PACKAGE</span></h2>
                                                <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                            </div>

                                            <div className='package-details-content-section'>
                                                <p className='heading bold-text py-3'>Package Details</p>

                                                <p>Package Cost : <span className='bold-text'> ${orderDet.order_details.PACKAGE.packages_cost}.00 /month</span></p>
                                                <p>Selected Months : <span className='bold-text'>{orderDet.order_details.PACKAGE.months}</span></p>
                                                <p>Drive Id : <a href={orderDet.order.drive_id} target="_blank" rel="noreferrer">click here</a></p>
                                           

                                            </div>

                                            <div className='package-details-content-section'>

                                                                                        
                                            <p className='heading bold-text py-3'>{orderDet.order_details.PACKAGE_details.length ===0 ? "":"Specifications"}</p>

                                            {orderDet.order_details.PACKAGE_details && orderDet.order_details.PACKAGE_details.map((d,id) =>

                                            <>


                                            <div className=''>
                                            <p>{d.pspec_text}</p>
                                            <p>{d.pspec_ans}</p>

                                            </div>
                                            </>

                                            )}

                                            <Button variant="light" className='px-5 ' onClick={()=>sent()}>Message</Button> 



                                            </div>



                                        </div>

                                      
                                                    
                                    {subOrder.length !== 0 ? 
                                        (<div className='' style={{margin: '-5px 10% 0px 10%;'}}>
                                       
                                              <Container className=''>
                                                  <div className='view-msg'>

                                            <table className="table table-striped table-light mt-5 ">
                                                <thead class="thead-dark">
                                                    <tr className='bold-text'>
                                                        <th className='bold-text' scope="col">Bill Id</th>
                                                        <th className='bold-text' scope="col">Bill Date</th>
                                                        <th className='bold-text' scope="col">Status</th>
                                                        <th scope="col"></th>   
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {subOrder && subOrder.map((s,id) =>( 
                                                           
                                                                <tr>
                                                                    <td >{s.sorder_id}</td>
                                                                    <td >{dateFormat(s.sorder_billdt, "mmmm dS, yyyy")}</td>
                                                                    <td >{s.sorder_status === "Invoiced" ? (<span className='bold-text green'>{s.sorder_status}</span>):(<span className='bold-text'>{s.sorder_status}</span>)}</td>
                                                                    <td>{s.sorder_status === "Invoiced"? (<><Button variant="light " id="paynow-btn"  className='mx-2' onClick={()=>paynow(s.sorder_id,order.PACKAGE.packages_cost,order.order.order_id)}>Pay Now</Button></>):(<></>)}</td>
                                                                </tr>
                                                     ))
                                                }       
                                                       
                                                                        
                                                </tbody>
                                            </table>
                                            </div>
                                            </Container>
                                        
                                        </div>):
                                    (<></>)}


                                        
                                        </>  ):(<></>)
                                       
                                    )
                              
                            }
                           


                        
                            {modelmsg === true &&

                                confirmAlert({

                                    customUI: ({onClose}) => {
                                        return (
                                        <div className='custom-ui'>
                                            <h1> Message</h1>
                                        
                                            <textarea placeholder='Type your message..' id="message" className='msg-text' rows={4} required={true} ></textarea>

                                            <button onClick={()=>onClose()}>Close</button>
                                            <button className='mx-2' onClick={() => sentmessage()}> Send </button>
                                            
                                        </div>
                                        
                                        );
                                        
                                    }
                                })

                            }

                            {frame === true &&

                            confirmAlert({

                                customUI: ({onClose}) => {
                                    return (
                                        <div className="payment ">

                                            <AiOutlineClose className='Ai-close pointer' onClick={()=>onClose()} size={28}/>
       
                                        <Elements stripe={stripePromise} >
                                            <CheckoutForm  visibility={true}/>
                                        </Elements>
                            
                            
                                </div>
                                    
                                    );
                                    
                                }
                            })

                            }


                            
                
         
     

        <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
        </Container>
    
</div>
  );

  function onClose()
  {
      console.log("hello")
      setmodelmsg(false);
  }

    function sent()
    {
        console.log("message box clicked")
        setmodelmsg(true);
    }

    

    function paynow(subId,cost,orderid)
    {
        setSubId(subId);
        sessionstorage.setItem("subId",subId);
        sessionstorage.setItem("amount",cost);
        sessionstorage.setItem("orderId",orderid);
        setFrame(true);

        
        // console.log("payment")
        // history.push('/payment-form');
        // history.go(0);
     
    }


    function sentmessage()
    {
        setmodelmsg(false)
        var msg = document.getElementById('message').value;
        console.log("msg",msg)

        if(msg)
        {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            var formdata = new FormData();



            formdata.append("customer_id",customer_id);
            formdata.append("order_id",order.order.order_id);
            formdata.append("message",msg);
            formdata.append("msg_parentmsg",0);
            formdata.append("msg_type",'I');


            const headers ={
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }

            axios({
            method: 'post',
            url: Url+'Message',
            data:formdata,
            headers: headers
            })
            .then(function (response) {
                //handle success
                console.log(response.data);
                toast.success("Message Send !!",{autoClose:3000})
                setmodelmsg(false);
               
                setTimeout(() => history.go(0),3000) 
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        }
        else{
            toast.error("type any message !!",{autoClose:2000})
        }
       
    
        
    }



    function paySubmit()
    {


     
        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            
        }

        var data = new FormData();
        console.log(subId)
        data.append("suborder_id",subId);
        data.append("order_id",Order.order_id);
        data.append("amount",Order.order_amt);
            
           

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
            
                                toast.success('Payment Success!!',{autoClose:3000});
                                setTimeout(() => history.push('/orders'),3000);
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
