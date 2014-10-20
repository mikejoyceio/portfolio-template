// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

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

// Parallax

$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.feature').css('background-position', -(scrolled * 0.1) + 'px');
}

// Sticky Nav 

$(function(){
    $('header').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 100)
    {
        if($('header').data('size') == 'big')
        {
            $('header').data('size','small');
            $('header').addClass('sticky');
            $('header nav ul').prepend('<li><a id="start">Start</a></li>')
        }
    }
    else
    {
        if($('header').data('size') == 'small')
        {
            $('header').data('size','big');
            $('header').removeClass('sticky');
            $('header nav ul li:first').remove();
        }  
    }
});

// Scroll to Anchor

function anchorScroll(target) {
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 2000);
}

$('#work').click(function() {
    anchorScroll('#featured-work');
});

$('#view').click(function() {
    anchorScroll('#featured-work');
});

$('#contact').click(function() {
    anchorScroll('footer');
});