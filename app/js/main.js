$(function () {

    $('.menu__list').on('click', function () {
        $('.header-top__nav').toggleClass('header-top__nav--active');
        $('.header-top__list-link').on('click', function () {
            $('.header-top__nav').removeClass('header-top__nav--active');
        });
    });

    $('.header-top__list-link, .footer__logo-link, .footer__nav-link').on("click", function (event) {
        event.preventDefault();

        const id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.feedback__items').slick({
        slidesToShow: 3,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '-60px',
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.77607 12.9756L11.7521 6.99962L5.77607 1.02363L6.78407 0.0156247L13.7681 6.99962L6.78407 13.9836L5.77607 12.9756Z" fill="#FFA55C"/><path d="M12.7598 6.28027L12.7598 7.72027L0.519766 7.72027L0.519766 6.28027L12.7598 6.28027Z" fill="#FFA55C"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.77607 12.9756L11.7521 6.99962L5.77607 1.02363L6.78407 0.0156247L13.7681 6.99962L6.78407 13.9836L5.77607 12.9756Z" fill="#FFA55C"/><path d="M12.7598 6.28027L12.7598 7.72027L0.519766 7.72027L0.519766 6.28027L12.7598 6.28027Z" fill="#FFA55C"/></svg></button>',
        dots: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 1
                },
                breakpoint: 671,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    });

    function counterNum() {
        if ($(window).width() < 901) {
            $('.gallery__slider').on(`init reInit`, function (event, slick) {
                $('.counter').text(3 + ' / ' + slick.slideCount);
            })
            $('.gallery__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
                $('.counter').text(currentSlide + 3 + ' / ' + slick.slideCount);
            });
        };
        if ($(window).width() < 651) {
            $('.gallery__slider').on(`init reInit`, function (event, slick) {
                $('.counter').text(2 + ' / ' + slick.slideCount);
            })
            $('.gallery__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
                $('.counter').text(currentSlide + 2 + ' / ' + slick.slideCount);
            });
        };
        if ($(window).width() < 451) {
            $('.gallery__slider').on(`init reInit`, function (event, slick) {
                $('.counter').text(1 + ' / ' + slick.slideCount);
            })
            $('.gallery__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
                $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
            });
        }
        if ($(window).width() > 901) {
            $('.gallery__slider').on(`init reInit`, function (event, slick) {
                $('.counter').text(4 + ' / ' + slick.slideCount);
            })
            $('.gallery__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
                $('.counter').text(currentSlide + 4 + ' / ' + slick.slideCount);
            });
        }
    }

    counterNum();

    $(window).resize(function () {
        counterNum();
    });

    $('.gallery__slider').slick({
        slidesToShow: 4,
        infinite: false,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.77607 12.9756L11.7521 6.99962L5.77607 1.02363L6.78407 0.0156247L13.7681 6.99962L6.78407 13.9836L5.77607 12.9756Z" fill="#FFA55C"/><path d="M12.7598 6.28027L12.7598 7.72027L0.519766 7.72027L0.519766 6.28027L12.7598 6.28027Z" fill="#FFA55C"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.77607 12.9756L11.7521 6.99962L5.77607 1.02363L6.78407 0.0156247L13.7681 6.99962L6.78407 13.9836L5.77607 12.9756Z" fill="#FFA55C"/><path d="M12.7598 6.28027L12.7598 7.72027L0.519766 7.72027L0.519766 6.28027L12.7598 6.28027Z" fill="#FFA55C"/></svg></button>',
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 651,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 451,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.program__tab-title').on('click', function () {
        $(this).next('.program__tab-wrapper').slideToggle();
        $(this).toggleClass('program__tab-title--active');
    });

    $('.program__tab-link').on('click', function (e) {
        e.preventDefault();
        const tabId = $(this).attr('href');

        $('.program__tab-link').removeClass('program__tab-link--active');
        $(this).addClass('program__tab-link--active');

        if ($('.program__tab-item').hasClass('program__tab-item--active')) {
            $('.program__tab-item').removeClass('program__tab-item--active');
        }
        $(tabId).addClass('program__tab-item--active')

    });


});