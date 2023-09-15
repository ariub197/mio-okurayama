import smoothscroll from 'smoothscroll-polyfill';
import { _breakP, _ua, _log } from '../../common/js/lib/utils.js';
export default class access {
  constructor() {
    this.accessAccordion();
    this.normalAccordion();
    this.iosCheck();
  }

  // accessFunc(ACCESSページの関数)

  accessAccordion() {
    smoothscroll.polyfill();
    window.addEventListener('load', function() {
      const elms = document.querySelectorAll('.js-access-accr');
      elms.forEach(elm => {
        const cardTotalHeight = elm.nextElementSibling.clientHeight;
        const cardInitHeight = 0;
        elm.nextElementSibling.style.maxHeight = cardInitHeight + 'px';

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
      const elms = document.querySelectorAll('.js-facility-accr');
      elms.forEach(elm => {
        const cardTotalHeight = elm.nextElementSibling.clientHeight;
        const cardInitHeight = 0;
        elm.nextElementSibling.style.maxHeight = cardInitHeight + 'px';

        // init
        elm.classList.toggle('is-open');
        elm.nextElementSibling.classList.toggle('is-open');
        elm.nextElementSibling.style.maxHeight = cardTotalHeight + 'px';

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

  iosCheck() {
    function isiOS() {
      const userAgent = window.navigator.userAgent;
      return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    }
    if (isiOS()) {
      document.querySelector('.js-iosCheck').classList.add('is-ios');
    }
  }
}
