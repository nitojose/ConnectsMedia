import React from 'react'
import { Container,Row,Col,Table,Button, Card } from 'react-bootstrap';
import { useHistory} from "react-router-dom";
import {Url,isLoggin,picture} from '../../GLOBAL/global';
import {AiOutlineCamera} from 'react-icons/ai';
import {MdCampaign} from 'react-icons/md';
import axios from 'axios'
var sessionstorage = require('sessionstorage');

export default function Index() {

    const [customerInfo,setCustomerInfo] = React.useState();

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
        getcustomerInfo();

    },[]);


    async function getcustomerInfo()
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



    let history = new useHistory();
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

                    <div className='header-banner' style={{marginLeft:'245px'}}>
                    <MdCampaign color='black' className='mt-4 mx-4' size={22}/>
                    <p className='header-banner-text'>Campaign List</p>
                    </div>

                </div>


                <div className='view-msg'>
                    <div id="campaigns" style={{borderRadius:'8px'}}>
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

                                        <li>
                                        <h2>Missions</h2>
                                        <img src={require('../../../src/assets/imgs/stand-mic.png')} alt="Million Post - Mic"/>
                                            <span>Click below to support missionaries from across the globe</span>
                                        {/* <div><button>Start Here</button></div> */}

                                            {sessionstorage.getItem('token') ===null ?(
                                                                    <>
                                                                    <button onClick={()=> redirectto("million")}>Register to start</button>
                                                                    </>
                                                                    ):(
                                                                        <>
                                                                    <button onClick={()=>history.push('/million-posts')}>Start Here</button>
                                                                    </>
                                                                    )
                                                                }
                                    </li>


                                        <li>
                                        <h2>Strengthening Marriage</h2>
                                        <img src={require('../../../src/assets/imgs/strengthen-marriage.png')} alt="Strengthening Marriage"/>
                                            <span>Register and support for this special campaign and we will keep on posting inspirational content and bible scriptures, about togetherness and marriage on social media</span>
                                        

                                                                {sessionstorage.getItem('token') ===null ?(
                                                                    <>
                                                                    <button onClick={()=> redirectto("million")}>Register to start</button>
                                                                    </>
                                                                    ):(
                                                                        <>
                                                                    <button onClick={()=>history.push('/million-posts')}>Start Here</button>
                                                                    </>
                                                                    )
                                                                }
                                    </li>
                                        <li>
                                        <h2>Youth Section</h2>
                                        <img src={require('../../../src/assets/imgs/youth.png')} alt="Praying Youth"/>
                                            <span>Register for this special campaign to engage our future generation with youthful Christian content on social media</span>
                                                            {sessionstorage.getItem('token') ===null ?(
                                                                    <>
                                                                    <button onClick={()=> redirectto("static")}>Register to start</button>
                                                                    </>
                                                                    ):(
                                                                        <>
                                                                    <button onClick={()=>history.push('/staticPosts')}>Start Here</button>
                                                                    </>
                                                                    )
                                                                }
                                    </li>
                                        <li>
                                        <h2>Pray For Israel</h2>
                                        <img src={require('../../../src/assets/imgs/israel.png')} alt="Pray for Israel"/>
                                            <span>God loves Israel. So do we. Bible clearly mentions – “Pray for the peace of Jerusalem. May they prosper who love you”. We are creating an opportunity for you to bless Israel & Jerusalem. We will optimize videos and posters and publish on your behalf. Prosper!
                                        </span>
                                                            {sessionstorage.getItem('token') ===null ?(
                                                                    <>
                                                                    <button onClick={()=> redirectto("static")}>Register to start</button>
                                                                    </>
                                                                    ):(
                                                                        <>
                                                                    <button onClick={()=>history.push('/staticPosts')}>Start Here</button>
                                                                    </>
                                                                    )
                                                                }
                                    </li>
                                        <li>
                                        <h2>Evangelism</h2>
                                        <img src={require('../../../src/assets/imgs/evangelism.png')} alt="Evangelism"/>
                                            <span>Great opportunity to share the gospel while you are busy.
                                    Register, and we will keep on posting word of God on social media ON YOUR NAME.
                                        </span>
                                                            {sessionstorage.getItem('token') ===null ?(
                                                                    <>
                                                                    <button onClick={()=> redirectto("static")}>Register to start</button>
                                                                    </>
                                                                    ):(
                                                                        <>
                                                                    <button onClick={()=>history.push('/staticPosts')}>Start Here</button>
                                                                    </>
                                                                    )
                                                                }
                                    </li>
                                        </ul>
                                    </div>
                    </div>
                </div>

            </Container>
  )

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

