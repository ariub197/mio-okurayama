import { _breakP, _ua, _browser } from './utils.js';
import throttle from 'lodash/throttle';
export default class windowManage {
  constructor() {
    this.viewportProcessing();
  }

  viewportProcessing() {
    let viewportContent;
    if (_ua.SP) {
      viewportContent = 'width=375';
      // eslint-disable-next-line quotes
      document.querySelector("meta[name='viewport']").setAttribute('content', viewportContent);
    }
    if (_ua.TB) {
      viewportContent = 'width=1200';
      // eslint-disable-next-line quotes
      document.querySelector("meta[name='viewport']").setAttribute('content', viewportContent);
    }
  }
}
