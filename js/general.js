$(function(){
    $('.banner-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      });
    

      $('.sports-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        
      });

      $('.casino-megamenu').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        
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

      //DETECT MOBILE
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        window.location.replace("/mobile/");
      }else{
       
      }

      function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
      }
      if (isMobile()) {
        window.location.replace("./mobile/");
      } else {
      
      }


      $(window).resize(function() {
        // This will fire each time the window is resized:
          if($(window).width() >= 1024) {
              // if larger or equal
              $('.element').show();
          } else {
              // if smaller
              if (isMobile()) {
                window.location.replace("./mobile/");
              } else {
              
              }
          }
      }).resize(); // This will simulate a resize to trigger the initial run.
})