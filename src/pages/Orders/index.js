import React,{useEffect} from 'react';
import { Url ,isLoggin} from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button, Card } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
var sessionstorage = require('sessionstorage');

export default function Index() {


    let history = useHistory();
    

    const[orders,setOrders] = React.useState([]);
    
    const [plans,setPlans] = React.useState(false);
    const [camps ,setCamps] = React.useState(false)
    const [packages,setPackages] = React.useState(false);

    const [planData] = React.useState([]);
    const [pkgData] = React.useState([]);
    const [campData] = React.useState([]);
    const [p1pkg] = React.useState([]);
    

    useEffect(() => {
      logginornot();
        getDatas();

      },[]);


      async function logginornot()
    {
      const cust =  await isLoggin();
      console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
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
                  
                  if(data.order.order_item ===  "EVENT")
                  {
                    // setPlandata(data);
                    planData.push(data);
                  }

                  if(data.order.order_item ===  "CAMPAIGN")
                  {
                    // setPlandata(data);
                    campData.push(data);
                  }


                  if(data.order.order_item === "PACKAGE")
                  {
                    // setPkgData(data);
                    pkgData.push(data);
                    // console.log("1",data);

                      data.PACKAGE_details.map(d=>{
                        // console.log("p1pkg : ",d)
                        return p1pkg.push(d);
                        
                      })

                  }

                 

                })
                  
                  
                  
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

  return (
    <div >
     
     {/* <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax> */}

{console.log("pkgdata",pkgData)}
    <Container className='py-5 '>

      <h2 className='text-center my-5'>My Orders</h2>
        <Row className='py-5'>
            

            <Col sm={12} md={12} xl={12} xxl={12}>

           <div className='table-title'>
                <div onClick={()=>events()} className='table-icons'>
                  <img src={require('../../assets/images/Group 338.png')} alt="events" width={150} height={150} id="icon1"  style={{objectFit:'contain'}} />
                  <p  id="event">EVENTS</p>
                </div>

                <div className='table-icons' onClick={()=>camp()}>
                  <img src={require('../../assets/images/OBJECTS.png')} alt="events" width={150} height={150} id="icon2" style={{objectFit:'contain'}} />
                  <p id='campaign' >CAMPAIGNS</p>
                </div>
               

                <div className='table-icons' onClick={()=>pkg()}>
                  <img src={require('../../assets/images/pkgOrder.png')} alt="events" width={150} height={150} id="icon3" />
                  <p id='pkg' >PACKAGES</p>
                </div> 
               
                
              </div>
                
                    <section className='view-msg'>
                      
                      {plans &&
                      

                      <Row >

                        {planData.length === 0 ? <p className='text-center green'>No Orders</p> :
                                planData.map((data, idx) => (
                                  <>
                       
                                <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                  <Card className='card-event '>
                                 
                                    <div className='card-header-color align-start' >
                                      <div className='space-between'>
                                        <p className='px-5 pt-2'> {data.plan[0].event_title}</p>

                                        <p className='px-5 light-white mt-2'>Event Tittle</p>
                                        
                                      </div>
                                    </div>
                                    <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card' />

                                    <Card.Body className='card-bg'>
                                      
                                    
                                          <div className='space-between text-color mt-5'>
                                            <p className=''>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</p>
                                            <p className='text-end'>Order date</p>
                                        
                                          </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <p className='bold-text'>{data.order.order_amt}</p>
                                              <p className='text-end'>Cost</p>
                                              
                                            </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                          <a href={data.order.drive_id} target="_blank" rel="noreferrer">click here</a>
                                            <p className='text-end'>Drive id</p>
                                            
                                          </div>
                                          <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <p className=''>{data.order.order_status === 'PP'?(<><span className='warning bold-text'>Payment Pending</span></>):(<></>)}
                                            {data.order.order_status === 'S'?(<><span className='green bold-text'>Success</span></>):(<></>)}
                                            {data.order.order_status === 'P'?(<><span className='warning bold-text'>Pending</span></>):(<></>)}
                                            {data.order.order_status === 'R'?(<><span className='error bold-text'>Rejected</span></>):(<></>)}</p>
                                            <p className='text-end'>Status</p>
                                            
                                          </div>
                                        

                                          <div className='text-center'>
                                          <span><Button variant="dark" className='px-5 b-3' onClick={()=>{view(data,"event")}}>view</Button></span>
                                          </div>
                                    </Card.Body>
                                  
                                  </Card>
                                
                                </Col>
                         
                        </>
                        
                        )) 
                        
                      }
                    </Row>
                    } 
                        

                 {camps &&
                        
                        <Row >

                              { campData.length === 0 ? <p className='text-center green'>No Orders</p> :
                                campData.map((data, idx) => (
                                  <>
                       
                                <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                  <Card className='card-event '>
                                 
                                    <div className='card-header-color align-start' >
                                      <div className='space-between'>
                                        <p className='px-5 pt-2 bold-text'>{ data.plan.camp_type === 'MPOST'?" Million Posts":" Static Posts"}</p>

                                        <p className='px-5 light-white mt-2'>Campaign Type</p>
                                        
                                      </div>
                                    </div>
                                    <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card'/>

                                    <Card.Body className='card-bg'>
                                      

                                          <div className='space-between text-color mt-5'>
                                            <p className=''>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</p>
                                            <p>Order date</p>
                                        
                                          </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <p className='bold-text'>${data.order.order_amt}.00 /month</p>
                                              <p>Cost</p>
                                              
                                            </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                          <a href={data.order.drive_id} target="_blank" rel="noreferrer">click here</a>
                                            <p>Drive id</p>
                                            
                                          </div>
                                          <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <p className=''>{data.order.order_status === 'PP'?(<><span className='warning bold-text'>Payment Pending</span></>):(<></>)}
                                            {data.order.order_status === 'S'?(<><span className='green bold-text'>Success</span></>):(<></>)}
                                            {data.order.order_status === 'P'?(<><span className='warning bold-text'>Pending</span></>):(<></>)}
                                            {data.order.order_status === 'R'?(<><span className='error bold-text'>Rejected</span></>):(<></>)}</p>
                                            <p>Status</p>
                                            
                                          </div>
                                        

                                          <div className='text-center'>
                                          <span><Button variant="dark" className='px-5 b-3' onClick={()=>{view(data,"camp")}}>view</Button></span>
                                          </div>
                                    </Card.Body>
                                  
                                  </Card>
                                
                                </Col>
                         
                        </>
                        
                        )) 
                        
                      }
                    </Row>

                      } 



                  {packages &&
                     
                        <Row >

                          { pkgData && pkgData.length === 0  ?  <p className='text-center green'>No Orders</p> :
                                pkgData.map((data, idx) => (
                            <>
                 
                          <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                            <Card className='card-event '>
                           
                              <div className='card-header-color align-start' >
                                <div className='space-between'>
                                  <p className='px-5 pt-2 bold-text'> {data.PACKAGE.packages_type === "CUST"?"Customized ":"Standard "}</p>
                                  
                                  <p className='px-5 light-white mt-2'>Type of package</p>
                                </div>
                              </div>
                              <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card'/>

                              <Card.Body className='card-bg'>
                                
                               

                                    <div className='space-between text-color mt-5'>
                                      <p className=''>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</p>
                                      <p>Order date</p>
                                  
                                    </div>
                                      <hr className='text-color'></hr>


                                    <div className='space-between text-color '>
                                      <p className='bold-text'>${data.PACKAGE.packages_cost}.00 /month</p>
                                        <p>Cost</p>
                                        
                                      </div>
                                      <hr className='text-color'></hr>


                                    <div className='space-between text-color '>
                                      <a href={data.order.drive_id} target="_blank" rel="noreferrer">click here</a>
                                      <p>Drive id</p>
                                      
                                    </div>
                                    <hr className='text-color'></hr>


                                    <div className='space-between text-color '>
                                      <p className=''>{data.order.order_status === 'PP'?(<><span className='warning bold-text'>Payment Pending</span></>):(<></>)}
                                            {data.order.order_status === 'S'?(<><span className='green bold-text'>Success</span></>):(<></>)}
                                            {data.order.order_status === 'P'?(<><span className='warning bold-text'>Pending</span></>):(<></>)}
                                            {data.order.order_status === 'R'?(<><span className='error bold-text'>Rejected</span></>):(<></>)}</p>
                                      <p>Status</p>
                                      
                                    </div>
                                  

                                    <div className='text-center'>
                                    <span><Button variant="dark" className='px-5 b-3'onClick={()=>{view(data,"pkg")}}>view</Button></span>
                                    </div>
                              </Card.Body>
                            
                            </Card>
                          
                          </Col>
                   
                  </>
                  
                  )) 
                  
                }
              </Row>
                      }
                    </section>
             





                
            </Col>
        </Row>

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

  function events()
  {
    setPlans(!plans);
    document.getElementById('icon1').style.display="none";
    document.getElementById('icon2').style.display="none";
    document.getElementById('icon3').style.display="none";
    setCamps(false);
    setPackages(false);
    document.getElementById('event').style.color="#F1C40F";
    document.getElementById('campaign').style.color="white";
    document.getElementById('pkg').style.color="white"
  }

  function pkg()
  {
    setPackages(!packages);
    document.getElementById('icon1').style.display="none";
    document.getElementById('icon2').style.display="none";
    document.getElementById('icon3').style.display="none";
    setPlans(false);
    setCamps(false);
    document.getElementById('pkg').style.color="#F1C40F";
    document.getElementById('event').style.color="white";
    document.getElementById('campaign').style.color="white";
  }


  function camp()
  {
    setCamps(!camps);
    document.getElementById('icon1').style.display="none";
    document.getElementById('icon2').style.display="none";
    document.getElementById('icon3').style.display="none";
    setPlans(false);
    setPackages(false);
    document.getElementById('campaign').style.color="#F1C40F";
    document.getElementById('pkg').style.color="white";
    document.getElementById('event').style.color="white";
  }

}
