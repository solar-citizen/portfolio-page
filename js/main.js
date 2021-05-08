$(document).ready(function(){

    const $btns = $('.portfolio-section .portfolio-section__button-group button');

    $btns.click(function(e){

        $('.portfolio-section .portfolio-section__button-group button').removeClass('active');
        e.target.classList.add('active');

        const selector = $(e.target).attr('data-filter');
        $('.portfolio-section .portfolio-section__row-grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.portfolio-section .portfolio-section__button-group #btn1').trigger('click');

    $('.portfolio-section .portfolio-section__row-grid .popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

      // owl carousel

    $('.testimonials-section .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
        0: {
            items: 1
        },
        544: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
        }
    })

    // sticky nav

    const nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed(){
        if($('.header-area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header-area .main-menu').addClass('navbar-fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar-fixed');
                }
            })
        }
    }

    navbarFixed();
});

