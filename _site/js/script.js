window.onload = init;
function init() {

  //menuToggle();

}


//    MENU TOGGLE
/*
function menuToggle() {
  var menu = document.getElementById('menu')
      sidenav = document.getElementsByTagName('aside');

  menu.onclick = menuOpen;

  function menuOpen() {
    for (i = 0; i < sidenav.length; i++) {
      sidenav[i].classList.toggle('active-menu');
    }
    $('#sidenav a').on('click', function() {
      $('aside').css('transform', 'translateX(100%)');
    });

  }
}
*/

//    MENU TOGGLE - JQUERY
$('#menu').on('click', function(){
  $('aside').toggleClass('active-menu');
    if ($('aside').hasClass('active-menu')) {
      $('.top').css({
        transform: 'translateY(5px) rotate(45deg)',
        transition: '.5s ease'
      });
      $('.bottom').css({
        transform: 'translateY(-5px) rotate(-45deg)',
        transition: '.5s ease'
      });
      $('.center').css({
        opacity: '0',
        transition: '.5s ease'
      });
    } else {
      $('.top').css({
        transform: 'translateY(0) rotate(0deg)',
        transition: '.5s ease'
      });
      $('.bottom').css({
        transform: 'translateY(0) rotate(0deg)',
        transition: '.5s ease'
      });
      $('.center').css({
        opacity: '1',
        transition: '.5s ease'
      });
    }
  $('aside a').on('click', function() {
    if ($('aside').hasClass('active-menu')) {
      $('aside').removeClass('active-menu');
    } else {
      $('.top').css({
        transform: 'translateY(0) rotate(0deg)',
        transition: '.5s ease'
      });
      $('.bottom').css({
        transform: 'translateY(0) rotate(0deg)',
        transition: '.5s ease'
      });
      $('.center').css({
        opacity: '1',
        transition: '.5s ease'
      });
    }
  });
});

$('#sidenav a').on('click', function() {
  $(this).css('color', 'blue');
});
