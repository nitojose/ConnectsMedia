/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { Url,isLoggin,picture } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button, Card } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
import { useHistory} from "react-router-dom";
import {MdEmojiEvents} from 'react-icons/md';
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineCamera} from 'react-icons/ai'
var sessionstorage = require('sessionstorage');

export default function Index() {


  const[customerInfo,setCustomerInfo] = React.useState();

    let history = useHistory();

    async function logginornot()
    {
      const cust =  await isLoggin();
      console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
    }

    async function getInfo()
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
  
      logginornot();
      getInfo(); 
    },[]);
  
    

    const[orders,setOrders] = React.useState([]);
    
    const [plans,setPlans] = React.useState(false);
    

    const [planData] = React.useState([]);
   
    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'getorder', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                setOrders(response.data);
                console.log("orders : ",response.data);
                response.data.map((data, idx) => {
                  
                  if(data.order.order_item ===  "EVENT")
                  {
                    // setPlandata(data);
                    planData.push(data);
                    
                  }
                  
                  

                })
                if(planData.length !== 0)
                {
                  setPlans(true);  
                }
                 
                  
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }
    

    useEffect(async () => {

       await getDatas();

      },[]);


    

  return (
    <div >
     

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


            <div className='header-banner' style={{marginLeft:'245px'}}>
              <MdEmojiEvents color='black' className='mt-4 mx-4' size={22}/>
              <p className='header-banner-text'>Event Orders</p>
             </div>

          </div>
          

             <div className='view-msg ' >
                        

                        {plans  ? (
                                    
                                <>
                     
                     <div className='msg-align'>
    
                        <Table striped bordered hover>
                          <thead>
                            <tr className='bold-text'>
                              <th>Date</th>
                              <th >title</th>
                              <th>Cost</th>
                              <th>Drive Id</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                        
                            {planData.map((data, idx) => 
                            
                              <tr>
                                
                                <td onClick={()=>{view(data,"event")}}>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
                                <td onClick={()=>{view(data,"event")}}>{data.plan[0].event_title}</td>
                                <td onClick={()=>{view(data,"event")}}>{data.order.order_amt}</td>
                                <td > <a href={data.order.drive_id} target="_blank" rel="noreferrer" style={{color:'black'}}>click here</a></td>
                                <td onClick={()=>{view(data,"event")}}>{data.order.order_status === 'PP'?(<><span className='warning '>Payment Pending</span></>):(<></>)}
                                            {data.order.order_status === 'S'?(<><span className='green '>Success</span></>):(<></>)}
                                            {data.order.order_status === 'P'?(<><span className='warning '>Pending</span></>):(<></>)}
                                            {data.order.order_status === 'R'?(<><span className='error '>Rejected</span></>):(<></>)}
                                </td>
                               
                                {/* <td><RiDeleteBin6Line size={23} onClick={()=>console.log("delete")}/> </td> */}
                              </tr>
                              
                              
                            )}
                          </tbody>
                        </Table>
                      
                        </div>
                      </>
                      
                      ) :(<>
                          <div id='campaigns'>
                            <div>
                                <ul>
                                  <li>
                                        <h2>Upcoming Event</h2>
                                        <img src={require('../../../src/assets/imgs/mike.png')} alt="Campaigns for Upcoming Events"/>
                                        <span>Share your calendar here. We will pick all your future events from here</span>
                                  
                                                {sessionstorage.getItem('token') ===null ?(
                                                    <>
                                                    <button onClick={()=> redirectto("event")}>Register to start</button>
                                                    </>
                                                    ):(
                                                        <>
                                                    <button onClick={()=>history.push('/events-creation')}>Start Here</button>
                                                    </>
                                                    )
                                                }
                                  </li>
                                </ul>
                                </div>
                          </div>
                      </> )
                      
                    }
                                
            </div>
  

    </Container>
</div>
  );


  function view(data,value)
  {
   
    //   setOrderId(orderId)
    console.log(data.order.order_id)
    sessionstorage.setItem("orderID",JSON.stringify(data));
    sessionstorage.setItem("orderType",value);

    
    history.push( '/order-view');
    history.go(0);
  }


  function redirectto(type)
    {
        if(type === "event")
        {
            sessionstorage.setItem("camp","/events-creation");
            history.push('/login');
            history.go(0);
        }

        if(type === "million")
        {
            sessionstorage.setItem("camp","/million-posts");
            history.push('/login');
            history.go(0);
        }

        if(type === "static")
        {
            sessionstorage.setItem("camp","/staticPosts");
            history.push('/login');
            history.go(0);
        }
    }
 

}
