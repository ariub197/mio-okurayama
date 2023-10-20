import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { _breakP, _log } from './utils.js';
export default class globalMenu {
  constructor() {
    this.globalMenu();
  }

  globalMenu() {
    const $menuBtn = document.querySelectorAll('.js-globalMenu-button')[0];
    const $globalMenu = document.querySelectorAll('.globalMenu')[0];

    $menuBtn.addEventListener('click', function () {
      if (this.classList.contains('is-active')) {
        $globalMenu.classList.remove('is-visible');
        clearAllBodyScrollLocks();
      } else {
        $globalMenu.classList.add('is-visible');
        disableBodyScroll($globalMenu);
      }
      this.classList.toggle('is-active');
    });
  }
}
