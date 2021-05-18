const video = document.querySelector('.video__start');
video.addEventListener('click',()=>video.classList.add('hide'));

const serviceBlocks = document.querySelectorAll('.services__item');
serviceBlocks.forEach(element => {
    element.addEventListener('click', ()=>{
        if (!element.classList.contains('active')) {
            element.classList.add('active');
            // element.style.height = 'auto';
            // let height = element.clientHeight + 'px';
            // element.style.height = '70px';
            // element.style.height = height;
          } else {
            // element.style.height = '70px';
            element.classList.remove('active');}
    })
  });

const swiper = new Swiper('.swiper1', {
  direction: 'vertical',
  slidesPerView: 2,
  loop: true,
  freeMode:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true
});