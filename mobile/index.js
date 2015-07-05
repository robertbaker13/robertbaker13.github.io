$(document).ready(function() {

  var setSizes = function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var bigButtonSize = Math.floor(windowHeight * 0.13).toString() + "px";
    var buttonLabelSize = Math.floor(windowHeight * 0.04).toString() + "px";
    var smallButtonSize = Math.floor(windowHeight * 0.1).toString() +"px";
    var buttonSubtextSize = Math.floor(windowHeight * 0.02).toString() + "px";
    $('header').height(bigButtonSize);
    $('header').width(windowWidth + "px");
    $('#keypad').width(windowWidth + "px");
    $('footer').width(windowWidth + "px");
    $('.button_label').css('font-size', buttonLabelSize);
    $('.button_subtext').css('font-size', buttonSubtextSize);
    $('.big_button').height(bigButtonSize);
    $('.big_button').width(bigButtonSize);
    $('.big_button').css('border-radius', bigButtonSize);
    $('.small_button').height(smallButtonSize);
    $('.small_button').width(smallButtonSize);
    $('.small_button').css('border-radius', smallButtonSize);
  }


  var productNames = ["Cherry Heering - 750ml", "Ketel One - 1000ml", "Whistle Pig - 750ml", "Luxardo Maraschino - 750ml"];
  var activeProductIndex = 0

  var setActiveProduct = function(newIndex) {
    activeProductIndex = newIndex || activeProductIndex;
    $('header > .button_label').html(productNames[activeProductIndex]);
  }

  setSizes();
  setActiveProduct();

  $('header').on("swipeleft",function(){
    if(activeProductIndex > 0) {
      setActiveProduct(activeProductIndex - 1);
    }
  });
  $('header').on("swiperight",function(){
    if(activeProductIndex < productNames.length - 1) {
      setActiveProduct(activeProductIndex + 1);
    }
  });

  $(window).resize(function() {
    setSizes();
  });

});