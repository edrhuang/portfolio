$(document).ready(function(){
    $('#logo').mouseenter(function(){
        $('#logo').fadeTo('slow' , 0.7);
    });
    
    $('#logo').mouseleave(function(){
        $('#logo').fadeTo('slow' , 1);
    });
    
    
    $(".burger-box").on('click', function(){
        $(this).toggleClass('open')
        $(".panel1").slideToggle("slow");
        
    });
    
    $('li a').on('click', function(){
        $('.panel1').slideToggle("slow");
        $(".burger-box").toggleClass('open');
    });
    
});







$(document).ready(function() {
  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }
  $('a[href*=#]').each(function() {
    if ( filterPath(location.pathname) == filterPath(this.pathname)
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           var d = document.createElement("div");
        d.style.height = "101%";
        d.style.overflow = "hidden";
        document.body.appendChild(d);
        window.scrollTo(0,scrollTo);
        setTimeout(function() {
        d.parentNode.removeChild(d);
            }, 10);
           return false;
         });
      }
    }
  });
});

var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.topbar')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
});

$(document).ready(function () {
$(window).scroll(function(){
   if($(this).scrollTop() > 3500) {
       $('.scrollup').fadeIn();
   } else {
       $('.scrollup').fadeOut();
   }
});

$('.scrollup').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false; 
});
});

           