<template>
    <div class="curtains" ref="curtains">
        <div class="curtain curtain__inner" ref="curtain__inner"></div>

        <div class="curtain curtain__outer" ref="curtain__outer">
            <div class="curtain__content">
                <slot name="curtain-content"></slot>
            </div>
        </div>

    </div>
</template>

<script>
    import { gsap } from "gsap";

    export default {
        name: 'Curtain',
        data(){
            return{
                isOpen: false
            }
        },
        methods: {
            fade(){
                let tl = gsap.timeline();
                tl
                    .from('.curtain__content', {
                        opacity: '0',
                        duration: .75
                    })
                window.addEventListener('load', () => {
                    tl
                        .to(['.curtain__outer', '.curtain__inner'], {
                            duration: 1,
                            y: '-100%',
                            ease: 'power3.inOut',
                            stagger: .5
                        })
                })
            }
        },
        mounted(){
            this.fade();
        }
    }
</script>

<style lang="scss" scoped>
    .curtain{
        position: fixed;
        display: grid;
        place-items: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 20000;
        
        &.curtain__outer{
            background: $clr-light;
            transform-origin: bottom;
        }
        &.curtain__inner{
            background: $clr-dark;
        }

        .curtain__content{
            padding: 4em;
        }
    }
</style>