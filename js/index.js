$(document).ready(function(){
    $(".cycle-slideshow").cycle({
      fx: 'fade',
      timeout: 3000,
      prev: '#prev',
      next: '#next'
    }); 

    
    $("roller").autoscroll({
      hideScrollbar:false
    });
    $("roller").autoscroll({
      handlerIn: null,
      handlerOut: null
    });
    
  });

   window.addEventListener("scroll",function(){
    var fix = document.querySelector(".fix-container");
    fix.classList.toggle("sticky",window.scrollY > 100);
  })


  $("#form").submit(function(event){
    $(".submit").css("display","none");
    $(".email").attr("placeholder","Thank You For Subscribing...!!");
    $(".email").val("Thank You For Subscribing...!!");
    $(".email").css("color","#ec4310");
    $(".email").css("font-style","italic");
    $(".email").css("font-weight","bold");
    event.preventDefault();
  });





   /*
    function pageScroll(){
      window.scrollBy(0,1);
      scrolldelay = setTimeout(pageScroll,10);
    };
    pageScroll();
    */