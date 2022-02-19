<template>
  <div class="cursors">
    <div class="cursor cursor--small" ref="cursorSmall"></div>
    <div class="cursor cursor--big"   ref="cursorBig"></div>
    <div class="cursor cursor--icon" ref="cursorSmall">
      <img src="/images/upright_arrow.svg" alt="">
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'CursorPointer',
    data(){
      return{
        clientX: 0,
        clientY: 0,
        growCursorTl: {},
        setMousePositionTl: gsap.timeline()
      }
    },
    methods: {
      initCursor() {
        let cursorSmall = this.$refs.cursorSmall
        let cursorBig = this.$refs.cursorBig
        // add listener to track the current mouse position
        document.addEventListener("mousemove", e => {
          gsap.to(cursorBig, 0.01, { x: e.clientX-30, y: e.clientY-30, delay: 0.05});
          gsap.to(cursorSmall, 0.01, { x: e.clientX-5, y: e.clientY-5 });
        });
      },
      growCursor(){
        let links = Array.from(document.querySelectorAll('a'));
        links.forEach(link => {
          link.addEventListener('mouseenter', e => {
            this.growCursorTl.reversed() ? this.growCursorTl.play() : this.growCursorTl.reverse();
          })
          link.addEventListener('mouseleave', e => {
            this.growCursorTl.reversed() ? this.growCursorTl.play() : this.growCursorTl.reverse();
          })
        })
      }
    },
    mounted(){
      let icon = this.$refs.cursorSmall.querySelector('img');
      this.growCursorTl = gsap.timeline({ paused: true, reversed: true })
        .to(this.$refs.cursorBig, {
          opacity: 0,
          duration: .1
        })
        .to(this.$refs.cursorSmall, {
          scale: 10,
          backgroundColor: '#0d0d0d',
          duration: .2,
          ease: 'power2.inout'
        })
        .to(icon, {
          opacity: 1,
          duration: .1,
          scale: 1,
          ease: 'power2.inout'
        }, )

      this.initCursor()
      this.growCursor()
    }
}
</script>

<style lang="scss" scoped>
  .cursor{
      position: fixed;
      pointer-events: none;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid $clr-dark;
      z-index: 5000;
      transition: display .25s ease-in;
  }
  // transition: trans .25s ease-in;
  .cursor--small{
      width: 10px;
      height: 10px;

      &.cursor--active{
          display: none;
      }

      img{
        position: relative;
        border: 1px solid black;
        width: 60px;
        height: 60px;
        top: -26px;
        left: -26px;
        // transform: translate(-50%, -50%);
      }
  }
</style>