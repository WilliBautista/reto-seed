// Images
import './imports/assets';
// Styles
import './imports/styles';
// Modules
import stickyHeader from './modules/sticky-header';
import burguerMenu from './modules/burguer-menu';
import shortenLink from './modules/shortenLink';

// Menu sticky
window.onscroll = () => stickyHeader();
window.dispatchEvent(new Event('scroll'));
// burguerMenu
burguerMenu();
// ShortenLink form
shortenLink();
