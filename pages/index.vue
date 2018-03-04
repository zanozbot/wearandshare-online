<template src="./index.html">

</template>

<script>
export default {
  head: {
    title: "Wear & Share - Not wearing? Start sharing!",
    meta: [
      { hid: 'description', name: 'description', content: 'Extend your wardrobe by sharing it with your friends. Discover new and exciting outfits combining wearables previously unavailable to you. Express yourself through a much wider array of fashion options. All this and more, using Wear & Share. The only app that combines your friends\' wardrobes with yours.' },
      // Social media (Facebook and other)
      { hid: 'og:image', name: 'og:image', content: 'https://wearandshare.online/img/bg/OGimage.png' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Wear & Share' },
      { hid: 'og:type', name: 'og:site_name', content: 'website' },
      { hid: 'og:description', name: 'og:description', content: 'Extend your wardrobe by sharing it with your friends. Discover exciting new outfits combining previously unavailable wearables. Express yourself through a wider array of fashion options and more, using the only app that combines wardrobes of friends.' },
      { hid: 'og:title', name: 'og:title', content: 'Wear & Share - Not wearing? Start sharing!' },   
      { hid: 'og:url', name: 'og:url', content: 'https://wearandshare.online' },
      // Social media (Twitter)
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:tittle', name: 'twitter:tittle', content: 'Wear & Share - Not wearing? Start sharing!' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Share your wardrobe with friends and discover new outfits combining once unavailable wearables and more, using the only app that combines wardrobes of friends.' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://wearandshare.online' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://wearandshare.online/img/bg/OGimage.png' },
      // Site verification
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'To5EEf2kJCqtjG6wC7hnQ8Hd1QqFXjPL-MiZ9XUS8ns' }
    ],
    script: [
      { src: '/js/utils.js', body: true },
      { inlineHTML:
      `
      { 
        "@context" : "http://schema.org",
        "@type" : "Organization",
        "name" : "Wear & Share",
        "url" : "https://wearandshare.online",
        "logo": "https://wearandshare.online/img/icons/profile.jpg",
        "sameAs" : [ 
            "https://www.facebook.com/wearandshare.online",
            "https://twitter.com/wear_and_share",
            "https://www.instagram.com/wearandshare.online/"
            ] 
        }
      `
      , type: 'application/ld+json'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
    ]
  },
  mounted: function() {
    setTimeout(() => {
      $(".loading-inner").fadeOut(function() {
        $(".loading-overlay").fadeOut("slow");
      });
    }, 1000);

    $(function(){
      // Phone Carousel Header
      $('.inner').owlCarousel({
          loop: true,
          autoplay: true,
          dots: true,
          nav: false,
          responsive: {
              0: {
                  items: 1
              },
              400: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      });
      
      /* ========================================================================= */
      /*  Change Photo On Mobile Services
      /* ========================================================================= */

      $('.features-slider').owlCarousel({
          responsive: {
              0: {
                  items: 1
              },
              400: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          },
          loop: true,
          margin: 0,
          autoplay: true,
          dots: false,
          nav: false,
          mouseDrag: false,
          touchDrag: false,
          autoplayTimeout: 5000
      });
    });
  }
}
</script>

<style>
</style>
