var loadStatusA = 0;
var loadStatusB = 0;
var loadStatusC = 0;

function animateSlideInScrollA(className) {

  $(window).scroll(function() {

    var oTop = $(className).offset().top - window.innerHeight;
    if (loadStatusA == 0 && $(window).scrollTop() > oTop) {

      var animID = $(className).attr("id");
      if (animID == "right") {
        $("#" + animID).addClass("animation-right");
      } else if (animID == "left") {
        $("#" + animID).addClass("animation-left");
      }
      loadStatusA = 1;
    }
  });
}

function animateSlideInScrollB(className) {

  $(window).scroll(function() {

    var oTop = $(className).offset().top - window.innerHeight;
    if (loadStatusB == 0 && $(window).scrollTop() > oTop) {

      var animID = $(className).attr("id");
      if (animID == "right") {
        $("#" + animID).addClass("animation-right");
      } else if (animID == "left") {
        $("#" + animID).addClass("animation-left");
      }
      loadStatusB = 1;
    }
  });
}

function animateSlideInScrollC(className) {

  $(window).scroll(function() {

    var oTop = $(className).offset().top - window.innerHeight;
    if (loadStatusC == 0 && $(window).scrollTop() > oTop) {

      var animID = $(className).attr("id");
      console.log(animID);
      if (animID == "rightB") {
        $("#" + animID).addClass("animation-right");
      } else if (animID == "left") {
        $("#" + animID).addClass("animation-left");
      }
      loadStatusC = 1;
    }
  });
}

animateSlideInScrollA(".profile-content");
animateSlideInScrollB(".portfolio-option-section");
animateSlideInScrollC(".about-us-section");
