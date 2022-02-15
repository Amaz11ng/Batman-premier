first = document.querySelector('.header');
second = document.querySelector('.main');
third = document.querySelector('.footer');
fourth = document.querySelector('.loading-spinner');
fifth= document.querySelector('.bc');
const screenWidth = window.screen.width
function load() {
    first.style.visibility = 'visible';
    second.style.visibility = 'visible';
    third.style.visibility = 'visible';
    fourth.style.visibility = 'hidden';
    fifth.style.visibility = 'hidden';
    fifth.remove();
}
setInterval(load, 2000);

const swiper = new Swiper('.swiper', {
  
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

let burger = document.querySelector('.menu-burger');
let close = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
})

close.addEventListener('click', () => {
    menuMobile.style.display = 'none';
})

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.classList.remove('active');
    }
});