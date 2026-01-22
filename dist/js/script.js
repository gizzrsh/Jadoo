const burgerBtn = document.getElementById('burgerBtn');
const menu = document.querySelector('.header__menu');


burgerBtn.addEventListener('click', function() {
    menu.classList.toggle('header__menu--active');
    burgerBtn.classList.toggle('header__burger--active')
});
