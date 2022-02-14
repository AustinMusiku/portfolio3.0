<template>
    <div class="hero grid" :class="{ 'hero--fullscreen' : fullScreen }">
        <div class="grid__container hero__content">
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
        height: 60vh;
        // background: $clr-grey;

        &.hero--fullscreen{
            height: 100vh;
        }

        .hero__content{
            padding: 0 0 1.5em;
        }
    }
    @media(max-width: 48rem){
        .hero{
            padding: 0 1.5em;
        }
    }

    @media(max-width: 20rem){
        .hero{
            padding: 0 1em;

            .hero__content{
                padding: 0 0 1em;
            }
        }
    }
</style>