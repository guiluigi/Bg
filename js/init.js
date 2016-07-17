/* global $ */
/* global slider */
(function($){
  $(function(){
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.slider').slider({full_width: true});
    $('.carousel').carousel();
    $(".button-collapse").sideNav('show');
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
  });
    // end of document ready
})(jQuery); // end of jQuery name space

