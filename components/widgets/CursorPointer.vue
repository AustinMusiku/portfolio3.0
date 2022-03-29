<template>
  <div class="cursors">
    <div class="cursor cursor--small" ref="cursorSmall"></div>
    <div class="cursor cursor--big"   ref="cursorBig"></div>
    <div class="cursor cursor--icon" ref="cursorIcon">
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
        let cursorIcon = this.$refs.cursorIcon
        // only show cursor when mouse is over the page
        document.addEventListener('mouseenter', () => {
          gsap.to([cursorSmall, cursorBig], {
            duration: 0.1,
            opacity: 1,
            ease: 'power2.inOut'
          })
        })
        document.addEventListener('mouseleave', () => {
          gsap.to([cursorSmall, cursorBig], {
            duration: 0.1,
            opacity: 0,
            ease: 'power2.inOut'
          })
        })

        // add listener to track the current mouse position
        document.addEventListener("mousemove", e => {
          gsap.to(cursorBig, { x: e.clientX-35, y: e.clientY-35, delay: 0.05});
          gsap.to(cursorSmall, { x: e.clientX-2.5, y: e.clientY-2.5, delay: 0.025});
          gsap.to(cursorIcon, { x: e.clientX-20, y: e.clientY-20 });
        });
      },
      growCursor(){
        let hoverLinks = Array.from(document.querySelectorAll('.hover-link'));
        let plainLinks = Array.from(document.querySelectorAll('a'));

        hoverLinks.forEach(link => {
          link.addEventListener('mouseenter', e => {
            this.growCursorTl.reversed() ? this.growCursorTl.play() : this.growCursorTl.reverse();
          })
          link.addEventListener('mouseleave', e => {
            this.growCursorTl.reversed() ? this.growCursorTl.play() : this.growCursorTl.reverse();
          })
        })

        plainLinks.forEach(link => {
          link.addEventListener('mouseenter', e => {
            gsap.to('.cursor--big', { opacity: 0, duration: .1, ease: 'power2.in' })
          })
          link.addEventListener('mouseleave', e => {
            gsap.to('.cursor--big', { opacity: 1, duration: .1, ease: 'power2.in' })
          })
        })
      }
    },
    mounted(){
      this.growCursorTl = gsap.timeline({ paused: true, reversed: true })
        .to(this.$refs.cursorBig, {
          opacity: 0,
          duration: .1
        })
        .to(this.$refs.cursorSmall, {
          scale: 20,
          backgroundColor: '#0d0d0d',
          duration: .2,
          ease: 'power2.inout'
        })
        .to(this.$refs.cursorIcon, {
          opacity: 1,
          duration: .1,
          ease: 'power2.inout'
        }, '-=.1')

      this.initCursor()
      this.growCursor()
    }
}
</script>

<style lang="scss" scoped>
  .cursor{
      position: fixed;
      pointer-events: none;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 1px solid $clr-dark;
      z-index: 5000;
      transition: display .25s ease-in;
  }
  // transition: trans .25s ease-in;
  .cursor--small{
      width: 5px;
      height: 5px;
      background-color: $clr-dark;
  }

  .cursor--icon{
    width: 40px;
    height: 40px;
    opacity: 0;
    border: none;
    z-index: 5001;

    img{
        position: relative;
        width: 100%;
        height: 100%;
      }
  }

  @media (max-width: 62rem){
    // -- CURSOR --
    // hide cursor below 992px
    .cursor{
        display: none;
    }
}
</style>
