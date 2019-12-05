const header = document.getElementById('header');
const sticky = header.offsetTop;

const stickyHeader = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
  }
};

export default stickyHeader;
