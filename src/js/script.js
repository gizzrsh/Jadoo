const burgerBtn = document.getElementById('burgerBtn');
const headerMenu = document.querySelector('.header__menu');

burgerBtn.addEventListener('click', function() {
    headerMenu.classList.toggle('header__menu--active');
    burgerBtn.classList.toggle('header__burger--active');
    document.body.classList.toggle('hidden');
})