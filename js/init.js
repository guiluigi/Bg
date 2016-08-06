/* global $ */
/* global slider */
(function($){
  $(function(){
    $('ul.tabs').tabs();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.slider').slider({
      height: 600
    });
    $('.carousel').carousel({full_width: true});
    $(".button-collapse").sideNav('show');
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
    
    $('#btnPrev').click(function(){
				$('.slider').slider('prev');
		});
		$('#btnNext').click(function(){
				$('.slider').slider('next');
		});

    $('.slider').mouseenter(function(e) {
        $('.slider').slider('pause');
    });

    $('.slider').mouseleave(function(e) {
        $('.slider').slider('start');
    });
    
  });
  
    // end of document ready
})(jQuery); // end of jQuery name space

