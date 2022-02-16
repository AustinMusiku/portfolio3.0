<template>
  <footer class="grid">
    <div class="grid__container">
      <!-- <div class="footer__cta">
        <p class="sub-heading">Let's make great things happen. I'm not Kanye West, "You can tell me something"😉</p>
      </div> -->
      <ul class="social">
        <li><a target="_blank" rel="noopener" href="https://twitter.com/MusikuAustin/" class="social__link">Twitter</a></li>
        <li><a target="_blank" rel="noopener" href="https://github.com/MusikuAustin/" class="social__link">Github</a></li>
        <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/austin-musiku-0b37b819b/" class="social__link">LinkedIn</a></li>
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
        max-width: 300px;
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