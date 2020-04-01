$(function () {
    $(document).on('scroll', window, function () {
        let pageScroll = $(window).scrollTop();

        if (pageScroll > 93) {
            $('.on__top').show();
        }
        else {
            $('.on__top').hide();
        }
    });

    $('li').on('click', function () {
        const target = $(this).data('target');
        const pos = $(target).offset().top;

        $('html, body').animate({ 'scrollTop': pos - 100 }, 400);
    });

    $('.on__top').on('click', function () {
        $('html, body').animate({ 'scrollTop': 0 }, 400);
    })
})