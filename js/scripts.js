$(function() {
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  $(".navbar a").not('[href="#"]').click(function() {
    var sectionId = $(this).attr("href");
     if ($(window).width() < 600) {	
		  $("body").animate({scrollTop: $(sectionId).offset().top-115.85}, "slow");
    }	else if ($(window).width() < 1240) {
      $("body").animate({scrollTop: $(sectionId).offset().top-84.62}, "slow");
    } else {
      $("body").animate({scrollTop: $(sectionId).offset().top-96.5}, "slow");
    }
    return false;
  });
});