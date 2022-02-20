<template>
  <footer data-scroll-section class="grid">
    <div class="grid__container">
      <ul class="social">
        <li><a target="_blank" rel="noopener" href="https://twitter.com/MusikuAustin/" class="underline social__link">Twitter</a></li>
        <li><a target="_blank" rel="noopener" href="https://github.com/MusikuAustin/" class="underline social__link">Github</a></li>
        <li><a target="_blank" rel="noopener" href="https://codepen.io/austinmusiku" class="underline social__link">Codepen</a></li>
        <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/austin-musiku-0b37b819b/" class="underline social__link">LinkedIn</a></li>
      </ul>
      <p>Austin Musiku 2022</p>
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
      flex-direction: row;
      justify-content: space-between;
      align-items: center;


      .social{
        padding: 2em 0;
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
        padding: 2em 0;
        flex-direction: column;
        align-items: flex-start;
        
        .social{
          margin: auto;
          padding: 0 0 2em;
          flex-direction: column;
          gap: .75em;
          // flex-direction: column;
        }
      }
  }
  }
</style>