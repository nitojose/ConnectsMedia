import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/package.scss'
import Card from  '../../components/Packages/Cards'
import green from '../../assets/pkg-bg/Group 476.png'
import yellow from '../../assets/pkg-bg/Group 477.png'
import pink from '../../assets/pkg-bg/Group 478.png'
import Parallax from 'react-rellax'
import { useHistory } from 'react-router-dom'

var sessionstorage = require('sessionstorage');

console.log("this is the final token",sessionstorage.getItem('token'));

export default function Index() {

    let history = useHistory();

    return (
        <>
        {/* <section id='package1'>
            
        <section>
        <div class="main-pakages-div">
            <div class="pakage-div-one">
                <h1>Packages</h1>
            </div>
            <div class="package-wrap pakage-div-two">
                <div class="package">
                    <div class="img-div">
                        <h4>Standard SMM Packages</h4>
                        <img src={require('../../assets/images/pakage_card-1.png')} alt="" />
                    </div>
                    <div class="content-div">
                        
                        <ul className='bullets'>
                            <li><i class="fa fa-check-circle"></i> For Up To 2 Social Media Platforms</li>
                            <li><i class="fa fa-check-circle"></i>3 Post Per Week</li>
                            <li><i class="fa fa-check-circle"></i>All Images, Graphics And CopyWriting Included. Featured
                                Videos Available</li>
                            <li><i class="fa fa-check-circle"></i>Messaging And Comment Moderation Included</li>
                            <li><i class="fa fa-check-circle"></i>Boosted Post Add-On Available</li>
                        </ul>
                    </div>
                    {sessionstorage.getItem('token') ===null ?(
                        <>
                    <button onClick={()=>redirecttoList("std")}>Register</button>
                    </>
                    ):(
                        <>
                    <button onClick={()=>history.push('/standard-list')}>Buy</button>
                    </>
                    )
                    }
                </div>
            </div>
            <div class="package-wrap pakage-div-three">
                <div class="package">
                    <div class="img-div">
                        <h4>Custom SMM Packages</h4>
                        <img src={require('../../assets/images/pakge_card.png')} alt="" />
                    </div>
                    <div class="content-div">
                        <ul className='bullets'>
                            <li><i class="fa fa-check-circle"></i>For Up To 2 Social Media Platforms</li>
                            <li><i class="fa fa-check-circle"></i>3 Post Per Week</li>
                            <li><i class="fa fa-check-circle"></i>All Images, Graphics And CopyWriting Included. Featured
                                Videos Available</li>
                            <li><i class="fa fa-check-circle"></i>Messaging And Comment Moderation Included</li>
                            <li><i class="fa fa-check-circle"></i>Boosted Post Add-On Available</li>
                        </ul>
                    </div>
                    {sessionstorage.getItem('token') ===null ?(
                        <>
                    <button onClick={()=> redirecttoList("custom")}>Register</button>
                    </>
                    ):(
                        <>
                    <button onClick={()=>history.push('/customized-list')}>Buy</button>
                    </>
                    )
                    }
                </div>
            </div>
            
        </div>
    </section>
    </section> */}

    {/* packages */}

<div className="section" id="packages">
	<div>
	<h1>Packages</h1>
        <div className="main-packages">
            <div className="package-wrap">
                <div className="package">
                    <h4>Standard</h4>
                    <div className="content">
                        <ul>
                            <li><i class="fa fa-check-circle"></i>3 Done-for-you Posts Per Week<br></br>(1 video, 2 pictures / posters)</li>
                            <li><i class="fa fa-check-circle"></i>Upto 2 Social Media Platforms</li>
                            <li><i class="fa fa-check-circle"></i>Post Boosting – for more views</li>
                            <li><i class="fa fa-check-circle"></i>1 Ad Promotion per month</li>                            
                            <li><i class="fa fa-check-circle"></i>All Images, Graphics Copyrighting included</li>
                        </ul>
                    </div>
                    <div align="center">
                    {sessionstorage.getItem('token') ===null ?(
                        <>
                    <button onClick={()=>redirecttoList("std")}>Register</button>
                    </>
                    ):(
                        <>
                    <button onClick={()=>history.push('/standard-list')}>Buy</button>
                    </>
                    )
                    }
                    </div>
                </div>
            </div>
            <div className="package-wrap">
                <div className="package">
                    <h4>Custom</h4>
                    <div className="content">
                        <ul>
                            <li><i class="fa fa-check-circle"></i>Register and check all our services </li>
                            <li><i class="fa fa-check-circle"></i>Pick the services that suits your ministry needs</li>
                        </ul>
                    </div>
                    <div align="center">
                    {sessionstorage.getItem('token') ===null ?(
                        <>
                    <button onClick={()=> redirecttoList("custom")}>Register</button>
                    </>
                    ):(
                        <>
                    <button onClick={()=>history.push('/customized-list')}>Buy</button>
                    </>
                    )
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )

    function redirecttoList(type)
    {
        

        if(type === "std")
        {
            sessionstorage.setItem("list","standard-list");
            history.push('/login/standard-list');
            history.go(0);
        }
        if(type === "custom"){
            sessionstorage.setItem("list","customized-list");
            history.push('/login/customized-list');
            history.go(0);
        }
    }
    
}
