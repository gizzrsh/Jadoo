document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const headerMenu = document.querySelector('.header__menu');

    burgerBtn.addEventListener('click', function() {
        headerMenu.classList.toggle('header__menu--active');
        burgerBtn.classList.toggle('header__burger--active');
        document.body.classList.toggle('hidden');
    })

    // services__card--active
    const servicesCards = document.querySelectorAll('.services__card'); 

    servicesCards.forEach(card => {
        card.addEventListener('click', () => {
            servicesCards.forEach(e => {
                e.classList.remove('services__card--active');
            })
            card.classList.add('services__card--active');
        })
    });

});