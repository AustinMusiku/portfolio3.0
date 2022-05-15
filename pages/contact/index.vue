<template>
    <div>
        <hero data-scroll-section :fullScreen="fullScreen">
        <div slot="hero-content" class="hero-container">
                <div class="hero-text">
                    <div class="hero-heading">
                        <span class="concealer">
                            <div class="spanCurtain"></div>
                            <h1 class="headingz">Get in touch</h1>
                        </span>
                    </div>
                    <!-- <p class="heroPara ">musikudeveloper [at] gmail.com</p> -->
                    <p class="heroPara">hello [at] austinmusiku.co.ke</p>
                </div>
            </div>
        </hero>
    </div>
</template>

<script>
import Hero from '~/components/sections/Hero';

export default {
    name: 'HomePage',
    head: {
    title: 'Austin Musiku | Get in touch',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact | Get in touch'
      }
    ],
    },
    components: {
        Hero,
    },
    data(){
        return{
            fullScreen: false
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
