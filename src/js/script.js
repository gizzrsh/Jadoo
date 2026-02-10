document.addEventListener('DOMContentLoaded', () => {

    // burger menu
    const burgerBtn = document.getElementById('burgerBtn');
    const headerMenu = document.querySelector('.header__menu');

    burgerBtn.addEventListener('click', function() {
        headerMenu.classList.toggle('header__menu--active');
        burgerBtn.classList.toggle('header__burger--active');
        document.body.classList.toggle('hidden');
    })
    // burger menu

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
    // services__card--active

    // ongoing modal
    const favoriteBtn = document.getElementById('favoriteBtn');
    const ongoingModal = document.getElementById('ongoingModal');

    favoriteBtn.addEventListener('click', function() {
        ongoingModal.classList.toggle('book-trip__modal--active');
    });
    // ongoing modal

    // swiper
    const swiper = new Swiper('.testimonials__swiper', {
        direction: 'vertical',
        autoHeight: false,
        effect: 'cards',
        cardsEffect: {
            rotate: false,
            slideShadows: false,
        },
        grabCursor: true,

        pagination: {
            el: '.testimonials__swiper-pagination',
            clickable: true,
            horizontalClass: 'swiper-pagination-horizontal',
        },
        navigation: {
            nextEl: '.testimonials__button-next',
            prevEl: '.testimonials__button-prev',
        },
    });
    // swiper

    // footer menu
    const footerMenuLinks = document.querySelectorAll('.footer__menu-link');
    
    footerMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const footerMenuSublist = link.nextElementSibling;
            footerMenuSublist.classList.toggle('footer__menu-sublist--active'); 
            link.classList.toggle('footer__menu-link--active');
        });
    });
    // footer menu

});