<template>
  <div class="wrapper">
    <curtain>
      <h1 slot="curtain-content" class="heading">AM</h1>
    </curtain>
    <cursor-outer/>
    <cursor-pointer/>

    <navigation/>
    <Nuxt/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import Curtain from '@/components/sections/Curtain'
import CursorOuter from '@/components/widgets/CursorOuter'
import CursorPointer from '@/components/widgets/CursorPointer'
import Navigation from '@/components/sections/TheNavigation'
import TheFooter from '@/components/sections/TheFooter'

export default {
  name: 'Layout',
    components: {
    Curtain,
    CursorOuter,
    CursorPointer,
    Navigation,
    TheFooter
  }
}
</script>

<style lang="scss">

</style>