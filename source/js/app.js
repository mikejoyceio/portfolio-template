// TODO: Refactor JS to use HTML5 data

// Foundation JavaScript

$(document).foundation({
    reveal: {
        animation: 'fade',
        animation_speed: '100'
    }
});

// JQuery Objects

var $toggle = $('#toggle');
var $toggleIcon = $('.toggle span:first');
var $header = $('header');
var $feature = $('.feature');
var $nav = $('header nav ul');

// Parallax

$(window).on('scroll touchmove', function(event){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $feature.css('background-position', -(scrolled * 0.03) + 'px');
}

// Sticky Navigation

$(function(){
    $header.data('size','big');
});

$(window).on('scroll touchmove', function(event){

    if($(document).scrollTop() > 100)
    {
        if($header.data('size') == 'big')
        {
            $header.data('size','small');
            $header.addClass('sticky');
            $(".sticky").show();
            $nav.prepend('<li><a id="start">Start</a></li>');
            $toggleIcon.removeClass('fa-bars right-off-canvas-toggle').addClass('fa-arrow-circle-up');
        }
    }
    else
    {
        if($header.data('size') == 'small')
        {
            $header.data('size','big');
            $header.removeClass('sticky');
            $nav.children('li:first').remove();
            $toggleIcon.removeClass('fa-arrow-circle-up').addClass('fa-bars right-off-canvas-toggle');
        }
    }
});

// Mobile Menu

$toggle.click(function() {
    if($header.data('size') == 'small') {
         anchorScroll('#feature');
    }
});

// Toggle Mobile Menu Icon

$(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
    $toggleIcon.removeClass('fa-bars').addClass('fa-times');
});

$(document).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
    $toggleIcon.removeClass('fa-times').addClass('fa-bars');
});

// Scroll to Anchor

$(document).on('click', '#start', function() {
    anchorScroll('#feature');
});

$('#view').click(function() {
    anchorScroll('#projects');
});

$('.projects').click(function() {
    anchorScroll('#projects');
});

$('.contact').click(function() {
    anchorScroll('footer');
});

function anchorScroll(target) {
    $('.exit-off-canvas').click();
    setTimeout(function() {
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 2000);
    }, 500);
}
