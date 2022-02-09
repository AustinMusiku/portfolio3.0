<template>
    <div class="hamburger-menu" @click="toggleMenu()">
        <div class="hamburger-layer"></div>
        <div class="hamburger-layer"></div>
    </div>
</template>

<script>
import gsap from 'gsap';
export default {
    name: 'HamburgerMenu',
    methods: {
        toggleMenu(){
            let hamburgerAnimation = gsap.timeline();
            this.$emit('toggleMenu');
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
            width: 35px;
            height: 18px;

           .hamburger-layer{
               width: 100%;
               height: 2px;
               background-color: $clr-dark;
            }
        }
    }
</style>