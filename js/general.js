$(function(){
    $('.banner-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    

      $('.sports-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
      });

      $('.casino-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
      });

      $('.slot-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
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
        window.location.replace( pathname + "mobile/");
      } else {
      
      }


      $(window).resize(function() {
        // This will fire each time the window is resized:
          if($(window).width() >= 1024) {
          } else {
              // if smaller
              if (isMobile()) {
                var pathname = window.location.pathname;
                window.location.replace(pathname +"mobile/");
              } else {
              
              }
          }
      }).resize(); // This will simulate a resize to trigger the initial run.



      //TAB Module 
      $(".tab-control > li").click(function(){
          $(this).addClass("active").siblings().removeClass("active");
          var tabClick = $(this).attr("data-tab");

          $(".tab-content-panel > div[data-tab-content= " + tabClick +"]").addClass("active").siblings().removeClass("active");
      })


})