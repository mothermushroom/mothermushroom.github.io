$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$('.popup').on('click', function() { 
// when you click the div
  console.log("hello")
  $(this).addClass('no-hover'); // add the class 'no-hover'
});

console.log("hi")