$('html, body, *').mousewheel(function (e, deltaX) {
    // multiplying by 40 is the sensitivity,
    // increase to scroll faster.
    this.scrollLeft -= (deltaX * 1);
    // e.preventDefault();
});

// var tabs = $(".menu-tabs");
// var doc = $("#main");

//
// $(tabs).on("click", ".tab-first", function () {
//     $("body .section").removeClass("active");
//     $("#first").addClass("active");
//     $('body,html').animate({
//         scrollTop: 0
//     }, 400);
//     return false;
// });
//
// $(tabs).on("click", ".tab-second", function () {
//     $("body .section").removeClass("active");
//     $("#second").addClass("active");
//     $('body,html').animate({
//         scrollTop: 0
//     }, 400);
//     return false;
// });
//
// $(tabs).on("click", ".tab-third", function () {
//     $("body .section").removeClass("active");
//     $("#third").addClass("active");
//     $('body,html').animate({
//         scrollTop: 0
//     }, 400);
//     return false;
// });
//
// $(tabs).on("click", ".tab-fourth", function () {
//     $("body .section").removeClass("active");
//     $("#fourth").addClass("active");
//     $('body,html').animate({
//         scrollTop: 0
//     }, 400);
//     return false;
// });
//
// $(tabs).on("click", ".tab-fifth", function () {
//     $("body .section").removeClass("active");
//     $("#fifth").addClass("active");
//     $('body,html').animate({
//         scrollTop: 0
//     }, 400);
//     return false;
// });


//     $(window).on("scroll resize", function() {
//         var o = $(window).scrollLeft() / ($(document).width() - $(window).width());
//         $(".progress-bar").css({
//             "width": (100 * o | 0) + "%"
//         });
//         $('.progress')[0].value = o;
//     });
//
//
