// Images
import './imports/assets';
// Styles
import './imports/styles';
// Modules
import stickyHeader from './modules/sticky-header';
import burguerMenu from './modules/burguer-menu';
import shortenLink from './modules/shorten-link';
import getStarted from './modules/get-started';

// Menu sticky
window.onscroll = () => stickyHeader();
window.dispatchEvent(new Event('scroll'));
// burguer menu
burguerMenu();
// ShortenLink form
shortenLink();
// Get started button
getStarted();
