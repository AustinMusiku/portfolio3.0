<template>
    <div class="hamburger-menu" @click="toggleMenu()">
        <div class="hamburger-layer hamburger-layer-one"></div>
        <div class="hamburger-layer hamburger-layer-two"></div>
    </div>
</template>

<script>
    import gsap from 'gsap';
            
    export default {
        name: 'HamburgerMenu',
        data(){
            return{
                hamburgerAnimation: gsap.timeline({ reversed: true, paused: true }),
                jekyky: 10
            }
        },
        mounted(){
            console.log(this.hamburgerAnimation);
            this.hamburgerAnimation
                // fade top layer out
                .to('.hamburger-layer-one', { duration: 0.5, opacity: 0, ease: 'power3.inOut' })
                // move bottom layer up
                .to('.hamburger-layer-two', { duration: 0.25, y: -7, ease: 'power3.inOut' }, )
                // rotate bottom layer
                .to('.hamburger-layer-two', { duration: 0.1, rotate: -225 })
                // rotate invisible top layer
                .to('.hamburger-layer-one', { duration: 0.1, rotate: 45 })
                // move top layer up and left
                .to('.hamburger-layer-one', { duration: 0.1, x: -25, y: -20 })
                // move top layer bottom and right
                .to('.hamburger-layer-one', { duration: 0.1, x: 1, y: 9 })
                // fade top layer in
                .to('.hamburger-layer-one', { duration: .5, opacity: 1, ease: 'ease.out'}, '-=.15')
                // change hamburger layer colors
                .to('.hamburger-layer', { backgroundColor: '#fff' });
        },
        methods: {
            toggleMenu(){
                this.animateHamburger();
                this.$emit('toggleMenu');
            },
            animateHamburger(){
                if(this.hamburgerAnimation.reversed()){
                    this.hamburgerAnimation.play();
                    // this.hamburgerAnimation.reversed = false;
                    console.log('played');
                }else{
                    this.hamburgerAnimation.reverse();
                    // this.hamburgerAnimation.reversed = true;
                    console.log('reversed');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hamburger-menu{
        display: none;
    }

    @media(max-width: 48rem){
        .hamburger-menu{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 38px;
            height: 18px;
            z-index: 4000;

           .hamburger-layer{
               width: 100%;
               height: 2px;
               background-color: $clr-dark;

               &.hamburger-layer--active{
                   background-color: $clr-light;
               }
            }
        }
    }
</style>