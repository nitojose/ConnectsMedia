import React from 'react';
import $ from 'jquery'
export default function Index() {

    
    // const itemList1 = ["Live-Stream Services: Increase viewership & followers",
    //     "Customized Videos",
    //     "Create Short Videos from Sermons",
    //     "Personalized Shorts"]

    // const itemList2 =["Live-Stream Services: Increase viewership & followers",
    //     "Customized Videos",
    //     "Create Short Videos from Sermons",
    //     "Done-for-you pictures",
    //     "Personalized Reels",
    //     "Instagram Stories"]

    //     const itemList3 =["Live-Stream Services: Increase viewership & followers",
    //     "Customized Videos",
    //     "Create Short Videos from Sermons",
    //     "Done-for-you pictures",
    //     "Personalized Reels",
    //     "Facebook Stories"]

    //     const itemList4 =["Google advertising",
    //     "Facebook advertising",
    //     "Customized Videos",
    //     "Youtube advertising"]

    return (
        <>


<div className="section popup" id="services">
    <div className="service-main-div">
        <h1>Services We Offer</h1>
        <div id="service-wrap">
            <ul id="service-list">
                <li><div><img src={require('../../../src/assets/imgs/service-promotions.png')} alt="service promotion"/><b>Promotions & Ads</b> using Google, Facebook, Instagram, Youtube and Twitter Ads</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-livestream.png')} alt="service-livestream"/><b>Live stream handling</b> on Facebook and Youtube</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-personalised-photos.png')} alt="service-personalised"/><b>Done-For-You Personalised Pictures</b> on Facebook & Instagram</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-personalised-videos.png')} alt="service-personalised-video"/><b>Done-For-You Personalised Vidoes</b> on Facebook & Instagram</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-videos-reels.png')}alt="service-video-reels"/><b>Short Videos & Reels</b> with custom graphics</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-dev.png')} 
                alt="service-dev"/><b>Application Development</b> Website and Mobile application developments</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-tech-support.png')} alt="service-tech"/><b>Technology</b> solutions & support</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-writing.png')} alt="service-writing"/><b>Content Writing</b> Plagiarism free content</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-ready-campaigns.png')} alt="service-ready-campaigns"/><b>Ready-to-use Campaigns</b> to keep audience engaged</div></li>
                <li><div><img src={require('../../../src/assets/imgs/service-share-performance.png')}  alt="service-share-performance"/><b>Share</b> resource & performance</div></li>
            </ul>
            <ul id="socials">
            <li><img src={require('../../../src/assets/imgs/youtube.png')} alt="youtube"/></li>
            <li><img src={require('../../../src/assets/imgs/facebook.png')} alt="facebook"/></li>
            <li><img src={require('../../../src/assets/imgs/instagram.png')} alt="instagram"/></li>
            <li><img src={require('../../../src/assets/imgs/twitter.png')} alt="twitter"/></li>
            <li><img src={require('../../../src/assets/imgs/box.png')} alt="box"/></li>
            <li><img src={require('../../../src/assets/imgs/web.png')} alt="web"/></li>
            <li><img src={require('../../../src/assets/imgs/truth.png')} alt="truth"/></li>
            </ul>
        </div>
        <div id="service1" class="subtitle">
            <div class="content">
            <h2>Promotions & Ads</h2>
            <ul>
            <li>Special campaign promotions with targeted reach and performance tracking</li>
			<li>Promote your organization in targeted location with specific demographics</li>
			<li>Advertise your upcoming events on your social media pages with high reach<br></br>(Using Organic and/or Paid methods) </li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service2" class="subtitle">
            <div class="content">
            <h2>Live Stream Handling</h2>
             	<ul>
                <li>Allow us to handle your livestream to take the viewership to the next level</li>
                <li>We will not only show your videos to the subscribed followers, but also to the outside world where the sermons will reach!</li>
                <li>Sharing the word to the unreached is our heart. And that’s the reason we are here.</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service3" class="subtitle">
            <div class="content">
            <h2>Done-For-You Personalized Pictures</h2>
             	<ul>
                <li>Allow us make daily / weekly inspirational posters– fully customized for you</li>
                <li>Fully optimized with your name and logo and publish on your behalf</li>
                <li>Not just publish to your audience, we can promote beyond the groups</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service4" class="subtitle">
            <div class="content">
            <h2>Done-For-You Personalized Videos</h2>
             	<ul>
                <li>Allow us make daily / weekly attractive videos with relevant content for you</li>
                <li>We will add your name and logo and publish on your behalf</li>
                <li>Not just publish to your audience, we can promote beyond the groups</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service5" class="subtitle">
            <div class="content">
            <h2>Short Videos & Reels</h2>
             	<ul>
                <li>Short videos & reels are hot lately</li>
                <li>Suggest us THAT inspirational moment from Sunday sermon and we will optimize the clips and publish</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service6" class="subtitle">
            <div class="content">
            <h2>Application Development</h2>
             	<ul>
                <li>We make beautiful websites within a quick turnaround time</li>
                <li>With integration of complete SEO package</li>
                <li>Interactive Mobile Apps done for your organization</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service7" class="subtitle">
            <div class="content">
            <h2>Technology</h2>
             	<ul>
                <li>Need ANY software solution? Email us and we will get in touch</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service8" class="subtitle">
            <div class="content">
            <h2>Content Writing</h2>
             	<ul>
                <li>For your website, videos and posters</li>
                <li>For your special campaigns or events</li>
                <li>For any of your ministries needs</li>
                <li>Plagiarism free and original content</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service9" class="subtitle">
            <div class="content">
            <h2>Ready–to–use Campaigns</h2>
             	<ul>
                <li>We will keep on publishing videos and posters on your behalf</li>
                <li>You are welcome to participate in the following campaigns - Missions, Strengthening Marriage, Youth Section, Pray for Israel and Evangelism</li>
                <li>Each campaign is unique by itself and we use different platforms to target different age groups</li>
                <li><b>For Example:</b> Youth Section is focused on Tik-Tok, Instagram, Snap Chat, Facebook, where youngsters tend to spend more time</li>
                <li>With lots of prayers behind these campaigns, our attempt is to engage people with Jesus</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="service10" class="subtitle">
            <div class="content">
            <h2>Share</h2>
            	<ul>
                <li>We will periodically be sharing the progress reports and key metrics on the performance of your subscribed services</li>
                </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="social1" class="subtitle">
            <div class="content">
            <h2>YouTube</h2>
            <ul>
            <li>We will handle your live-stream to increase followers and viewership</li>
            <li>We will prepare and post done-for-you customized videos</li>
            <li>Personalized Short Reels and stories</li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="social2" class="subtitle">
            <div class="content">
            <h2>Facebook</h2>
            <ul>
            <li>We will handle your live-stream to increase followers and viewership</li>
            <li>We will prepare and post done-for-you customized videos</li>
            <li>Done-for-you personalized Short Reels and stories</li>
            <li>Done-for-you personalized posters / pictures with your name and logo</li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="social3" class="subtitle">
            <div class="content">
            <h2>Instagram</h2>
            <ul>
            <li>We will prepare and post done-for-you customized videos</li>
            <li>Done-for-you personalized Short Reels and stories</li>
            <li>Done-for-you personalized posters / pictures with your name and logo</li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="social4" class="subtitle">
            <div class="content">
            <h2>Twitter</h2>
            <ul>
            <li>We will prepare and post tweets</li>
            <li>Done-for-you personalized Short videos</li>
            <li>Done-for-you personalized posters / pictures with your name and logo</li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
       </div>
        <div id="social5" class="subtitle">
            <div class="content">
            <h2>Digital Marketing</h2>
            <ul>
            <li>Promote your church / ministry on google and increase your search ranking on google<br></br>
            i.e. If someone searches “Church near me”, we will put your church on top of the search list in that area</li>
            <li>Promote your church / ministry on all social media platforms</li>
            <li>Customized promotions of specific ministry area and upcoming events</li>
            <li>All done in Organic and Paid methods</li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="social6" class="subtitle">
            <div class="content">
            <h2>Website</h2>
            <ul>
            <li>We make beautiful websites with quick turnaround time</li>
            <li>With integration of complete SEO package</li>
            <li>Interactive Mobile Apps done for your organization</li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div id="social7" class="subtitle">
            <div class="content">
            <h2>Truth Social</h2>
            <ul>
            <li>Upcoming Social Media Platform</li>
            </ul>
            </div>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        {/* <script>
		   $("#service-list li").click(function(){
			  var i=$(this).index()+1;
			  console.log(i);
			  $("#service-list .subtitle").removeClass("active");
			  $("#service"+i).addClass("active");
		  });
		  $(".popup .subtitle i").click(function(){
			  $(this).parent().removeClass("active");
		  });
		  $(document).on('keydown', function(event) {
			   if (event.key == "Escape") {
				   $(".popup .subtitle i").parent().removeClass("active");
			   }
		   });
		  $("#socials li").click(function(){
			  var i=$(this).index()+1;
			  console.log(i);
			  $("#socials .subtitle").removeClass("active");
			  $("#social"+i).addClass("active");
		  });
		  </script> */}
    </div>
</div>

            </>
    )
}


