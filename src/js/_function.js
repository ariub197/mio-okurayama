import smoothscroll from 'smoothscroll-polyfill';
import throttle from 'lodash/throttle';
export default class top {
  constructor() {
    this.headerAnimation();
    // this.contentScroll();
  }

  // topFunc(TOPページの関数)

  headerAnimation() {
    const $header = document.getElementById('gHeader');
    function throttle(callback, delay) {
      let timeoutId;
      return function () {
        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            callback();
            timeoutId = null;
          }, delay);
        }
      };
    }
    const durationTime = 200;
    const visiblePosition = window.innerHeight;
    window.addEventListener(
      'scroll',
      throttle(function () {
        if (window.scrollY >= visiblePosition) {
          $header.classList.remove('is-init');
        } else {
          $header.classList.add('is-init');
        }
      }, durationTime)
    );
  }
}
