import React from 'react'
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,Button,Modal,Spinner } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,imgUrl,notImage } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');


export default function EventPending() {

    const eventList = JSON.parse(sessionstorage.getItem("RequestEvent"))
    console.log("process evnt session",eventList);

    let history = useHistory();
    
    const [paybtn,setPayBtn] = React.useState(false);
    const [pkgReject,setPkgReject] = React.useState(false);
    const [subOrder,setSubOrder] = React.useState([]);
    const [Order,setOrder] =React.useState({});
    const [subId,setSubId] = React.useState();


  return (
    <>
                                
                                
                                    <div className='vertical-text '>
                                        <p>EVENTS</p>
                                    </div>

                                <div className='second_section my-5'>

                                        <div className='mx-5 px-2'>
                                            <h2>STATIC<span className='warning'>POSTS</span></h2>
                                            <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                        </div>


                                 </div>

                                    <div className=' pt-3 space-between'>
                                            <img src={eventList.photo === (undefined || null) ?notImage :'http://connectmedia.gitdr.com/public/'+eventList.photo} alt={eventList.order_id} width='250px' height='600px' style={{height:'500px',width:'420px',borderRadius:'20px'}} className="mx-5 "/>

                                        <div className='font-12 content-end ' style={{marginLeft:'-35rem'}}>
                                                <p> Tittle : <span >{eventList.event_title}</span></p>

                                                <p>Cost : 
                                                <span >${eventList.event_cost} </span>
                                                </p>

                                            
                                            <p>From Date : {dateFormat(eventList.event_from, "mmmm dS, yyyy") }</p>
                                                <p> To Date : {dateFormat(eventList.event_to, "mmmm dS, yyyy")}</p>
                                               
                                            <p>Status : <span className='bold-text green'>{eventList.event_status} </span></p>
                                 

                                                

                                        </div>


                                    </div>

                                    <div className='extraRowSpace'></div>

                                 <div className='space-between'>
                                        
                                                    {paybtn || eventList.event_status === "Accepted" ? (<> 
                                                        
                                                        

                                                        </>):
                                                        ( eventList.event_status === 'Success' ? '' : (
                                                            <>
                                                            {!pkgReject && <Button variant="light" onClick={()=>accept()}>Accept</Button>}
                                                                <Button variant="light" onClick={()=>reason()}>Reject</Button>


                                                                </>
                                                            )
                                                        )}
                                                        

                                                        {(pkgReject && <>
                                                            <select name="reason"  id="reason" style={{marginLeft:10,height:'50%'}} onClick={()=>reject(eventList.event_cost)}>
                                                                <option>Select Reason</option>
                                                                <option value="Not Intrested">Not Intrested</option>
                                                                <option value="Need to Add/Remove features">Need to Add/Remove features</option>
                                                                <option value="Change of mind">Change of mind</option>
                                                                <option value="Decided for alternative product">Decided for alternative product</option>
                                                            
                                                            </select></>)
                                                        
                                                        }

                                                        
                                                </div>

                                 {(paybtn || eventList.event_status === "Accepted") && 

                                 <Container className='mx-5'>
                                 
                                    <div className='row mx-5 px-5'>
                                         {subOrder && subOrder.map((s,id) =>(
                                        <table className="table table-striped table-light mx-5 my-5 ">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">Bill Id</th>
                                                    <th scope="col">Bill Date</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col"></th>   
                                                </tr>
                                                </thead>
                                                    <tbody>
                                                       
                                                           
                                                                <tr>
                                                                    <td >{s.sorder_id}</td>
                                                                    <td >{s.sorder_billdt}</td>
                                                                    <td >{s.sorder_status === "Invoiced" ? (<span className='bold-text green'>{s.sorder_status}</span>):(<span className='bold-text'>{s.sorder_status}</span>)}</td>
                                                                    <td>{s.sorder_status === "Invoiced"? (<><Button variant="light "  className='mx-2' onClick={()=>paynow(s.sorder_id,eventList.event_cost ,Order.order_id)}>pay Now</Button></>):(<></>)}</td>
                                                                </tr>
                                                          
                                                       
                                                                        
                                                    </tbody>
                                                </table>
                                             ))}

                                       
                                    </div>
                                    </Container>  
                                    }
                                   

                                   

                            </>

  )

  function accept()
  {
    
    const token = sessionstorage.getItem("token");
    const customer_id =  sessionstorage.getItem("customerId");

    const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
        
    }

    
    
    var data = new FormData();
    data.append("event_id",eventList.event_id);
            data.append("customer_id",customer_id);
            data.append("cost",eventList.event_cost );
            data.append("status","S");
            data.append("reason","accepted");

            axios({
                method: 'post',
                url: Url+'eventorder',
                data: data,
                headers: headers
                })
                .then(function (response) {
                    //handle success
                    console.log("response",response); 
                    // history.go(0);
                    toast.success("request Accepted !!")
                    let data1 = new FormData();
                        data1.append("customer_id",customer_id);
                        data1.append("item_id",eventList.event_id);
                        data1.append("item","EVENT")
                       

                    axios({
                        method: 'post',
                        url: Url+'getorderbyid',
                        data: data1,
                        headers: headers
                        })
                        .then(function (response) {
                            //handle success
                            console.log("pkg /event order",response.data); 
                            setSubOrder(response.data.suborder);
                            setOrder(response.data.order);
                            setPayBtn(true);
                           
                           
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });

                    
                    
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                    // toast.success('Order Created !!',{autoClose:3000});
                    // setTimeout(() => history.push('/orders'),3000);
                    setPayBtn(true);
                });

  }

  function reason()
  {
    setPkgReject(true);
  }

  function reject()
  {
    console.log("select")
    // var r = reason();

    const token = sessionstorage.getItem("token");
    const customer_id =  sessionstorage.getItem("customerId");

    var e = document.getElementById("reason");
    console.log("reason1",e);
    var reason = e.options[e.selectedIndex].value;

    console.log("reason2",reason);

   

    const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'POST'
    }

    let data = new FormData();
        data.append("package_id",eventList.event_id);
            data.append("customer_id",customer_id);
            data.append("cost",eventList.event_cost);
            data.append("status","R");
            data.append("reason",reason);


            axios({
                method: 'post',
                url: Url+'packageorder',
                data: data,
                headers: headers
                })
                .then(function (response) {
                    //handle success
                    // setSpinner(false);
                    console.log("response",response); 
                    toast.success('order Rejected !!')
                     history.push('/home');
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                    toast.success('order Rejected !!')
                    history.push('/home');
                });

  }

  function paynow(subId,cost,orderid)
    {
        setSubId(subId);
        console.log("clicked")
        sessionstorage.setItem("subId",subId);
        sessionstorage.setItem("amount",cost);
        sessionstorage.setItem("orderId",orderid);
        console.log("payment")
        history.push('/payment-form');
        history.go(0);
    }
}
