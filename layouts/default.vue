<template>
  <div data-scroll-container class="wrapper">
    <background />
    <curtain />
    <cursor-pointer/>

    <navigation/>
    <Nuxt />
    <the-footer/>
  </div>
</template>

<script>
import Curtain from '@/components/sections/Curtain'
import CursorPointer from '@/components/widgets/CursorPointer'
import Navigation from '@/components/sections/TheNavigation'
import TheFooter from '@/components/sections/TheFooter'
import Background from '~/components/sections/Background.vue'

export default {
  name: 'Layout',
  components: {
    Curtain,
    CursorPointer,
    Navigation,
    TheFooter,
    Background
  },
  data() {
    return {
      scroll: {}
    }
  },
  created () {
    this.$nuxt.$on('scrollToContact', () => {
      this.scroll.scrollTo('#contact')
    })
  },
  mounted(){
    setTimeout(() => {
      this.scroll = new this.locomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
  
        smartphone: {
          smooth: false,
        },
        tablet: {
          breakpoint: 768,
          smooth: false
        }
      })
    }, 1000)
  }
}
</script>

<style lang="scss">
  .wrapper{
    height: 100%;
    perspective: 1px;
    overflow: hidden;

    &.--tempDark{
      transition: .25s;
        *{
          color: $clr-light !important;
        }
    }
  }
</style>