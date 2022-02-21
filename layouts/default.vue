<template>
  <div data-scroll-container class="wrapper">
    <curtain>
      <h1 slot="curtain-content" class="heading">AM</h1>
    </curtain>
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

export default {
  name: 'Layout',
  components: {
    Curtain,
    CursorPointer,
    Navigation,
    TheFooter
  },
  data() {
    return {
      scroll: {}
    }
  },
  mounted(){
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
  }
}
</script>

<style lang="scss">
  .wrapper{
    height: 100%;
  }
</style>