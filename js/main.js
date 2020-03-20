// $('html, body, *').mousewheel(function (e, deltaX) {
//     // multiplying by 40 is the sensitivity,
//     // increase to scroll faster.
//     // this.scrollLeft -= (deltaX * 40);
//     // e.preventDefault();
// });

$('.menu-toggle').click(function () {

    var links = $('.menu-links');
    var blur = $('.section');
    var status = $('.line-status');
    var menu = $('.menu-left');


    $('ul').toggleClass('opening');
    $(blur).attr('style') ?
        $(blur).removeAttr('style') :
        $(blur).attr('style',
            'filter: blur(10px);' +
            'position: fixed !important;' +
            'transform: scale(1.5);'
        );

    $(links).attr('style') ?
        $(links).removeAttr('style') :
        $(links).attr('style', 'visibility: hidden;');

    $(status).attr('style') ?
        $(status).removeAttr('style') :
        $(status).attr('style', 'visibility: hidden;');

    $(menu).attr('style') ?
        $(menu).removeAttr('style') :
        $(menu).attr('style', 'width: 100vw;');


    $(this).toggleClass('open');
});


$(function () {
    var w = $(window).width(),
        wrapper = $('.wrapper'),
        progress = $('.progress'),
        main = $('main'),
        aw = $('nav a').width(),
        navWidth = $('nav').width();

    $(aw).on('click', function (e) {
        var $anchor = $(this);
        main.stop().animate({
            scrollLeft: $anchor.data('href') * w - w
        }, 500);
        e.preventDefault();
    });

    $('#right').on('mousewheel DOMMouseScroll', function (e) {
        var delta = Math.max(-1, Math.min(1, (e.originalEvent.wheelDelta || -e.originalEvent.detail)));
        var left = wrapper.offset().left,
            scrollLeft = delta > 0 ? (left + w) * -delta : (left - w) * delta;
        main.stop().animate({
            scrollLeft: scrollLeft
        }, 500);
    });

    main.on('scroll', function () {
        var left = wrapper.offset().left,
            w = -navWidth / wrapper.width() * left;
        progress.css('width', w + 'px');
        console.log(Math.round(w / aw));
        $('nav a').removeClass('active');
        for (var i = Math.round(w / aw) + 1; i > 1; i--) {
            console.log(i);
            $('[data-href=' + i + ']').addClass('active');
        }
    });
});


$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    // $svg_anm.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
});


$('#mode').change(function () {

    if ($(this).prop('checked')) {
        $('body').addClass('dark-mode');
        $('.menu-left').addClass('dark-mode');
        $('.menu-left').addClass('dark-mode-out');
        $('ul').addClass('dark-mode');
        $('.screen-item').addClass('dark-mode');
        $('.screen-item').addClass('dark-mode-out');
        $('.shadow').addClass('dark-mode-shadow');
    } else {
        $('body').removeClass('dark-mode');
        $('.menu-left').removeClass('dark-mode');
        $('.menu-left').removeClass('dark-mode-out');
        $('ul').removeClass('dark-mode');
        $('.screen-item').removeClass('dark-mode');
        $('.screen-item').removeClass('dark-mode-out');
        $('.shadow').removeClass('dark-mode-shadow');
    }

});


$(function () {
    var data = localStorage.getItem("showning");
    if (data !== null) {
        $('body').addClass('dark-mode');
        $('.menu-left').addClass('dark-mode');
        $('.menu-left').addClass('dark-mode-out');
        $('ul').addClass('dark-mode');
        $('.screen-item').addClass('dark-mode');
        $('.screen-item').addClass('dark-mode-out');
        $('.shadow').addClass('dark-mode-shadow');
        $("input[name='switch_show']").attr("checked", "checked");
    } else {
        $('body').removeClass('dark-mode');
        $('.menu-left').removeClass('dark-mode');
        $('.menu-left').removeClass('dark-mode-out');
        $('ul').removeClass('dark-mode');
        $('.screen-item').removeClass('dark-mode');
        $('.screen-item').removeClass('dark-mode-out');
        $('.shadow').removeClass('dark-mode-shadow');
    }
});


$("input[name='switch_show']").click(function () {

    if ($(this).is(":checked")) {

        localStorage.setItem("showning", 1);
    } else {
        localStorage.removeItem("showning");
    }

});