import React,{useEffect} from 'react';
import { Url } from '../../GLOBAL/global';
import { Container,Row,Col,Table,Button,Modal } from 'react-bootstrap';
import axios from 'axios';
import '../../style/messages.scss';
import { useHistory,Link} from "react-router-dom";
import dateFormat from 'dateformat';
var sessionstorage = require('sessionstorage');

export default function Index() {


    let history = useHistory();
    

    const[orders,setOrders] = React.useState([]);
    const [length,setLength] = React.useState(0);

    useEffect(() => {

        getDatas();

      },[orders!== null]);


      async function getDatas()
    {
            const token = sessionstorage.getItem("token");
            const customer_id = sessionstorage.getItem("customerId");


            await axios.get(Url+'getorder', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                console.log("order",response.data);
                setOrders(response.data);
               
            })
            .catch((error) => {
                console.log('error ' + error);
            });



    }

  return (
    <div>
    <Container>
        <Row >
            <Col sm={12} md={2} xl={2} xxl={2}>
               
            </Col>

            <Col sm={12} md={8} xl={8} xxl={8}>
                
                    <div className='view-msg'>
                      
                        
                        <Table striped bordered hover style={{backgroundColor:'azure'}} className="text-center">
                            <thead>
                                <tr>
                                    <th>Ordered Date</th>
                                    <th>Title</th>
                                    <th>Type of Item</th>
                                    <th>Cost</th>
                                   
                                   
                                </tr>
                            </thead>

                            <tbody>
                              {console.log(orders.splice(0,1))}
                                {/* {console.log(orders.length)} */}
                              
                              { orders.length === 0 ? <p className='text-center'>no orders</p> :
                                orders.map((data, idx) => (
                             
                                // console.log(data.plan[0].camp_type)
                            
                                <tr key={idx}>
                                    <td>{data.order.created_at !== null? dateFormat(data.order.created_at, "mmmm dS, yyyy"):""}</td>
                                    <td>{data.plan[0].camp_title}</td>
                                 
                                    <td>{data.order.order_item}  {data.plan[0].camp_type?("- "+data.plan[0].camp_type):""} </td>
                                    <td>{data.order.order_amt}</td>
                                   
                                    <td>
                                        
                                        <Button variant="dark" onClick={()=>{view(data)}}>view</Button><br></br>
                                    
                                    
                                    </td>
                                </tr>  
                               
                              
                                   
                                )) }
    
                                
                            </tbody>
                            
                        </Table>
                    </div>
             





                
            </Col>
        </Row>

    </Container>
</div>
  );


  function view(data)
  {
      
    
    //   setOrderId(orderId)
    history.push( { pathname: '/order-view',order:data})
      
  }

}
