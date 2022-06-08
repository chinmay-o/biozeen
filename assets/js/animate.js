

function animateSlideInScroll() {

  $(window).scroll(function() {

    $('.slide-in').each(function() {

      var oTop = $(this).offset().top - window.innerHeight;
      if ($(window).scrollTop() > oTop) {

        var animID = $(this).attr("data-slide");
        if (animID == "right") {
          $(this).addClass("animation-right");
        } else if (animID == "left") {
          $(this).addClass("animation-left");
        }
      }
    });
  });
}

animateSlideInScroll();
