const burger = document.querySelector('.burger');

const headerHidden = document.querySelector('.header-hidden');

burger.addEventListener('click', function () {
    headerHidden.classList.toggle('header-hidden_active')
});
burger.addEventListener('click', function () {
    burger.classList.toggle('burger_active')
});

// const burger = document.getElementsByClassName('burger');

// const headerHidden = document.getElementsByClassName('header-hidden');

// for (var i = 0; i < headerHidden.length; i++) {
//     burger.addEventListener('click', function () {
//         headerHidden[i].classList.toggle('header-hidden_active')
//     })
// }

// burger.addEventListener('click', function () {
//     headerHidden.classList.toggle('header-hidden_active')
// });




// window.addEventListener('DOMContentLoaded', () => {
//     burger = document.querySelector('.burger');
//     header_hidden = querySelector('.header-hidden');

//     burger.addEventListener('click', function () {
//         header_hidden.classList.toggle('header-hidden_active')
//     });
// })
