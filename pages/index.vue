<template>
    <div>
        <hero data-scroll-section>
        <div slot="hero-content" class="hero-container">
                <div class="hero-text">
                    <p class="sub-heading">Hey stranger, I design and build cool stuff on the internet. I am passionate about web applications and all things tech. When I'm not busy pretending to be an awwwards judge, you can find me lifting weights or nerding out over random stats</p>
                </div>
            </div>
        </hero>
    
        <works data-scroll-section> </works>
        <cta data-scroll-section> </cta>
    </div>
</template>

<script>
import Hero from '~/components/sections/Hero';
import Works from '~/components/sections/HomeWorksSection';
import Cta from '~/components/sections/HomeCtaSection';

export default {
    name: 'HomePage',
    head: {
        title: 'Austin Musiku | Software Developer',
    },
    components: {
        Hero,
        Works,
        Cta
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
        max-width: 75ch;

        .hero-heading{
            margin: 0 0 1em
        }
    }
</style>
