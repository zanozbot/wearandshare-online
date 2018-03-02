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

    // Navbar Smoothscroll js
    $(function() {
        $('.sec-nav a, #home a, .navbar-brand').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1000);
            event.preventDefault();
        });
    });

    // Navbar ScollSpy
    $("body").scrollspy({

        target: ".navbar-collapse",
        offset: 95

    });

    /* Change Button */

    var b = $(".features-slider"),
        k = $(".nav-pills li");
    b.on('changed.owl.carousel', function(event) {
        var n = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var o = event.item.count;
        if (n > o || n == 0) {
            n = o - (n % o);
        }

        (n > o || 0 == n) && (n = o - n % o), n--;
        var t = $(".nav-pills li:nth(" + n + ")");
        a(t)

    }), k.on("click", function() {
        var e = $(this).data("owl-item");
        b.trigger("to.owl.carousel", e), a($(this));
    });

    function a(e) {
        k.removeClass("active-icon");
        e.addClass("active-icon");
    }

    /* Change Text */
    var b = $(".features-slider"),
        i = $(".tab-pane");
    b.on('changed.owl.carousel', function(event) {
        var h = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var v = event.item.count;
        if (h > v || h == 0) {
            h = v - (h % v);
        }

        (h > v || 0 == h) && (h = v - h % v), h--;
        var w = $(".tab-pane:nth(" + h + ")");
        c(w)

    }), $(".nav-pills li").on("click", function() {
        return false;
        var y = $(this).data("owl-item");
        b.trigger("to.owl.carousel", y), c($(".tab-pane"));
    });

    function c(y) {
        i.removeClass("active");
        y.addClass("active");
    }

    /* ========================================================================= */
    /*  screenshot Carousel
    /* ========================================================================= */

    $(".screenshot").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            }
        },
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: ["<i class='icon-arrow-thin-left'></i>", "<i class='icon-arrow-thin-right'></i>"],
        autoplay: true

    });

    /* ========================================================================= */
    /*  WOW Plugin
    /* ========================================================================= */

    var wow = new WOW({
        offset: 70, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    });
    wow.init();

    // End
});

/* ========================================================================= */
/*  Preloader
/* ========================================================================= */

// $(window).on("load", function() {
//     $(".loading-inner").fadeOut(function() {
//         $(".loading-overlay").fadeOut("slow");
//     });
// });

/* ========================================================================= */
/*  Back To Top
/* ========================================================================= */

$(window).on('scroll', function() {
    if ($(this).scrollTop() >= 800) {
        $("#scroll-top").addClass("show");
    } else {
        $("#scroll-top").removeClass("show");
    }
});

$(window).on("load", function() {
    $("#scroll-top").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });
});

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