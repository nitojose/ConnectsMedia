import React,{useEffect} from 'react';
import { Url,isLoggin,picture } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button, Card } from 'react-bootstrap';
import {MdCampaign} from 'react-icons/md';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineCamera} from 'react-icons/ai'

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
  
    

    const[orders,setOrders] = React.useState([]);
    
   
    const [camps ,setCamps] = React.useState(false)
   
    const [campData] = React.useState([]);
    const[customerInfo,setCustomerInfo] = React.useState();
   

    useEffect(() => {

        getDatas();
        getInfo();

      },[]);

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
                  
                 

                  if(data.order.order_item ===  "CAMPAIGN")
                  {
                    // setPlandata(data);
                    campData.push(data);
                    
                  }
                  

                })
                  
                if(campData.length !== 0)
                {
                  setCamps(true);
                }
                
                  
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

  return (
    <div >
    
    <Container >

    <div className='profileBefore' >
            <img src={customerInfo === undefined ?picture :('http://connectmedia.gitdr.com/public/'+customerInfo.cover_photo)} alt="cover" className='profileBefore' />
           
        </div> 

        <div className='row-flex-align'>

          <div className='profileDiv'>
            <div className='profileInner'>
              <img src={customerInfo === undefined ?picture :('http://connectmedia.gitdr.com/public/'+customerInfo.photo)} alt="profile" style={{objectFit:'contain'}}/>
              {/* <div className='img-camera'>
                  <AiOutlineCamera color='black' size={24} />
              </div>   */}


            </div>
            
          </div>

          <div className='header-banner' style={{marginLeft:'245px'}}>
            <MdCampaign color='black' className='mt-4 mx-4' size={22}/>
            <p className='header-banner-text'>Campaign Orders</p>
          </div>


        </div>
        


                    <div className='view-msg ' >
                        

                        {camps  ? (
                                    
                                <>
                     
                     <div className='msg-align'>
    
                        <Table striped bordered hover>
                          <thead>
                            <tr className='bold-text'>
                              <th>Date</th>
                              <th >CAMP.Type</th>
                              <th>Cost</th>
                              <th>Drive Id</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                        
                            {campData.map((data, idx) => 
                            
                              <tr className='pointer'>
                                
                                <td onClick={()=>{view(data,"camp")}}>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
                                <td onClick={()=>{view(data,"camp")}}>{ data.plan.camp_type === 'MPOST'?" Million Posts":" Static Posts"}</td>
                                <td onClick={()=>{view(data,"camp")}}>{data.order.order_amt}</td>
                                <td >{data.order.order_status === 'R'?<span className='error'>No drive ID</span>:(<a href={data.order.drive_id} target="_blank" rel="noreferrer" style={{color:'black'}}>click here</a>)}</td>
                                <td onClick={()=>{view(data,"camp")}}>{data.order.order_status === 'PP'?(<><span className='warning '>Payment Pending</span></>):(<></>)}
                                            {data.order.order_status === 'S'?(<><span className='green '>Success</span></>):(<></>)}
                                            {data.order.order_status === 'P'?(<><span className='warning '>Order Pending</span></>):(<></>)}
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
                        <div id="campaigns" style={{borderRadius:'8px'}}>
	                        <div>

                            <ul>

                            <li>
                              <h2>Missions</h2>
                            <img className='mt-3' src={require('../../../src/assets/imgs/stand-mic.png')} alt="Million Post - Mic"/>
                                <span className='mt-3 text-center'>Click below to support missionaries from across the globe</span>
                            {/* <div><button>Start Here</button></div> */}

                                {sessionstorage.getItem('token') ===null ?(
                                                        <>
                                                        <button onClick={()=> redirectto("million")} className='mt-3'>Register to start</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/million-posts')} className='mt-3'>Start Here</button>
                                                        </>
                                                        )
                                                    }
                          </li>


                            <li>
                              <h2>Strengthening Marriage</h2>
                            <img className='mt-3' src={require('../../../src/assets/imgs/strengthen-marriage.png')} alt="Strengthening Marriage"/>
                                <span className='mt-3 text-center'>Register and support for this special campaign and we will keep on posting inspirational content and bible scriptures, about togetherness and marriage on social media</span>
                            

                                                    {sessionstorage.getItem('token') ===null ?(
                                                        <>
                                                        <button onClick={()=> redirectto("million")} className='mt-3'>Register to start</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/million-posts')} className='mt-3'>Start Here</button>
                                                        </>
                                                        )
                                                    }
                          </li>
                            <li>
                              <h2>Youth Section</h2>
                            <img className='mt-3' src={require('../../../src/assets/imgs/youth.png')} alt="Praying Youth"/>
                                <span className='mt-3 text-center'>Register for this special campaign to engage our future generation with youthful Christian content on social media</span>
                                                {sessionstorage.getItem('token') ===null ?(
                                                        <>
                                                        <button onClick={()=> redirectto("static")} className='mt-3'>Register to start</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/staticPosts')} className='mt-3'>Start Here</button>
                                                        </>
                                                        )
                                                    }
                          </li>
                            <li>
                              <h2>Pray For Israel</h2>
                            <img className='mt-3' src={require('../../../src/assets/imgs/israel.png')} alt="Pray for Israel"/>
                                <span className='mt-3 text-center'>God loves Israel. So do we. Bible clearly mentions – “Pray for the peace of Jerusalem. May they prosper who love you”. We are creating an opportunity for you to bless Israel & Jerusalem. We will optimize videos and posters and publish on your behalf. Prosper!
                            </span>
                                                {sessionstorage.getItem('token') ===null ?(
                                                        <>
                                                        <button onClick={()=> redirectto("static")} className='mt-3'>Register to start</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/staticPosts')} className='mt-3'>Start Here</button>
                                                        </>
                                                        )
                                                    }
                          </li>
                            <li>
                              <h2>Evangelism</h2>
                            <img className='mt-3' src={require('../../../src/assets/imgs/evangelism.png')} alt="Evangelism"/>
                                <span className='mt-3 text-center'>Great opportunity to share the gospel while you are busy.
                          Register, and we will keep on posting word of God on social media ON YOUR NAME.
                            </span>
                                                {sessionstorage.getItem('token') ===null ?(
                                                        <>
                                                        <button onClick={()=> redirectto("static")} className='mt-3'>Register to start</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/staticPosts')} className='mt-3'>Start Here</button>
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
