const video = document.querySelector('.video__start');
video.addEventListener('click',()=>video.classList.add('hide'));

const serviceBlocks = document.querySelectorAll('.services__item');
serviceBlocks.forEach(element => {
    element.addEventListener('click', ()=>{
        if (!element.classList.contains('active')) {
            element.classList.add('active');
            element.style.height = '70px';
            element.style.height = 'auto';
            let height = element.clientHeight + 'px';
            element.style.height = height;
          } else {
            element.style.height = '70px';
            element.classList.remove('active');;
          }
    })
  });

  const header = document.querySelector('.header__nav');
  
function toggleTopMenu (){
  if (pageYOffset > 30) {
    header.classList.add('is-scroll')}
     else
    {header.classList.remove('is-scroll')}
    }
window.addEventListener('scroll', toggleTopMenu);

const navButton = document.querySelector('.nav__burger');
navButton.addEventListener('click', e => {
  navButton.classList.toggle('active');
  document.querySelector('.menu__phone').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock')
})

function initDisplay() {
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
}


function initScreen() {
const swiper = new Swiper('.swiper1', {
  direction: 'vertical',
  slidesPerView: 1,
  freeMode:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
}




const mm = window.matchMedia('(min-width: 760px)');

window.addEventListener('load', function () {

  mm.matches ? initDisplay() : initScreen()

});
