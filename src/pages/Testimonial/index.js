import React from 'react'

export default function index() {
  return (
    <>

    {/* testimonial */}

<div class="section scrollbar" id="testimonials">
	<div>
    <h2>Testimonials</h2>

	<div id="txt-version">
    	<div class="nav prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
        <ul class="content">
            <li id="txt-testimony1">
            <blockquote>"We thank Connect Media Networks for creating this wonderful platform that we could trust, to provide our upcoming ministry events. We are very impressed with the process and management of our requests."
            <cite class="author">Mr. Patrick M</cite>
            </blockquote>
            <img src={require('../../../src/assets/imgs/pic.jpg')} alt="connect-arrow"/>
            </li>

            <li id="txt-testimony2">
            <div>
            <blockquote>"We thank Connect Media Networks for creating this wonderful platform that we could trust, to provide our upcoming ministry events. We are very impressed with the process and management of our requests."
            <cite class="author">Mr. Patrick M</cite>
            </blockquote>
            <img src={require('../../../src/assets/imgs/pic.jpg')} alt="connect-arrow"/>
            </div>
            </li>
        </ul>
        <div class="nav next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
    </div>

    <div id="vid-version">
    	<div class="nav prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
        <ul class="content">
            <li id="vid-testimony1">
            <blockquote>"We thank Connect Media Networks for creating this wonderful platform that we could trust, to provide our upcoming ministry events. We are very impressed with the process and management of our requests."
            <cite class="author">Mr. Patrick M</cite>
            </blockquote>
            <img src={require('../../../src/assets/imgs/pic.jpg')} alt="arrow"/>
            </li>
            
            <li id="vid-testimony2">
            <div>
            <blockquote>"We thank Connect Media Networks for creating this wonderful platform that we could trust, to provide our upcoming ministry events. We are very impressed with the process and management of our requests."
            <cite class="author">Mr. Patrick M.</cite>
            </blockquote>
            <img src={require('../../../src/assets/imgs/pic.jpg')} alt="arrow"/>
            </div>
            </li>
        </ul>
        <div class="nav next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
    </div>
    </div>
    {/* <script>
	var txtSlide=1;
	$("#txt-version .nav.prev").click(function(){
		txtSlide--;
		location.href="#txt-testimony"+txtSlide;
		$("#txt-version .nav.next").show();
		if(txtSlide==1) {$("#txt-version .nav.prev").hide();}
	});
	$("#txt-version .nav.next").click(function(){
		txtSlide++;
		location.href="#txt-testimony"+txtSlide;
		var txtSlideCnt=$("#txt-version li").length;
		$("#txt-version .nav.prev").show();
		if(txtSlide==txtSlideCnt)  {$("#txt-version .nav.next").hide();}
	});
	//video testimonials
	var vidSlide=1;
	console.log($("#vid-version .content").offset().left,$("#vid-testimony1").offset().left);
	$("#vid-version .nav.prev").click(function(){
		vidSlide--;
		//location.href="#vid-testimony"+vidSlide;
		newPos=$("#vid-version .content").offset().left + $("#vid-testimony"+vidSlide).offset().left;		
		console.log("P",$("#vid-version .content").offset().left,$("#vid-testimony"+vidSlide).offset().left,$("#vid-testimony"+vidSlide).width());
		$("#vid-version .content").animate({
			scrollLeft:$("#vid-testimony1").width()*(vidSlide-1)
		},100);
		$("#vid-version .nav.next").show();
		if(vidSlide==1) {$("#vid-version .nav.prev").hide();}
	});
	$("#vid-version .nav.next").click(function(){
		vidSlide++;
		newPos=$("#vid-version .content").offset().left - $("#vid-testimony"+vidSlide).offset().left;
		console.log("N",$("#vid-version .content").offset().left,$("#vid-testimony"+vidSlide).offset().left,$("#vid-testimony"+vidSlide).width());
		//location.href="#vid-testimony"+vidSlide;
		$("#vid-version .content").animate({
			scrollLeft:$("#vid-testimony1").width()*vidSlide
		},100);
		var vidSlideCnt=$("#vid-version li").length;
		$("#vid-version .nav.prev").show();
		if(vidSlide==vidSlideCnt)  {$("#vid-version .nav.next").hide();}
	});
	</script> */}
</div>
    </>
  )
}
