// TODO: Refactor JS to use HTML5 data

// Foundation JavaScript

$(document).foundation({
    reveal: {
        animation: 'fade',
        animation_speed: '100'
    }
});

// Greyscale Images

$('.greyscale').BlackAndWhite({
    hoverEffect : true, // default true
    // set the path to BnWWorker.js for a superfast implementation
    webworkerPath : 'js/',
    // to invert the hover effect
    invertHoverEffect: false,
    // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
    intensity:0.5,
    speed: { //this property could also be just speed: value for both fadeIn and fadeOut
        fadeIn: 5000, // 200ms for fadeIn animations
        fadeOut: 800 // 800ms for fadeOut animations
    },
    onImageReady:function(img) {
        // this callback gets executed anytime an image is converted
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
            $toggleIcon.removeClass('icon-toggle right-off-canvas-toggle').addClass('icon-up');
        }
    }
    else
    {
        if($header.data('size') == 'small')
        {
            $header.data('size','big');
            $header.removeClass('sticky');
            $nav.children('li:first').remove();
            $toggleIcon.removeClass('icon-up').addClass('icon-toggle right-off-canvas-toggle');
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
    $toggleIcon.removeClass('icon-toggle').addClass('icon-cancel');
});

$(document).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
    $toggleIcon.removeClass('icon-cancel').addClass('icon-toggle');
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