import React,{useEffect,useState} from 'react';
import { Url,notImage } from '../../../GLOBAL/global';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var sessionstorage = require('sessionstorage');


export default function Index() {

  const[post,setpost] = useState([]);
  let history = useHistory();

    useEffect(() => {

        getMillionPosts();

      },[post!== null]);


    async function getMillionPosts()
    {
        const token = sessionstorage.getItem("token");

        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }

        await axios({
        method: 'post',
        url: Url+'getStaticPosts',
        headers: headers
        })
        .then(function (response) {
            //handle success
            // console.log(response.data);
            setpost(response.data);
            // console.log("mpost",Mpost)
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

  return (
  
    <div>
    <section className='card-list'>

    {post.map((post,id) => (
       
     
            <section className='sectionstyling'>
                <div className='Mposts' style={{backgroundColor:'azure'}}>
                <img src={post.photo === (undefined || null) ? notImage :'http://connectmedia.gitdr.com/public/'+post.photo} alt='million' width={700} height={500} style={{objectFit:'contain'}}/>
                    <div className='column-mpost'>
                    <div className='content-mpost'>
                        <h2 style={{color: '#000',padding: 10}} className='para-content'>{post.camp_title}&nbsp; :</h2>
                        <h2  className='paragrah '>&nbsp;₹ {post.camp_cost}</h2>
                    </div>
                    <div className='content-mpost-section'> 
                        <div className='' style={{backgroundColor:'azure'}}>
                            <label style={{color: '#000',padding:10}}>Number of Months : </label>
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
                        </div>
                    </div>
                    <div className='btn-section'>
                        <button className='btnstyle' onClick={(e) => purchaseCamp(e,post)}>Purchase</button>
                    </div>

                    </div>
                </div> 
            </section>
    
     
       
        ))}

    </section>
    <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
</div>
    );

    function purchaseCamp(e,mpost)
    {
        
        var months = document.getElementById("months").value;
        // console.log("months",months);

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
            console.log("mpost-res",response.data.message);
            if(response.data.message === "Created")
            {
                toast.success("Order Created !!",{autoClose:3000});
                setTimeout(() => history.push('/my-requests'),3000)

            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    }

}
