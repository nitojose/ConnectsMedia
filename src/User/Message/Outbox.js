import React,{useEffect} from 'react';
import { Container,Row,Col,Table,Dropdown } from 'react-bootstrap';
import { Url,isLoggin,picture } from '../../GLOBAL/global';
import axios from 'axios';
import '../../style/messages.scss';
import dateFormat from 'dateformat';
import { useHistory,Link} from "react-router-dom";
import { FcLeftDown,FcRightUp } from "react-icons/fc";
import Parallax from 'react-rellax'
import {FaArrowUp} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import {FiMoreVertical} from 'react-icons/fi'
import {AiOutlineCamera} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'
import 'react-toastify/dist/ReactToastify.css';
var sessionstorage = require('sessionstorage');

export default function Index() {
    let history = useHistory();
    const [length,setLength] = React.useState(0);
    
    const [allmessages,setAlmessages]= React.useState([{}]);
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
    },[]);
  
   

    useEffect(() => {

        getDatas();
        getInfos();

      },[allmessages!== null]);


    async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");

            // get all messages where msg_type = "I"

            await axios.get(Url+'getmessages', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                console.log("outbox",response.data.inbox.data);
                setAlmessages(response.data.inbox.data);
                setLength(response.data.inbox.data.length)
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

    
  return (
      <>      
      
    <div>

   
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
              <FaArrowUp color='black' className='mt-4 mx-4' size={22}/>
              <p className='header-banner-text'>Outbox</p>
            </div>


            </div>
            
                        <div className='view-msg ' >
                           

                            {length >0 ?(
                            
                          <>
                          <div className='msg-align'>

                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th >Message</th>
                                <th>From</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                           
                              {allmessages.map((data, idx) => 
                                  data.msg_status === "NotRead" ? (
                                    <tr className='bold-text'>
                                    <td onClick={() => msgView(data)}>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td onClick={() => msgView(data)}>{data.msg_user}</td>
                                    <td onClick={() => msgView(data)}>{data.msg_type === "A"?"Admin":""}</td>
                                    <td onClick={() => msgView(data)}>{data.msg_status}</td>
                                    <td>
                                    
                                <RiDeleteBin6Line size={23}/>
                                </td>
                                    </tr>
                                      ):(
    
                                        <tr>
                                    <td onClick={() => msgView(data)}>{data.created_at !== null? dateFormat(data.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td onClick={() => msgView(data)}>{data.msg_user}</td>
                                    <td onClick={() => msgView(data)}>{data.msg_type === "A"?"Admin":""}</td>
                                    <td onClick={() => msgView(data)}>{data.msg_status}</td>
                                    <td>
                                    
                                <RiDeleteBin6Line size={23}/>
                                </td>
                                    </tr>
    
                                      )
                                    
                                  
                              )}
                            </tbody>
                          </Table>
                        </div>
                          </>
                            ):(<><div className='text-center align-div '> <p className='error-card '>No Messages</p></div></>)}
                        </div>
                

        </Container>
        <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
    </div>
    </>

    );


    function msgView(data)
    {
      sessionstorage.setItem("msgview",JSON.stringify(data));
      history.push('/message/msgView');
      history.go(0);
    }
    

    function viewall(data)
    {
       
      var msg = document.getElementById('message').value;
      const token = sessionstorage.getItem("token");
      const customer_id = sessionstorage.getItem("customerId");

      var formdata = new FormData();

      


      formdata.append("customer_id",customer_id);
      formdata.append("order_id",0);
      formdata.append("message",msg);
      formdata.append("msg_parentmsg",data.msg_id);
      formdata.append("msg_type",'R');


      const headers ={
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
      }

      axios({
      method: 'post',
      url: Url+'Message',
      data:formdata,
      headers: headers
      })
      .then(function (response) {
                  //handle success
          console.log(response.data);
          toast.success("Message Sent !! ",{autoClose:2000});
          setTimeout(() => history.push('/dashboard'),2000);
         
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
 

  
    }

}
