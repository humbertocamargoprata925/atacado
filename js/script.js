$(window).on("load", function () {
  // Preload
  $("#preload").fadeOut(500);
});

jQuery(document).ready(function () {

  // Counter
  $('.counter').counterUp({
     delay: 10,
     time: 1100,
  });

  // Magnific Popup Video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,
     fixedContentPos: false
  });

  // OWl Carousel pricing
  $('.pricing-carousel').owlCarousel({
     loop: true,
     margin: 10,
     nav: false,
     dots: true,
     responsive: {
        0: {
           items: 1
        },
        600: {
           items: 2
        },
        1000: {
           items: 3
        },
        1200: {
           items: 4
        }
     }
  });


  // Magnific Popup pricing
  $('.image-popup-no-margins').magnificPopup({
     type: 'image',
     closeOnContentClick: true,
     closeBtnInside: false,
     fixedContentPos: true,
     mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     image: {
        verticalFit: true
     },
     zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
     }
  });

  // OWl Carousel Testimonials
  $('.testimonials-carousel').owlCarousel({
     loop: true,
     margin: 10,
     nav: false,
     dots: true,
     responsive: {
        0: {
           items: 1
        },
        600: {
           items: 1
        },
        1000: {
           items: 1
        }
     }
  });

  // Accordion  FAQ
  $('.wrapper-accordion .content-accordion:first-of-type').show();
  $('.wrapper-accordion h3:first-of-type').children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');

  var titleAccordion = $('.wrapper-accordion h3');
  var contentAccordion = $('.content-accordion');


  titleAccordion.click(function () {
     var content = $(this).next(contentAccordion);
     if (content.is(':visible')) {
        content.slideUp();
        $(this).children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
     } else {
        contentAccordion.slideUp();
        content.slideDown();
        titleAccordion.children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
     }

  });

  // Scroll Top Button
  $('#scroll-top').click(function () {
     $('body,html').animate({
        scrollTop: 0
     }, 800);
     return false;
  });

  // Scroll Top
  $('#scroll-top').hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 50) {
        $('#scroll-top').fadeIn();
     } else {
        $('#scroll-top').fadeOut();
     }
  });

  // Scroll Menu
  $(".menu li").on("click", "a", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
        top = $(id).offset().top;
     $('body,html').animate({
        scrollTop: top
     }, 1500);
  });
  $("#logo,  #appointment, #whywe a").on("click", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
        top = $(id).offset().top;
     $('body,html').animate({
        scrollTop: top
     }, 1500);
  });

  // Scroll Fixed Menu
  $(window).scroll(function () {
     if ($(this).scrollTop() > 0) {
        $('.header-fixed').addClass('bgcolor');
     } else {
        $('.header-fixed').removeClass('bgcolor');
     }
  });


  // Mobile Menu
	$('#openmenu').click(function (event) {
	   event.preventDefault();
	   $('.wrapper-menu-link').animate({
		  'left': 0
	   }, 800);
	});
 
	$('#closemenu').click(function (event) {
	   event.preventDefault();
	   $('.wrapper-menu-link').animate({
		  'left': '-320px'
	   }, 800);
	});
 
	$('#nav a').on("click", function () {
	   $(".wrapper-menu-link").animate({
		  'left': '-320px'
	   }, 800);
	});


}); // ready