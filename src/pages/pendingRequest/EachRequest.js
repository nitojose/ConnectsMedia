import React from 'react'
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,Button,Spinner } from 'react-bootstrap';
import '../../style/order.scss'
import { Url,imgUrl,isLoggin } from '../../GLOBAL/global';
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
    const [condition ,setCondition] = React.useState(false);
    const [rejectbtn,setrejectbtn] = React.useState(false);

    let history = useHistory();

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

    
  return (
    
                    <div className='pkg-req-section'>
      
                                    <Container className='padding-bottom-5rem'>

                                        <div className='vertical-text-pkg '>
                                            <p>PACKAGE</p>
                                        </div>

                                        <div className='sec-pkg-section '>
                                            <div className=' '>
                                                <h2>{pkgData.pack.packages_type === "STD" ? "STANDRAD ":"CUSTOMIZED "}<span className='warning'>PACKAGE</span></h2>
                                                <p className='font-12'><span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </span></p>
                                            </div>

                                            <hr></hr>
                                            <p className='heading bold-text py-3'>Package Details</p>
                                            <p>Package Cost : <span className='bold-text'>{pkgData.pack.packages_cost}</span></p>
                                            <p>Selected Months : <span className='bold-text'>{pkgData.pack.months}</span></p>
                                           {pkgData.pack.drive_id ? (<p>Drive Id : <a href={pkgData.pack.drive_id} target="_blank" rel="noreferrer">click here</a></p>):(<></>)} 

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


                                        <div >
                                       
                                                
                                            {Order.order_status === "PP" ? (<></>) :(
                                                <>
                                                <div className='space-between '>

                                                    {<Button variant="light" className="px-5" onClick={()=>accept()}>Accept</Button> }
                                                        
                                                    

                                                    {(!spinner === false) && <Spinner animation="border" style={{marginLeft:'-21rem',color:'black'}}></Spinner>}

                                                    { <Button variant="light" className="px-5" onClick={()=>reason()}>Reject</Button>}

                                                
                                                
                                                    
                                                </div>
                                                </>
                                            )} 

                                                {pkgReject &&( 
                                                    <div className='space-between'><select id="reason" className='select-months' onChange={()=>reject()}>
                                                            <option value="">Select Reason</option>
                                                            <option value="Not Intrested">Not Intrested</option>
                                                            <option value="Need to Add/Remove features">Need to Add/Remove features</option>
                                                            <option value="Change of mind">Change of mind</option>
                                                            <option value="Decided for alternative product">Decided for alternative product</option>
                                                            </select>&nbsp;&nbsp;

                                                            <label> OR </label>
                                                            <textarea type="text" id="reason-text" rows={5} className='msg-text mx-3 px-2' placeholder=' type your reject reason' ></textarea> 
                                                            <button onClick={() => reject()}>Submit</button>
                                                    </div>)
                                                        
                                                }
                                        </div>

                                    <Container className='padding-8rem '>
                                        {payBtn && Order.order_status === "PP"? 
                                        (<>
                                                {subOrder &&
                                            <table className="table table-striped table-light mt-5 ">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th scope="col">Bill Id</th>
                                                                <th scope="col">Bill Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col"></th>   
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            { subOrder.map((s,id) =>(
                                            
                                                         <tr className='pointer'>
                                                                    <td >{s.sorder_id}</td>
                                                                    <td >{s.sorder_billdt}</td>
                                                                    <td >{s.sorder_status === "Invoiced" ? (<span className='bold-text green'>{s.sorder_status}</span>):(<span className='bold-text'>{s.sorder_status}</span>)}</td>
                                                                    <td>{s.sorder_status === "Invoiced"? (<><Button variant="light "  className='mx-2' onClick={()=>paynow(s.sorder_id,pkgData.pack.packages_cost,Order.order_id)}>pay Now</Button></>):(<></>)}</td>
                                                                </tr>
                                                          
                                                ))
                                            }
                                               </tbody>
                                            </table>
                                        }
                                        </>):(<></>)}

                                        </Container>   

                                  
                                </Container>
                      
                
                                <ToastContainer position='top-center' style={{marginTop:'50vh'}}/>
                    </div>

  )

  function accept()
  {

    setSpinner(true)
    // setPkgReject(true);
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
                            setSpinner(false);
                            toast.success("Order Accepted .!!",{autoClose:2000})
                            
                            console.log("pkg /event order",response.data.order); 
                            setSubOrder(response.data.suborder);
                            setOrder(response.data.order);

                            
                            
                            setPayBtn(true);
                            // setTimeout(()=>history.go(0),2000);
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
    setrejectbtn(true)
  }

  function reject()
  {
    setSpinner(true);
    console.log("select")
    // var r = reason();


    const token = sessionstorage.getItem("token");
    const customer_id =  sessionstorage.getItem("customerId");

    var e = document.getElementById("reason");
    
    var reason = e.options[e.selectedIndex].value;

    var reText = document.getElementById("reason-text").value;
    console.log("reason1",reText);

    console.log("reason2",reason);

    if(reason === "" && reText === " ")
    {
        console.log("not");
        toast.error('Select any reason !!',{autoClose:3000});
    }
    else
    {
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
                data.append("reason",reason===""?reText:reason);
    
    
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
                        setTimeout(() => history.push('/dashboard'),3000) ;
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                        toast.success('order Rejected !!',{autoClose:3000})
                        setTimeout(() => history.push('/dashboard'),3000) ;
                    });
    
    }
   

    
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
