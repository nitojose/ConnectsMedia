import React,{useEffect} from 'react';
import { Container,Row,Col,Table,Button } from 'react-bootstrap';
import { Url } from '../../GLOBAL/global';
import axios from 'axios';
import '../../style/messages.scss';
var sessionstorage = require('sessionstorage');

export default function Index() {

    const[orders,setOrders] = React.useState([]);
    const [viewmsg,setViewMsg] = React.useState(false);

    useEffect(() => {

        getOrders();

      },[orders!== null]);


    async function getOrders()
    {
        const token = sessionstorage.getItem("token");
        const customer_id = sessionstorage.getItem("customerId");

        

          await axios.get(Url+'getorder', { headers: { Authorization: `Bearer ${token}` } ,params:{customer_id: customer_id} })
            .then(response => {
                // If request is good...
                // console.log(response.data);
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
                    <div className='footer-div'>
                        <p className='pointer' onClick={viewMessages}>View Orders</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                </Col>

                <Col sm={12} md={8} xl={8} xxl={8}>
                    {viewmsg && 
                        <div className='view-msg'>
                            <p>Purchased Items</p>
                            
                            <Table striped bordered hover style={{backgroundColor:'bisque'}}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item</th>
                                        <th>Cost</th>
                                        <th>Selected Months</th>
                                    </tr>
                                </thead>

                                <tbody>
                                  
                               
                                    
                                    <tr>
                                        <td>1</td>
                                        <td>mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td><Button variant="light" onClick={selectButton}>Select</Button></td>
                                    </tr> 
                                   
                                   {orders.map((data, idx) => (
                                        console.log( orders[idx].order[idx].order_id)
                                    ))}
        
                                    
                                </tbody>
                                
                            </Table>
                        </div>
                    }
                    
                </Col>
            </Row>

        </Container>
    </div>
    );

    function viewMessages()
    {
        setViewMsg(!viewmsg);
    }

    function selectButton()
    {
        console.log('hello');
    }
}
