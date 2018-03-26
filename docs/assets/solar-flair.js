(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 69)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.toc-entry > a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 69)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 100
    //     }
    // })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        viewFactor: 0.4,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        viewFactor: 0.4,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        viewFactor: 0.4,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.sr-easeInOut', {
        origin: 'left',
        scale: 0.3,
        rotate: { x: 50, y: 50, z: 0 },
        easing: 'ease-in-out',
        duration: 600,
        viewFactor: 0.4,
        scale: 0.3,
        distance: '30%'
    }, 300);
    sr.reveal('.sr-pop-a', {
        duration: 600,
        viewFactor: 0.4,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.sr-pop-b', {
        delay: 200,
        duration: 600,
        viewFactor: 0.4,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.sr-pop-c', {
        delay: 400,
        duration: 600,
        viewFactor: 0.4,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.sr-pop-d', {
        delay: 600,
        duration: 600,
        viewFactor: 0.4,
        scale: 0.3,
        distance: '0px'
    }, 300);

})(jQuery); // End of use strict




