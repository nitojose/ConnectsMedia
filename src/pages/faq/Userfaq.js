import React from 'react'
import '../../style/faq.scss'
import Faq from "react-faq-component";
import $ from 'jquery';
import { Container } from 'react-bootstrap';


export default function Userfaq() {

    React.useEffect(()=>
    {
        $("#faqs li h2").click(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).next().hide();
				return;
			}
			$("#faqs li h2").removeClass("active");
			$("#faqs li div[itemprop=acceptedAnswer]").hide();
			$(this).next().show();
			$(this).addClass("active");
		});
    })
    
  return (
    <Container className='body-two'>
        <div className='view-msg mt-5 '>
    <div class="section scrollbar" id="faqs">
	<div>
        <h1>Frequently Asked Questions</h1>
        <img id="faq-icon" src={require('../../../src/assets/imgs/faq-icon.png')} alt="faq-icon"/>
        <ul class="content">
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Why should I choose Connect Media Networks?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
		We are professional Digital Marketers fully dedicated to serve churches/ministries to have a strong online presence and active social media presence to win more people.
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Why is having a strong online presence important?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Post Covid-19 almost all the Churches/Ministries physically shut down for some time and went online. But apparently it didn’t reach the level of viewership expectations. It is not just an online presence but, the situation demands an ENGAGING presence. And we are experts in taking your church/ministry’s online presence to the next level.
		</div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Do you work with all Christian communities?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
		Yes. Jesus loves every denomination. So do we 
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Do you offer a free trial?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        14-21 day trial do not fetch anything, but set up process to get started. Results cannot be achieved in those few days. We charge you only for the services you take and NO HIDDEN CHARGES at any point and no strings attached. We need to build your portfolio in the market to create awareness and attract new people to your Church/Ministry and this is an incremental & time-consuming process that will yield long-term results. You’ll kick in as soon as you are approved.
		</div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Is it good to go with 1 month package?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        It is always recommended to go with long term to have continuous dominant presence online. We will make sure you will reach the unreached in your local and preferred area. You can use digital ads to see immediate results for specific events.
		</div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Are payment refundable?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        No. Payment once made towards the service are not refundable
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Can we pick the services that we need?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Yes, you can pick the services based on your church/ Ministry needs from custom package

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Which package is recommended for us?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        It depends on 2 things. 1. Your Church/Ministry size, 2. Your goals. However, customized package is recommended, as you will have flexibility to choose from
         </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Are your services provided with a one-time payment?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        You can pay either monthly, quarterly, half-yearly, or yearly or recurring – auto-pay

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">How can I get in touch with you?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Email us at connect@connectmedianetworks.com with your concern and we will revert ASAP. Alternatively, once you register with us, you will have an option to send and receive messages from your profile

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Is your site secure?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Our website is SSL Certified and therefore it is 100% secure. We deal with high-level payment security with PCI compliance.
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Can I have access to information, like brochure?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Check out the services page to get familiar with all our services. You can learn about us in the about section. You can visit our campaign page to learn about and take part in different campaigns. Once you sign up for services you will see educational videos in your profile how to make use best of the services.
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">What should I do first to take your services?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Check out the packages and choose the right one that suits your Church/Ministry needs. Pick a package, pick the services if you chose Custom Package, fill up the form and submit. We will review your details and send you acceptance. Upon your payment we will immediately kick off the services. We may reject your application for any reason.
       </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">How do we start off once we sign up for the services?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        You will have educational videos in your login profile how to use the application and make best use of it. You can send us a message and we will reply back ASAP.

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">How do we submit our content?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Once you login to your profile, you will see events, packages, campaigns to your left. Select the appropriate service and you will be able to submit your content - audio/video clips or text or word doc (or any format) in order for us to prepare personalized and engaging content for you to publish them on social media

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">What is SEO?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. 
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Why is SEO important for Church Marketing?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        People search the Internet to find churches near them. That means you have to be available online to serve the people. SEO helps your church show up on top, in online search results so more people can find, contact, and visit your church. Connect Media Networks is formed with a vision to serve churches

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">What is local SEO?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        When people type in search terms such as “church near me” or “church in [city name]”, search engines understand that somebody is looking for a location, and modify their behavior as a result. A shortlist of results marked on a map that are geographically near the searcher will be popped up. Local SEO is the collection of processes and drives that impact ranking within local searches, and what we believe is the very first thing every church of any size should do. Having a strong local search presence is the #1 way to reach the unreached in your community

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">What will be the keywords for SEO?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        This is part of our strategy to bring out the best results for you based on your specific ministry needs.

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">. How long will it take to see the results?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        You may start seeing the results from 2-5 months without breaking the services. We will always work keeping long-term benefits in mind, with a rewarding RoI- Return on Investment.

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Can the church's growth be increased?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Yes. We are experts in handling your live stream to increase your viewership and followers. Another approach is to market your church online strategically in order to win new members. Church/Ministry website is the key.

       </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Can you make a website for our church/ministry?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        We make beautiful websites including secured payment (giving) option. Send us a message after registering, we will get in touch with you

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Are there any seasonal packages?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        We have different ‘campaigns’ to choose from and we also have an “upcoming events” section which is treated as the seasonal packages 
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">How do I do the payment?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Once you choose the service, you will submit the request. Once you are approved of the request, we will send a quote for the service you chose. The system will automatically prompt you for the next steps  
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Will you mail the packages?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        No. The services are 100% virtual, online & digital

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">How can we best leverage sermon videos?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        We will do two specific things for your sermon videos.
1) We’ll handle your live stream in order to get more viewership and followers.
2) We’ll pick the highlights from the sermons and create personalized, attractive short videos and posters of your sermon quotations and publish them on social media platforms to keep your members engaged and attract new viewers.

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">What benefits us with your services?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Church expansion! Keeping the long-term goals in view, your church/ministry will be greatly benefited from having a strong online presence as well as you will get more viewers and followers resulting in expansion of your church.  
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Do you work specific location-based?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        No matter which part of the world your church/ministry is located we can meet all your ministries online needs, provide personalized services
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Should I purchase a service catalog?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Service catalog has a list of services you can choose from 1) standard package 2) customized package. From the customized package you have the flexibility to choose the services based on your ministry needs. 
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name"> Will Connect media networks work physically from our church if needed?</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Connect media networks will meet all your online needs without being there physically. But we may make surprise visit to you location with some gifts! 😊.

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">How often will be the updates done for the videos or posts on social media?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Daily, weekly, alternate days, depending on the recurrence you choose from
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">What is the level of conversion rate in digital marketing?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Statistics prove that the level of conversation and engagement is above 90% on digital marketing. We will advertise on different platforms strategically to win new members
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Is blogging a part of the service catalog and is it necessary for church marketing?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        In yesteryears, Blogging was on the rise. The current trend is personalized interactive videos with engaging content. You can submit your content in the form of text / doc or audio or video clips and we will make personalized videos and publish them to your intended audience
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Is email marketing still effective? Or is it newsletters that have more importance?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        Sending bulk emails to your members is one of the services we provide. However, social media and online engagement is the new trend to keep your church members up to date
        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">How can I measure social media marketing success?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        We will periodically be sharing the statistics and progress reports on how we are performing. You will see members increasing physically and viewers, followers increasing on your social media pages

       </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Is there any start-up fee or set up fee?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        No. You will pay only for the services you are opting for

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Is there any membership renewal fee?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        No. You will pay only for the services you are opting for

        </div>
		</div>
        </li>
        <li itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
		<h2 itemprop="name">Are there any additional charges for maintaining the relationship?
</h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">
        No. You will pay only for the services you are opting for
        </div>
		</div>
        </li>
        {/* <!--
        <li>
        <a href="javascript:void(0)"><h2>more</h2></a>
        </li>//--> */}
        {/* <script>
		$("#faqs li h2").click(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).next().hide();
				return;
			}
			$("#faqs li h2").removeClass("active");
			$("#faqs li div[itemprop=acceptedAnswer]").hide();
			$(this).next().show();
			$(this).addClass("active");
		});
		</script> */}
        </ul>
    </div>
</div>
</div>
</Container>
  )
}
