<template>
    <div>
        <hero data-scroll-section :fullScreen="fullScreen">
        <div slot="hero-content" class="hero-container">
                <div class="hero-text">
                    <div class="hero-heading">
                        <span class="concealer">
                            <div class="spanCurtain"></div>
                            <h1 class="heading">Web</h1>
                        </span>
                        <span class="concealer">
                            <div class="spanCurtain"></div>
                            <h1 class="heading">Developer<span class="blip">_</span></h1>
                        </span>
                    </div>
                    <p class="heroPara">Hey stranger, I design and build cool stuff on the internet. I am passionate about web applications and all things tech.</p>
                    <p class="heroPara">I enjoy fiddling with robots (ofcourse also a gruelling round of battle bots), lifting weights and I'm also an amateur DJ</p>
                </div>
            </div>
        </hero>
    
        <about data-scroll-section/>
        <works data-scroll-section> </works>
        <cta data-scroll-section> </cta>
    </div>
</template>

<script>
import Hero from '~/components/sections/Hero';
import Works from '~/components/sections/HomeWorksSection';
import Cta from '~/components/sections/HomeCtaSection';
import About from '~/components/sections/HomeAboutSection';

export default {
    name: 'HomePage',
    head: {
        title: 'Austin Musiku | Developer',
    },
    components: {
        Hero,
        Works,
        Cta,
        About
    },
    data(){
        return{
            fullScreen: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .hero-text{
        max-width: 700px;

        .hero-heading{
            margin: 0 0 1em
        }
    }
</style>
