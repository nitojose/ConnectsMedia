/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { Url,isLoggin,picture } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button,Card } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
import {FiPackage} from 'react-icons/fi';
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
  
   
    
    const [packages,setPackages] = React.useState(false);

   
    const [pend_pack,setPend_pack] = React.useState({});
   
  
    const [process_pack,setProcess_pack] = React.useState({});
    const [customerInfo,setCustomerInfo] = React.useState();

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

    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'pendingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                
                
                console.log("pending",response.data);    
               
                setPend_pack(response.data.pack);

                console.log("pack",pend_pack)
                setPackages(true);
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });


           await axios.get(Url+'processingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                 console.log("processing",response.data);   
               
                setProcess_pack(response.data.pack);
               setPackages(true);
                
               
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }
    
    useEffect(async() => {

      await getDatas();
      getInfos();

      },[]);


    

    return (
      
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

              <div className='header-banner' style={{marginLeft:'8px',width:'40%'}}>
               <FiPackage color='black' className='mt-4 mx-4' size={22}/>
                <p className='header-banner-text'>Package Request</p>
              </div>

              <div >
                <button onClick={() => raiseRequest("Package")}>Raise a Request</button>

              </div>
        </div>
           
                  <div className='view-msg'>
                         

                      <div className='msg-align '>
                           
                         {packages ?  (pend_pack === "No packages Available"? <Col xxl={6} xl={6} md={12} sm={12} className='text-center align-div  '> </Col> :
                                 (

                                  
                                    <Table striped bordered hover>
                                      <thead>
                                        <tr className='bold-text'>
                                          <th>Date</th>
                                          <th >PKG.Type</th>
                                          <th>Cost</th>
                                          <th>Sel.Months</th>
                                          <th>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                    
                                        {Object.keys(pend_pack).map((data,id) =>(
                                        
                                          <tr>
                                            
                                            <td >{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                            <td >{pend_pack[data].pack.packages_type === "CUST"?"Customized ":"Standard "} <span style={{color:'black'}}>Package </span></td>
                                            <td>{pend_pack[data].pack.packages_cost}</td> 
                                            <td>{pend_pack[data].pack.months}</td>
                                            <td className='error '>{pend_pack[data].pack.packages_status}</td>
                                          
                                          </tr>
                                    
                                    
                                        ))}
                                      </tbody>
                                    </Table>
                                     
                                     ) ):(<></>)
                                     
                         }



                           {packages ?(process_pack === "No packages Available"? <Col xxl={6} xl={6} md={12} sm={12} className='text-center align-div  '> </Col>:
                           (

                             
                              <Table striped bordered hover>
                              <thead>
                                <tr className='bold-text'>
                                  <th>Date</th>
                                  <th >PKG.Type</th>
                                  <th>Cost</th>
                                  <th>Sel.Months</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                            
                                { Object.keys(process_pack).map((data,id) =>(
                                
                                  <tr>
                                    
                                    <td onClick={()=>{view_pkg(process_pack[data])}}>process_event[0].created_at !== null? dateFormat(process_event[0].created_at, "mmmm dS, yyyy"):""}</td>
                                    <td onClick={()=>{view_pkg(process_pack[data])}}>{data.PACKAGE.packages_type === "CUST"?"Customized ":"Standard "} <span style={{color:'black'}}> Package</span></td>
                                    <td onClick={()=>{view_pkg(process_pack[data])}}>{process_pack[data].pack.packages_cost}</td> 
                                    <td onClick={()=>{view_pkg(process_pack[data])}}>{process_pack[data].pack.months}</td>
                                    <td onClick={()=>{view_pkg(process_pack[data])}} className='error '>{process_pack[data].pack.packages_status}</td>
                                  
                                  </tr>
                            
                            
                                ))}
                              </tbody>
                            </Table>
                                     
                            ) ):(<></>)
                          
                            }



                        {(process_pack === "No packages Available")  && (pend_pack === "No packages Available") ?(

                          <>
                            <div class="main-packages ">
                                    <div class="package-wrap">
                                        <div class="package">
                                            <h4>Standard</h4>
                                            <div class="content">
                                                <ul>
                                                    <li><i class="fa fa-check-circle"></i>3 Done-for-you Posts Per Week<br></br>(1 video, 2 pictures / posters)</li>
                                                    <li><i class="fa fa-check-circle"></i>Upto 2 Social Media Platforms</li>
                                                    <li><i class="fa fa-check-circle"></i>Post Boosting – for more views</li>
                                                    <li><i class="fa fa-check-circle"></i>1 Ad Promotion per month</li>                            
                                                    <li><i class="fa fa-check-circle"></i>All Images, Graphics Copyrighting included</li>
                                                </ul>
                                            </div>
                                            <div align="center">
                                            {sessionstorage.getItem('token') ===null ?(
                                                <>
                                            <button onClick={()=>redirecttoList("std")}>Register</button>
                                            </>
                                            ):(
                                                <>
                                            <button onClick={()=>history.push('/standard-list')}>Buy</button>
                                            </>
                                            )
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="package-wrap">
                                        <div class="package">
                                            <h4>Custom</h4>
                                            <div class="content">
                                                <ul>
                                                    <li><i class="fa fa-check-circle"></i>Register and check all our services </li>
                                                    <li><i class="fa fa-check-circle"></i>Pick the services that suits your ministry needs</li>
                                                </ul>
                                            </div>
                                            <div align="center">
                                            {sessionstorage.getItem('token') ===null ?(
                                                <>
                                            <button onClick={()=> redirecttoList("custom")}>Register</button>
                                            </>
                                            ):(
                                                <>
                                            <button onClick={()=>history.push('/customized-list')}>Buy</button>
                                            </>
                                            )
                                            }
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                            </>
                            
                  
                        ):(<></>) }



                      </div>
    
                      
                  </div>
        
        </Container>
   
      );
    
    
      function redirecttoList(type)
    {
        

        if(type === "std")
        {
            sessionstorage.setItem("list","standard-list");
            history.push('/login/standard-list');
            history.go(0);
        }
        if(type === "custom"){
            sessionstorage.setItem("list","customized-list");
            history.push('/login/customized-list');
            history.go(0);
        }
    }
      
    
      function view_pkg(pkg,type)
      {
        
        sessionstorage.setItem("pendPkg",JSON.stringify(pkg));
        history.push('/request-pkg');
        history.go(0);
      }
    
      function viewEvent(event)
      {
        
        sessionstorage.setItem("RequestEvent",JSON.stringify(event));
        history.push('/request-event');
        history.go(0);
      }

  function raiseRequest(reqType)
  {
    sessionstorage.setItem("reqType",reqType);
    history.push('/raise-request');
  }
    
   
    
    }
    