
// Portfolio Choosing
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

// Animating Counter
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

const obj01 = document.getElementById("data-years");
// var dataYear = $(".achievments-sec span").attr('data-years');
animateValue(obj, 0, 15, 1000);
