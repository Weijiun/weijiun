$(document).ready(function() {
  $('.hamburger').on('click',  function(e){
     e.preventDefault();
     $('body').toggleClass('mobile_menu');
 });
});