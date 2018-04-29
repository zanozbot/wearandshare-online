<template src="./index.html"></template>

<script>
export default {
  data: function() {
    return {
      previousPost:   null,
      nextPost:       '/blog/24-04-2018-how-sharing-is-done',
      blogTitle:      'The Wear & Share Opportunity',
      day:            '06',
      month:          'apr',
      author:         'Dik M. Murovec',
      fullDate:       'April 6th, 2018',
      img:            '/img/blog/04-04-2018-the-opportunity/feature.jpg',
      fb:             'https://www.facebook.com/sharer/sharer.php?u=https%3A//wearandshare.online/blog/04-04-2018-the-opportunity',
      twitter:        'https://twitter.com/home?status=%22Wear%20%26%20Share%20-%20The%20Opportunity%22%20https%3A//wearandshare.online/blog/04-04-2018-the-opportunity',
      gp:             'https://plus.google.com/share?url=https%3A//wearandshare.online/blog/04-04-2018-the-opportunity'
    }
  },
  head: {
    title: "Wear & Share - The Opportunity",
    meta: [
      { hid: 'description', name: 'description', content: 'Learn how the sharing culture influenced the Wear & Share development, what opportunities it brings to the table and how we intend to combine them with people’s desire to be fashionable at all times.' },
      // Social media (Facebook and other)
      { hid: 'og:image', name: 'og:image', content: 'https://wearandshare.online/img/blog/04-04-2018-the-opportunity/OGimage.jpg' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Wear & Share' },
      { hid: 'og:type', name: 'og:site_name', content: 'website' },
      { hid: 'og:description', name: 'og:description', content: 'Learn how the sharing culture influenced the Wear & Share development, what opportunities it brings to the table and how we intend to combine them with people’s desire to be fashionable at all times.' },
      { hid: 'og:title', name: 'og:title', content: 'Wear & Share - The Opportunity' },   
      { hid: 'og:url', name: 'og:url', content: 'https://wearandshare.online/blog/04-04-2018-the-opportunity' },
      // Social media (Twitter)
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Wear & Share - The Opportunity' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Learn how the sharing culture influenced the Wear & Share development, what opportunities it brings to the table and how we intend to combine them with people’s desire to be fashionable at all times.' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://wearandshare.online/blog/04-04-2018-the-opportunity' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://wearandshare.online/img/blog/04-04-2018-the-opportunity/OGimage.jpg' }
    ],
    script: [
      { src: '/js/utils.js', body: true },
    ],
  },
  mounted: function() {
    setTimeout(() => {
      $(".loading-inner").fadeOut(function() {
        $(".loading-overlay").fadeOut("slow");
      });
    }, 1000);
  }
}
</script>

<style>

</style>
