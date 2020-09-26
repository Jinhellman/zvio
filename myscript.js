var timeOut;
var mySwiper = new Swiper('.swiper-container', {

    direction: 'vertical',
    loop: false,
    mousewheel: true,
    keyboard: true,
    cache: false,
    on: {
        init: function () {
            $('.pagination-labels').eq(0).addClass('make-visible')
            timeOut = setTimeout(function (){
                $('.pagination-labels').eq(0).removeClass('make-visible')
            }, 2000)
        }
    }
})


$(document).ready(function() {
  try {
    processPage();
  } catch (e) {
    console.log(e.message)
  }


});


function processPage()
  {
    var url_string = location.search.substring(1);

      if (url_string) {
        var parameters = url_string.split("&");
        var temp = parameters[1].split("=");
        var page = unescape(temp[1]);

        if (page && page !== "undefined") {
          mySwiper.slideTo(page);
        }
    }
}


function reportWindowWidth(breakpoint){
  if (window.innerWidth<= breakpoint) {
    $('#top-nav').css('display', 'none');
    if (mySwiper !== undefined) {
      mySwiper.destroy(true, true)
    }

  } else if (window.innerWidth >breakpoint) {
    $('#top-nav-for-mobile').css('display', 'none');
     mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
        mousewheel: true,
        keyboard: true,
        on: {
            init: function () {
                $('.pagination-labels').eq(0).addClass('make-visible')
                timeOut = setTimeout(function (){
                    $('.pagination-labels').eq(0).removeClass('make-visible')
                }, 2000)
            }
        }
    })
  }
}
var breakpoint = 1200;
window.addEventListener('resize', reportWindowWidth(breakpoint))
try {
  mySwiper.on('slideChange', function () {
    clearTimeout(timeOut);
    $('.pagination ul li').each(function (index) {
        $('.pagination-labels').eq(index).removeClass('make-visible fade-in')
        $(this).removeClass('active');
    })
    $(".logo-1").attr("src", "media/logo_light.svg")
    $('.pagination  ul li .vl').css('background-color', '');
    $('.pagination-labels').css('color', '');
    $('.pagination ul li').eq(mySwiper.activeIndex).addClass('active');
    $('.pagination-labels').eq(mySwiper.activeIndex).addClass('make-visible fade-in')

    if (mySwiper.activeIndex ==1 ) {
        $('.pagination-labels').css('color', 'black');
        $('.pagination  ul li .active .vl').css('background-color', '#494E54');
        $('#slide2').css('background-color', 'black');
        if ($(window).width() > 1200) {
            $(".logo-1").attr("src", "media/logo_dark.svg")
        }
        $('#second-container .sp1').addClass('animate-second-slide ')
    }
    if (mySwiper.activeIndex == 2) {
    }
    timeOut = setTimeout(function () {
        $('.pagination-labels').eq(mySwiper.activeIndex).removeClass('make-visible')
    }, 1500)
  })

} catch (e) {
  console.log(e.message)
}

$('#language-picker').on('click', function () {
    $('#language-picker div a').addClass('fade-in');
});
$("#third-p-button").on('click', function(){
  if ($('#third-p').hasClass('animate-third-slide')) {

    $('#third-p').removeClass('animate-third-slide');
    $('#third-p').addClass('deanimate-third-slide');
    $("#third-p").css('opacity', '0');
  } else {
      $('#third-p').css("display", "block");
      $("#third-p").css('opacity', '1');
      $('#third-p').addClass('animate-third-slide');
      $('#third-p').removeClass('deanimate-third-slide');
  }
})

  $(document).on('click', '.slide-changer, .pagination ul li ', function () {
      $('ul li').removeClass('active');
      $(this).addClass('active');
      try {
        mySwiper.slideTo($(this).index(), 1000, false)
      } catch (e) {
        console.log(e.message);
      }


  });

  $('.nav-link, .language-menu-hider').on('click',function() {
    if (!$(this).is('#navbarDropdownMenuLink')) {
      $('.overlay').css('visibility', 'hidden')
      $('.navbar-collapse').collapse('hide');
    }
  });

  $('.navbar-toggler').on('click', function () {
    if ($('#navbarNav').hasClass('show')) {
      $('.overlay').css('visibility', 'hidden');
    }else {
      $('.overlay').css('visibility', 'visible');
    }
  });
