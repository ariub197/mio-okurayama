import windowManage from './windowmanage.js';
import { _log } from './utils.js';
import common from './common.js';
import 'lazysizes';
import globalMenu from './globalMenu.js';
import flowModal from './flowModal.js';
import _breakP from './utils.js';
import top from '../../../js/_function.js';
import outline from '../../../outline/js/_function.js';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const $menuBtn = document.querySelectorAll('.js-globalMenu-button');
    new windowManage();
    if ($menuBtn.length) {
      new globalMenu();
    }
    new common();

    window.addEventListener('load', function () {
      new flowModal();
    });
    const $pageId = document.getElementsByClassName('currentPage')[0];
    switch ($pageId.getAttribute('id')) {
      case 'top':
        _log('PAGE NAME', 'INDEX', 'orange');

        new top();

        break;
      case 'outline':
        _log('PAGE NAME', 'INDEX', 'orange');

        new outline();

        break;

      default:
    }
  },
  false
);
