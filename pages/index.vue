<template>
    <hero :fullScreen="fullScreen">
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
                    <p class="heroPara">Hey stranger, I design and build <a class="inline-link" href=""><strong>awesome stuff on the internet</strong></a>. I am passionate about web applications and all things tech.</p>
                    <p class="heroPara">I enjoy fiddling with robots (ofcourse also a gruelling round of battle bots), lifting weights and I'm also an amateur DJ</p>
                </div>
            </div>
    </hero>
</template>

<script>
import Hero from '~/components/sections/Hero'
export default {
    name: 'HomePage',
    components: {
        Hero
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
