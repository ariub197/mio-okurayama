import smoothscroll from 'smoothscroll-polyfill';
import Swiper from 'swiper';
import { _breakP, _tabFunction } from '../../common/js/lib/utils.js';
export default class location {
  constructor() {
    this.gourmetSwiperFunc();
    this.subLocationAccordion();
    this.normalAccordion();
    this.lifeinfoTabFunc();
  }

  // locationFunc(locationページの関数)
  gourmetSwiperFunc() {
    const $gourmetSwiper = document.querySelectorAll('.js-gourmetSwiper');

    function sliderFunc() {
      window.addEventListener('load', function () {
        $gourmetSwiper.forEach(elm => {
          const i = [].slice.call($gourmetSwiper).indexOf(elm);
          elm.classList.add('gourmetSwiper--' + i);
          const slideLength = elm.getElementsByClassName('swiper-slide').length;
          const imgArr = elm.querySelectorAll('.swiper-slide img');
          imgArr.forEach(elm => {
            elm.classList.add('swiper-lazy');
            elm.classList.remove('lazyload');
          });
          const slideSwitchSpeed = 1000;
          const optionArray = {
            loop: false,
            pagination: {
              el: '.gourmetSwiper--' + i + ' .swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.js-gourmetSwiper-next',
              prevEl: '.js-gourmetSwiper-prev'
            },
            //autoplay: {
              //delay: 5000,
              //disableOnInteraction: false
            //},
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
            scrollbar: true,
            loopedSlides: 0,
            breakpoints: {
              768: {
                loop: false,
                centeredSlides: false,
                scrollbar: false,
                slidesPerView: '3',
                spaceBetween: 48,
              }
            }
          };
          const gourmetSwiper = new Swiper(`.gourmetSwiper--${i} .swiper-container`, optionArray);

          // gourmetSwiper.on('slideChange', function () {
          //   setTimeout(() => {
          //   }, slideSwitchSpeed);
          // });
        });
      });
    }
    $gourmetSwiper.length ? sliderFunc() : null;
  }
  subLocationAccordion() {
    smoothscroll.polyfill();
    window.addEventListener('load', function() {
      const elms = document.querySelectorAll('.js-subLocation-accr');
      elms.forEach(elm => {
        const cardTotalHeight = elm.nextElementSibling.clientHeight;
        const cardInitHeight = 0;
        elm.nextElementSibling.style.maxHeight = cardInitHeight + 'px';
        const statusTxt = elm.querySelector('.stateIcon__txt');

        // init
        elm.nextElementSibling.style.maxHeight = '0px';

        elm.addEventListener('click', () => {
          elm.classList.toggle('is-open');
          elm.nextElementSibling.classList.toggle('is-open');
          if (elm.nextElementSibling.classList.contains('is-open')) {
            elm.nextElementSibling.style.maxHeight = cardTotalHeight + 'px';
          } else {
            elm.nextElementSibling.style.maxHeight = cardInitHeight + 'px';
          }
        });
      });
    });
  }
  normalAccordion() {
    smoothscroll.polyfill();
    window.addEventListener('load', function() {
      const elms = document.querySelectorAll('.js-normal-accr');
      elms.forEach(elm => {
        const cardTotalHeight = elm.nextElementSibling.clientHeight;
        const cardInitHeight = 0;
        elm.nextElementSibling.style.maxHeight = cardInitHeight + 'px';
        const statusTxt = elm.querySelector('.stateIcon__txt');

        // init
        elm.nextElementSibling.style.maxHeight = '0px';

        elm.addEventListener('click', () => {
          elm.classList.toggle('is-open');
          elm.nextElementSibling.classList.toggle('is-open');
          if (elm.nextElementSibling.classList.contains('is-open')) {
            elm.nextElementSibling.style.maxHeight = cardTotalHeight + 'px';
          } else {
            elm.nextElementSibling.style.maxHeight = cardInitHeight + 'px';
          }
        });
      });
    });
  }

  lifeinfoTabFunc() {
    _tabFunction('.js-tab', '.js-tab-btn', '.js-tab-item', 'is-active');
  }
}
