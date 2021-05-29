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


  const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints:{
      900:{
        direction: 'vertical',
        slidesPerView: 2,
        freeMode:true,
      }
    }
  });
  
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    
    breakpoints:{
      760:{
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        pagination: false,
      }
    }
  });
