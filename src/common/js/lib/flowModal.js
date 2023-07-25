import { _breakP, _log } from './utils.js';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
export default class flowModal {
  constructor() {
    this.flowModal();
  }

  flowModal() {
    const $flowModalBtn = document.querySelectorAll('.js-flowModal-btn');
    const $flowModalInner = document.querySelectorAll('.js-flowModal-inner')[0];
    const $flowModal = document.querySelectorAll('.js-flowModal')[0];

    if ($flowModalBtn.length) {
      $flowModalBtn.forEach(elm => {
        elm.addEventListener('click', event => {
          event.preventDefault();
          $flowModal.classList.add('is-visible');
          disableBodyScroll($flowModalInner);
        });
      });

      const $flowModalClose = document.querySelectorAll('.js-flowModal-close');
      $flowModalClose.forEach(elm => {
        elm.addEventListener('click', () => {
          elm.closest('.js-flowModal').classList.remove('is-visible');
          enableBodyScroll($flowModalInner);
        });
      });
    }
  }
}
