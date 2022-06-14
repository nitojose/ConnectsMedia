import React from 'react'
import { Container,Row, Col,Spinner,Button} from 'react-bootstrap'
import { AiOutlineMail } from "react-icons/ai"; 
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai"; 
import { FaYoutube } from "react-icons/fa";
import Textbox from '../../components/TextBox'
import Form from 'react-bootstrap/Form'
import TextArea from '../../components/TextArea';
import Buttons from '../../components/Packages/Buttons';
// import Parallax from 'react-rellax'
import { useForm } from 'react-hook-form';
import { Url } from '../../GLOBAL/global';
import { useHistory,Link} from "react-router-dom";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterPage from '../../components/Footer/FooterPage';
var sessionstorage = require('sessionstorage');


export default function Contact() {

   

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const [spinner,setSpinner] = React.useState(false);
    let history = useHistory();
  

    return (
       
        <>
            {/* contact */}

<div class="section" id="contact">
	<div>
        <div id="card-wrap">
            <div id="contact-card">
            <ul>
            <li><img id="card-logo" src={require('../../../src/assets/imgs/connect-media-logo.png')} alt="connect-media-logo"/></li>
            <li><a href="mailto:connect@connectmedianetworks.com" target="_blank" rel="noreferrer">
            <div><i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div>connect@connectmedianetworks.com</div></a>
            </li>
            <li><a href="https://www.facebook.com/connectmedianetworks" target="_blank" rel="noreferrer">
            <div><i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div>@Connectmedianetworks</div></a>
            </li>
            <li><a href="https://instagram.com/connectmedianetworks" target="_blank" rel="noreferrer">
            <div><i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div>ConnectMediaNetworks</div></a>
            </li>
            <li><a href="https://www.youtube.com/channel/UCwDPtQyao-AHKRhioG3YMXA" target="_blank" rel="noreferrer">
            <div><i class="fa fa-youtube-play" aria-hidden="true"></i></div>
            <div>Connect Media Networks</div></a>
            </li>
            <li><a href="https://www.linkedin.com/company/connectmedianetworks" target="_blank" rel="noreferrer">
            <div><i class="fa fa-linkedin" aria-hidden="true"></i></div>
            <div>ConnectMediaNetworks</div></a>
            </li>
            </ul>
            </div>
        </div>
        <div id="contact-form">

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Name" type="text" {...register("name" , { required: true })} className="textbox"/> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}> <input placeholder="Email" type="email" {...register("email" , { required: true })} className="textbox"/> </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Contact No" type="tel-in" {...register("phone" , { required: true })} className="textbox" /> </Col>
                            <Col sm={12} md={12} xl={6} xxl={6}>  <input placeholder="Subject" type="text" className='textbox' {...register("subject" , { required: true })} /> </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} xl={12} xxl={12}> <textarea placeholder="Message" 
                            {...register("message" , { required: true })} rows={3} className="textbox textarea"> </textarea></Col>
                        </Row>

                        {(!spinner === false)?<Buttons text="Submit Request" type="submit" disabled={true} />:<Buttons text="Submit Request" type="submit" />}

                        {spinner && 
                      <Spinner
                    
                       style={{marginTop:'1.7rem',marginLeft:'-2.7rem'}}
                        animation="border"
                        
                        role="status"
                        
                      />
                     
                    
                    }
                    
                    </Form>
            
        </div>
    </div>
   
</div>
<ToastContainer  style={{marginTop:'50vh'}} position="top-center" />
<button className="chat-button" style={{display:'none'}}><i class="fa fa-comments" aria-hidden="true"></i></button>

        </>
    );

    function onSubmit(data)
    {
        setSpinner(true);
        let formdata = new FormData();
        formdata.append('name',data.name);
        formdata.append('email',data.email);
        formdata.append('phone',data.phone);
        formdata.append('subject',data.subject);
        formdata.append('message',data.message);
        

        // console.log(formdata);
    

        const headers ={
            'Content-Type': 'multipart/form-data',
           
        }

            axios({
            method: 'post',
            url: Url+'contactPost',
            data: formdata,
            headers: headers
            })
            .then(function (response) {
                //handle success
                // console.log("success");
                setSpinner(false);
                console.log(response);
                if(response.data === "ok")
                {
                    toast.success("message send successfully !!",{autoClose:3000});
                    history.push('/home');
                }
               
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    
}
