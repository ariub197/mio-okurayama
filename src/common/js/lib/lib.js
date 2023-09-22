import windowManage from './windowmanage.js';
import { _log } from './utils.js';
import common from './common.js';
import 'lazysizes';
import globalMenu from './globalMenu.js';
import flowModal from './flowModal.js';
import _breakP from './utils.js';
import top from '../../../js/_function.js';
import outline from '../../../outline/js/_function.js';
import access from '../../../access/js/_function.js';
import location from '../../../location/js/_function.js';
import brand from '../../../brand/js/_function.js';

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
      case 'access':
        _log('PAGE NAME', 'INDEX', 'orange');

        new access();

        break;
      case 'location':
        _log('PAGE NAME', 'INDEX', 'orange');

        new location();

        break;
      case 'brand':
        _log('PAGE NAME', 'INDEX', 'orange');

        new brand();

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
