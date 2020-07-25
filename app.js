$(function() {
    let header = $("#header");
    let intro = $('#intro');
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $("#navToggle");
    navH = nav.innerHeight();

    checkScroll(scrollPos, navH);

    $(window).on("scroll resize", function() {
        navH = nav.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, navH);
    });

    function checkScroll(scrollPos, navH) {
        if(scrollPos > navH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smoothie scroll
    $('[data-scroll]').on("click", function(e) {
        e.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    // Button burger

    navToggle.on("click", function(e) {
        e.preventDefault();

        nav.toggleClass("show");
    });

    //Reviews
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});