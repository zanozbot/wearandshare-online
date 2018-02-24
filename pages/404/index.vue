<template>
<div id="app-not-found">
    <header id="home" class="home bg-image not-found-page">
        <div class="overlay">

            <!-- Start Navigation Bar -->

            <nav class="navbar navbar-default nav-sec navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <nuxt-link class="navbar-brand" to="/" title="Wear &amp; Share"><div class="icon-logo-large"></div></nuxt-link>
                    </div>
                    <!-- / navbar-header -->
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/"><span>Home</span></a></li>
                            <li><nuxt-link to="/#about">Features</nuxt-link></li>
                            <li><nuxt-link to="/#screenshots">Features</nuxt-link></li>
                            <li><nuxt-link to="/#video">Video</nuxt-link></li>
                            <li><nuxt-link to="/#faqs">FAQs</nuxt-link></li>
                        </ul>
                    </div>
                    <!-- end nav-collapse -->
                </div>
                <!-- end container -->
            </nav>

            <!-- End Navigation Bar -->

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-not-found">
                            <h1 class="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">404</h1>
                            <h4 class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">What is this place?</h4>
                            <p class="wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">Looks like you got lost in our magical wardrobe. Just follow the link below to get back home.</p>
                        </div>
                        <div class="button-not-found wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
                            <nuxt-link to="/" class="bttn-gradient"><span>Home</span></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Container -->
        </div>
        <!-- End Overlay -->
    </header>
    <!-- End Header -->

    <!--
        End Header
        ==================================== -->

    <!--
        Start Preloader
        ==================================== -->

    <div class="loading-overlay">
        <div class="loading-inner">
            <div></div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALWUExURQAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xPx75UAAADxdFJOUwCc/pkB5VjC5AOW7v2DBQ7h1YWwJIoJ78MG4j8Rciav9loXelLygOwI9/wCCx/ObFQZfH0cy93mkQx0bi48pucl2kjwVcSyiaDpGMDj9Oorz7tl29S0EA8nM4cw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" alt="Wear &amp; Share logo" class="img-responsive">
        </div>
    </div>

    <!--
        End Preloader
        ==================================== -->
</div>
</template>

<script>
export default {
    head: {
        title: "Wear & Share - What is this place?",
        meta: [
            { hid: 'description', name: 'description', content: 'Looks like you got lost in our magical wardrobe. Just follow the link below to get back home.' },
        ],
        script: [
            { innerHTML: 
            `
            $(".loading-inner").fadeOut(function() {
                $(".loading-overlay").fadeOut("slow");
            });
            `
            , body: true }
        ],
        __dangerouslyDisableSanitizers: ['script']
    }
}
</script>