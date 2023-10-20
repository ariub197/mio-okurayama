import { _breakP } from '../../common/js/lib/utils.js';
export default class outline {
  constructor() {
    this.outlineIframe();
  }

  // topFunc(TOPページの関数)
  outlineIframe() {
    window.addEventListener('load', function () {

      const iframe = document.getElementById('outlineIframe');

      if (iframe) {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        const body = iframeDoc.body;
        const height = body.scrollHeight;
        setTimeout(() => {
          const buffer = 100;
          iframeDoc.documentElement.style.height = height + buffer + 'px';
          iframeDoc.body.style.height = height + buffer + 'px';
          iframeDoc.body.style.margin = 0;
          iframeDoc.body.style.overflow = 'hidden';
          iframe.style.height = height + buffer + 'px';
          iframeDoc.document.body.style.overflow = 'hidden';
        }, 200);

        const $header = iframeDoc.querySelector('.header');
        const $mainFrame = iframeDoc.querySelector('.mainframe_ h1');
        const $rightText = iframeDoc.querySelector('.righttext_');
        const $h1 = iframeDoc.querySelector('.forcms_block h1');
        const $h2 = iframeDoc.querySelector('.pages_.mansiondata_ .section_ h2');
        const $hbtn = iframeDoc.querySelector('#hbtn');

        // $header.style.display = 'none';
        $mainFrame.style.display = 'none';
        $hbtn.style.display = 'none';
        $h1.style.display = 'none';
        $h2.style.display = 'none';
        $rightText.style.display = 'none';
      } else {
        console.error('The iframe could not be found.');
      }

    });
  }
}
