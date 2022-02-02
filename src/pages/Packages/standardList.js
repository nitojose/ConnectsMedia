import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Service from '../../components/Packages/servicelist';
import { Form } from 'react-bootstrap';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';

var sessionstorage = require('sessionstorage');


export default function StandardList() {

   
    const [Items,setItems] =  React.useState(new Map());
  
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
        }
    ]

  return (
    <div>
        <Container >

{/*     
            <Service id="Google Ads" name="Google Ads" />
            <Service id="Facebook Ads" name="Facebook Ads" />
            <Service id="Instagram Ads" name="Instagram Ads" />
            <Service id="Youtube Ads" name="Youtube Ads" />
            <Service id="Twitter Ads" name="Twitter Ads" /> */}

<Form  >

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

                

                <select name="months" id="months" >
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
      Items.set(id,value);
      // console.log(Items);

    }


     function handleSubmit()
    {
        
        console.log("Items,",Items);
        var months = document.getElementById("months").value;
        // console.log("months",months);
        const member_id =  sessionstorage.getItem("customerId");
        const token = sessionstorage.getItem("token");
        console.log("mid",member_id);
    
        var data = new FormData();

        data.append("member_id",member_id);
        data.append("package_type",'STD');
        data.append("package_cost",0);
        data.append("months",months);
        data.append('package_services',Items)
      
        // for (var value of data.values()) {
        //     console.log(value); 
        // }  
        
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
