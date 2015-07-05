$(document).ready(function() {


  $('header').on("swipeleft",function(){
    var currentClass = $(this).attr("class");
    if(currentClass == "center") {
      $(this).toggleClass("center left");
    }
    else if(currentClass == "right") {
      $(this).toggleClass("center right");
    }
  });
  $('header').on("swiperight",function(){
    var currentClass = $(this).attr("class");
    if(currentClass == "center") {
      $(this).toggleClass("center right");
    }
    else if(currentClass == "left") {
      $(this).toggleClass("center left");
    }
  });
  $('footer').on("swipeleft",function(){
    var currentClass = $(this).attr("class");
    if(currentClass == "center") {
      $(this).toggleClass("center left");
    }
    else if(currentClass == "right") {
      $(this).toggleClass("center right");
    }
  });
  $('footer').on("swiperight",function(){
    var currentClass = $(this).attr("class");
    if(currentClass == "center") {
      $(this).toggleClass("center right");
    }
    else if(currentClass == "left") {
      $(this).toggleClass("center left");
    }
  });


});