window.onscroll = function() {myFunction()};
function myFunction() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

  if (window.pageYOffset <= sticky) {
    
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
}
$( document ).ready(function() {
   $('#search-icon-trigger').click(function(){
   		$(this).next('.search-form-box').toggleClass('is-open');
   });
	$('.home-our-team .multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		 responsive: [
    	{
      breakpoint: 991,
      settings: {
        slidesToShow:2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	$('.tp-banner-container').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 5000,
  		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    	prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
	});
	$('.menu-mobile').click(function(){
		$(this).parents().find('.header-bottom-center').toggleClass('is-open');
	});
  $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#goTop').fadeIn(); 
        } else { 
            $('#goTop').fadeOut(); 
        } 
    }); 
    $('#goTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
});