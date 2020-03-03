$('html, body, *').mousewheel(function (e, deltaX) {
    // multiplying by 40 is the sensitivity,
    // increase to scroll faster.
    this.scrollLeft -= (deltaX * 40);
    // e.preventDefault();
});

$('.menu-toggle').click(function() {

    $('ul').toggleClass('opening');
    $('.section').toggleClass('blur');
    $(this).toggleClass('open');
    $('#fifth').style='filter : blur(10px)';

});


