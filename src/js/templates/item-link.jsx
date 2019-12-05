const itemLink = (originalUrl, shortenUrl) => `
  <li class="shorten-list__item">
    <div class="real-link">
      <span>${originalUrl}</span>
    </div>
    <div class="final-link">
      <span>https://rel.ink/${shortenUrl}</span>
      <button type="button" class="btn btn--cyan btn--small btn--block btn-copy-link">Copy</button>
    </div>
  </li>
`;

export default itemLink;
