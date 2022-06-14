import React, { useEffect } from 'react'
import '../../style/faq.scss'
import Faq from "react-faq-component";

// const data = {
//             title: "FAQ",
//             rows: [
//                 {
//                     title: "Why should I choose Connect Media Networks?",
//                     content: `We are fully dedicated to help churches/ministries to have a strong online presence and 
//                     active social media presence at affordable prices`,
//                 },
//                 {
//                     title: " Why is having a strong online presence important?",
//                     content:`"Post Covid-19 almost all the Churches/Ministries physically shut down for some time and 
//                     went online. But apparently it didnt reach the level of viewership expectations. It is not just an 
//                     online presence but, the situation demands an ENGAGING presence. And we are experts in
//                     taking your church/ministrys online presence to the next level.",`
//                 },
//                 {
//                     title: "Do you work with all Christian communities?",
//                     content: `Yes. Jesus loves every denomination. So also we`,
//                 },
//                 {
//                     title: "Do you offer a free trial?",
//                     content: <p>People may give 15 days to 21 days trial and they recover that money in a different way! 
//                     We charge you only for the services we offer and NO HIDDEN CHARGES at any point and no 
//                     strings attached. We need to build your portfolio in the market to create awareness and attract 
//                     new people to your Church/Ministry. It is an incremental & time-consuming process that will 
//                     yield long-term results. You’ll kick in as soon as you are approved.</p>,
//                 },
//                 {
//                     title: "Is it good to go with 1 month package?",
//                     content: <p>It is always recommended to go with long term with monthly recurring payment, as 
//                     marketing needs time to yield long term benefits. However, there is no obligation.</p>,
//                 },
//                 {
//                     title: "Are payment refundable?",
//                     content: <p>No. Payment once made towards the service are not refundable</p>,
//                 },
//                 {
//                     title: "Can we pick the services that we need?",
//                     content: <p> Yes, you can cherry-pick the services based on your church/ Ministry needs from the 
//                     service catalog</p>,
//                 },
//                 {
//                     title: "Which package is recommended?",
//                     content: <p>It depends on 2 things. 1. Your Church/Ministry size, 2. Your goals. However, customized
//                     package is recommended, as you will have flexibility to choose from</p>,
//                 },
//                 {
//                     title: "Are your services provided with a one-time payment?",
//                     content: <p>You can pay either monthly, quarterly, half-yearly, or yearly.</p>,
//                 },
//                 {
//                     title: "How can I get in touch with you?",
//                     content: <p> Email us at connect@connectmedianetworks.com with your concern and we will revert 
//                     asap.</p>,
//                 },
//                 {
//                     title: " Is your site secure?",
//                     content: <p> Our website is SSL Certified and therefore it is 100% secure. We deal with high-level 
//                     payment security with PCI compliance.</p>,
//                 },
//                 {
//                     title: "Can I have access to information, like a brochure?",
//                     content: <p>We have a services catalog that lists out all the services we provide. You can learn about us 
//                     in the about section. You can visit our campaign page to take part in different campaigns. Once 
//                     you sign up for services we will send you training material how to make best use of our services.</p>,
//                 },
//                 {
//                     title: " What should I do first to take your services?",
//                     content: <p>  Check out the packages and choose the right one that suits your Church/Ministry needs. Fill 
//                     up the form and submit it. We will review and send you the proposal and upon your payment and 
//                     signature we will immediately kick off the services. All the instructions will be emailed to you.</p>,
//                 },
//                 {
//                     title: "How do we start off once we sign up for the services?",
//                     content: <p> You will share your monthly calendar to set up your programs. We will email you step by 
//                     step procedure of what you need to do along with the training material how to use the services.</p>,
//                 },
//                 {
//                     title: " How do we submit our content? ",
//                     content: <p> Once you log in, you’ll have an upload button, to submit your content - audio/video clips or 
//                     any form of text or word doc for us to prepare personalized and engaging content for you and 
//                     publish them on social media. You can also submit your content through the campaigns page 
//                     under the upcoming events section.</p>,
//                 },
//                 {
//                     title: " What is SEO? ",
//                     content: <p> Search engine optimization (SEO) is the process of improving the quality and quantity of 
//                     website traffic to a website or a web page from search engines.</p>,
//                 },
//                 {
//                     title: " Can the church's growth be increased?",
//                     content: <p> Yes. We are experts in handling your live stream to increase your viewership and followers. 
//                     Another approach is to market your church online strategically in order to win new members..</p>,
//                 },
//                 {
//                     title: " Are there any seasonal packages?",
//                     content: <p>We have different ‘campaigns’ to choose from and we also have an “upcoming events” 
//                     section which is treated as the seasonal campaign</p>,
//                 },
//                 {
//                     title: "How do I do the payment?",
//                     content: <p> No. The services are 100% virtual, online & digital.</p>,
//                 },
//                 {
//                     title: "Will you mail the packages?",
//                     content: <p>It all depends on your Ministry goals and what exactly you want to achieve. However, you 
//                     may start seeing the results from 2-3 months without breaking the services. We will always work 
//                     keeping long-term benefits in mind, with a rewarding RoI- Return on Investment.</p>,
//                 },
//                 {
//                     title: "Is SEO important for church marketing?",
//                     content: <p>Yes, SEO is essential for modern-day church services, as programs are taken to digital and 
//                     online platforms. And these need to be handled by professionals like us to get the best results.</p>,
//                 },
//                 {
//                     title: "How can we best leverage sermon videos?",
//                     content: <p>We will do two specific things for your sermon videos.</p>,
//                 },
//                 {
//                     title: "How can we best leverage sermon videos?",
//                     content: <p>: We will do two specific things for your sermon videos.<br></br>
//                     1) We’ll handle your live stream in order to get more viewership and followers.<br></br>
//                     2) We’ll pick the highlights from the sermons and create personalized, attractive short videos and 
//                     posters of your sermon quotations and publish them on social media platforms to keep your 
//                     members engaged and attract new viewers.</p>,
//                 },
//                 {
//                     title: "What benefits us with your services? ",
//                     content: <p>Keeping the long-term goals in view, your church/ministry will be greatly benefited from 
//                     having a strong online presence as well as you will get more viewers and followers. Resulting in 
//                     expansion of your church. </p>,
//                 },{
//                     title: "Do you work specific location-based?",
//                     content: <p>No matter which part of the world your church/ministry is located we can meet all your 
//                     ministries online needs, provide personalized services that works for your specific needs</p>,
//                 },{
//                     title: "Should I purchase a service catalog?",
//                     content: <p>Service catalog has a list of services you can choose from 1) standard package 2) 
//                     customized package. From the customized package you have the flexibility to choose the 
//                     services based on your ministry needs. You can subscribe monthly, quarterly, half-yearly, and 
//                     yearly</p>,
//                 },{
//                     title: "Will Connect media networks work physically from our church if needed?",
//                     content: <p>Connect media networks will meet all your online needs without being there physically but
//                     we may make surprise visit to you location! 😊.</p>,
//                 },{
//                     title: "Why is SEO important for Church Marketing?",
//                     content: <p>People search the Internet to find churches near them. That means you have to meet your 
//                     audience where they’re looking online. SEO helps your church show up on top, in online search 
//                     results so more people can find, contact, and visit your church.</p>,
//                 },{
//                     title: "What will be the keywords for SEO?",
//                     content: <p>This is part of our strategy to bring out the best results for you based on your specific 
//                     ministry needs.</p>,
//                 },{
//                     title: " What is the level of conversion rate in digital marketing?",
//                     content: <p>Statistics prove that the level of conversation and engagement is above 90% on digital 
//                     marketing. We will advertise on different platforms strategically to win new members</p>,
//                 },{
//                     title: "How often will be the updates done for the videos or posts?",
//                     content: <p>Daily, weekly, alternate days, depending on the recurrence you choose from
//                    </p>,
//                 },{
//                     title: "Is blogging a part of the service catalog and is it necessary for church marketing?",
//                     content: <p>In yesteryears, Blogging was on the rise. The current trend is personalized interactive 
//                     videos with engaging content. You can submit your content in the form of text / doc or audio or
//                     video clips and we will make personalized videos and publish them to your intended audience</p>,
//                 },{
//                     title: " Is email marketing still effective? Or is it newsletters that have more importance?",
//                     content: <p> A lot has changed from sending emails and newsletters, while they are the organic way of 
//                     doing things. Social media and online engagement is the new trend to keep your church members 
//                     engaged and we are professionals in handling your social media, digital and online activities to 
//                     not only keep your church members engaged but also attract new people into the house</p>,
//                 },{
//                     title: "How can I measure social media marketing success?",
//                     content: <p> we get reports from the work that we do for your church/ministry. We will periodically be 
//                     sharing the statistics and progress reports</p>,
//                 },{
//                     title: " What is local SEO?",
//                     content: <p>When people type in search terms such as “church near me” or “church in [city name]”, 
//                     search engines understand that somebody is looking for a location, and modify their behavior as 
//                     a result. A shortlist of results marked on a map that are geographically near the searcher will be 
//                     popped up. Local SEO is the collection of processes and drives that impact ranking within local 
//                     searches, and what we believe is the very first thing every church of any size should do. Having a 
//                     strong local search presence is the #1 way to reach the unreached in your community</p>,
//                 },{
//                     title: " Is there any start-up fee or set up fee?",
//                     content: <p>Absolutely no! You will pay only for the services you are opting for</p>,
//                 },{
//                     title: "Is there any membership renewal fee?",
//                     content: <p>Absolutely no! You will pay only for the services you are opting for</p>,
//                 },{
//                     title: "Are there any additional charges for maintaining the relationship?",
//                     content: <p>Absolutely no! You will pay only for the services you are opting for</p>,
//                 }
//             ],
//         };

        // const styles = {
        //     bgColor: '#000914',
        //     titleTextColor: "yellow",
        //     rowTitleColor: "white",
        //     rowContentColor: 'grey',
        //     arrowColor: "yellow",
        // };

        // const config = {
        //     animate: true,
        //     arrowIcon: "^",
        //     tabFocus: true
        // };

