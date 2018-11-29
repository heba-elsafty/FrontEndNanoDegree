$(function(){
  $('.menu-toggle').click (function(){
   $(this).toggleClass('open');
   $(".mobile-menu-hide").toggleClass('open');
 });

 $('.main-menu-item').click(function(){
   $('.menu-toggle').trigger("click");
 });
});
