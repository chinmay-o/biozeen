$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 80) {

	    $(".navbar").addClass("navbar-onscroll");
      $(".nav-item a").css("color", "black");
      $(".nav-item a").css("transition", "0.8s");
	  }
	  else{

		  $(".navbar").removeClass("navbar-onscroll");
      $(".nav-item a").css("color", "white");
      $(".nav-item a").css("transition", "0.8s");
	  }
  })
})

// Portfolio Choosing Start
$('.portfolio-choice h6').click(function(event) {

    var status = $(this).attr('id');

    $("#portfolio-choice01").css("background-color", "#ffffff");
    $("#portfolio-choice02").css("background-color", "#ffffff");
    $("#portfolio-choice03").css("background-color", "#ffffff");
    $(".portfolio-choice h6").css("color", "#000000");

    $("#" + status).css("background-color", "#329d4d");
    $("#" + status).css("color", "#ffffff");

    if (status == "portfolio-choice01") {

      $(".portfolio-img").css("background-image", "url(../biozeen/assets/images/lab-equipment.jpg)");
    }
    else if (status == "portfolio-choice02") {

      $(".portfolio-img").css("background-image", "url(../biozeen/assets/images/support-in-biotech.jpg)");
    }
    else if (status == "portfolio-choice03") {

      $(".portfolio-img").css("background-image", "url(../biozeen/assets/images/insight-in-biotech.jpg)");
    }
});
// Portfolio Choosing End

// Animating Counter Start
var a = 0;
function animateCounterScroll() {

  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
      });
      a = 1;
    }
  });
}
animateCounterScroll();
// Animating Counter End

// Video Thumbnail Fetch Start
function thumbnailFetch() {

  $('.card-video-thumbnail').each(function(){

    var videoURL = $(this).attr('data-video-url');
    var videoID = videoURL.split("/")[3];
    $(this).css("background-image", "url(https://img.youtube.com/vi/"+videoID+"/0.jpg)");
  });
}
thumbnailFetch();
// Video Thumbnail Fetch End
