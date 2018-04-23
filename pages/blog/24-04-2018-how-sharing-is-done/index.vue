<template src="./index.html"></template>

<script>
export default {
  data: function() {
    return {
      previousPost:   null,
      nextPost:       null,
      blogTitle:      'How Sharing is Done',
      day:            '24',
      month:          'apr',
      author:         'Dik M. Murovec',
      fullDate:       'April 24th, 2018',
      img:            '/img/blog/24-04-2018-how-sharing-is-done/feature.jpg',
      fb:             'https://www.facebook.com/sharer/sharer.php?u=https%3A//wearandshare.online/blog/24-04-2018-how-sharing-is-done',
      twitter:        'https://twitter.com/home?status=Wear%20%26%20Share%20-%20How%20sharing%20is%20done%20%0Ahttps%3A//wearandshare.online/blog/24-04-2018-how-sharing-is-done%20%23sharing',
      gp:             'https://plus.google.com/share?url=https%3A//wearandshare.online/blog/24-04-2018-how-sharing-is-done'
    }
  },
  head: {
    title: "Wear & Share - How Sharing is Done",
    meta: [
      { hid: 'description', name: 'description', content: 'Sharing between friends should be simple and intuitive. That is what we had in mind designing our application. Check out how our application can improve your current sharing experience.' },
      // Social media (Facebook and other)
      { hid: 'og:image', name: 'og:image', content: 'https://wearandshare.online/img/blog/24-04-2018-how-sharing-is-done/OGimage.jpg' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Wear & Share' },
      { hid: 'og:type', name: 'og:site_name', content: 'website' },
      { hid: 'og:description', name: 'og:description', content: 'Sharing between friends should be simple and intuitive. That is what we had in mind designing our application. Check out how our application can improve your current sharing experience.' },
      { hid: 'og:title', name: 'og:title', content: 'Wear & Share - How Sharing is Done' },   
      { hid: 'og:url', name: 'og:url', content: 'https://wearandshare.online/blog/24-04-2018-how-sharing-is-done' },
      // Social media (Twitter)
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Wear & Share - How Sharing is Done' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Sharing between friends should be simple and intuitive. That is what we had in mind designing our application. Check out how our application can improve your current sharing experience.' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://wearandshare.online/blog/24-04-2018-how-sharing-is-done' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://wearandshare.online/img/blog/24-04-2018-how-sharing-is-done/OGimage.jpg' }
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

<style scoped>
li {
  color: #f16996;
}

ul li p {
  color: #333;
}

.video {
  margin-top: 2rem;
}

.video iframe {
  border-radius: 1rem;
}
</style>
