// nav hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

// particles start
$(document).ready(function() {
  $('#particles').particleground({
    minSpeedX: 0.1,
    maxSpeedX: 0.7,
    minSpeedY: 0.1,
    maxSpeedY: 0.7,
    directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
    density: 10000, // How many particles will be generated: one particle every n pixels
    dotColor: '#fff',
    lineColor: '#666666',
    particleRadius: 7, // Dot size
    lineWidth: 1,
    curvedLines: false,
    proximity: 100, // How close two dots need to be before they join
    parallax: true,
    parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
    onInit: function() {},
    onDestroy: function() {}
  });
  // particles end
  // portfolio gallery start
  $('.list').click(function(){
    const value =$(this).attr('data-filter');
    if(value == "All"){
      $(".itemBox").show("slow")
    }else{
      $(".itemBox").not('.'+ value).hide("slow");
      $(".itemBox").filter('.'+ value).show("slow");
    }
    
  })
  $('.list').click(function(){
    $(this).addClass("active")
  })
  // portfolio gallery end

  // slick slider start
 $('.demo').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  mobileFirst:true,
  touchMove:true
  });
  
 $('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  mobileFirst:true,
  });
  // slick slider end
  })

  