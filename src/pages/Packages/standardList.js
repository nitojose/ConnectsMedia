import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Service from '../../components/Packages/servicelist';
import { Form } from 'react-bootstrap';
import axios from 'axios'
import { Url } from '../../GLOBAL/global';
import { Link,useHistory } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import '../../style/package.scss'
import '../../style/button.scss'
import Buttons from '../../components/Packages/Buttons';
import Parallax from 'react-rellax';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var sessionstorage = require('sessionstorage');


export default function StandardList() {

    let history = new useHistory();
    
    const [Items,setItems] =  React.useState([]);

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const [Items_1,setItems_1] =  React.useState([]);
    const [QueAns] = React.useState([]);
    const [pkg_id,setPkgId] = React.useState(0);
    const { id } = useParams();
    var selection ;

    const Questions =["Name and address of your ministry/church","How many branches do you have?","Total active members on premises?","Active online regular viewers?","How often do you live stream in a week?","What are the challenges you face right now?","What are your goals using our services?","How serious are you to take your online presence to the next level?"];


    const lists_1 = [
      {
        id:1,
        value:"In 1 year we want to expand our online reach"
      },
      {
        id:2,
        value:"We are a new church. We want to make our presence in the current location"
      },
      {
          id:3,
          value:"We are planting new churches in new locations. We want to attract new members in different areas"
      },
      {
          id:4,
          value:"All of the above"
      }
  ]
  
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
    <div className='  my-5'>
       <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
   
      
        <Container className='  py-5'>

          <h1 className='text-center'>Standard Package</h1>

         
              <div className='center text-center card-list my-5 py-5'>

                  <p className='extraRowSpace font-30'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,  </p>

                  <p className='extraRowSpace font-20 text-center'>Thsese are the services we provide : </p>
                {
                      lists.map((item,i) => (
                      <>
                        <label className='checkbox-label' key={i}>
                         
                        {i+1} {'.'} {item.value}

                    
                        </label> <br></br>
                        </>
                    ))
                    }

              </div>
                   
              
                      <div className='text-center my-5 py-5 card-list'>

                        <p className='extraRowSpace font-20'>The period of package can be selecteb by user</p>

                        <label>Number of Months : </label>&nbsp; &nbsp;

                

                        <select name="months" id="months" className='select-months' >

                            <option value="1">1 month </option>
                            <option value="2" >2 month</option>
                            <option value="3">3 month</option>
                            <option value="4">4 month </option>
                            <option value="5">5 month  </option>
                            <option value="6">6 month</option>
                            <option value="7">7 month</option>
                            <option value="8">8 month</option>
                            <option value="9">9 month</option>
                            <option value="10">10 month</option>
                            <option value="11">11 month</option>
                            <option value="12">12 month </option>

                        </select>

                      </div>


                      <div className='my-5 py-5 card-list '>
                        <Form onSubmit={handleSubmit(onSubmit)} className='mx-5 mt-5'>

           
                                <Row >

                                    <Col sm={12} md={12} xl={6} xxl={6}> 
                                        <div className='center-align'>
                                            <label>1.</label> &nbsp;&nbsp;&nbsp;<input placeholder="Name and address of your ministry/church" type="text" name="ministry" {...register("ministry" , { required: true })} className='textbox' />
                                        </div>
                                    </Col>

                                    <Col sm={12} md={12} xl={6} xxl={6}> 
                                        {/* <div className='center-align'> */}

                                            <label>2.&nbsp; How many branches do you have?</label> &nbsp;

                                            <select name="branches" {...register("branches" , { required: true })} className='select-months' >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                    
                                            </select>
                                    
                                    </Col>
                                </Row>

                                <Row className='extraRowSpace'>
                                    <Col sm={12} md={12} xl={6} xxl={6}>  
                                    
                                        <label>3. &nbsp;&nbsp;Total active members on premises?</label>&nbsp;
                                        
                                        <select name="members" {...register("members" , { required: true })} className='select-months'>
                                            <option value="not sure">Not Sure</option>
                                            <option value="1-30">1-30</option>
                                            <option value="30-60">30-60</option>
                                            <option value="60-90">60-90</option>
                                            

                                        </select>

                                    </Col>
                                    <Col sm={12} md={12} xl={6} xxl={6}>  

                                    <label>4. &nbsp;&nbsp;Active online regular viewers?</label> &nbsp;
                                        
                                        <select name="viewers" {...register("viewers" , { required: true })} className='select-months'>
                                            <option value="not sure">Not Sure</option>
                                            <option value="1-30">1-30</option>
                                            <option value="30-60">30-60</option>
                                            <option value="60-90">60-90</option>
                                            

                                        </select>
                                    </Col>
                                </Row>

                                <Row className='extraRowSpace'>
                                    <Col sm={12} md={12} xl={6} xxl={6}>
                                    <label>5. &nbsp;&nbsp;How often do you live stream in a week?</label> &nbsp;
                                        
                                        <select name="liveStream" {...register("liveStream" , { required: true })}  className='select-months'>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>

                                        </select>
                                    </Col>

                                    <Col sm={12} md={12} xl={6} xxl={6}> 
                                    <div className='center-align'>
                                        <label>6.</label> &nbsp;&nbsp; &nbsp;
                                    <textarea name="challeges" placeholder="What are the challenges you face right now?" {...register("challenges" , { required: true })} className='textbox textArea' rows={3}></textarea>  
                                    </div>
                                    </Col>

                                </Row>

                                <Row className='extraRowSpace'>
                                    

                                    <Col sm={12} md={12} xl={6} xxl={6}>
                                        <label>7.  &nbsp;&nbsp;What are your goals using our services? </label><br></br><br></br>

                                        {
                                            lists_1.map(item => (
                                            <>
                                                <label className='checkbox-label label-width'>
                                                <input
                                                    type="checkbox"
                                                    key={item.id}
                                                    value={item.id}
                                                    className='checkbox'
                                                    onChange={(e)=> handle(item.value)}
                                                    
                                                />&nbsp; {item.value}
                                                </label> <br></br>
                                                </>
                                            ))
                                        }

                                    </Col>


                                    <Col sm={12} md={12} xl={6} xxl={6}>  
                                    
                                        <label>8. &nbsp;&nbsp;How serious are you to take your online presence to the next level?</label><br></br><br></br>
                                    
                                        
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select name="online_presence" {...register("online_presence" , { required: true })} className='select-months'>
                                            <option value="SURE">HIGH. We see great potential in this approach</option>
                                            <option value="MEDIUM">MEDIUM. Exploring the options</option>
                                            <option value="LOW">LOW. Testing the waters</option>
                                        
                                        </select>

                                    </Col>


                                    
                                </Row>

                                <Row className='extraRowSpace'>
                                  <Buttons text="Submit" type="submit" />
                                    {/* <input type="submit" /> */}
                                </Row>



                        </Form>
                      </div>
             
              
        <ToastContainer/>


           
        </Container> 
    </div>
    );


                                      

    function onSubmit(data)
    {
      

      lists.map((d,id) => {
        // Items.push(d.value)
        var temp ={
            "question":d.value,
            "answer":"NULL"
        }

        QueAns.push(temp);
      })
    //   console.log("Items,",JSON.stringify(Items));
      JSON.stringify(Items);
      var months = document.getElementById("months").value;
      // console.log("months",months);
      const member_id =  sessionstorage.getItem("customerId");
      const token = sessionstorage.getItem("token");


      Questions.map(q => {
          
        if(q === "Name and address of your ministry/church")
        {
            var temp1 = {
                "question" : q,
                "answer": data.ministry
            }
             QueAns.push(temp1)
        }

        if(q === "How many branches do you have?")
        {
            var temp2 = {
                "question" : q,
                "answer": data.branches
            }
            QueAns.push(temp2)
        }

        if(q === "Total active members on premises?")
        {
            var temp3 = {
                "question" : q,
                "answer": data.members
            }
            QueAns.push(temp3)
        }
    
        if(q === "Active online regular viewers?")
        {
            var temp4 = {
                "question" : q,
                "answer": data.viewers
            }
            QueAns.push(temp4)
        }

        if(q === "How often do you live stream in a week?")
        {
            var temp5 = {
                "question" : q,
                "answer": data.liveStream
            }
           QueAns.push(temp5)
        }

        if(q === "What are the challenges you face right now?")
        {
            var temp6 = {
                "question" : q,
                "answer": data.challenges
            }
            QueAns.push(temp6)
        }

        if(q === "What are your goals using our services?")
        {
            var temp7 = {
                "question" : q,
                "answer": Items_1
            }
            QueAns.push(temp7)
        }

        if(q === "How serious are you to take your online presence to the next level?")
        {
            var temp8 = {
                "question" : q,
                "answer": data.online_presence
            }
             QueAns.push(temp8)
        }

  })
      
  
      var data1 = new FormData();

      data1.append("member_id",member_id);
      data1.append("package_type",'STD');
      data1.append("package_cost",0);
      data1.append("months",months);
    //   data1.append('package_services',JSON.stringify(Items))
    
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
        data: data1,
        headers: headers
        })
        .then(function (response) {
            //handle success
            // console.log(response);
            // setPkgId(response.data.id);
            let pkg_id = response.data.id;
            // if(response.data.message === "package stored Successfully")
            // {
            //   toast.success('Order Request has been send !!',{
            //     autoClose:3000
            //   });
            //   setTimeout(() => history.push('/home'), 3000);
            // }

            var formdata = new FormData();
      // console.log()

          formdata.append("package_id",pkg_id);
          formdata.append("package_services",JSON.stringify(QueAns));
          
            console.log(JSON.stringify(QueAns));
        
          
          
      
          
          axios({
              method: 'post',
              url: Url+'packagespec',
              data: formdata,
              headers: headers
              })
              .then(function (response) {
                  //handle success
                  console.log("response - STD",response);
                  if(response.status === 201)
                  {
                      
                      // history.push('/home');
                      toast.success("Order Request has been send !!",{
                          position:'top-right',
                          autoClose:3000,
                          closeOnClick:true
                      });
  
                      setTimeout(() => history.push('/home'), 3000);
                  }
              })
              .catch(function (response) {
                  //handle error
                  console.log(response);
              });
  

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


      
      
    //   console.log(data);
      


    
        
  }

  

    // function handleChange(event,item1) 
    // {
      
    //   var value = item1;
      
    //   var temp = {
    //     "question":value,
    //     "answer":"NULL"
    //   }

    //   Items_1.push(temp);

    // }


    function handle(item)
    {
        if(item === "All of the above")
        {
          selection = "In 1 year we want to expand our online reach , We are a new church. We want to make our presence in the current location , We are planting new churches in new locations. We want to attract new members in different areas ," + selection
        }
        else{
          selection = item +", "+ selection;
  
        }
        console.log("selection :",selection);
        setItems_1(selection);
    }



    
}
