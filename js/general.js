$(function(){
    $('.banner-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    

      $('.sports-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
      });

      $('.casino-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
      });

      $('.slot-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
      });
    
      $(window).bind('scroll', function() {
        var navHeight = $('header').height();
        if ($(window).scrollTop() > navHeight) {
          $('header').addClass('sticky');
          
         }
        else {
          $('header').removeClass('sticky');
         }
      });
    

       //LANGUAGE TOGGLE

      $(".lang-menu > ul").hide();
       
  $("#langToggle").click(function(){
    var lang;
    var activeLang;
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(".lang-menu").css({
        "height": "0",
        "padding": "0",
        "opacity": "0"
      })
      $(".lang-menu > ul").hide();
     
    }
    else{
      $(this).addClass("active");
      $(".lang-option > span").click(function(){
        lang = $(this).data("country-lang")
        console.log("Country-Language: " + lang);
        console.log("Country: " + lang.split("_")[1]);
       $("#langToggle").removeClass().addClass("lang_" + lang.split("_")[1])
      });

      $(".lang-menu").css({
        "height": "auto",
        "padding": "14px 18px",
        "opacity": "1"
      });
      $(".lang-menu > ul").show().delay("slow").css({
        "height": "auto",
        "overflow": "hidden" 
      })
    }

    $(".close-lang").click(function(){
      $("#langToggle").removeClass("active");
      $(".lang-menu").css({
        "opacity": "0",
        "height": "0",
        "padding": "0"
      })
      $(".lang-menu > ul").hide();
    });
  });

      $(".nav-menu-list > li").hover(function(){
        console.log($(this).attr("data-nav"));
        var navActive = $(this).attr("data-nav");
        $("header").addClass("mega-menu-on");

        $(".mega-submenu >div > div[data-submenu=" + navActive + "]").addClass("on").siblings().removeClass("on")

        $("header").on("mouseleave", function(){
          $("header").removeClass("mega-menu-on")
        })
      })

     
      function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
      }
      if (isMobile()) {
        var pathname = window.location.pathname;
        var splitpath = pathname.split('/')
         window.location.replace(splitpath[0] +"/mobile/");
        //window.location.replace( pathname + "/mobile/");
      } else {
      
      }


      $(window).resize(function() {
        // This will fire each time the window is resized:
          if($(window).width() >= 1024) {
          } else {
              // if smaller
              if (isMobile()) {
                var pathname = window.location.pathname;
                var splitpath = pathname.split('/')
                 window.location.replace(splitpath[0] +"/mobile/");
              } else {
              
              }
          }
      }).resize(); // This will simulate a resize to trigger the initial run.


      //backtotop
      $("#toTop").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({scrollTop: 0}, 1000);
     });


      //TAB Module 
      $(".tab-control > li").click(function(){
          $(this).addClass("active").siblings().removeClass("active");
          var tabClick = $(this).attr("data-tab");

          $(".tab-content-panel > div[data-tab-content= " + tabClick +"]").addClass("active").siblings().removeClass("active");
      })


})