export default function index() {
  return (
      <>
    {/* <img src={require('../../assets/images/Rectangle 40.png')} alt="bg" width='100%' height={250} style={{
        objectFit:'cover'
    }}/>
    <div style={{padding: "5%"}}>
    <Faq
        data={data}
        styles={styles}
        config={config}
    />
</div> */}

{/* faqs */}

<div className="section scrollbar" id="faqs">
	<div>
        <h1>Frequently Asked Questions</h1>
        <img id="faq-icon" src={require('../../../src/assets/imgs/faq-icon.png')} alt="faq-icon"/>
        <ul className="content">
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Why should I choose Connect Media Networks?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
		We are professional Digital Marketers fully dedicated to serve churches/ministries to have a strong online presence and active social media presence to win more people.
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Why is having a strong online presence important?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Post Covid-19 almost all the Churches/Ministries physically shut down for some time and went online. But apparently it didn’t reach the level of viewership expectations. It is not just an online presence but, the situation demands an ENGAGING presence. And we are experts in taking your church/ministry’s online presence to the next level.
		</div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Do you work with all Christian communities?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
		Yes. Jesus loves every denomination. So do we 
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Do you offer a free trial?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        14-21 day trial do not fetch anything, but set up process to get started. Results cannot be achieved in those few days. We charge you only for the services you take and NO HIDDEN CHARGES at any point and no strings attached. We need to build your portfolio in the market to create awareness and attract new people to your Church/Ministry and this is an incremental & time-consuming process that will yield long-term results. You’ll kick in as soon as you are approved.
		</div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Is it good to go with 1 month package?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        It is always recommended to go with long term to have continuous dominant presence online. We will make sure you will reach the unreached in your local and preferred area. You can use digital ads to see immediate results for specific events.
		</div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Are payment refundable?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        No. Payment once made towards the service are not refundable
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Can we pick the services that we need?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Yes, you can pick the services based on your church/ Ministry needs from custom package

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Which package is recommended for us?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        It depends on 2 things. 1. Your Church/Ministry size, 2. Your goals. However, customized package is recommended, as you will have flexibility to choose from
         </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Are your services provided with a one-time payment?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        You can pay either monthly, quarterly, half-yearly, or yearly or recurring – auto-pay

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">How can I get in touch with you?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Email us at connect@connectmedianetworks.com with your concern and we will revert ASAP. Alternatively, once you register with us, you will have an option to send and receive messages from your profile

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Is your site secure?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Our website is SSL Certified and therefore it is 100% secure. We deal with high-level payment security with PCI compliance.
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Can I have access to information, like brochure?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Check out the services page to get familiar with all our services. You can learn about us in the about section. You can visit our campaign page to learn about and take part in different campaigns. Once you sign up for services you will see educational videos in your profile how to make use best of the services.
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">What should I do first to take your services?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Check out the packages and choose the right one that suits your Church/Ministry needs. Pick a package, pick the services if you chose Custom Package, fill up the form and submit. We will review your details and send you acceptance. Upon your payment we will immediately kick off the services. We may reject your application for any reason.
       </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">How do we start off once we sign up for the services?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        You will have educational videos in your login profile how to use the application and make best use of it. You can send us a message and we will reply back ASAP.

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">How do we submit our content?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Once you login to your profile, you will see events, packages, campaigns to your left. Select the appropriate service and you will be able to submit your content - audio/video clips or text or word doc (or any format) in order for us to prepare personalized and engaging content for you to publish them on social media

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">What is SEO?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. 
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Why is SEO important for Church Marketing?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        People search the Internet to find churches near them. That means you have to be available online to serve the people. SEO helps your church show up on top, in online search results so more people can find, contact, and visit your church. Connect Media Networks is formed with a vision to serve churches

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">What is local SEO?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        When people type in search terms such as “church near me” or “church in [city name]”, search engines understand that somebody is looking for a location, and modify their behavior as a result. A shortlist of results marked on a map that are geographically near the searcher will be popped up. Local SEO is the collection of processes and drives that impact ranking within local searches, and what we believe is the very first thing every church of any size should do. Having a strong local search presence is the #1 way to reach the unreached in your community

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">What will be the keywords for SEO?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        This is part of our strategy to bring out the best results for you based on your specific ministry needs.

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">. How long will it take to see the results?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        You may start seeing the results from 2-5 months without breaking the services. We will always work keeping long-term benefits in mind, with a rewarding RoI- Return on Investment.

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Can the church's growth be increased?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Yes. We are experts in handling your live stream to increase your viewership and followers. Another approach is to market your church online strategically in order to win new members. Church/Ministry website is the key.

       </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Can you make a website for our church/ministry?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        We make beautiful websites including secured payment (giving) option. Send us a message after registering, we will get in touch with you

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Are there any seasonal packages?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        We have different ‘campaigns’ to choose from and we also have an “upcoming events” section which is treated as the seasonal packages 
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">How do I do the payment?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Once you choose the service, you will submit the request. Once you are approved of the request, we will send a quote for the service you chose. The system will automatically prompt you for the next steps  
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Will you mail the packages?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        No. The services are 100% virtual, online & digital

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">How can we best leverage sermon videos?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        We will do two specific things for your sermon videos.
1) We’ll handle your live stream in order to get more viewership and followers.
2) We’ll pick the highlights from the sermons and create personalized, attractive short videos and posters of your sermon quotations and publish them on social media platforms to keep your members engaged and attract new viewers.

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">What benefits us with your services?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Church expansion! Keeping the long-term goals in view, your church/ministry will be greatly benefited from having a strong online presence as well as you will get more viewers and followers resulting in expansion of your church.  
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Do you work specific location-based?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        No matter which part of the world your church/ministry is located we can meet all your ministries online needs, provide personalized services
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Should I purchase a service catalog?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Service catalog has a list of services you can choose from 1) standard package 2) customized package. From the customized package you have the flexibility to choose the services based on your ministry needs. 
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name"> Will Connect media networks work physically from our church if needed?</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Connect media networks will meet all your online needs without being there physically. But we may make surprise visit to you location with some gifts! 😊.

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">How often will be the updates done for the videos or posts on social media?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Daily, weekly, alternate days, depending on the recurrence you choose from
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">What is the level of conversion rate in digital marketing?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Statistics prove that the level of conversation and engagement is above 90% on digital marketing. We will advertise on different platforms strategically to win new members
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Is blogging a part of the service catalog and is it necessary for church marketing?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        In yesteryears, Blogging was on the rise. The current trend is personalized interactive videos with engaging content. You can submit your content in the form of text / doc or audio or video clips and we will make personalized videos and publish them to your intended audience
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Is email marketing still effective? Or is it newsletters that have more importance?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        Sending bulk emails to your members is one of the services we provide. However, social media and online engagement is the new trend to keep your church members up to date
        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">How can I measure social media marketing success?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        We will periodically be sharing the statistics and progress reports on how we are performing. You will see members increasing physically and viewers, followers increasing on your social media pages

       </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Is there any start-up fee or set up fee?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        No. You will pay only for the services you are opting for

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Is there any membership renewal fee?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
        No. You will pay only for the services you are opting for

        </div>
		</div>
        </li>
        <li itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
		<h2 itemProp="name">Are there any additional charges for maintaining the relationship?
</h2>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
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
			$("#faqs li div[itemProp=acceptedAnswer]").hide();
			$(this).next().show();
			$(this).addClass("active");
		});
		</script> */}
        </ul>
    </div>
</div>

</>
  )
}
