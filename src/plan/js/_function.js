import Swiper from 'swiper';
import { _breakP } from '/common/js/lib/utils.js';
export default class plan {
  constructor() {
    this.gallerySwiperFunc();
    this.searchPoint();
  }

  gallerySwiperFunc() {
    const $gallerySwiper = document.querySelectorAll('.js-gallerySwiper');

    function sliderFunc() {
      window.addEventListener('load', function () {
        $gallerySwiper.forEach(elm => {
          const i = [].slice.call($gallerySwiper).indexOf(elm);
          elm.classList.add('gallerySwiper--' + i);
          const slideLength = elm.getElementsByClassName('swiper-slide').length;
          const imgArr = elm.querySelectorAll('.swiper-slide img');
          imgArr.forEach(elm => {
            elm.classList.add('swiper-lazy');
            elm.classList.remove('lazyload');
          });
          const slideSwitchSpeed = 1000;
          const optionArray = {
            loop: true,
            pagination: {
              el: '.gallerySwiper--' + i + ' .swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.js-gallerySwiper-next',
              prevEl: '.js-gallerySwiper-prev'
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            on: {
              init: function () {
                setTimeout(() => {
                }, slideSwitchSpeed);
              }
            },
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: '1.1194029851',
            speed: slideSwitchSpeed,
            simulateTouch: true,
            lazy: {
              loadPrevNext: true
            },
            allowTouchMove: true,
            grabCursor: true,
            scrollbar: false,
            loopedSlides: 10,
            breakpoints: {
              768: {
                loop: true,
                centeredSlides: false,
                scrollbar: false,
                slidesPerView: 1,
                spaceBetween: 60
              }
            }
          };
          const gallerySwiper = new Swiper(`.gallerySwiper--${i} .swiper-container`, optionArray);

          // gallerySwiper.on('slideChange', function () {
          //   setTimeout(() => {
          //   }, slideSwitchSpeed);
          // });
        });
      });
    }
    $gallerySwiper.length ? sliderFunc() : null;
  }
  searchPoint() {
    const $searchPoint = document.querySelectorAll('.js-searchPoint');
    $searchPoint.forEach(elm => {
      elm.addEventListener('click', function () {
        elm.nextElementSibling.classList.toggle('is-active');
      });
    });
  }
}
