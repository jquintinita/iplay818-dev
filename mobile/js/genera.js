$(function(){

    function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
      }
      if (isMobile()) {
            
      } else {
      window.location.replace("../");
      }
      $(window).resize(function() {
        // This will fire each time the window is resized:

        if (isMobile()) {
                   
        } else {
          
          if($(window).width() >= 1024) {
                window.location.replace("../");
                
            }
        }
         
      })
})