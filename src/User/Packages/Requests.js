/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { Url,isLoggin,picture,imgUrl } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button,Card } from 'react-bootstrap';
import axios from 'axios';
// import '../../style/messages.scss';
// import '../../style/order.scss';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
import {AiOutlineCamera} from 'react-icons/ai'
import {FiPackage} from 'react-icons/fi';
import {BsFillKanbanFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import Footer from '../../components/Footer';
import Shimmer from "react-shimmer-effect";
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
  
   
    
    const [packages,setPackages] = React.useState(false);

   
    const [pend_pack,setPend_pack] = React.useState({});
   
  
    const [process_pack,setProcess_pack] = React.useState([]);
    const [customerInfo,setCustomerInfo] = React.useState();
    const [loading,setLoading] = React.useState(true);
    const [currentPage,setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);
    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts1 = Object.keys(process_pack).slice(indexOfFirstPost,indexOfLastPost)

    // const currentPosts2 = pend_pack.slice(indexOfFirstPost,indexOfLastPost);
    
    const currentPosts2 = Object.keys(pend_pack).slice(indexOfFirstPost,indexOfLastPost);  
     function paginate(pageNumber)
    {
      setCurrentPage(pageNumber);
    }

    

    
    async function getInfos()
        {
        // console.log("get cust info")
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
                
                    // console.log("getprofile",response.data.data[0]);
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
                
                
                console.log("pending",response.data.pack);    
               
                setPend_pack(response.data.pack);
                setLoading(false);
                // console.log("pack",pend_pack)
                setPackages(true);
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });


           await axios.get(Url+'processingrequest', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                 console.log("processing",response.data.pack);   
               
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


    // console.log("current2",JSON.stringify(pend_pack).slice(indexOfFirstPost,indexOfLastPost))
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
        <FiPackage color='black' className='icon-tab'/>
        <p className='header-banner-text'>Package Requests</p>
        </div>
        </div>
          </div>
          </div>
          <div className='button-background-req'></div>
          <button onClick={() => raiseRequest("Package")} className="button-raise-req">Raise a Request</button>
          

        </div>



        {/* <div className='profileBefore' >
            <img src={customerInfo === undefined ?picture :(imgUrl+customerInfo.cover_photo)} alt="cover" className='cover-img-dash' />
           
        </div> 

        <div className='row-flex-align'>

          <div className='profileDiv'>
            <div className='profileInner'>
              <img className='cover-img-dash' src={customerInfo === undefined ?picture :(imgUrl+customerInfo.photo)} alt="profile" style={{objectFit:'contain'}}/>
              


            </div>
            
          </div>

              <div className='header-banner' style={{marginLeft:'8px',width:'40%'}}>
               <FiPackage color='black' className='mt-4 mx-4' size={22}/>
                <p className='header-banner-text'>Package Request</p>
              </div>

              <div >
                <button onClick={() => raiseRequest("Package")} className="raise-req">Raise a Request</button>

              </div>
        </div> */}
           
                  
           {loading?<div className='view-msg'><div className='align-div pwd-div mb-5'><Shimmer><div className='align-div pwd-div mb-5'> <div >Loading...</div></div></Shimmer></div>
</div>:(
  // console.log("process pack in request",pend_pack) 
  (((process_pack === "No packages Available") && (pend_pack === "No packages Available")) ? (

    <div className='view-msg'>
      <div className='msg-align mb-5'>
        <div class="main-packages dash-packages">
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
        </div>
    </div>
      
    ):(

      (process_pack !== "No packages Available"? 
                           (
                      <div className='view-msg'>
                         

                          <div className='align-div pwd-div '>
                             
                              <Table striped bordered hover>
                              <thead>
                                <tr >
                                  <th className='bold-text'>Date</th>
                                  <th className='bold-text'>Package Type</th>
                                  <th className='bold-text cost'>Cost</th>
                                  <th className='bold-text'>Months</th>
                                  <th className='bold-text'>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                            
                                { currentPosts1 && currentPosts1.map((data,id) =>(
                                 
                                  <tr className='pointer' key={id}>
                                    
                                    <td onClick={()=>{view_pkg(process_pack[data])}}>{process_pack[data].pack.created_at !== null? dateFormat(process_pack[data].pack.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td onClick={()=>{view_pkg(process_pack[data])}}>{process_pack[data].pack.packages_type === "CUST"?"Customized ":"Standard "} <span style={{color:'black'}}> Package</span></td>
                                    <td className='cost' onClick={()=>{view_pkg(process_pack[data])}}>${process_pack[data].pack.packages_cost}.00</td> 
                                    <td onClick={()=>{view_pkg(process_pack[data])}}>{process_pack[data].pack.months}</td>
                                    <td onClick={()=>{view_pkg(process_pack[data])}} className='error '>{process_pack[data].pack.packages_status}</td>
                                  
                                  </tr>
                            
                            
                                ))}
                              </tbody>
                            </Table>
                            <Pagination postsPerPage={postsPerPage} totalPosts={Object.keys(process_pack).length} paginate={paginate}/>

                          </div>
                          </div>
                                     
                            )
                            :(

                              (pend_pack === "No packages Available"? <Col xxl={6} xl={6} md={12} sm={12} className='text-center align-div'></Col> :
                                 (

                                 <div className='view-msg '>
                         

                                    <div className='align-div pwd-div mb-5'>
                                  
                                    <Table striped bordered hover >
                                      <thead>
                                        <tr >
                                          <th className='bold-text'>Date</th>
                                          <th className='bold-text' >Package Type</th>
                                          {/* <th className='bold-text'>Cost</th> */}
                                          <th className='bold-text'>Months</th>
                                          <th className='bold-text'>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                    
                                        {currentPosts2 && currentPosts2.map((data,id) =>(
                                          // console.log("data",data)
                                          // console.log("id",id);
                                          <tr key={id}>
                                            
                                            <td >{pend_pack[data].pack.created_at !== null? dateFormat(pend_pack[data].pack.created_at, "mmmm dS, yyyy"):""}</td>
                                            <td >{pend_pack[data].pack.packages_type === "CUST"?"Customized ":"Standard "} <span style={{color:'black'}}>Package </span></td>
                                            {/* <td>{pend_pack[data].pack.packages_cost}</td>  */}
                                            <td>{pend_pack[data].pack.months}</td>
                                            <td className='error '>{pend_pack[data].pack.packages_status}</td>
                                          
                                          </tr>
                                    
                                    
                                        ))}
                                      </tbody>
                                      
                                    </Table>
                                   
                                    <Pagination postsPerPage={postsPerPage} totalPosts={Object.keys(pend_pack).length} paginate={paginate}/>
                                    </div>
                                    </div>                                   
                                     )) )
                
    )))
    
  
  )}
                  


                    
<Footer/>
        </Container >
   
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
    