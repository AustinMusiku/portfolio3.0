<template>
    <section class="grid fullscreen">
        <div class="grid__container">
            <div ref="block" class="block">
                <p class="sub-heading quote">“I cherish good websites with all my heart, I dont care how many libraries, frameworks and technologies I need to learn to make them”</p>

                <p class="--margin-top-3 --margin-left-1 person">~Peacemaker</p>
            </div> 
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

process.client ? gsap.registerPlugin(ScrollTrigger) : null

export default {
    name: 'About',
    data(){
        return{

        }
    },
    mounted(){
        gsap.to('.wrapper', {
            scrollTrigger: {
                trigger: '.block',
                start: 'top 60%',
                end: 'bottom 40%',
                toggleActions: 'play reverse restart reverse',
                toggleClass: {
                    targets: '.wrapper',
                    className: '--tempDark'
                },
            },
            // lazy: false,
            backgroundColor: '#0d0d0d',
            duration: .25
        })
    }
}
</script>

<style lang="scss" scoped>
    .block{
        top: 50%;
        text-align: center;
    }

    .person{
        position: relative;
        width: fit-content;
        left: 50%;
        transform: translateX(-50%);

        &::before{
            content: "Austin M.";
            position: absolute;
            width: fit-content;
            height: 100%;
            top: -1em;
            left: 10%;
            // text-transform: uppercase;
            font-family: cursive;
            transform: rotate(-5deg);
            transform-origin: center center;
            z-index: 1;
        }

        &::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 5px;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            background-color: #0d0d0d;
            opacity: .5;
            z-index: 1;
        }
    }

    @media screen and (max-width:48rem) {
        
        // .person{
        //     left: 50%;
        //     transform: translateX(-50%);
        // }
    }
</style>
