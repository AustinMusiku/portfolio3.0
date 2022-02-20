<template>
    <section class="grid">
        <div class="grid__container">
            <div class="cta-text" id="contact">
                <a href="contact" class="super-heading underline hover-link">Hit me up!</a>
                <p class="sub-heading">I'm not Kanye West, "You can tell me something"😉</p>
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
        
        .heading{
            font-size: 12vw;
        }
        .sub-heading{
            margin: .25em 0 0;
        }
    }
</style>
