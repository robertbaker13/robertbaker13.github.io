$( document ).ready(function() {

  // //set screenWidth & height of table
  // var screenWidth = 64;
  // var cellWidth = (100 / screenWidth) + "%";
  // var screenHeight = 32;

  // var populatedRow = function(rowNumber) {
  //   var newRow = "<tr id=\"row " + rowNumber + "\">"
  //   for(var w = 0; w < screenWidth; w++){
  //     newRow += "<td><div class=\"pink\" id=\"" + rowNumber + "x" + w + "\"></div></td>"
  //   }
  //   return newRow + "</tr>"
  // }

  // var populatedTable = function() {
  //   var newTable = "<table class=\"front\">"
  //   for(var h = 0; h < screenHeight; h++){
  //     newTable += populatedRow(h);
  //   }
  //   return newTable + "</table>"
  // }

  // var raindrops = function() {
  //   var number = 10000
  //   while(number > 0) {
  //     y = Math.floor((Math.random() * screenWidth));
  //     x = Math.floor((Math.random() * screenHeight));
  //     var Coordinates = ("#" + x + "x" + y);
  //     var speed = (x + y) % 3 == 0 ? 'slow' : (x + y) % 2 == 0 ? 'medium' : 'fast';
  //     $(Coordinates).delay(number).fadeOut(speed);
  //     number--;
  //   }
  //   $('.front').animate({opacity: 0}, 10000, function() {
  //     $(this).remove();
  //   });
  // }

  // $('body').append(populatedTable());

  // $('.pink').click(function(){
  //   $(this).toggleClass('pink grey');
  // });

  // $('.front').dblclick(function() {
  //     raindrops();
  // });

  var readFile = function(filePath) {
    $.get(filePath, function(data) {
      console.log(data);
    }, "text");
  }


// function readFiles()  SAMPLE
// {
//     $.get('file.txt', function(data) {
//         alert(data);
//     }, "text");
// }


  var reload_page = function(page) {
    switch(page) {
      case "games":
        break;
      case "tech":
        $('#main_text').removeClass('left').addClass('right');
        $('#drawing').removeClass('right').addClass('left');
        $('#drawing img').attr('src', './imgs/seal.jpg');
        break;
      case "cult":
        $('#main_text').removeClass('left').addClass('right');
        $('#drawing').removeClass('right').addClass('left');
        $('#drawing img').attr('src', './imgs/rabbit.jpg');
        break;
      default:
        $('#main_text').removeClass('right').addClass('left');
        $('#drawing').removeClass('left').addClass('right');
        $('#drawing img').attr('src', './imgs/hedgehog.jpg');
    }
  }

  var reload_buttons = function(string) {
    switch(string) {
      case "games":
        break;
      case "tech":
        break;
      case "cult":
        break;
      default:
    }
  }


  $('#home').hover(function() {
    reload_page("home");
  });

  $('#tech_blog').hover(function() {
    reload_page("tech");
    readFile("./blog/tblog0.txt")
  });

  $('#cult_blog').hover(function() {
    reload_page("cult");
  });


});
