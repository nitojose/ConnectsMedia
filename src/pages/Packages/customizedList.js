import React,{useState} from 'react';
import { Container,Row,Col, Form } from 'react-bootstrap';
import Service from '../../components/Packages/servicelist';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
var sessionstorage = require('sessionstorage');

export default function CustomizedList() {
     const [months,setMonths] = React.useState();
     
   
     const [Items,setItems] =  React.useState([]);

     const lists = [
            {
              id:1,
              value:"Google Ads"
            },
            {
              id:2,
              value:"Facebook Ads"
            },
            {
              id:3,
              value:"Instagram Ads"
            },
            {
              id:4,
              value:"Youtube Ads"
            },
            {
              id:5,
              value:"Twitter Ads"
            },
            {
              id:6,
              value:"Facebook live-stream handling"
            },
            {
              id:7,
              value:"Youtube live-stream handling"
            },
            {
              id:8,
              value:"Done-for-you personalized pictures on Instagram"
            },
            {
              id:9,
              value:"Done-for-you personalized pictures on Facebook"
            },
            {
              id:10,
              value:"Done-for-you personalized pictures on Youtube"
            },
            {
              id:11,
              value:"Short videos and reels with custom graphics"
            },
            {
              id:12,
              value:"Tech Support"
            },
            {
              id:13,
              value:"Share Performance"
            },
            {
              id:14,
              value:"Advertising your upcoming events on Facebook"
            },
            {
              id:15,
              value:"Advertising your upcoming events on Instagram"
            },
            {
              id:16,
              value:"Advertising your upcoming events on Youtube"
            }
     ]

  return (
    <div>
        <Container >

   
  
            {/* <Service id="Google Ads" name="Google Ads" selected="false"/>
            <Service id="Facebook Ads" name="Facebook Ads" />
            <Service id="Instagram Ads" name="Instagram Ads" />
            <Service id="Youtube Ads" name="Youtube Ads" />
            <Service id="Twitter Ads" name="Twitter Ads" />
            <Service id="Facebook live-stream handling" name="Facebook live-stream handling" />
            <Service id="Youtube live-stream handling" name="Youtube live-stream handling" />
            <Service id="" name="Done-for-you personalized pictures on Instagram" />
            <Service id="Done-for-you personalized pictures on Facebook" name="Done-for-you personalized pictures on Facebook" />
            <Service id="Done-for-you personalized videos on Instagram" name="Done-for-you personalized videos on Instagram" />
            <Service id="Done-for-you personalized videos on Facebook" name="Done-for-you personalized videos on Facebook" />

            <Service id="Short videos and reels with custom graphics" name="Short videos and reels with custom graphics" />

            <Service id="Tech Support" name="Tech Support" />
            <Service id="Share Performance" name="Share Performance" />
            <Service id="Advertising your upcoming events on Facebook" name="Advertising your upcoming events on Facebook" />

            <Service id="Advertising your upcoming events on Instagram" name="Advertising your upcoming events on Instagram" />

            <Service id="Advertising your upcoming events on Youtube" name="Advertising your upcoming events on Youtube" /> 
            */}

    <Form >

          {
            lists.map(item => (
             <>
                <label>
                  <input
                    type="checkbox"
                    key={item.id}
                    value={item.id}
                    onChange={(e)=> handleChange(e,item.value)}
                  /> {item.value}
                </label> <br></br>
                </>
            ))
          }

            <br></br>

            <div >
        <label>Number of Months : </label>&nbsp; &nbsp;

        <select id="months" required={true} >
          <option value="1" >1 month</option>
          <option value="2" >2 month</option>
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


      <button type='button' onClick={handleSubmit} >Submit</button>
              
    </Form>

       
        </Container> 
    </div>
    );



    function handleChange(event,item1) 
    {
      var id = event.target.value;
      var value = item1;
      
      var temp = {
        "name":value
      }

      Items.push(temp);

    }


    function handleSubmit()
    {
        console.log("Items,",JSON.stringify(Items));
        JSON.stringify(Items);
        var months = document.getElementById("months").value;
        // console.log("months",months);
        const member_id =  sessionstorage.getItem("customerId");
        const token = sessionstorage.getItem("token");
        console.log("mid",member_id);
    
        var data = new FormData();

        data.append("member_id",member_id);
        data.append("package_type",'CUST');
        data.append("package_cost",1);
        data.append("months",months);
        data.append('package_services',JSON.stringify(Items));
      
      
        
        const headers ={
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
    
        
        axios({
            method: 'post',
            url: Url+'Package',
            data: data,
            headers: headers
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    
   
    
}
