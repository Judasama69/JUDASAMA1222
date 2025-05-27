$(document).ready(function () {
    console.log("✅ jQuery is working and document is ready!");

    $('.container').on('mouseenter', function () {
      console.log("🖱️ Mouse entered .container");
      $('.card').stop().animate({
        top: '-90px'
      }, 'slow');
    }).on('mouseleave', function () {
      console.log("👋 Mouse left .container");
      $('.card').stop().animate({
        top: '0px'
      }, 'slow');
    });
  });