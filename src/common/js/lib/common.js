import throttle from 'lodash/throttle';
import { _breakP, _ua, _log } from './utils.js';
export default class common {
  constructor() {
    this.smoothScroll();
    this.scrollAnimation();
    // this.menuApperance();
    this.fixBnrAppearance();
    this.codeClipy();
    this.printFunc();
  }

  // commonFunc(TOPページの関数)
  smoothScroll() {
    // eslint-disable-next-line no-magic-numbers
    const Ease = { easeInOut: t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1) };
    const duration = 800;
    const smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
    smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
      smoothScrollTrigger.addEventListener('click', function (e) {
        const href = smoothScrollTrigger.getAttribute('href');
        const currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
        const targetElement = document.getElementById(href.replace('#', ''));
        if (targetElement) {
          e.preventDefault();
          e.stopPropagation();
          const targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top;
          const startTime = performance.now();
          const loop = function (nowTime) {
            const time = nowTime - startTime;
            const normalizedTime = time / duration;
            if (normalizedTime < 1) {
              window.scrollTo(0, currentPostion + (targetPosition - currentPostion) * Ease.easeInOut(normalizedTime));
              requestAnimationFrame(loop);
            } else {
              window.scrollTo(0, targetPosition);
            }
          };
          requestAnimationFrame(loop);
        }
      });
    });
  }
  scrollAnimation() {
    const $target = document.querySelectorAll('[data-sai]');
    for (let i = 0; i < $target.length; i++) {
      const targetEach = $target[i];
      targetEach.classList.add('sai-init');
    }
    window.addEventListener(
      'load',
      function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        for (let i = 0; i < $target.length; i++) {
          const targetEach = $target[i],
            rect = targetEach.getBoundingClientRect(),
            targetPosition = scrollTop + rect.top;
          if (targetPosition < scrollTop) {
            targetEach.classList.add('sai-animate');
          }
        }
      },
      false
    );

    const options = {
      offset: 150, // 初期のoffset値
      delay: 0,
      easing: 'ease',
      duration: 600,
      disable: false,
      once: false
    };

    document.querySelector('body').setAttribute('data-sai-easing', options.easing);
    document.querySelector('body').setAttribute('data-sai-duration', options.duration);
    document.querySelector('body').setAttribute('data-sai-delay', options.delay);

    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sai-animate');
        }
      });
    };

    const targets = document.querySelectorAll('.sai-init');
    targets.forEach(target => {
      const offsetAttr = target.getAttribute('data-sai-offset');
      const offset = offsetAttr ? parseInt(offsetAttr, 10) : options.offset;
      const option = { rootMargin: -offset + 'px 0px' };
      const io = new IntersectionObserver(callback, option);
      io.observe(target);
    });
  }
  menuApperance() {
    const $gHeader = document.getElementById('gHeader');
    const $menuBtn = document.querySelectorAll('.js-contentMenu-button')[0];
    const cvBnr = document.getElementById('cvBnr');
    const $topCV = document.querySelector('.topCV');
    const fadePos = 200;
    let pos = 0;
    let posMin = 0;
    let posMax = 0;

    let id = null;
    const interval = 300;
    let flag = true;

    const scrollCallback = function () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (fadePos < scrollTop) {
        $gHeader.classList.add('is-hidden');
        if (!_breakP.SP) {
          cvBnr.classList.add('is-visible');
          if ($topCV) {
            $topCV.classList.remove('is-visible');
          }
        }
      } else {
        $gHeader.classList.remove('is-hidden');
        if (!_breakP.SP) {
          cvBnr.classList.remove('is-visible');
          if ($topCV) {
            $topCV.classList.add('is-visible');
          }
        }
      }
      if (flag) {
        pos = window.scrollY;
        flag = false;
      }
      if (!flag) {
        const forwardRange = 40;
        const backRange = 120;
        posMin = pos - forwardRange;
        posMax = pos + backRange;
      }
      if (scrollTop < posMin) {
        if (_breakP.SP) {
          $gHeader.classList.add('is-visible');
          cvBnr.classList.add('is-visible');
        }
        flag = true;
      }
      if (scrollTop > posMax) {
        if (_breakP.SP) {
          $gHeader.classList.remove('is-visible');
          cvBnr.classList.remove('is-visible');
        }
        flag = true;
      }
      $menuBtn.classList.remove('is-mod');
      const onEnded = function () {
        if ($gHeader.classList.contains('is-hidden')) {
          $menuBtn.classList.add('is-mod');
        }

        id = null;
      };
      clearTimeout(id);
      id = setTimeout(onEnded, interval);
    };
    const scrollSetTime = 100;
    window.addEventListener('scroll', throttle(scrollCallback, scrollSetTime));
  }
  fixBnrAppearance() {
    const $fixBnr = document.getElementsByClassName('js-fixBnr')[0];
    function throttle(callback, delay) {
      let timeoutId;
      return function () {
        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            callback();
            timeoutId = null;
          }, delay);
        }
      }
    }
    const durationTime = 200;
    const visiblePosition = window.innerHeight;
    window.addEventListener(
      'scroll',
      throttle(function () {
        $fixBnr.classList.toggle('is-visible', window.scrollY >= visiblePosition);
      }, durationTime)
    );
  }


  codeClipy() {
    const $copyBtn = document.querySelectorAll('.clipButton');
    [].forEach.call($copyBtn, function (el, i) {
      el.addEventListener('click', function () {
        const copyText = this.nextElementSibling.textContent;
        navigator.clipboard.writeText(copyText);
        el.classList.add('is-clicked');
        const timeout = 3000;
        setTimeout(() => {
          el.classList.remove('is-clicked');
        }, timeout);
      });
    });
  }

  printFunc() {
    window.addEventListener('beforeprint', () => {
      const imgArr = document.querySelectorAll('img');
      const srcArr = document.querySelectorAll('source');
      const saiArr = document.querySelectorAll('.sai-init');

      srcArr.forEach(elm => {
        if (elm.nextElementSibling.classList.contains('lazyload')) {
          elm.setAttribute('srcset', elm.dataset.srcset);
        }
      });

      imgArr.forEach(elm => {
        if (elm.classList.contains('lazyload')) {
          elm.classList.remove('lazyload');
          elm.classList.add('lazyloaded');
          elm.setAttribute('src', elm.dataset.src);
        }
      });

      saiArr.forEach(elm => {
        if (!elm.classList.contains('sai-animate')) {
          elm.classList.add('sai-animate');
        }
      });
    });
  }
}
