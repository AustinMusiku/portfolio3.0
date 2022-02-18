<template>
  <div data-scroll-container class="wrapper">
    <curtain>
      <h1 slot="curtain-content" class="heading">AM</h1>
    </curtain>
    <cursor-outer/>
    <cursor-pointer/>

    <navigation/>
    <Nuxt
    @resizeLs="resizeLs"
    ></Nuxt>
    <the-footer/>
  </div>
</template>

<script>
import Curtain from '@/components/sections/Curtain'
import CursorOuter from '@/components/widgets/CursorOuter'
import CursorPointer from '@/components/widgets/CursorPointer'
import Navigation from '@/components/sections/TheNavigation'
import TheFooter from '@/components/sections/TheFooter'

import 'locomotive-scroll/dist/locomotive-scroll.min.css'

export default {
  name: 'Layout',
  components: {
    Curtain,
    CursorOuter,
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
    setTimeout(() => {
        this.scroll = new this.locomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          multiplier: 0.25,

          smartphone: {
            smooth: true,
            multiplier: 0.5
          },
          // tablet: {
          //   breakpoint: 768,
          //   smooth: true
          // }
      })
    }, 2000)
  },
  methods: {
    resizeLs(){
      this.scroll.update();
    }
  }
}
</script>

<style lang="scss">
  .wrapper{
    height: 100%;
  }
</style>