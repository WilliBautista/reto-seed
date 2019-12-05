const axios = require('axios');

const reLinkShorten = (url) => axios.post('https://rel.ink/api/links/', { url });

export default reLinkShorten;
