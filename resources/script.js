function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});




// $('.modal').on('click', function() { 
//   console.log("hello im here in the click")
//     $(this).attr('btnclose').select();
// });




// $('.popup').on('click', function() { 
// // when you click the div
//   console.log("hello")
//   if ($('.popup').hasClass('no-hover')){
//     $('.popup').removeClass('no-hover');
//   } else {
//   $('.popup').addClass('no-hover')
// }
// });

// $('div').on('click', function() { 
// // when you click the div
//   setTimeout(() =>{ console.log("hielo")}, 500)
//   if ($(this).hasClass('no-hover')){
//     $(this).removeClass('no-hover');
//   } else {
//   $(this).addClass('no-hover')
// }


// });

