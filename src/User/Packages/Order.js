/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React,{useEffect,useMemo} from 'react';
import { Url,isLoggin,picture,imgUrl } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button, Card } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import '../../style/order.scss';
import {FiPackage} from 'react-icons/fi';
import { useHistory} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineCamera} from 'react-icons/ai'
import Pagination from '../../pages/Pagination';
import Shimmer from "react-shimmer-effect";

var sessionstorage = require('sessionstorage');

export default function Index() {

    let history = useHistory();
    const [customerInfo,setCustomerInfo] = React.useState();
    
    const[orders,setOrders] = React.useState([]);
    
    
    const [showpkg ,setpkg] = React.useState(false)
    const [packages,setPackages] = React.useState(true);

    const [loading,setLoading] = React.useState(true);
   
    const [pkgData] = React.useState([]);
    
    const [p1pkg] = React.useState([]);

    const [currentPage,setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);


    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pkgData.slice(indexOfFirstPost,indexOfLastPost);

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

  React.useEffect(() => {

    logginornot();
  },[]);



    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'getorder', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response =>  {
                // If request is good...
                
                setOrders(response.data);
                console.log("orders : ",response.data);

                response.data.map((data, idx) => {
                

                  if(data.order.order_item === "PACKAGE")
                  {
                    // setPkgData(data);
                    pkgData.push(data);

                      data.PACKAGE_details.map(d=>{
                        // console.log("p1pkg : ",d)
                        return p1pkg.push(d);
                        
                      })
                     
                  
                  }
                 
                  

                })
                if(pkgData.length !== 0 )
                {
                  setLoading(false);
                  setpkg(true);
                }
               
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

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

    useEffect(async () => {

        await getDatas();
        getInfos();

      },[]);

      console.log("pkgdaa",pkgData)
    

  return (
    <div >
   
    

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

          <div className='header-banner' style={{marginLeft:'245px'}}>
        <FiPackage color='black' className='mt-4 mx-4' size={22}/>
        <p className='header-banner-text'>Package Orders</p>
          </div>


        </div>
    
                    <div className='view-msg ' >

{console.log("pkddata",pkgData)}
                      {loading ? <><div className='align-div pwd-div mb-5'><Shimmer><div className='align-div pwd-div mb-5'> <div >Loading...</div></div></Shimmer></div></>:(
                        

                    showpkg  ? (
                                
                            <>
                 
                 <div className='align-div pwd-div mb-5'>

                    <Table striped bordered hover>
                      <thead>
                        <tr >
                          <th className='bold-text'>Date</th>
                          <th className='bold-text'>Package Type</th>
                          <th className='bold-text cost'>Cost</th>
                          <th className='bold-text'>Drive Id</th>
                          <th className='bold-text'>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                    
                        {currentPosts.map((data, idx) => 
                        
                          <tr className='pointer'>
                            
                            <td onClick={()=>{view(data,"pkg")}}>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
                            <td onClick={()=>{view(data,"pkg")}}>{data.PACKAGE.packages_type === "CUST"?"Customized ":"Standard "} <span style={{color:'black'}}> Package</span></td>
                            <td className="cost" onClick={()=>{view(data,"pkg")}}>${data.PACKAGE.packages_cost}.00</td>
                            <td >{data.order.order_status === 'R'?<span className='error'>No drive ID</span>:(<a href={data.order.drive_id} target="_blank" rel="noreferrer" style={{color:'black'}}>click here</a>)}</td>
                            <td onClick={()=>{view(data,"pkg")}}>{data.order.order_status === 'PP'?(<><span className='warning '>Payment Pending</span></>):(<></>)}
                                              {data.order.order_status === 'S'?(<><span className='green '>Success</span></>):(<></>)}
                                              {data.order.order_status === 'P'?(<><span className='warning '>Order Pending</span></>):(<></>)}
                                              {data.order.order_status === 'R'?(<><span className='error '>Rejected</span></>):(<></>)}
                            </td>
                           
                            {/* <td><RiDeleteBin6Line size={23} onClick={()=>console.log("delete")}/> </td> */}
                          </tr>
                          
                          
                        )}
                      </tbody>
                    </Table>
                    <Pagination postsPerPage={postsPerPage} totalPosts={pkgData.length} paginate={paginate}/>
                    </div>
                  </>
                  
                  ) :(<>

                        <div class="main-packages dash-packages msg-align mb-5">
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

                      </> )
                  
                      )

}
                            
                        </div>


    </Container>
</div>
  );


  function view(data,value)
  {
   
    
     let id = data.order.order_id;
     sessionstorage.setItem("orderID",JSON.stringify(data));
     sessionstorage.setItem("orderType",value);
 
     
     history.push( '/order-view');
    //  history.push('/order-payment/'+id)
     history.go(0);
  }


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
  
}
