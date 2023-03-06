$(function(){
    $('.header-content__inner').slick({
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        fade: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000
    })

    $('.partners__inner').slick({
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        prevArrow: `<button class="partners__arrow partners__left">
                        <img src="images/arrow-left.svg" alt="arrow icon">
                    </button>`,
        nextArrow: `<button class="partners__arrow partners__right">
                        <img src="images/arrow-right.svg" alt="arrow icon">
                    </button>`,
        responsive: [
            {
                breakpoint: 921,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $('#call').on('click', function(){
        $('.modal-call').addClass('active')
    })

    $('.modal__close').on('click', function(){
        $('.modal-call').removeClass('active')
    })

    $('.header-btn').on('click', function(){
        $('.sidebar').addClass('active')
    })

    $('.sidebar__close').on('click', function(){
        $('.sidebar').removeClass('active')
    })

    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300){
            $('.header__bottom').addClass('active')
        } else{
            $('.header__bottom').removeClass('active')
        }
    })

    $('.sidebar__main svg').on('click', function(){
        $(this).parent().next('.sidebar__list').toggleClass('active')
        $(this).toggleClass('active')
    })

  
    // CARD CAROUSEL

    $('.card__item').on({
        click: function(){
            $('.card__item').removeClass('active')
            $(this).addClass('active')
            let url = $(this).find('img').attr('src');
            $('.card__huge').attr('src', url)
        },

        mouseenter: function(){
            $('.card__item').removeClass('active')
            $(this).addClass('active')
            let url = $(this).find('img').attr('src');
            $('.card__huge').attr('src', url)
        },

    })
});