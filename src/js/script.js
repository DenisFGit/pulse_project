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

const catalogItemWrapper = document.querySelector('.catalog-item__content');
const catalogItemWrapperDesc = document.querySelector('.catalog-item__list');
console.log(catalogItemWrapperDesc);
const img = document.getElementsByClassName('catalog-item__first-price');
console.log(img);

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function () {
        catalogItemWrapperDesc.classList.toggle('catalog-item__list_active');
        catalogItemWrapper.classList.toggle('catalog-item__content_hidden')
    })
}
//-------------------работает---------------------

// const catalogItemWrapper = document.querySelectorAll('.catalog-item__wrapper');
// const catalogItemWrapperDesc = document.getElementsByClassName('catalog-item__wrapper-desc');
// console.log(catalogItemWrapperDesc);
// const img = document.getElementsByClassName('catalog-item__img');
// console.log(img);

// for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener('click', function () {
//         catalogItemWrapperDesc.classList.toggle('catalog-item__wrapper-desc_active')
//     })
// }

