import { _breakP } from '/common/js/lib/utils.js';
import Swiper from 'swiper';
export default class brand {
  constructor() {
    if (_breakP.SP) {
      this.awardSliderFunc();
    }
  }

  // locationFunc(locationページの関数)
  awardSliderFunc() {
    const $awardSlider = document.querySelectorAll('.js-awardSlider');

    function sliderFunc() {
      window.addEventListener('load', function () {
        $awardSlider.forEach(elm => {
          const i = [].slice.call($awardSlider).indexOf(elm);
          elm.classList.add('awardSlider--' + i);
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
              el: '.awardSlider--' + i + ' .swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.js-awardSlider-next',
              prevEl: '.js-awardSlider-prev'
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
            slidesPerView: '1',
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
          const awardSlider = new Swiper(`.awardSlider--${i} .swiper-container`, optionArray);

          // awardSlider.on('slideChange', function () {
          //   setTimeout(() => {
          //   }, slideSwitchSpeed);
          // });
        });
      });
    }
    $awardSlider.length ? sliderFunc() : null;
  }
}
