import React from 'react'
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,Button,Modal,Spinner } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,imgUrl } from '../../GLOBAL/global';
import axios from 'axios';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';
import Parallax from 'react-rellax';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var sessionstorage = require('sessionstorage');

export default function EachRequest() {

   
    const pkgData =  JSON.parse(sessionstorage.getItem("pendPkg"))
    console.log("pkgdata",pkgData)

    const[payBtn,setPayBtn] =React.useState(false);
    const [subOrder,setSubOrder] = React.useState([]);
    const [subId,setSubId] = React.useState();
    const [Order,setOrder] =React.useState({});
    const [spinner,setSpinner] = React.useState(false);
    const [pkgReject,setPkgReject] = React.useState(false);

    let history = useHistory();
   
  return (
    
    <div>
       <Parallax speed={5}>
        <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
              objectFit:'cover'
          }}/>

       </Parallax>
         
                                    <Container>

                                        <div className='vertical-text '>
                                            <p>PACKAGE</p>
                                        </div>
                                        <div className='sec-pkg-section mt-5'>
                                            <div className=' '>
                                                <h2>{pkgData.pack.packages_type === "STD" ? "STANDRAD ":"CUSTOMIZED "}<span className='warning'>PACKAGE</span></h2>
                                                <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                            </div>
                                            <p className='heading bold-text py-3'>Package Details</p>
                                            <p>Package Cost : <span className='bold-text'>{pkgData.pack.packages_cost}</span></p>
                                            <p>Selected Months : <span className='bold-text'>{pkgData.pack.months}</span></p>
                                            <p>Drive Id : <a href={pkgData.pack.drive_id} target="_blank" rel="noreferrer">click here</a></p>

                                            <p className='heading bold-text py-3'>{pkgData.spec.length === 0 ? '':"Specifications"}</p>
                                            {
                                                pkgData.spec &&
                                              pkgData.spec.map((p,id)  =>
                                                <div className=''>
                                                    <p>{p.pspec_text}</p>
                                                    <p>{p.pspec_ans}</p>

                                                </div>
                                            )}
                                            
                                            <p className='heading bold-text py-3'>{pkgData.question.length ===0 ? "":'Questionnaire'}</p>
                                            {pkgData.question && pkgData.question.map((d,id) =>
                                            
                                            
                                            <>
                                            
                                            <Row >
                                                <Col xxl={6} xl={6} md={6} sm={6} > 
                                                    <p>{d.pspec_text}</p>
                                                </Col>

                                                <Col xxl={6} xl={6} md={6} sm={6}> 
                                                    <p className='text-end'>{d.pspec_ans}</p> 
                                                </Col>
                                                <hr></hr>
                                            </Row>
                                            </>

                                            )}
                                               

                                        </div>

                                        <div>
                                            {pkgData.pack.packages_status === "Processing"?(<div className='space-between'>
                                                <><Button variant="light" className="px-5" onClick={()=>accept()}>Accept</Button> {(!spinner === false) && <Spinner animation="border" style={{marginLeft:'-21rem',color:'black'}}></Spinner>}</>

                                                <><Button variant="light" className="px-5" onClick={()=>reason()}>Reject</Button> 
                                                {(!spinner === false) && <Spinner animation="border" style={{marginLeft:'-21rem',color:'black'}}></Spinner>} 
                                                {pkgReject && <>Select Reason : <select id="reason" onChange={()=>reject()}>
                                                        <option value="select">Select Reason</option>
                                                        <option value="Not Intrested">Not Intrested</option>
                                                        <option value="Need to Add/Remove features">Need to Add/Remove features</option>
                                                        <option value="Change of mind">Change of mind</option>
                                                        <option value="Decided for alternative product">Decided for alternative product</option>
                                                        </select></>
                                                        
                                                }</></div>):(<></>)}
                                        </div>


                                        {payBtn && Order.order_status === "PP"? 
                                        (<>
                                        {subOrder && subOrder.map((s,id) =>(
                                            <table className="table table-striped table-light mx-5 my-5 ">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th scope="col">Bill Id</th>
                                                                <th scope="col">Bill Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col"></th>   
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                         <tr>
                                                                    <td >{s.sorder_id}</td>
                                                                    <td >{s.sorder_billdt}</td>
                                                                    <td >{s.sorder_status === "Invoiced" ? (<span className='bold-text green'>{s.sorder_status}</span>):(<span className='bold-text'>{s.sorder_status}</span>)}</td>
                                                                    <td>{s.sorder_status === "Invoiced"? (<><Button variant="light "  className='mx-2' onClick={()=>paynow(s.sorder_id,pkgData.pack.packages_cost,Order.order_id)}>pay Now</Button></>):(<></>)}</td>
                                                                </tr>
                                                           
                                                            
                                                                        
                                                                        
                                                    </tbody>
                                                </table>
                                                ))
                                            }
                                        </>):(<></>)}

                                       

                                  
                                        </Container>
                      
                
         
                    </div>

  )

  function accept()
  {

    setSpinner(true)
    const token = sessionstorage.getItem("token");
    const customer_id =  sessionstorage.getItem("customerId");

    const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'POST'
      }

            let data = new FormData();

            data.append("package_id",pkgData.pack.packages_id);
            data.append("customer_id",customer_id);
            data.append("cost",pkgData.pack.packages_cost);
            data.append("months",pkgData.pack.months)
            data.append("status","S");
            data.append("reason","accepted");
            console.log("accept")
            axios({
                method: 'post',
                url: Url+'packageorder',
                data: data,
                headers: headers
                })
                .then(function (response) {
                    //handle success
                    console.log("response",response); 
                    setSpinner(false)

                    if(response.data.message === "Mail Send Successfully." )
                    {
                        console.log("gello")
                        let data1 = new FormData();
                        data1.append("customer_id",customer_id);
                        data1.append("item_id",pkgData.pack.packages_id);
                        data1.append("item","PACKAGE")
                       

                    axios({
                        method: 'post',
                        url: Url+'getorderbyid',
                        data: data1,
                        headers: headers
                        })
                        .then(function (response) {
                            //handle success
                            console.log("pkg /event order",response.data); 
                            setSubOrder(response.data.suborder);
                            setOrder(response.data.order);
                            setPayBtn(true);
                           
                           
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });

                    }

                    
                        
                   
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                    setPayBtn(true);
                });
  }

  function reason()
  {
    // setSpinner(true);
    setPkgReject(true);

  }

  function reject()
  {
    setSpinner(true);
    console.log("select")
    // var r = reason();

    const token = sessionstorage.getItem("token");
    const customer_id =  sessionstorage.getItem("customerId");

    var e = document.getElementById("reason");
    console.log("reason1",e);
    var reason = e.options[e.selectedIndex].value;

    console.log("reason2",reason);

   

    const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'POST'
    }

    let data = new FormData();
        data.append("package_id",pkgData.pack.packages_id);
            data.append("customer_id",customer_id);
            data.append("cost",pkgData.pack.packages_cost);
            data.append("status","R");
            data.append("reason",reason);


            axios({
                method: 'post',
                url: Url+'packageorder',
                data: data,
                headers: headers
                })
                .then(function (response) {
                    //handle success
                    setSpinner(false);
                    console.log("response",response); 
                    toast.success('order Rejected !!',{autoClose:3000})
                     history.push('/home');
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                    toast.success('order Rejected !!',{autoClose:3000})
                     history.push('/home');
                });

  }

  function paynow(subId,cost,orderid)
    {
        setSubId(subId);
        console.log("clicked")
        sessionstorage.setItem("subId",subId);
        sessionstorage.setItem("amount",cost);
        sessionstorage.setItem("orderId",orderid);
        console.log("payment")
        history.push('/payment-form');
        history.go(0);
    }

    
}
