$(function(){
    $('.banner-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      });
    
    
      $(".nav-menu-list > li").hover(function(){
        console.log($(this).attr("data-nav"));
        $("header").addClass("mega-menu-on")
        $("header").on("mouseleave", function(){
          $("header").removeClass("mega-menu-on")
        })
      })
})