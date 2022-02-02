import React,{useState} from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import '../../style/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useHistory,Link} from "react-router-dom";
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bounce: {
      animationName: fadeInUp,
      animationDuration: '10s'
    }
})

export default function Navbar() {

    const [showMenu,setMenu] = useState(false); 

    let history = useHistory();

    return (
        <>
      
            <Container className='navbar'>
               
                    <img src={require('../../assets/images/logo.png')}  alt='header-logo-img'/>

                    <div>
                        <FiUser className='menu-nav' onClick={profileInfo}  />     
                        <BsList className='menu-nav' onClick={sidebar}/>
                        
                    </div>

                    
                
            </Container>

            {/* <Container className='profile_div'>
                {console.log("hello")}
            </Container> */}
        </>
      
    )

    function sidebar()
    {
        
        setMenu(!showMenu);
        
    }

    function profileInfo()
    {
        history.push('/profile');
    }
}
