<template>
  <nav class="grid">
      <div class="navigation grid__container">
          <div class="logo">
              <a href="/"><h1 class="sub-heading">AM</h1></a>
          </div>
          <ul class="navigation__links">
              <li><a href="work" class="navigation__link work-link">Work</a></li>
              <li><a href="contact" class="navigation__link contact-link">Contact</a></li>
          </ul>
          <div class="menu-curtain-block left-block"></div>
          <div class="menu-curtain-block right-block"></div>
          <hamburger-menu @toggleMenu="toggleMenu"/>
      </div>
  </nav>
</template>

<script>
import HamburgerMenu from '~/components/widgets/HamburgerMenu'
import gsap from 'gsap';

export default {
    name: 'TheNavigation',
    components: {
        HamburgerMenu
    },
    data(){
        return{
            menuAnimation: gsap.timeline({ reversed: true, play: true })
        }
    },
    mounted(){
        let links = document.querySelectorAll('.navigation__link');
        this.menuAnimation
            .to('.left-block', {
                delay: 1.25,
                duration: 0.25,
                scaleY: 1,
                transformOrigin: 'top'
            })
            .to('.right-block', {
                duration: 0.25,
                scaleY: 1,
                transformOrigin: 'bottom'
            })
            .from('.navigation__links', {
                duration: .25,
                visibility: 'hidden',
                ease: 'Power4.out'
                // opacity: 0
            })
            // .from('.work-link', {
            //     duration: 0.25,
            //     y: '-50%'
            // }, '-=0.25')
            // .from('.contact-link', {
            //     duration: 0.25,
            //     y: '50%'
            // }, '-=0.25')
            // .from('.work-link', {
            //     duration: 0.1,
            //     y: '100',
            // })
    },
    methods: {
        toggleMenu(){
            let menu = document.querySelector('.navigation__links');
            this.animateMenu();
        },
        animateMenu(){
            this.menuAnimation.reversed() ? this.menuAnimation.play() : this.menuAnimation.reverse();
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{
        position: absolute;
        width: 100%;
        height: 12vh;

        .navigation{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
            .logo{
                
            }
            
            .navigation__links{
                display: flex;
                align-items: center;
                flex-direction: row;
                gap: 2em;
                opacity: 1;

                .navigation__link{
                    color: $clr-dark;
                }
            }
            .menu-curtain-block{
                display: none;
            }
        }
    }
    // edge case
    @media(min-width: 48rem){ nav{ .navigation{ .navigation__links{ opacity: 1 !important } } } }

    @media(max-width: 48rem){
        nav{
            .navigation{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                
                .logo{
                    
                }
                
                .navigation__links{
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    left: 0;
                    top: 50vh;
                    transform: translateY(-50%);
                    width: 100vw;
                    height: 15vh;
                    z-index: 2000;

                    .navigation__link{
                        position: absolute;
                        transform: translateX(-50%);
                        color: $clr-light;
                    }
                }
                .menu-curtain-block{
                    position: absolute;
                    display: inline-block;
                    top: 0;
                    left: 0;
                    background-color: $clr-dark;
                    width: 50vw;
                    height: 100vh;
                    z-index: 100;
                    transform: scaleY(0);

                    &.right-block{
                        left: 50%;
                        // background-color: $clr-grey;
                    }
                }
            }
        }
    }
</style>