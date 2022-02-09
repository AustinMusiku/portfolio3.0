<template>
  <nav class="grid">
      <div class="navigation grid__container">
          <div class="logo">
              <a href="/"><h1 class="sub-heading">AM</h1></a>
          </div>
          <ul class="navigation__links">
              <li><a href="work" class="navigation__link">Work</a></li>
              <li><a href="contact" class="navigation__link">Contact</a></li>
          </ul>
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
    methods: {
        toggleMenu(){
            let toggleMenuTl = gsap.timeline();
            let menu = document.querySelector('.navigation__links');
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
        }
    }
    }
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
                    display: none;
                }
            }
        }
    }
</style>