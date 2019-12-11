/* eslint-disable no-param-reassign */
const buttons = document.querySelectorAll('.get-started');
const form = document.getElementById('shorten-form');
const offset = form.offsetTop - 160;

const getStarted = () => {
  buttons.forEach((el) => {
    el.onclick = () => {
      window.scrollTo({
        top: offset,
        left: 0,
        behavior: 'smooth',
      });

      window.addEventListener('scroll', () => {
        if (window.scrollY === offset) form[0].focus();
      });
    };
  });
};

export default getStarted;
