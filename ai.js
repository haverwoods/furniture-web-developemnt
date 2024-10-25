const headerClick = document.getElementById('headerClick');
const mobileNav = document.querySelector('.mobile-nav');

headerClick.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav-active');
});
