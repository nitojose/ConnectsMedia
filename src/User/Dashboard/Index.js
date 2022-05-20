/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../style/dashboard.scss';
import {FaShoppingBag} from 'react-icons/fa';
import {MdPendingActions,MdDashboard} from 'react-icons/md';
import {CgUserAdd} from 'react-icons/cg';
import axios from 'axios';
import {Url,isLoggin,picture,imgUrl} from '../../GLOBAL/global';
import { useHistory,Link} from "react-router-dom";
import {MdAddPhotoAlternate} from 'react-icons/md';
import {AiOutlineCamera,AiOutlineClose,AiOutlineDelete} from 'react-icons/ai';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

var sessionstorage = require('sessionstorage');

export default function Index() {
    console.log("dash");
    const history = new useHistory();

    const[orderCount,setOrderCount] = React.useState();
    const[pendCount,setpendCount] = React.useState();
    const[processCount,setprocessCount] = React.useState();
    const [customerInfo,setCustomerInfo] = React.useState();

    const [profileUpload,setProfileupload] = React.useState({});
    const [coverUpload,setCoverupload] = React.useState({});
    const [profilepic ,viewProfilepic] = React.useState(false);

    console.log("first")
   async function logginornot()
    {
      console.log("login")
      const cust =  await isLoggin();
      console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
    }

    React.useEffect( async() => {
      console.log("useeffect")
      logginornot();
     

     

      getDatas();

      

      await getUserInfo();
      

    },[]);

    async function getUserInfo()
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
      console.log("second")

      const token = sessionstorage.getItem("token");
      const customer_id = sessionstorage.getItem("customerId");
        await axios.get(Url+'ordercount', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
        .then(response => {
            // If request is good...
            console.log(response.data);
            setOrderCount(response.data.count);
            setpendCount(response.data.Pending_count);
            setprocessCount(response.data.Process_count);
            // setAlmessages(response.data.data);
            // setLength(allmessages.length)
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }

    function viewProfile()
    {
        viewProfilepic(true);

    }

    function changePic()
    {

    }

    function deletePic()
    {

    }
  return (
    <>

    
   <Container >
      <div className='header-banner dash-header' style={{marginLeft:'245px',width:'80%',marginTop:'2rem'}}>
        <MdDashboard color='black' className='mt-4 mx-4' size={22}/>
        <p className='header-banner-text'>Welcome <span className='ministry'>{customerInfo === undefined ? "" : customerInfo.cust_ministry}</span></p>
      </div>

      <div className='profileBefore'  >

       

            {Object.keys(coverUpload).length === 0 ? (<img src={customerInfo === undefined ?picture :(imgUrl+customerInfo.cover_photo)}  className='cover-img-dash pointer'/>):(<><img src={coverUpload?coverUpload : picture} className='cover-img-dash' /></>)}

            <div className='cover-camera'>
                <label htmlFor="cover-image"><AiOutlineCamera  size={24} className="pointer" /></label> 

                <input type="file" onChange={(e) => filechoose(e,"cover")} className="filetype"  id="cover-image"/>
            </div>
        </div>   

    
        <div className='row-flex-align' style={{marginTop:'5rem'}}>

            <div className='profileDiv'>
              <div className='profileInner'>
               
                {Object.keys(profileUpload).length === 0 ? (<img alt="profile" src={customerInfo === undefined ? picture :(imgUrl+customerInfo.photo)} onClick={()=>viewProfile()} style={{objectFit:'contain'}} className="pointer" />):(<><img alt="profile" src={profileUpload?profileUpload : picture} /></>)}

                <div className='img-camera'>
                    <label htmlFor="group_image"><AiOutlineCamera className='pointer' size={24} /></label> 
        
                    <input type="file" onChange={(e) => filechoose(e,"profile")} className="filetype" id="group_image"/>
                </div>  


              </div>
              
            </div>
     
       
                <div className='dash-card' id="dashcard1">
                <p className='dash-text '>Active Orders</p>
                    <div className=''>
                    <p className=' number-text '>{orderCount}</p>
                    </div>
                
                <div className='dash-band'>
                    <FaShoppingBag size={18} className='mx-3 mt-3'/>
                </div>

                </div>
        
                <div className='dash-card' id="dashcard2">
                <p className='dash-text '>Pending Orders </p>

                <div className=''>
                    <p className=' number-text '>{pendCount}</p>
                    </div>

                    <div className='dash-band'>
                        <MdPendingActions size={18} className='mx-3 mt-3'/>
                    </div>

                </div>
        
        
                <div className='dash-card' id="dashcard3">
                <p className='dash-text '>Processing Orders</p>
                    <div className=''>
                    <p className=' number-text '>{processCount}</p>
                    </div>

                    <div className='dash-band'>
                    <CgUserAdd size={18} className='mx-3 mt-3' />
                    </div>    

                </div>
            </div>


            <div className='view-msg mt-5 '>
                <div className='align-div pwd-div'>
                <h1 className=' font-20 py-3 text-center'>Video</h1>
                     <div className='space-between'>
                     <img src={require('../../assets/imgs/bg.jpg')} alt="video section" />
                     </div>
                    
                </div>
            </div>      

   
        <div className='view-msg mt-5 '>
                <div className='align-div pwd-div'>
                    <h1 className=' font-20 py-3 text-center'>Packages</h1>

                    <div class="main-packages  dash-packages pb-3">
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
           
        <div className='view-msg mt-5 mb-5'>
                <div className='align-div pwd-div'>
                   
                    <div id="campaigns" style={{borderRadius:'8px'}}>
                    
                                        <div>
                                        <h1 className=' font-20 text-center'>Campaigns</h1>
                                        <ul>

                                        <li>
                                            <h2>Upcoming Event</h2>
                                            <img className='mt-3' src={require('../../../src/assets/imgs/mike.png')} alt="Campaigns for Upcoming Events"/>
                                            <span className='mt-3'>Share your calendar here. We will pick all your future events from here</span>
                                    
                                                    {sessionstorage.getItem('token') ===null ?(
                                                        <>
                                                        <button onClick={()=> redirectto("event")} className='mt-3'>Register to start</button>
                                                        </>
                                                        ):(
                                                            <>
                                                        <button onClick={()=>history.push('/events-creation')} className='mt-3'>Start Here</button>
                                                        </>
                                                        )
                                                    }
                                    </li>

                                        <li>
                                        <h2>Missions</h2>
                                        <img className='mt-3' src={require('../../../src/assets/imgs/stand-mic.png')} alt="Million Post - Mic"/>
                                            <span className='mt-3'>Click below to support missionaries from across the globe</span>
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
                                            <span className='mt-3'>Register and support for this special campaign and we will keep on posting inspirational content and bible scriptures, about togetherness and marriage on social media</span>
                                        

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
                                            <span className='mt-3'>Register for this special campaign to engage our future generation with youthful Christian content on social media</span>
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
                                        <img className='mt-3'src={require('../../../src/assets/imgs/israel.png')} alt="Pray for Israel"/>
                                            <span className='mt-3'>God loves Israel. So do we. Bible clearly mentions – “Pray for the peace of Jerusalem. May they prosper who love you”. We are creating an opportunity for you to bless Israel & Jerusalem. We will optimize videos and posters and publish on your behalf. Prosper!
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
                                        <img src={require('../../../src/assets/imgs/evangelism.png')} alt="Evangelism" className='mt-3'/>
                                            <span className='mt-3'>Great opportunity to share the gospel while you are busy.
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
                    </div>
                </div>

                {profilepic === true &&

                    confirmAlert({

                        customUI: ({onClose}) => {
                            return (
                                <div className='profile-pic-view '>
                                    <img alt="profile" src={customerInfo === undefined ? picture :(imgUrl+customerInfo.photo)} onClick={()=>viewProfile()} style={{objectFit:'contain'}}  />

                                    <AiOutlineClose className='Ai-close pointer' onClick={()=>onClose()} size={35}/>
                                    

                                    <div >
                                    
                                        <AiOutlineDelete className='pointer mx-5' size={24} onClick={()=>deletePic()}/>
                                        <label htmlFor="changepic"><AiOutlineCamera className='pointer mx-5' size={24} /></label> 

                                        <input type="file" onChange={(e) => filechoose(e,"profile")} className="filetype" id="changepic"/>
                                    </div>
                                    
                                            
                                </div>

                            );
                            
                        }
                    })

                }      
               
            <ToastContainer  position="top-center"  style={{marginTop:'50vh'}}/>
     
   </Container>
    
   </>
  )
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

     function filechoose(e,pic)
    {
        viewProfilepic(false);
      
        const token = sessionstorage.getItem("token");
        
        let formdata = new FormData();
        const customer_id = sessionstorage.getItem("customerId");

        formdata.append("customer_id",customer_id);
        formdata.append("photo",e.target.files[0]);
        
        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }


            if(pic === "profile")
            {
                setProfileupload(URL.createObjectURL(e.target.files[0]));

                 axios({
                method: 'post',
                url: Url+'profilephoto',
                data: formdata,
                headers: headers
                })
                .then(function (response) {
                    console.log("file upload",response.data);
                    if(response.data.photo !== "")
                    {
                        toast.success('Profie picture Updated!..',3000);
                        setTimeout(()=>history.go(0),3000);
                    }
                    
                    
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
            }
            else
            {

                setCoverupload(URL.createObjectURL(e.target.files[0]));
                 axios({
                    method: 'post',
                    url: Url+'coverphoto',
                    data: formdata,
                    headers: headers
                    })
                    .then(function (response) {
                         console.log("file upload",response.data);
                        if(response.data.photo !== "")
                        {
                            toast.success('Cover picture Updated!..',3000);
                        }
                        
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
            }
        
    }
}
