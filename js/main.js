var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    768:{
        slidesPerView: 2,
    }
  },
  loop: true,
});

// --------------date------------------
var endDate = new Date("March 31,2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var duration = endDate-now;


    var days = Math.floor(duration/(1000 * 60 * 60 * 24));
    var hours = Math.floor((duration %(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((duration % (1000*60*60))/(1000*60));
    var seconds = Math.floor((duration % (1000*60))/1000);


    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
},1000);
