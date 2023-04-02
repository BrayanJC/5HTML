var swiper = new Swiper(".testimonialslider", {       
  slidesPerView: 1,       
  spaceBetween: 30,       
  loop: true, 
  speed:1000,
  autoplay: {
    delay: 2000,
  },
  pagination: {            
    el: ".swiper-pagination",
    clickable: true,
  },
   breakpoints:{       
      992: {
        slidesPerView: 3,
      },   
      768: {
        slidesPerView: 2,
      }
    }    
});




var swiper = new Swiper(".courseslider", {       
  slidesPerView: 1,       
  spaceBetween: 18,       
  loop: true, 
  speed:1000,
  autoplay: {
    delay: 2000,
  },
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{       
      992: {
        slidesPerView: 3,
      },   
      768: {
        slidesPerView: 2,
      }
    }      
});



var swiper = new Swiper(".aboutslider", {       
  slidesPerView: 1,       
  spaceBetween: 30,       
  loop: true, 
  speed:1000,
  pagination: {            
    el: ".swiper-pagination",
    clickable: true,
  },    
  autoplay: {
    delay: 2000,
  },
  breakpoints:{       
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },   
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
    }    
});




var swiper = new Swiper(".innerpagelider", {       
  slidesPerView: 4,       
  spaceBetween: 30,       
  loop: true, 
  pagination: {            
    el: ".swiper-pagination",
    clickable: true,
  },       
});