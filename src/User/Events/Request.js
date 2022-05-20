/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { Url,isLoggin,picture,imgUrl } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button,Card } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
import {MdEmojiEvents} from 'react-icons/md';
import {AiOutlineCamera} from 'react-icons/ai'
import Pagination from '../../pages/Pagination';
var sessionstorage = require('sessionstorage');

export default function Index() {


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
  
    React.useEffect(() => {
  
      logginornot();
    },[]);



  
    const [plans,setPlans] = React.useState(false);
   
  

    const [pend_event,setPend_event] = React.useState([]);
    
    const [process_event,setProcess_event] = React.useState([]);
    const [customerInfo,setCustomerInfo] = React.useState();
  
    const [currentPage,setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);
    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts1 = process_event.slice(indexOfFirstPost,indexOfLastPost);

    const currentPosts2 = pend_event.slice(indexOfFirstPost,indexOfLastPost);
    

    function paginate(pageNumber)
    {
      setCurrentPage(pageNumber);
    }

    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'pendingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                
                console.log("pending",response.data.event);    
                setPend_event(response.data.event);
                setPlans(true);
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });


            await axios.get(Url+'processingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                console.log("processing",response.data.event)
                setProcess_event(response.data.event);
                setPlans(true);
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

   

    useEffect( () => {

     getDatas();
     getInfos();

      },[]);

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

          <div className='header-banner' style={{marginLeft:'8px',width:'40%'}}>
            <MdEmojiEvents color='black' className='mt-4 mx-4' size={22}/>
            <p className='header-banner-text'>Event Request</p>
          </div>


          <div >
            <button onClick={()=> raiseRequest("Event")} className="raise-req">Raise a Request</button>

          </div>
      </div>

     
                          { plans ? (process_event === "No events available" ? (<Col xxl={6} xl={6} md={12} sm={12} className='text-center align-div  '> </Col>) :

                                                        
                          (
                            
                            
                              <div className='view-msg'>

                              <div className='msg-align mx-0 mb-5'>
                              <Table striped bordered hover>
                            <thead>
                              <tr >
                                <th className='bold-text'>Date</th>
                                <th className='bold-text'>title</th>
                                <th className='bold-text cost'>Cost</th>
                                <th className='bold-text'>Status</th>
                              </tr>
                            </thead>
                            <tbody>

                              {currentPosts1.map((data, idx) => 
                              
                                <tr>
                                  
                                  <td onClick={()=>{viewEvent(process_event[0])}}>{dateFormat(data.created_at, "mmmm dS, yyyy")}</td>
                                  <td onClick={()=>{viewEvent(process_event[0])}}>{data.event_title}</td>
                                  <td className='cost' onClick={()=>{viewEvent(process_event[0])}}>${data.event_cost}.00</td> 
                                  <td onClick={()=>{viewEvent(process_event[0])}} className='error '>{data.event_status}</td>
                                
                                </tr>
                                
                                
                              )}
                            </tbody>
                          </Table>
                          <Pagination postsPerPage={postsPerPage} totalPosts={process_event.length} paginate={paginate}/>
                          </div>

                              </div>                                     
                              ))
                            :(<></>)
                          } 


                   
                          {plans ? (pend_event === "No events available"? (<Col xxl={6} xl={6} md={12} sm={12} className='text-center align-div  '> </Col>) :
                           (
                            <div className='view-msg '>
                     
                            <div className='align-div pwd-div mb-5'>
                              <Table striped bordered hover>
                                <thead>
                                  <tr >
                                    <th className='bold-text'>Date</th>
                                    <th className='bold-text'>title</th>
                                    {/* <th className='bold-text'>Cost</th> */}
                                    <th className='bold-text'>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                              
                                  {currentPosts2.map((data, idx) => 
                                  
                                    <tr>
                                      
                                      <td >{ dateFormat(data.created_at, "mmmm dS, yyyy")}</td>
                                      <td >{data.event_title}</td>
                                      {/* <td>${data.event_cost}.00</td>  */}
                                      <td className='error '>{data.event_status}</td>
                                    
                                    </tr>
                                    
                                    
                                  )}
                                </tbody>
                              </Table>
                              <Pagination postsPerPage={postsPerPage} totalPosts={pend_event.length} paginate={paginate}/>
                              </div>

                            </div>
                           ))
                           :(<></>)}



                       {(pend_event ==="No events available")  && (process_event === "No events available") ?(<>
                        <div className='view-msg mb-5'>
                     
                      <div className='align-div pwd-div'>
                        <div id='campaigns'>
                            <div>
                                <ul style={{width:'50%',alignSelf:'center'}}>
                                  <li id="event-dash-req" style={{height:'250px'}}>
                                        <h2>Upcoming Event</h2>
                                        <img className='mt-3' src={require('../../../src/assets/imgs/mike.png')} alt="Campaigns for Upcoming Events"/>
                                        <span className='mt-3 text-center'>Share your calendar here. We will pick all your future events from here</span>
                                  
                                                {sessionstorage.getItem('token') ===null ?(
                                                    <>
                                                    <button onClick={()=> redirectto("event")} className='mt-3'>Register to start</button>
                                                    </>
                                                    ):(
                                                        <>
                                                    <button onClick={()=>history.push('/events-creation')} className='mt-3' >Start Here</button>
                                                    </>
                                                    )
                                                }
                                  </li>
                                </ul>
                                </div>
                          </div>
                          </div>
                          </div>
                       </>):(<></>) }

        
    </Container>

  );


  

  function view_pkg(pkg,type)
  {
    
    sessionstorage.setItem("pendPkg",JSON.stringify(pkg));
    history.push('/pending_req');
    history.go(0);
  }

  function viewEvent(event)
  {
    
    sessionstorage.setItem("RequestEvent",JSON.stringify(event));
    history.push('/request-event');
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

  function raiseRequest(reqType)
  {
    sessionstorage.setItem("reqType",reqType);
    history.push('/raise-request');
  }

}
