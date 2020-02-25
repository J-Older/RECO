$('html, body, *').mousewheel(function (e, delta) {
    // multiplying by 40 is the sensitivity,
    // increase to scroll faster.
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
});

//
//     $(window).on("scroll resize", function() {
//         var o = $(window).scrollLeft() / ($(document).width() - $(window).width());
//         $(".progress-bar").css({
//             "width": (100 * o | 0) + "%"
//         });
//         $('.progress')[0].value = o;
//     });
//
//
