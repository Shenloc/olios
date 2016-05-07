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
  $('aside a').on('click', function() {
    if ($('aside').hasClass('active-menu')) {
      $('aside').removeClass('active-menu');
    }
  });
});

$('#sidenav a').on('click', function() {
  $(this).css('color', 'blue');
});
