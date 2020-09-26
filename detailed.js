

  $(window).scroll( function() {
      if( $(this).scrollTop() > 0 ) {
          $("#top-nav").css('display','none');
      }
      else {
          $("#top-nav").css('display', 'flex');
      }
  });


$('#btn-smartapp').on('click', function() {
  if ($(this).hasClass('active-acc')) {
    $('.inner-buttons').removeClass('active-acc')
  }
});
$('.nav-link, .language-menu-hider').on('click',function() {
  if (!$(this).is('#navbarDropdownMenuLink')) {
    $('.overlay').css('visibility', 'hidden')
    $('.navbar-collapse').collapse('hide');
  }
});
$('.card-header').on('click',function(){
  if ($(this).children('fa-chevron-up').css('display')== 'none') {
    $(this).children('fa-chevron-up').css('display', 'block')
  }else{
    $(this).children('fa-chevron-up').css('display', 'none')
  }
})
$('.navbar-toggler').on('click', function () {
  if ($('#navbarNav').hasClass('show')) {
    $('.overlay').css('visibility', 'hidden');
  }else {
    $('.overlay').css('visibility', 'visible');
  }
});


function toggleNavbars(breakpoint) {
  if (window.innerWidth>breakpoint) {
    $('#top-nav-for-mobile').css('display', 'none');
    $('#top-nav').css('display', 'flex');
  }else{
    $('#top-nav').css('display', 'none');
    $('#top-nav-for-mobile').css('display', 'flex');
  }
}

var bp = 1200;
window.addEventListener('resize', toggleNavbars(bp));
