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
            $('header .logo').css({
                'font-size': '1.5rem',
                'margin-top' : '-3px'
            });
            $('header nav').css({
                'top':'5px'
            });
            $('header nav a').css({
                'font-size':'0.9rem'
            });
            $('header a').css({
                'color': '#ffffff'
            });
            $('header').css({
                'background': '#3d3d3d',
                'position': 'fixed',
                'bottom': '0',
           
                'z-index': '9999'
            });
        }
    }
    else
    {
        if($('header').data('size') == 'small')
        {
            $('header').data('size','big');
            $('header .logo').css({
                'font-size': '3.8rem'
            });
            $('header nav').css({
                'top':'45px'
            });
            $('header nav a').css({
                'font-size':'1.1rem'
            });
            $('header a').css({
                'color': '#202020'
            });
            $('header').css({
                'background': 'transparent',
                'opacity': '1',
                'top': 'auto',
                'bottom': 'auto',
                'position': 'absolute'
            });
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


