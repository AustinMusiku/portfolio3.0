<template>
  <div class="cursors">
    <div class="cursor cursor--small" ref="cursorSmall"></div>
    <div class="cursor cursor--big"   ref="cursorBig"></div>
  </div>
</template>

<script>
import gsap from 'gsap'
import SvgIcon from '../miscellaneous/SvgIcon.vue'

export default {
    name: "CursorPointer",
    components: { SvgIcon },
    data() {
        return {
            clientX: 0,
            clientY: 0,
            growCursorTl: {},
            setMousePositionTl: gsap.timeline()
        };
    },
    methods: {
        initCursor() {
            let cursorSmall = this.$refs.cursorSmall;
            let cursorBig = this.$refs.cursorBig;
            let cursorIcon = this.$refs.cursorIcon;
            // only show cursor when mouse is over the page
            document.addEventListener("mouseenter", () => {
                gsap.to([cursorSmall, cursorBig], {
                    duration: 0.1,
                    opacity: 1,
                    ease: "power2.inOut"
                });
            });
            document.addEventListener("mouseleave", () => {
                gsap.to([cursorSmall, cursorBig], {
                    duration: 0.1,
                    opacity: 0,
                    ease: "power2.inOut"
                });
            });
            // add listener to track the current mouse position
            document.addEventListener("mousemove", e => {
                gsap.to(cursorBig, { x: e.clientX - 35, y: e.clientY - 35, delay: 0.05 });
                gsap.to(cursorSmall, { x: e.clientX - 2.5, y: e.clientY - 2.5, delay: 0.025 });
            });
        },
        growCursor() {
            let plainLinks = Array.from(document.querySelectorAll("a, button"));
            plainLinks.forEach(link => {
                link.addEventListener("mouseenter", e => {
                    gsap.to(".cursor", { opacity: 0, duration: 0.1, ease: "power2.in" });
                });
                link.addEventListener("mouseleave", e => {
                    gsap.to(".cursor", { opacity: 1, duration: 0.1, ease: "power2.in" });
                });
            });
        }
    },
    mounted() {
        this.initCursor();
        this.growCursor();
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

  @media (max-width: 62rem){
    // -- CURSOR --
    // hide cursor below 992px
    .cursor{
        display: none;
    }
}
</style>
