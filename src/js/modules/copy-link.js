/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
import * as Clipboard from 'clipboard';

const copyLink = (elements) => {
  elements.forEach((el) => {
    const clipboard = new Clipboard(el);
    clipboard.on('success', () => {
      const currentEl = document.querySelector('.copied');
      if (currentEl) {
        document.querySelector('.copied').textContent = 'Copy';
        document.querySelector('.copied').classList.remove('copied');
      }

      el.textContent = 'Copied!';
      el.classList.add('copied');
    });
  });
};

export default copyLink;
