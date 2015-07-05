$( document ).ready(function() {
  //set screenWidth & height of table
  var screenWidth = 64
  var cellWidth = (100 / screenWidth) + "%"
  var screenHeight = 32

  var populatedRow = function(rowNumber) {
    var newRow = "<tr id=\"row " + rowNumber + "\">"
    for(var w = 0; w < screenWidth; w++){
      newRow += "<td><div class=\"pink\" id=\"" + rowNumber + "x" + w + "\"></div></td>"
    }
    return newRow + "</tr>"
  }

  var populatedTable = function() {
    var newTable = "<table class=\"front\">"
    for(var h = 0; h < screenHeight; h++){
      newTable += populatedRow(h);
    }
    return newTable + "</table>"
  }

  var change_color = function(object, new_color) {
    $(object).animate({color: new_color}, 5000, function() {});
  }

  var raindrops = function() {
    var number = 10000
    while(number > 0) {
      y = Math.floor((Math.random() * screenWidth));
      x = Math.floor((Math.random() * screenHeight));
      var Coordinates = ("#" + x + "x" + y);
      var speed = (x + y) % 3 == 0 ? 'slow' : (x + y) % 2 == 0 ? 'medium' : 'fast';
      $(Coordinates).delay(number).fadeOut(speed);
      number--;
    }
    $('.front').animate({opacity: 0}, 10000, function() {
      $(this).remove();
    });
  }

  // $('body').append(populatedTable());

  $('.pink').click(function(){
    $(this).toggleClass('pink grey');
  });

  $('.front').dblclick(function() {
      raindrops();
  });

  $('#games').click(function() {
    $(this).css('background-color', 'black');
    $('#drawing').toggleClass('right_column left_column');
    $('#main_text').toggleClass('right_column' 'left_column');
  });

});
