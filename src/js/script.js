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

    $('.button_tab').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });


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


    //Smooth scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#up']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    new WOW().init();
});


