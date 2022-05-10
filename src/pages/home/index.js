import React from 'react'




export default function index() {
    console.log('homepage')
    return (
        <>
    
    {/* <section id='home1'>
        <div class="main-banner">
            <div class="left-div">
                <img src={require('../../assets/images/OBJECTS.png')} alt="" />
            </div>
            <div class="right-div">
                <h1>Connecting Your <span>Church</span><br></br> to the world</h1>
            </div>
        </div>
    </section> */}

   
    <div class="section" id="intro">
                            <div align="center">
                                <div class="illustration">
                                
                            </div>
                            <div class="content">
                                <h2>Connecting Your</h2>
                                <h2 id="t1"><span id="church">Church</span> <span id="ministry">Ministry</span></h2>
                                <h2>to the <i>World</i></h2>
                            </div>
                        </div>
                        
                            <video autoPlay={true} loop muted={true}  playsInline={true}>
                            <source src={require('../../../src/assets/imgs/earth-connect.mp4')} type="video/mp4" />
                            </video>
                            
    </div>
  

        
        </>
      
    )
}
