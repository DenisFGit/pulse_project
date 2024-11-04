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

//-------------------SLIDER----------------------
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

//--------------------SLIDER---------------------------

// const catalogItemWrapper = document.querySelector('.catalog-item__content');
// const catalogItemWrapperDesc = document.querySelector('.catalog-item__list');
// console.log(catalogItemWrapperDesc);
// const img = document.getElementsByClassName('catalog-item__first-price');
// console.log(img);

// for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener('click', function () {
//         catalogItemWrapperDesc.classList.toggle('catalog-item__list_active');
//         catalogItemWrapper.classList.toggle('catalog-item__content_hidden')
//     })
// }
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

// let content = document.querySelector('.catalog-item__content');
// console.log(content);
// let list = document.querySelector('.catalog-item__list');

// let price = document.getElementsByClassName('catalog-item__first-price');

// for (let i = 0; i < price.length; i++) {
//     price[i].addEventListener('click', function () {
//         content.classList.toggle('catalog-item__content_active');
//         list.classList.toggle('catalog-item__list_active');
//     })
// }

//============вариант с перемещением по translateX() =========================


// $('.catalog-item__first-price').each(function (i) {
//     $(this).on('click', function (e) {
//         e.preventDefault();
//         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//     })
// })


// // Select all elements with the class 'catalog-item__first-price'
// document.querySelectorAll('.catalog-item__link').forEach(function (element, i) {
//     // Add a click event listener to each element
//     element.addEventListener('click', function (e) {
//         e.preventDefault(); // Prevent the default action of the element

//         // Toggle the 'catalog-item__content_active' class on all elements with the class 'catalog-item__content'
//         document.querySelectorAll('.catalog-item__content').forEach(function (content) {
//             content.classList.toggle('catalog-item__content_active');
//         });

//         // Toggle the 'catalog-item__list_active' class on all elements with the class 'catalog-item__list'
//         document.querySelectorAll('.catalog-item__list').forEach(function (list) {
//             list.classList.toggle('catalog-item__list_active');
//         });
//     });
// });

//----------------for all elements in the moment-------------------------

// Select all elements with the class 'catalog-item__first-price'

document.querySelectorAll('.catalog-item__link').forEach(function (element, i) {
    // Add a click event listener to each element
    element.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default action of the element

        const link = e.target;
        const originalText = link.dataset.original || link.textContent;  // Store the original text if it's not already stored
        const newText = "Назад";
        newTextUpper = newText.toUpperCase();
        // Check current text and toggle
        console.log(originalText);
        console.log(link.textContent);
        link.textContent = (link.textContent === originalText) ? newTextUpper : originalText;
        console.log(link.textContent);
        link.dataset.original = originalText;
        //Select the corresponding 'catalog-item__content' based on index and toggle the class
        document.querySelectorAll('.catalog-item__content')[i].classList.toggle('catalog-item__content_active');

        // Select the corresponding 'catalog-item__list' based on index and toggle the class
        document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active');
    });
});


$(function () {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index())
            .addClass('catalog__content_active');
    });

    //Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    // $('.button_tab').on('click', function () {
    //     $('.overlay, #order').fadeIn();
    // })

    $('.button_tab').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });

    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //     rules: {
    //         name: "required",
    //         phone: "required",
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: "Пожалуйста введите свое имя",
    //         phone: "Пожалуйста введите свой номер телефона",
    //         email: {
    //             required: "Пожалуйста введите свою почту",
    //             email: "Ваша почта должна быть в формате name@domain.com"
    //         }
    //     }
    // });
    // $('#order form').validate();


    function validateForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста введите свое имя",
                phone: "Пожалуйста введите свой номер телефона",
                email: {
                    required: "Пожалуйста введите свою почту",
                    email: "Ваша почта должна быть в формате name@domain.com"
                }
            }
        });
    }

    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

    $('input[name=phone]').mask("+38(999) 999-99-99");

    // $('form').submit(function (e) {
    //     e.preventDefault();

    //     // if (!$(this).valid()) {
    //     //     return;
    //     // }

    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find("input").val("");
    //         $('#consultation, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

    //Smooth scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    new WOW().init();
});


