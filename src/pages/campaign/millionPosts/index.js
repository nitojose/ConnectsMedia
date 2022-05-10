import React,{useEffect,useState} from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import axios from 'axios'
import { Url ,notImage,isLoggin} from '../../../GLOBAL/global';
import '../../../style/Mposts.scss'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-toastify/dist/ReactToastify.css';
var sessionstorage = require('sessionstorage');



export default function Index() {

    const[Mpost,setMpost] = useState([]);
    let history = useHistory();

    useEffect(() => {
        logginornot();
        getMillionPosts();

      },[Mpost!== null]);

  

 async function logginornot()
  {
    const cust =  await isLoggin();
    console.log("cust",cust);
    if(cust === null)
    {
      history.push('/login');
    }
    

  }

    async function getMillionPosts()
    {
        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }

        await axios({
        method: 'post',
        url: Url+'getMillionPosts',
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log("mpost",response.data);
            setMpost(response.data);
            // console.log("mpost",Mpost)
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

  return (
      <>
    <div style={{marginTop:100}}>
        <Container>
        <Row style={{marginLeft:'1.3rem'}}>
            {Mpost.map((mpost,id) => (
                <Col xl={6} sm={12} md={12} xxl={6} >
                    <div className='mpost-div'>
                        <img src={mpost.photo === (undefined || null) ? notImage :('http://connectmedia.gitdr.com/public/'+mpost.photo)} alt='million' className='img-card-post'/>

                        <div className='inner-div'>
                            <h1 className='text-center'>{mpost.camp_title}</h1>
                            <p>{mpost.camp_desc}</p>
                            {/* <p>Cost : $<span className='bold-text'>{mpost.camp_cost}</span></p> */}

                            
                            
                        </div>

                        <div className='months'>
                                <div>Cost : $<span className='bold-text'>{mpost.camp_cost}</span></div>
                                <label >Number of Months : </label>
                                <select className='btnstyle' id="months" required={true} >
                                    <option value="1">1 month</option>
                                    <option value="2">2 month</option>
                                    <option value="3">3 month</option>
                                    <option value="4">4 month</option>
                                    <option value="5">5 month</option>
                                    <option value="6">6 month</option>
                                    <option value="7">7 month</option>
                                    <option value="8">8 month</option>
                                    <option value="9">9 month</option>
                                    <option value="10">10 month</option>
                                    <option value="11">11 month</option>
                                    <option value="12">12 month</option>
                                </select>
                                <button className='align-center ' onClick={(e) => purchaseCamp(e,mpost)}>Purchase</button>
                                
                            </div>
                        
                        
                    </div>
                    
                </Col>
                 ))}
            </Row>

        </Container>
  

        <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
    </div>
    </>

    );

    function purchaseCamp(e,mpost)
    {
        
        console.log("mpost",mpost)
        var months = document.getElementById("months").value;
        console.log("months",months);

        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        var formdata = new FormData();



        formdata.append("customer_id",customer_id);
        formdata.append("event_id",mpost.camp_id);
        formdata.append("order_item","CAMPAIGN");
        formdata.append("order_amt",mpost.camp_cost);
        formdata.append("months",months);

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'post'
        }

        axios({
        method: 'post',
        url: Url+'Event_order',
        data:formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            console.log("mpost-res",response.data);
            if(response.data.message === "Created")
            {
                toast.success("Order Created !!",{autoClose:3000});
                sessionstorage.setItem("campOrder",JSON.stringify(response.data));
                setTimeout(() => history.push('/payment-form'),3000);

            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }

}
