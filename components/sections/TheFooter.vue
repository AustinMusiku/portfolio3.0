<template>
  <footer data-scroll-section class="grid">
    <div class="grid__container">
      <ul class="social">
        <li><a target="_blank" rel="noopener" href="https://twitter.com/MusikuAustin/" class="underline social__link">Twitter</a></li>
        <li><a target="_blank" rel="noopener" href="https://github.com/AustinMusiku/" class="underline social__link">Github</a></li>
        <!-- <li><a target="_blank" rel="noopener" href="https://codepen.io/austinmusiku" class="underline social__link">Codepen</a></li> -->
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
        max-width: 15em;
      }
    }
  }

  @media (max-width: 48rem){
    footer.grid{
    
      .grid__container{
        padding: 1.5em;
        flex-direction: column;
        align-items: flex-start;
        
        .social{
          padding: 0 0 .5em;
          gap: .75em;
        }
      }
  }
  }
</style>