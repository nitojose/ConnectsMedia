import React from 'react'
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,Button,Table,Spinner } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,imgUrl,notImage,isLoggin } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Buffer} from 'buffer';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../CheckoutForm';
var sessionstorage = require('sessionstorage');

export default function Index() {

    let history = useHistory();
    const {id,type} = useParams();
    const [paybtn,setPayBtn] = React.useState(false);
    const [eventList,setEventList] = React.useState({});
    const [campList,setCampList] = React.useState({});
    const [pkgList,setpkgList] = React.useState([]);
    const [pkgData,setPkgData] = React.useState({});
    const [c_id,setc_id] = React.useState();
    const [frame,setFrame] = React.useState(false);
    const [pkgReject,setPkgReject] = React.useState(false);
    const [subOrder,setSubOrder] = React.useState([]);
    const [Order,setOrder] =React.useState({});
    const [subId,setSubId] = React.useState();
    const [rejectbtn,setrejectbtn] = React.useState(false);
    const [spinner,setSpinner] = React.useState(false);


    const [image,setImage] = React.useState(); 

    const stripePromise = loadStripe("pk_test_51KlVz1SIk7SQPAkIBOlnAMkhRjf3H2qyJnjp1O6aCk9QmSiTDijmsJOyoMcbXYTrY24mYvvV3B4BWPEoJaZiLG4500xgbriwyj");

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
        console.log("type",type);
        const token = sessionstorage.getItem("token");
        const customer_id =  sessionstorage.getItem("customerId");
        setc_id(customer_id);

        console.log("token",token)
        console.log('c_id',customer_id);
        console.log("req",window.location.pathname);


        sessionstorage.setItem('request',window.location.pathname);

        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'POST'
        }

        // if(customer_id === null)
        // {
        //     history.push('/login');
        // }

        // else
        // {
            if(type==="event")
            {
                    var events = new FormData();
                    events.append("event_id",id);
                    console.log("id",id);
    
                    axios({
                        method: 'post',
                        url: Url+'geteventlist',
                        data: events,
                        headers: headers
                        })
                        .then(function (response) {
                            //handle success
                            console.log("events Api",response.data[0]); 
                            setEventList(response.data[0]);    
                            setTimeout(()=> getOrders("EVENT") ,1000);   
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
    
            }
    
            // if(type === "campaign")
            // {
                
            //     var camps = new FormData();
            //         camps.append("campaign_id",id);
            //         console.log("id",id);
    
            //         axios({
            //             method: 'post',
            //             url: Url+'getCampaignInfo',
            //             data: camps,
            //             headers: headers
            //             })
            //             .then(function (response) {
            //                 //handle success
            //                 console.log("camps",response.data); 
            //                 setCampList("campain Api",response.data[0]);  
            //                 // setImage("http://connectmedia.gitdr.com/public/"+campList.photo)  
            //                 // console.log("camps 1",campList);  
            //                 // console.log("camps 2",campList[0].photo);  
            //             })
            //             .catch(function (response) {
            //                 //handle error
            //                 console.log(response);
            //             });
    
            // }


            if(type === "package")
            {
                var pkg = new FormData();
                    pkg.append("package_id",id);
                    pkg.append("customer_id",customer_id);
                    console.log("id",id);
    
                    axios({
                        method: 'post',
                        url: Url+'getPackage',
                        data: pkg,
                        headers: headers
                        })
                        .then(function (response) {
                            //handle success
                            console.log("pkg Api",response.data); 
                           setpkgList(response.data.data);
                           setPkgData(response.data.package);

                           setTimeout(()=> getOrders("PACKAGE") ,1000);
                        
                           
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });

                    
   
            }
    
        // }

        
      },[history, id, type]);


      async function getOrders()
      {
        const token = sessionstorage.getItem("token");
        const customer_id =  sessionstorage.getItem("customerId");

        var data = new FormData();
        data.append("customer_id",customer_id);
        data.append("item_id",id);
        data.append("item",type)

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'POST'
          }

        await axios({
            method: 'post',
            url: Url+'getorderbyid',
            data: data,
            headers: headers
            })
            .then(function (response) {
                //handle success
                console.log("pkg /event order",response.data); 
                setSubOrder(response.data.suborder);
                setOrder(response.data.order);
            
               
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

      }
    
  return (
    <>
        
       

                            { type === "campaign" || type === "event"  ? (
                                


                            <>
                                
                                
                                    <div className='vertical-text '>
                                        <p>{type === "event" ?"EVENTS":"CAMPAIGNS"}</p>
                                    </div>

                                    <div className='second_section'>

                                            <div className='mx-5 px-2'>
                                                <h2>{campList.camp_type==='MPOST'?"MILLION":"STATIC"}<span className='warning'>POSTS</span></h2>
                                                <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                            </div>

                                    </div>
                                    <div className='padding-8rem pt-3 space-between'>
                                            <Row>
                                                <Col>
                                                    < img src={eventList.photo === (undefined || null) ?notImage :imgUrl+eventList.photo} alt={eventList.order_id} width='250px' height='600px' style={{height:'500px',width:'420px',borderRadius:'20px'}} />

                                                </Col>

                                                <Col className='content-end'>
                                                    <div className='font-12 content-end ' >
                                                        <p> Tittle : <span >{eventList.event_title?eventList.event_title:campList.camp_title}</span></p>

                                                        <p>Cost : 
                                                        <span >${eventList.event_cost?(eventList.event_cost ):(campList.camp_cost)} </span>
                                                        </p>

                                                        {type === "event" ? (<>
                                                        <p>From Date : {dateFormat(eventList.event_from, "mmmm dS, yyyy") }</p>
                                                            <p> To Date : {dateFormat(eventList.event_to, "mmmm dS, yyyy")}</p>
                                                            </>):(<>
                                                        <p className='underline'> Description </p>
                                                        
                                                        <p style={{marginTop:'-1rem;'}}><span>{campList.camp_desc?campList.camp_desc.camp_desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "} </span></p>
                                                        </>)}

                                                        <p>Status : <span className='bold-text green'>{eventList.event_status?eventList.event_status:campList.camp_status} </span></p>

                                                    </div>
                                                
                                                </Col>
                                            </Row>
                                             
                                    </div>

                                    <div className='extraRowSpace'></div>

                                 

                                    <div className=' padding-8rem space-between'>
                                        
                                        {paybtn || eventList.event_status === "Accepted" ? (<> 
                                                    
                                                
                                                    </>):
                                                    ( eventList.event_status === 'Success' ? '' : (
                                                        <>
                                                        {!pkgReject && <Button variant="light" onClick={()=>accept(eventList.event_cost,type,0)}>Accept</Button>}
                                                        {!rejectbtn && <Button variant="light" className="px-5" onClick={()=>reason()}>Reject</Button>}


                                                            </>
                                                        )
                                                    )}
                                                    

                                                    

                                        {pkgReject &&( <div className='space-between'><select id="reason" className='select-months' onChange={()=>reject(eventList.event_cost,type)}>
                                            <option value="">Select Reason</option>
                                            <option value="Not Intrested">Not Intrested</option>
                                            <option value="Need to Add/Remove features">Need to Add/Remove features</option>
                                            <option value="Change of mind">Change of mind</option>
                                            <option value="Decided for alternative product">Decided for alternative product</option>
                                            </select>&nbsp;&nbsp;
               
                                            <label> OR </label>

                                            <textarea type="text" id="reason-text" rows={5} className='msg-text mx-3 px-2' placeholder=' type your reject reason' ></textarea> 
                                            <button onClick={() => reject()}>Submit</button>
                                        </div>)
                                                        
                                        }          

                                                        
                                    </div>

                                       

                                   
                                

                                 {(paybtn || eventList.event_status === "Accepted") && 
                                 
                                 <Container style={{marginLeft:'14rem'}}>
                                  <div className='px-5 mx-5'>
                                        {subOrder && 
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
                                                    {subOrder.map((s,id) =>(
                                                            <>
                                                                <tr>
                                                                    <td >{s.sorder_id}</td>
                                                                    <td >{s.sorder_billdt}</td>
                                                                    <td >{s.sorder_status === "Invoiced" ? (<span className='bold-text green'>{s.sorder_status}</span>):(<span className='bold-text'>{s.sorder_status}</span>)}</td>
                                                                    <td>{s.sorder_status === "Invoiced"? (<><Button variant="light "  className='mx-2' onClick={()=>paynow(s.sorder_id,eventList.event_cost ,Order.order_id)}>pay Now</Button></>):(<></>)}</td>
                                                                </tr>
                                                            </>
                                                    ))}
                                                                        
                                                    </tbody>
                                                </table>

                                             }
                                             
                                    </div>
                                </Container>}

                                   

                            </>

                         
                                )
                                    : 
                                    (
                                        
                                       
                                        <>
                                       <Container className='padding-bottom-5rem'>

                                        <div className='vertical-text-pkg  '>
                                            <p>PACKAGE</p>
                                        </div>

                                        <div className='sec-pkg-section'>
                                            <div className=' '>
                                                <h2>{pkgData.packages_type === "STD" ? "STANDRAD ":"CUSTOMIZED "}<span className='warning'>PACKAGE</span></h2>
                                                <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                            </div>
                                            <p className='heading bold-text py-3'>Package Details</p>
                                            <p>Package Cost : <span className='bold-text'>{pkgData.packages_cost}</span></p>
                                            <p>Selected Months : <span className='bold-text'>{pkgData.months}</span></p>
                                            <p>Order Status : <span className='bold-text green'>{pkgData.packages_status}</span></p>

                                            <p className='heading bold-text py-3'> Specifications</p>
                                            {
                                                pkgList.PACKAGE_details && pkgList.PACKAGE_details.map((p,id)  =>
                                                <div className=''>
                                                    <p>{p.pspec_text}</p>
                                                    <p>{p.pspec_ans}</p>

                                                </div>
                                            )}
                                            
                                            <p className='heading bold-text py-3'>Questionnaire</p>
                                            {pkgList.Question && pkgList.Question.map((d,id) =>
                                            
                                            
                                            <>
                                            
                                            <Row >
                                                <Col xxl={6} xl={6} md={6} sm={6} > 
                                                    <p>{d.pspec_text}</p>
                                                </Col>

                                                <Col xxl={6} xl={6} md={6} sm={6}> 
                                                    <p className='text-end'>{d.pspec_ans}</p> 
                                                </Col>
                                                <hr></hr>
                                            </Row>
                                            </>

                                            )}
                                               

                                        </div>

                                        


                                    <div className='align-div' >
                                   
                                         {paybtn || pkgData.packages_status === "Accepted"  ? (<> 

                                            {subOrder && 
                                                <table className="table table-striped table-light mx-5 my-5 table-pkg-pending ">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th scope="col">Bill Id</th>
                                                                <th scope="col">Bill Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col"></th>   
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {subOrder.map((s,id) =>(
                                                            <>
                                                                <tr>
                                                                    <td >{s.sorder_id}</td>
                                                                    <td >{s.sorder_billdt}</td>
                                                                    <td >{s.sorder_status === "Invoiced" ? (<span className='bold-text green'>{s.sorder_status}</span>):(<span className='bold-text'>{s.sorder_status}</span>)}</td>
                                                                    <td>{s.sorder_status === "Invoiced"? (<><Button variant="light "  className='mx-2' onClick={()=>paynow(s.sorder_id,pkgData.packages_cost,Order.order_id)}>pay Now</Button></>):(<></>)}</td>
                                                                </tr>
                                                            </>
                                                         ))}  
                                                                        
                                                                        
                                                    </tbody>
                                                </table>
                                                     
                                                    } 

                                                </>):
                                       (
                                           pkgData.packages_status === "Success" ? '' :(
                                               <>
                                           <div className='space-between'>
                                          
                                        {!pkgReject && <Button variant="light" className='px-5' onClick={()=>accept(pkgData.packages_cost,type,pkgData.months)}>Accept</Button>}

                                        {(!spinner === false) && <Spinner animation="border" style={{marginLeft:'-21rem',color:'black'}}></Spinner>}

                                        {!rejectbtn && <Button variant="light" className="px-5" onClick={()=>reason()}>Reject</Button>}

                                        </div>
                                        </>)
                                       )}

                                       

                                        {pkgReject &&( <div className='space-between'><select id="reason" className='select-months' onChange={()=>reject(pkgData.packages_cost,type)}>
                                            <option value="">Select Reason</option>
                                            <option value="Not Intrested">Not Intrested</option>
                                            <option value="Need to Add/Remove features">Need to Add/Remove features</option>
                                            <option value="Change of mind">Change of mind</option>
                                            <option value="Decided for alternative product">Decided for alternative product</option>
                                            </select>&nbsp;&nbsp;
               
                                            <label> OR </label>

                                            <textarea type="text" id="reason-text" rows={5} className='msg-text mx-3 px-2' placeholder=' type your reject reason' ></textarea> 
                                            <button onClick={() => reject()}>Submit</button>
                                        </div>)
                                                        
                                        }
                                    </div>
                                    </Container>
                                   </>
                                   
                                    )
                              
                            }


                    <ToastContainer/>
               
    </>
  )

//   function sent()
//     {
//         setmodelmsg(!modelmsg);
//     }

 function reason()
{
    setPkgReject(true);
    setrejectbtn(true);
}

    function accept(cost,value,month)
    {
        
        setSpinner(true);

        console.log("va",value)
        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            
        }

        console.log("cost",cost === undefined?0:cost)
        var data = new FormData();

        if(value === "event")
        {
            data.append("event_id",id);
            data.append("customer_id",c_id);
            data.append("cost",cost );
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
                    setSpinner(false);
                    setPayBtn(true);
                    history.go(0);
                    
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                    // toast.success('Order Created !!',{autoClose:3000});
                    // setTimeout(() => history.push('/orders'),3000);
                    setPayBtn(true);
                });
    
        }

        if(value==="package")
        {
            data.append("package_id",id);
            data.append("customer_id",c_id);
            data.append("cost",cost === undefined?0:cost);
            data.append("months",month)
            data.append("status","S");
            data.append("reason","accepted");

            axios({
                method: 'post',
                url: Url+'packageorder',
                data: data,
                headers: headers
                })
                .then(function (response) {
                    //handle success
                    console.log("response",response); 
                    
                    setSpinner(false);
                    setPayBtn(true);
                    history.go(0);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                    setPayBtn(true);
                });
            
        }
       
        
        

    }

    function reject(cost,value)
    {
        console.log("select")
        // var r = reason();
    
        var e = document.getElementById("reason");
        console.log("reason1",e);
        var reason = e.options[e.selectedIndex].value;

        var reText = document.getElementById("reason-text").value;

        console.log("reason2",reason);

        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'POST'
        }

        console.log("cost",cost === undefined?0:cost)
        var data = new FormData();

        if(reason === "" && reText === "")
        {
            console.log("not");
            toast.error('Select any reason !!',{autoClose:3000});
        }
        else
        {
            if(value==="event")
            {
                data.append("event_id",id);
                data.append("customer_id",c_id);
                data.append("cost",cost === undefined?0:cost);
                data.append("status","R");
                data.append("reason",reason===""?reText:reason);

                axios({
                    method: 'post',
                    url: Url+'eventorder',
                    data: data,
                    headers: headers
                    })
                    .then(function (response) {
                        //handle success
                        console.log("response",response); 
                        toast.success('order Rejected !!',{autoClose:3000})
                        setTimeout(() => history.push('/dashboard'),3000);
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                        toast.success('order Rejected !!',{autoClose:3000})
                        setTimeout(() => history.push('/dashboard'),3000);
                    });

            }

            if(value==="package")
            {
                data.append("package_id",id);
                data.append("customer_id",c_id);
                data.append("cost",cost === undefined?0:cost);
                data.append("status","R");
                data.append("reason",reason===""?reText:reason);


                axios({
                    method: 'post',
                    url: Url+'packageorder',
                    data: data,
                    headers: headers
                    })
                    .then(function (response) {
                        //handle success
                        console.log("response",response); 
                        toast.success('order Rejected !!',{autoClose:3000})
                        setTimeout(() => history.push('/dashboard'),3000);
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                        toast.success('order Rejected !!',{autoClose:3000})
                        setTimeout(() => history.push('/dashboard'),3000);
                    });
            }
        }
        

        
       
        
        

        
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
                                setTimeout(() => history.push('/dashboard'),3000);
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
