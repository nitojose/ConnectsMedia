import React,{useEffect} from 'react';
import { Url,isLoggin } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button,Card } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
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
    // const [length,setLength] = React.useState(0);
    const [plans,setPlans] = React.useState(false);
    const [camps ,setCamps] = React.useState(false)
    const [packages,setPackages] = React.useState(false);

    const [pend_event,setPend_event] = React.useState([]);
    const [pend_pack,setPend_pack] = React.useState([{}]);
   
    const [process_event,setProcess_event] = React.useState([]);
    const [process_pack,setProcess_pack] = React.useState({});

    const [pkgData] = React.useState([]);
    const [campData] = React.useState([]);
    const [p1pkg] = React.useState([]);
    const[pkg_type,setPkg_type] =React.useState('STD');

    useEffect(() => {

        getDatas();

      },[]);


      async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'pendingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                
                console.log("pending",response.data.event);    
                setPend_event(response.data.event);
                setPend_pack(response.data.pack);

                console.log("pack",pend_pack)
                // for( var i in pend_pack)
                // {
                //     result.push([i,pend_pack[i]])
                // }

                // console.log("result",result)
                
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });


            axios.get(Url+'processingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                // console.log("processing",response.data)
                setProcess_event(response.data.event);
                setProcess_pack(response.data.pack);
                console.log("processing",response.data.event);   
                
               
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

  return (
    <div >
     
     <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>

    <Container className='py-5 '>

      <h2 className='text-center my-5'>Pending/Processing Requests</h2>
        <Row className='py-5'>
            

            <Col sm={12} md={12} xl={12} xxl={12}>

              <div className='table-title'>
                <div onClick={()=>events()} className='table-icons'>
                  <img src={require('../../assets/images/Group 338.png')} alt="events" width={150} height={150} id="icon1"  style={{objectFit:'contain'}} />
                  <p  id="event">EVENTS</p>
                </div>

               

                <div className='table-icons' onClick={()=>pkg()}>
                  <img src={require('../../assets/images/pkgOrder.png')} alt="events" width={150} height={150} id="icon3" />
                  <p id='pkg' >PACKAGES</p>
                </div>
               
                
              </div>
                
                    <div className='view-msg'>
                      
                       {plans &&
                       
                        

                           <Row >
                          {pend_event === "No events available" ? <p className='text-center green bold-text-600 my-3'>No Events under Pending</p> :
                           (

                            pend_event.map((data, idx) => (
                                 
                            
                              <>
                                <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                  <Card className='card-event '>
                                 
                                    <div className='card-header-color align-start' >
                                      <div className='space-between'>
                                        <p className='px-5 pt-2 bold-text'>{data.event_title}</p>

                                        <p className='px-5 light-white mt-2'>Event Tittle</p>
                                        
                                      </div>
                                    </div>
                                    <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card' />

                                    <Card.Body className='card-bg mt-5'>
                                      
                                      {/* <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='card-bg'/> */}

                                          <div className='space-between text-color mt-5'>
                                            <p className=''>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</p>
                                            <p>Order date</p>
                                        
                                          </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <p className='bold-text'>${data.event_cost}.00</p>
                                              <p>Cost</p>
                                              
                                            </div>
                                            <hr className='text-color'></hr>



                                          <div className='space-between text-color '>
                                            <p className='error bold-text'>{data.event_status} </p>
                                            <p>Status</p>
                                            
                                          </div>
                                        

                                    </Card.Body>
                                  
                                  </Card>
                                
                                </Col>
                              
                              </>
                                 
                              ))
                           )}




                          { process_event === "No events available" ? <p className='text-center green bold-text-600 my-3 '>No Events under processing</p> :

                              (
                                <>
                                <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                  <Card className='card-event '>
                                 
                                    <div className='card-header-color align-start' >
                                      <div className='space-between'>
                                        <p className='px-5 pt-2 bold-text'>{process_event[0].event_title}</p>

                                        <p className='px-5 light-white mt-2'>Event Tittle</p>
                                        
                                      </div>
                                    </div>
                                    

                                    <Card.Body className='card-bg mt-5'>
                                       <div className='space-between text-color mt-5'>
                                            <p className=''>{process_event[0].created_at !== null? dateFormat(process_event[0].created_at, "mmmm dS, yyyy"):""}</p>
                                            <p>Order date</p>
                                        
                                          </div>
                                            <hr className='text-color'></hr>


                                          <div className='space-between text-color '>
                                            <p className='bold-text'>${process_event[0].event_cost}.00</p>
                                              <p>Cost</p>
                                              
                                            </div>
                                            <hr className='text-color'></hr>



                                          <div className='space-between text-color '>
                                            <p className='warning bold-text'>{process_event[0].event_status}</p>
                                            <p>Status</p>
                                            
                                          </div>

                                          <div className='text-center'>
                                            
                                            <span><Button variant="dark" className='px-5 b-3'onClick={()=>{viewEvent(process_event[0])}}>view</Button></span>
                                          </div>
                                        

                                    </Card.Body>
                                  
                                  </Card>
                                
                                </Col>
                              
                              </>
                                 
                                )
                           }
                       


                            
                           </Row> 
                                
                                 
                      }



                   


                      {packages &&
                   
                            <Row >

                                  {pend_pack === "No packages Available" ? <p className='text-center green bold-text-600 my-3'>No Package under Pending</p> :
                                          (

                                             Object.keys(pend_pack).map((data,id) =>(
        
                                            <>

                                              <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                                <Card className='card-event '>
                                              
                                                  <div className='card-header-color align-start' >
                                                    <div className='space-between'>
                                                      <p className='px-5 pt-2 bold-text'> {pend_pack[data].pack.packages_type === "CUST"?"Customized ":"Standard "}</p>
                                                      
                                                      <p className='px-5 light-white mt-2'>Type of package</p>
                                                    </div>
                                                  </div>
                                                  <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card' />

                                                  <Card.Body className='card-bg'>
                                                    
                                                  
                                                        <div className='space-between text-color mt-5'>
                                                          <p className=''>{dateFormat(pend_pack[data].pack.created_at, "mmmm dS, yyyy")}</p>
                                                          <p>Order date</p>
                                                      
                                                        </div>
                                                          <hr className='text-color'></hr>



                                                        <div className='space-between text-color '>
                                                          <p className='bold-text'>${pend_pack[data].pack.packages_cost}.00</p>
                                                            <p>Cost</p>
                                                            
                                                          </div>
                                                          <hr className='text-color'></hr>

                                                          <div className='space-between text-color '>
                                                          <p className='bold-text'>{pend_pack[data].pack.months}</p>
                                                            <p>Selected Months</p>
                                                            
                                                          </div>
                                                          <hr className='text-color'></hr>


                                                        <div className='space-between text-color '>
                                                          <p className='error bold-text'>{pend_pack[data].pack.packages_status}</p>
                                                          <p>Status</p>
                                                          
                                                        </div>
                                                      

                                                        <div className='text-center'>
                                                        {console.log("pending",pend_pack[data])}
                                                        <span><Button variant="dark" className='px-5 b-3'onClick={()=>{view_pkg(pend_pack[data])}}>view</Button></span>
                                                        </div>
                                                  </Card.Body>
                                                
                                                </Card>

                                              </Col>

                                            </>
                                              
                                              ))) 
                                              
                                  }



                                    {process_pack === "No packages Available" ? <p className='text-center green bold-text-600 my-3'>No Package under processing</p> :
                                    (

                                      Object.keys(process_pack).map((data,id) =>(

                                                              
                                        <>
          

                                              <Col xxl={6} xl={6} md={12} sm={12} className='center-align mt-5'>
                                                <Card className='card-event '>
                                              
                                                  <div className='card-header-color align-start' >
                                                    <div className='space-between'>
                                                      <p className='px-5 pt-2 bold-text'> {process_pack[data].pack.packages_type === "CUST"?"Customized ":"Standard "}</p>
                                                      
                                                      <p className='px-5 light-white mt-2'>Type of package</p>
                                                    </div>
                                                  </div>
                                                  <img src={require('../../assets/images/card-bg.jpg')} alt='bg-card' className='img-card'/>

                                                  <Card.Body className='card-bg'>
                                                    
                                                  
                                                        <div className='space-between text-color mt-5'>
                                                          <p className=''>{dateFormat(process_pack[data].pack.created_at, "mmmm dS, yyyy")}</p>
                                                          <p>Order date</p>
                                                      
                                                        </div>
                                                          <hr className='text-color'></hr>



                                                        <div className='space-between text-color '>
                                                          <p className='bold-text'>${process_pack[data].pack.packages_cost}.00</p>
                                                            <p>Cost</p>
                                                            
                                                          </div>
                                                          <hr className='text-color'></hr>

                                                          <div className='space-between text-color '>
                                                          <p className='bold-text'>{process_pack[data].pack.months}</p>
                                                            <p>Selected Months</p>
                                                            
                                                          </div>
                                                          <hr className='text-color'></hr>


                                                        <div className='space-between text-color '>
                                                          <p className='warning'>{process_pack[data].pack.packages_status}</p>
                                                          <p>Status</p>
                                                          
                                                        </div>
                                                      

                                                        <div className='text-center'>
                                                          {console.log("process",process_pack[data])}
                                                        <span><Button variant="dark" className='px-5 b-3'onClick={()=>{view_pkg(process_pack[data])}}>view</Button></span>
                                                        </div>
                                                  </Card.Body>
                                                
                                                </Card>

                                              </Col>

                                            </>
                                              
                                              ))) 
                                              
                                  }
                            </Row>



                                   
                            
                      }
                    </div>
             





                
            </Col>
        </Row>

    </Container>
</div>
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

  function events()
  {
    setPlans(!plans);
    document.getElementById('icon1').style.display="none";
    
    document.getElementById('icon3').style.display="none";
   
    setPackages(false);
    document.getElementById('event').style.color="#F1C40F";
    
    document.getElementById('pkg').style.color="white"
  }

  function pkg()
  {
    setPackages(!packages);
    document.getElementById('icon1').style.display="none";
    
    document.getElementById('icon3').style.display="none";
    setPlans(false);
  
    document.getElementById('pkg').style.color="#F1C40F";
    document.getElementById('event').style.color="white";
  
  }


 

}
