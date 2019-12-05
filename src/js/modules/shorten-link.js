/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import reLinkShorten from '../services/relink';
import itemLink from '../templates/item-link.jsx';
import copyLink from './copy-link';

const form = document.getElementById('shorten-form');
const listLinks = document.getElementById('shorten-list');

const shortenLink = () => {
  if (window.localStorage.getItem('links')) {
    const links = JSON.parse(window.localStorage.getItem('links'));

    links.map((obj) => {
      listLinks.insertAdjacentHTML('beforeend', itemLink(obj.originalUrl, obj.shortenUrl));
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target[0];
    const { value } = input;
    const regex = new RegExp(input.pattern, 'gm');

    if (regex.test(value) && value.length > 0) {
      input.classList.remove('error');
      reLinkShorten(value).then((data) => {
        const dataUrl = data.data;
        const shortenUrl = `https://rel.ink/${dataUrl.hashid}`;
        let links = [];
        let hashExist = false;

        if (window.localStorage.getItem('links')) links = JSON.parse(window.localStorage.getItem('links'));

        links.map((obj) => {
          if (obj.hashid === dataUrl.hashid) {
            hashExist = true;
            input.classList.add('error');
            input.nextElementSibling.innerHTML = `This links alredy exists: ${obj.shortenUrl} <button type="button" class="btn--link btn-copy-link" data-clipboard-text="${obj.shortenUrl}">copy</button>`;
            return true;
          }
        });

        if (!hashExist) {
          listLinks.insertAdjacentHTML('beforeend', itemLink(dataUrl.url, dataUrl.shortenUrl));
          links.push({
            originalUrl: dataUrl.url,
            shortenUrl,
            hashid: dataUrl.hashid,
          });
          window.localStorage.setItem('links', JSON.stringify(links));
        }

        copyLink(document.querySelectorAll('.btn-copy-link'));
      });
    } else {
      input.classList.add('error');
    }
  });

  copyLink(document.querySelectorAll('.btn-copy-link'));
};

export default shortenLink;
