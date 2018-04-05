<template src="./index.html"></template>

<script>
export default {
  data: function() {
    return {
      posts: [
        // Add new post here

        {
          link:     '/blog/04-04-2018-the-opportunity',
          img:      '/img/blog/04-04-2018-the-opportunity/feature.jpg',
          author:   'Dik M. Murovec',
          day:      '06',
          month:    'Apr',
          fullDate: 'April 6th, 2018',
          title:    'The Wear & Share Opportunity',
          desc:     'Learn how the sharing culture influenced the Wear & Share development, what opportunities it brings to the table and how we intend to combine them with people’s desire to be fashionable at all times.'
        }
      ]
    }
  },
  head: {
    title: "Wear & Share - Blog: Get to know us better",
    meta: [
      { hid: 'description', name: 'description', content: 'Get to know everything about Wear &amp; Share and what we’re offering to our users. From the idea formation, to the flourishing sharing ecosystem in the future. Learn how Wear &amp; Share will revolutionize what friends and family have doing since forever. Sharing clothes.' },
      // Social media (Facebook and other)
      { hid: 'og:image', name: 'og:image', content: 'https://wearandshare.online/img/bg/OGimage.png' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Wear & Share' },
      { hid: 'og:type', name: 'og:site_name', content: 'website' },
      { hid: 'og:description', name: 'og:description', content: 'Get to know everything about Wear &amp; Share and what we’re offering to our users. From the idea formation, to the flourishing sharing ecosystem in the future. Learn how Wear &amp; Share will revolutionize what friends and family have doing since forever. Sharing clothes.' },
      { hid: 'og:title', name: 'og:title', content: 'Wear & Share - Blog: Get to know us better' },   
      { hid: 'og:url', name: 'og:url', content: 'https://wearandshare.online/blog' },
      // Social media (Twitter)
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Wear & Share - Blog: Get to know us better' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Get to know everything about Wear &amp; Share and what we’re offering to our users. From the idea formation, to the flourishing sharing ecosystem in the future.' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://wearandshare.online/blog' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://wearandshare.online/img/bg/OGimage.png' }
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
