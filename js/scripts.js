/**
 * Created by F_CORNUAUD on 10/07/2017.
 */

$(document).ready(function () {

    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));

    $('#slide-nav.navbar-default, #slide-nav.navbar-light').after($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggler';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '100%';
    var menuneg = '-100%';
    var slideneg = '-100%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#navbarSupportedContent').stop().animate({
            right: selected ? menuneg : '0px'
        }, "easeOutBounce");

        $('#navbar-height-col').stop().animate({
            right: selected ? slideneg : '0px'
        }, "easeOutBounce");

        $(pagewrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        }, "easeOutBounce");

        $(navigationwrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        }, "easeOutBounce");

        $(this).toggleClass('slide-active', !selected);
        $('#navbarSupportedContent').toggleClass('slide-active');

        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');

    });

    var selected = '#navbarSupportedContent, #page-content, body, .navbar, .navbar-header';

    $(window).on("resize", function () {
        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }
    });
});