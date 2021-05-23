// JavaScript Document
jQuery(window).scroll(function() {    
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 10) {
      jQuery("header").addClass("Fixed");
  } else {
      jQuery("header").removeClass("Fixed");
  }
});

jQuery(document).ready(function(){
//click scroll

$('#contact-btn').on('click', function(evt) {
  evt.preventDefault();
  const targetDivSelecter = '#' + $(this).data('target');
  // console.log(targetDivSelecter);
  
  $('html,body').stop(true, true).animate({
      scrollTop: $(targetDivSelecter).offset().top-0
  }, 900, 'swing');
})
$('#payroll-btn').on('click', function(evt) {
  evt.preventDefault();
  const targetDivSelecter = '#' + $(this).data('target');
  // console.log(targetDivSelecter);
  
  $('html,body').stop(true, true).animate({
      scrollTop: $(targetDivSelecter).offset().top-0
  }, 900, 'swing');
})
$('#PEO-btn').on('click', function(evt) {
  evt.preventDefault();
  const targetDivSelecter = '#' + $(this).data('target');
  // console.log(targetDivSelecter);
  
  $('html,body').stop(true, true).animate({
      scrollTop: $(targetDivSelecter).offset().top-0
  }, 900, 'swing');
})
$('#risk-btn').on('click', function(evt) {
  evt.preventDefault();
  const targetDivSelecter = '#' + $(this).data('target');
  // console.log(targetDivSelecter);
  
  $('html,body').stop(true, true).animate({
      scrollTop: $(targetDivSelecter).offset().top-0
  }, 900, 'swing');
})
$('#hr-btn').on('click', function(evt) {
  evt.preventDefault();
  const targetDivSelecter = '#' + $(this).data('target');
  // console.log(targetDivSelecter);
  
  $('html,body').stop(true, true).animate({
      scrollTop: $(targetDivSelecter).offset().top-0
  }, 900, 'swing');
})
$('#staff-btn').on('click', function(evt) {
  evt.preventDefault();
  const targetDivSelecter = '#' + $(this).data('target');
  // console.log(targetDivSelecter);
  
  $('html,body').stop(true, true).animate({
      scrollTop: $(targetDivSelecter).offset().top-0
  }, 900, 'swing');
})
/* wow js */

wow = new WOW(
  {
  animateClass: 'animated',
  offset:       100,
  callback:     function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
  }
);
wow.init();
 //slick slider
 $(".regular").slick({
  dots: true,
  arrows:true,
  autoplay:true,
  autoplaySpeed:4500,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//slick video slider
$(".regular-vid").slick({
  dots: false,
  arrows:true,
  autoplay:true,
  autoplaySpeed:4500,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      },
    },
  ],
});
});
