<template>
    <div class="curtains" ref="curtains">
        <div class="curtain curtain__inner" ref="curtain__inner">
            <svg 
                class="loader"
                width="1728" height="297" viewBox="0 0 1728 297"
                fill="#8fd589"
                preserveAspectRatio="none">
                <path 
                    d="M1728 1H0V295C0 295 199 140.164 844.5 142.045C1490 143.925 1728 295 1728 295V1Z"/>
            </svg>
        </div>

        <div class="curtain curtain__outer" ref="curtain__outer">
            <div class="curtain__content">
                <div class="names">
                    <span class="name second_name">Austin Musiku</span>
                </div>
            </div>

            <svg 
                class="loader"
                width="1728" height="297" viewBox="0 0 1728 297"
                fill="#0d0d0d"
                preserveAspectRatio="none">
                <path 
                    d="M1728 1H0V295C0 295 199 140.164 844.5 142.045C1490 143.925 1728 295 1728 295V1Z"/>
            </svg>

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

                window.addEventListener('load', () => {
                    tl
                        .to('.name', {
                            opacity: 1,
                            duration: .75,
                            ease: 'power1.inout',
                        })
                        .to('.names', {
                            '--scale': '1',
                            duration: .75,
                            ease: 'power4.out'
                        }, "-=.75")
                        .to('.names', {
                            '--scale': '0',
                            '--origin': 'right',
                            duration: .75,
                            ease: 'power4.in',
                        })
                        
                        .to(['.curtain__outer', '.curtain__inner'], {
                            backgroundColor: '#0d0d0d',
                            duration: 1,
                            ease: 'power3.inOut',
                        }, "-=1")
                        .to('.name', {
                            color: '#fff',
                            duration: 1,
                            ease: 'power3.inOut',
                        }, "-=1")

                        .to(['.curtain__outer', '.curtain__inner'], {
                            duration: 2,
                            y: '-130%',
                            ease: 'power3.inOut',
                            stagger: 0.035
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
        
        &.curtain__outer,&.curtain__inner{
            .loader{
                left: 0;
                position: absolute;
                bottom: 0%;
                width: 100vw;
                height: 16vh;

                @media(max-width: 48rem){
                    .loader{
                        height: 10vh !important;
                    }
                }
            }
        }

        &.curtain__outer{
            background: $clr-light;
            transform-origin: bottom;

            .loader{
                transform: translateY(98%);
            }
        }
        &.curtain__inner{
            background: #8fd589;
            .loader{
                transform: translateY(70%);
            }
        }
        
        .curtain__content{
            padding: 4em;
            width: 100vw;

            .names{
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: .25em;
                width: 100%;
                --scale: 0;
                --origin: left;

                .name{
                    text-transform: capitalize;
                    font-size: 2vw;
                    font-weight: $fw-bold;
                    opacity: 0;
                }

                &::before, 
                &::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    height: 1px;
                    width: 100%;
                    background-color: #4f4f4f;
                    transform: scaleX(var(--scale));
                    transform-origin: var(--origin);
                }

                &::before{
                    top: -2.5px;
                }
                &::after{
                    bottom: -2.5px;
                }
            }
        }
    }

    @media(max-width: 48rem){
        .curtain{
            &.curtain__outer,&.curtain__inner{
                .loader{
                    height: 10vh;
                }
            }

            .curtain__content{
                padding: 1em;
                .names{
                    .name{
                        font-size: 4vw;
                    }
                }
            }
        }
    }
</style>