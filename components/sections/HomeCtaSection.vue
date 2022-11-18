<template>
    <section class="grid">
        <div class="grid__container">
            <div class="cta-text" id="contact">
                <nuxt-link to="/" class="super-heading underline hover-link">Hit me up!</nuxt-link>
                <p class="sub-heading">I'm not Kanye West, you can tell me something😉</p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Works'
}
</script>

<style lang="scss" scoped>
    .cta-text{
        padding: 3em 0;
        text-align: center;

        .sub-heading{
            margin: .5em 0 0;
        }
    }
</style>
