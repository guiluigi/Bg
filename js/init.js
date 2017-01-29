/* global $ */
/* global slider */
(function($){
  $(function(){
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('ul.tabs').tabs();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav('show');
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
    $('.carousel').carousel({indicators: true, full_width: true});
    $('.tooltipped').tooltip({delay: 50});
    $('select').material_select();
     

    $('.slider').slider({height: 600});
    
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

