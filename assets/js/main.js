
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
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {

    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const objYear = document.getElementById("data-years");
var dataYear = $("#data-years").attr('data-years');
animateValue(objYear, 0, dataYear, 800);

const objProjects = document.getElementById("data-projects");
var dataProjects = $("#data-projects").attr('data-projects');
animateValue(objProjects, 0, dataProjects, 800);

const objAwards = document.getElementById("data-awards");
var dataAwards = $("#data-awards").attr('data-awards');
animateValue(objAwards, 0, dataAwards, 800);

const objClients = document.getElementById("data-clients");
var dataClients = $("#data-clients").attr('data-clients');
animateValue(objClients, 0, dataClients, 800);
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
