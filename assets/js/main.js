
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

// function optionSelector() {
//
//   console.log("Running");
// }
