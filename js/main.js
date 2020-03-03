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


window.onload = function () {
    if (window.innerWidth >= 1024)
        document.getElementById('video-container1')
            .innerHTML =
            '<video autoplay id="bgvid" poster="img/water-on-glass.jpg">' +
            '<source src="img/Wind%20Energy%20-%206558.mp4">' +
            '</video>';
            document.getElementById('video-container2')
                .innerHTML =
                '<video autoplay id="bgvid2" poster="img/water-on-glass.jpg">' +
                '<source src="img/timelaps.mp4">' +
                '</video>'
};

