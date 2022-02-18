<template>
  <footer data-scroll-section class="grid">
    <div class="grid__container">
      <!-- <div class="footer__cta">
        <p class="sub-heading">Let's make great things happen. I'm not Kanye West, "You can tell me something"😉</p>
      </div> -->
      <ul class="social">
        <li data-scroll data-scroll-delay="10"><a target="_blank" rel="noopener" href="https://twitter.com/MusikuAustin/" class="underline social__link">Twitter</a></li>
        <li data-scroll data-scroll-delay="5"><a target="_blank" rel="noopener" href="https://github.com/MusikuAustin/" class="underline social__link">Github</a></li>
        <li data-scroll data-scroll-delay="2.5"><a target="_blank" rel="noopener" href="https://codepen.io/austinmusiku" class="underline social__link">Codepen</a></li>
        <li data-scroll data-scroll-delay="0"><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/austin-musiku-0b37b819b/" class="underline social__link">LinkedIn</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  footer{
    position: relative;
    height: fit-content;
    
    .grid__container{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .footer__cta{
        padding: 50% 0 0;
      }

      .social{
        padding: 4em 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 25em;
      }
    }
  }

  @media (max-width: 48rem){
    footer{
    
      .grid__container{
        
        .social{
          margin: auto;
          padding: 2em 0;
          // flex-direction: column;
        }
      }
  }
  }
</style>