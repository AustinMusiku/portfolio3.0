<template>
    <div class="hero grid" :class="{ 'hero--fullscreen' : fullScreen }">
        <div data-scroll data-scroll-speed="2" class="grid__container hero__content">
            <slot name="hero-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: { 
        fullScreen: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .hero{
        align-items: end;
        height: 80vh;
        // background: $clr-grey;

        &.hero--fullscreen{
            height: 100vh;
            // background: url('/images/noise.png') no-repeat center center;
        }

        .hero__content{
            margin: 0 0 2em;
            padding: 0;
        }
    }
    @media(max-width: 48rem){
        .hero{
            padding: 0 1.5em;

            .hero__content{
                margin: 0 0 5em;
            }
        }
    }

    @media(max-width: 20rem){
        .hero{
            padding: 0 1em;
        }
    }
</style>