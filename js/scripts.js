$(function() {

  // flickity carousel
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
  });

  // slow scroll
  $(".navbar a").not('[href="#"]').click(function() {
    let sectionId = $(this).attr("href");
    
    if ($(window).width() < 600) {	
		  $("body").animate({scrollTop: $(sectionId).offset().top-115.85}, "slow");
    }	else if ($(window).width() < 1240) {
      $("body").animate({scrollTop: $(sectionId).offset().top-84.62}, "slow");
    } else {
      $("body").animate({scrollTop: $(sectionId).offset().top-96.5}, "slow");
    }
    return false;
  });

  // add-to-cart counter
  let itemCount = 0;
  
  $(".add-to-cart").click(function () {
    itemCount++;
    $('.item-count').html(itemCount).css('display','block');
  }); 

  // Subscribe button alert
  $("input[type='submit']").click(function() {
    let validEmail = document.querySelector("input[type='email']");
    if (validEmail.checkValidity() == true) {
      alert("Thanks for Subscribing!");
      return false;
    }
  });
});