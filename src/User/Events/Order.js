/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { Url,isLoggin,picture,imgUrl } from '../../GLOBAL/global';
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
import Pagination from '../../pages/Pagination';
import {BsFillKanbanFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import Footer from '../../components/Footer';
import Shimmer from "react-shimmer-effect";
var sessionstorage = require('sessionstorage');

export default function Index() {


  const[customerInfo,setCustomerInfo] = React.useState();

    let history = useHistory();
    const[orders,setOrders] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
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
                  setLoading(false); 
                  setPlans(true); 
                  
                }
                 
                  
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }
    
    const [currentPage,setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);
    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = planData.slice(indexOfFirstPost,indexOfLastPost);

    function paginate(pageNumber)
    {
      setCurrentPage(pageNumber);
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
  
    

    
    

    useEffect(async () => {

       await getDatas();

      },[]);


    

  return (
    <div >
     

    <Container className='body-two'>

    <div className='image-sectioning-two'>
      
    <div className='profileBefore-two' >
            <img src={customerInfo === undefined ?picture :(imgUrl+customerInfo.cover_photo)} alt="Avatar" className='cover-img-dash-image' />
           
        </div> 


        <div className='row-flex-align-two'>

            <div className='profileInner'>
              <img className='cover-img-dash' src={customerInfo === undefined ?picture :(imgUrl+customerInfo.photo)} alt="profile"
              //  style={{objectFit:'contain'}}
               />
              
            </div>
           


          <div className='header-banner-two'>
          <div className='background-color-text'>
        <AiOutlineBars color='black' className='bsFillKanbanFill' onClick={()=>onTapFun()}/>
<div className='icon-tab-block'>
        {/* <FiPackage color='black' className='icon-tab'/> */}
        <MdEmojiEvents color='black' className='icon-tab' size={20}/>

        <p className='header-banner-text'>Events Orders</p>
        </div>
        </div>
          </div>
          </div>
          

        </div>
          

        <div className='view-msg ' >

{loading? 
<div className='align-div pwd-div mb-5'><Shimmer><div className='align-div pwd-div mb-5'> <div >Loading...</div></div></Shimmer></div>
:(
  

  plans  ? (
              
          <>

<div className='align-div pwd-div mb-5'>

  <Table striped bordered hover>
    <thead>
      <tr >
        <th className='bold-text'>Date</th>
        <th className='bold-text'>title</th>
        <th className='bold-text cost'>Cost</th>
        <th className='bold-text'>Drive Id</th>
        <th className='bold-text'>Status</th>
      </tr>
    </thead>
    <tbody>
  
      {currentPosts.map((data, idx) => 
      
      
        <tr className='pointer'>
          
          <td onClick={()=>{view(data,"event")}}>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
          <td onClick={()=>{view(data,"event")}}>{data.plan[0].event_title}</td>
          <td className="cost" onClick={()=>{view(data,"event")}}>${data.order.order_amt}.00</td>
          <td >{data.order.order_status === 'R'?<span className='error'>No drive ID</span>:(<a href={data.order.drive_id} target="_blank" rel="noreferrer" style={{color:'black'}}>click here</a>)}</td>
          <td onClick={()=>{view(data,"event")}}>{data.order.order_status === 'PP'?(<><span className='warning '>Payment Pending</span></>):(<></>)}
                      {data.order.order_status === 'S'?(<><span className='green '>Success</span></>):(<></>)}
                      {data.order.order_status === 'P'?(<><span className='warning '>Order Pending</span></>):(<></>)}
                      {data.order.order_status === 'R'?(<><span className='error '>Rejected</span></>):(<></>)}
          </td>
         
          {/* <td><RiDeleteBin6Line size={23} onClick={()=>console.log("delete")}/> </td> */}
        </tr>
        
        
      )}
    </tbody>
  </Table>
  <Pagination postsPerPage={postsPerPage} totalPosts={planData.length} paginate={paginate}/>
  </div>
</>

) :(<>
  


<div className='align-div pwd-div mb-5'>
 <div id='campaigns'>
     <div>
         <ul style={{width:'100%',alignSelf:'center'}}>
           <li id="event-dash-req" style={{height:'150px'}}>
                 <h2>Upcoming Event</h2>
                 <img className='mt-3' src={require('../../../src/assets/imgs/mike.png')} alt="Campaigns for Upcoming Events"/>
                 <span className='mt-3 text-center'>Share your calendar here. We will pick all your future events from here</span>
           
                         {sessionstorage.getItem('token') ===null ?(
                             <>
                             <button onClick={()=> redirectto("event")} >Register to start</button>
                             </>
                             ):(
                                 <>
                             <button onClick={()=>history.push('/events-creation')} >Start Here</button>
                             </>
                             )
                         }
           </li>
         </ul>
         </div>
   </div>
</div>

  
</> )

)}
          
</div>
  
            <Footer/>
    </Container>
</div>
  );


  function view(data,value)
  {
   
    //   setOrderId(orderId)
    let id = data.order.order_id;
    sessionstorage.setItem("orderID",JSON.stringify(data));
    sessionstorage.setItem("orderType",value);

    
    history.push( '/order-view');
    // history.push('/order-payment/'+id)
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
