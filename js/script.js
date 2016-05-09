window.onload = init;
function init() {

}

//    MENU TOGGLE - JQUERY
function rotate() {
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
      rotate();
    }
  $('aside a').on('click', function() {
    if ($('aside').hasClass('active-menu')) {
      $('aside').removeClass('active-menu');
    } else {
      rotate();
    }
  });
});

//    SEARCH-MODAL
$('#search-modal-btn').on('click', function() {
  $('#modal').toggleClass('active-modal');
  if ($('#modal').hasClass('active-modal')) {
    $('h1').css('opacity', '0');
    $('#search-modal-btn').css('background-image', 'url("img/icons/search-a.png")');
  } else {
    $('h1').css('opacity', '1');
    $('#search-modal-btn').css('color', '$gray');
    $('#search-modal-btn').css('background-image', 'url("img/icons/search.png")');
  }
});

function clear() {
  var clear = document.getElementById('button');
  var input = document.getElementById('input');
  clear.onclick = function() {
    input.target.value = '';
  }
}
