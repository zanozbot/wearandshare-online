$(document).ready(function() {

    "use strict";

    /* ========================================================================= */
    /*  Navigation Bar
    /* ========================================================================= */

    $(window).on('scroll', function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /* ========================================================================= */
    /*  WOW Plugin
    /* ========================================================================= */

    var wow = new WOW({
        offset: 70, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    });
    wow.init();

});

$(window).on('scroll', function() {
    if ($(this).scrollTop() >= 800) {
        $("#scroll-top").addClass("show");
    } else {
        $("#scroll-top").removeClass("show");
    }
});

function scrollToTop() {
    $("html, body").animate({
        scrollTop: 0
    }, 1500);
}

const apiRoot = 'https://online.us17.list-manage.com/subscribe/post-json?u=a4c8a5ce5eb2a5a48df0a4999&amp;id=f028e09028&EMAIL=';

let errorTimeout;

function subscribe(event) {
    event.preventDefault();

    if (event.target.information.value.length > 0) return false;

    const email = event.target.email.value;
    const apiURL = apiRoot + email + '&c=?';

    $.getJSON(apiURL, function(json){       
        let msg = '';

        clearTimeout(errorTimeout);

        if (json.result == 'success' || json.msg.indexOf(email) >= 0) {
            msg = '<p>Thank you for subscribing.</p>';
            event.target.email.value = '';
        } else {
            msg = '<p>The email you entered looks <span>fake</span> or <span>invalid</span>.</p>';
        }

        $('.error-msg').html(msg);
        $('.error-msg').slideToggle();

        errorTimeout = setTimeout(function() {
            if($('.error-msg').is(":visible")) {
                $('.error-msg').slideToggle();
            }
        }, 5000);
    });

    return false;
}