/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import reLinkShorten from '../services/relink';
import itemLink from '../templates/item-link.jsx';

const form = document.getElementById('shorten-form');
const listLinks = document.getElementById('shorten-list');

const shortenLink = () => {
  if (window.localStorage.getItem('links')) {
    const links = JSON.parse(window.localStorage.getItem('links'));

    links.map((obj) => {
      listLinks.insertAdjacentHTML('beforeend', itemLink(obj.originalUrl, obj.hashid));
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
        let links = [];
        let hashExist = false;

        if (window.localStorage.getItem('links')) links = JSON.parse(window.localStorage.getItem('links'));

        links.map((obj) => {
          if (obj.hashid === dataUrl.hashid) {
            hashExist = true;
            input.classList.add('error');
            input.nextElementSibling.innerHTML = `This links alredy exists: ${obj.shortenUrl} <button type="button" class="btn--link" id="btn-copy-link">copy</button>`;
            return true;
          }
        });

        if (!hashExist) {
          listLinks.insertAdjacentHTML('beforeend', itemLink(dataUrl.url, dataUrl.hashid));
          links.push({
            originalUrl: dataUrl.url,
            shortenUrl: `https://rel.ink/${dataUrl.hashid}`,
            hashid: dataUrl.hashid,
          });
          window.localStorage.setItem('links', JSON.stringify(links));
        }
      });
    } else {
      input.classList.add('error');
    }
  });
};

export default shortenLink;
