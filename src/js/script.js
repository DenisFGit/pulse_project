const burger = document.querySelector('.burger');

const headerHidden = document.querySelector('.header-hidden');

burger.addEventListener('click', function () {
    headerHidden.classList.toggle('header-hidden_active')
});
burger.addEventListener('click', function () {
    burger.classList.toggle('burger_active')
});

// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             },
//         ]

//     });
// });


var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});