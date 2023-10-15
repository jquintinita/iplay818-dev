$(function(){

  $('.banner-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.games-container').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    verticalSwiping: true
  });

  $('.game-tab[data-game-tab]').click(function(e) {
    e.preventDefault();
    console.log("here");
    var slideno = $(this).data('game-tab');
    $('.games-container').slick('slickGoTo', slideno - 1);
    $('.game-tab[data-game-tab]').removeClass('active');
    this.classList.add('active').siblings().removeClass("active");
  });
// replace getSlideCount and getNavigableIndexes without rehosting hack

$(".games-container").each(function() {
  this.slick.getSlideCount = function() {

      var _ = this,
          slidesTraversed, swipedSlide, centerOffset;
          

      centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
          
          _.$slideTrack.find('.slick-slide').each(function(index, slide) {
              var offsetPoint = slide.offsetLeft,
                  outerSize = $(slide).outerWidth();
              
              if(_.options.vertical === true) {
                  offsetPoint = slide.offsetTop;
                  outerSize = $(slide).outerHeight();
              }
              if (offsetPoint - centerOffset + (outerSize / 2) > (_.swipeLeft * -1)) {
                  swipedSlide = slide;
                  return false;
              }
          });
          slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
          
          return slidesTraversed;
      } else {
          return _.options.slidesToScroll;
      }

  };
  
  this.slick.getNavigableIndexes = function() {

      var _ = this,
          breakPoint = 0,
          counter = 0,
          indexes = [],
          max;

      if (_.options.infinite === false) {
          max = _.slideCount;
      } else {
          breakPoint = _.options.slideCount * -1;
          counter = _.options.slideCount * -1;
          max = _.slideCount * 2;
      }

      while (breakPoint < max) {
          indexes.push(breakPoint);
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }

      return indexes;

  };
});



var footerHeight = $("footer").innerHeight() + 5;
var windowHeight = $(window).innerHeight();


$(".page-container").css("height", windowHeight - footerHeight);

  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}
if (isMobile()) {
      
} else {
window.location.replace("../");
}
    
})