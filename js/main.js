$('html, body, *').mousewheel(function (e, deltaX) {
    // multiplying by 40 is the sensitivity,
    // increase to scroll faster.
    this.scrollLeft -= (deltaX * 40);
    // e.preventDefault();
});

$('.menu-toggle').click(function () {

    var links = $('.menu-links');
    var blur = $('.section');


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

    $(this).toggleClass('open');

});



