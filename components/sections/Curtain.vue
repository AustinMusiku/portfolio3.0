<template>
    <div class="curtains" ref="curtains">
        <div class="curtain curtain__inner" ref="curtain__inner"></div>

        <div class="curtain curtain__outer" ref="curtain__outer">
            <div class="curtain__content">
                <div class="names">
                    <div class="name first_name">
                        <span class="letter">A</span>
                        <span class="letter">u</span>
                        <span class="letter">s</span>
                        <span class="letter">t</span>
                        <span class="letter">i</span>
                        <span class="letter">n</span>
                    </div>

                    <div class="name second_name">
                        <span class="letter">M</span>
                        <span class="letter">u</span>
                        <span class="letter">s</span>
                        <span class="letter">i</span>
                        <span class="letter">k</span>
                        <span class="letter">u</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: "Curtain",
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        fade() {
            let tl = gsap.timeline();

            window.addEventListener("load", () => {
                tl.to(".letter", {
                    opacity: 1,
                    duration: 0.65,
                    ease: "power1.inout",
                    stagger: 0.025,
                }).to([".curtain__outer", ".curtain__inner"], {
                    duration: 2.5,
                    y: "-130%",
                    ease: "power4.inOut",
                    stagger: 0.25,
                });
            });
        },
    },
    mounted() {
        this.fade();
    },
};
</script>

<style lang="scss" scoped>
.curtain {
    position: fixed;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20000;

    &.curtain__outer,
    &.curtain__inner {
        .loader {
            left: 0;
            position: absolute;
            bottom: 0%;
            width: 100vw;
            height: 16vh;

            @media (max-width: 48rem) {
                .loader {
                    height: 10vh !important;
                }
            }
        }
    }

    &.curtain__outer {
        background: $clr-light;
        transform-origin: bottom;

        .loader {
            transform: translateY(98%);
        }
    }
    &.curtain__inner {
        background: #8fd589;
        height: 200vh;
        .loader {
            transform: translateY(70%);
        }
    }

    .curtain__content {
        padding: 4em;
        width: 100vw;

        .names {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 2em;
            width: 100%;
            --scale: 0;
            --origin: left;

            .name {
                .letter {
                    text-transform: capitalize;
                    font-size: var(--fs-xl);
                    font-weight: $fw-bold;
                    opacity: 0;
                }
            }

            &::before,
            &::after {
                content: "";
                position: absolute;
                left: 0;
                height: 1px;
                width: 100%;
                background-color: #4f4f4f;
                transform: scaleX(var(--scale));
                transform-origin: var(--origin);
            }

            &::before {
                top: -2.5px;
            }
            &::after {
                bottom: -2.5px;
            }
        }
    }
}

@media (max-width: 48rem) {
    .curtain {
        &.curtain__outer,
        &.curtain__inner {
            .loader {
                height: 10vh;
            }
        }

        .curtain__content {
            padding: 1em;
            .names {
                gap: 1em;

                .name {
                    .letter {
                        font-size: var(--fs-l);
                    }
                }
            }
        }
    }
}
</style>
