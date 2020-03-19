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


    $('ul').toggleClass('opening');
    $(blur).attr('style') ?
        $(blur).removeAttr('style') :
        $(blur).attr('style',
            'filter: blur(10px);' +
            'position: fixed !important;'
        );

    $(links).attr('style') ?
        $(links).removeAttr('style') :
        $(links).attr('style', 'visibility: hidden;');



    $(this).toggleClass('open');
});


$(function () {
    var w = $(window).width(),
        wrapper = $('.wrapper'),
        progress = $('.progress'),
        main = $('main'),
        aw = $('nav a').width(),
        navWidth = $('nav').width();

    $(aw).on('click',function(e){
        var $anchor = $(this);
        main.stop().animate({
            scrollLeft: $anchor.data('href') * w - w
        }, 500);
        e.preventDefault();
    });

    $('#right').on('mousewheel DOMMouseScroll', function(e){
        var delta = Math.max(-1, Math.min(1, (e.originalEvent.wheelDelta || -e.originalEvent.detail)));
        var left = wrapper.offset().left,
            scrollLeft = delta > 0 ? (left + w) * -delta : (left - w) * delta;
        main.stop().animate({
            scrollLeft: scrollLeft
        }, 500);
    });

    main.on('scroll', function () {
        var left = wrapper.offset().left,
            w = -navWidth/wrapper.width()*left;
        progress.css('width', w + 'px');
        console.log(Math.round(w/aw));
        $('nav a').removeClass('active');
        for (var i = Math.round(w/aw) + 1; i > 1; i--) {
            console.log(i);
            $('[data-href=' + i + ']').addClass('active');
        }
    });
});



$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    // $svg_anm.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
});