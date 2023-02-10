<template>
  <footer data-scroll-section class="grid">
    <div class="grid__container footer_block">
      <ul class="social">
        <li><a target="_blank" rel="noopener" href="https://twitter.com/MusikuAustin/" class="underline social__link">Twitter</a></li>
        <li><a target="_blank" rel="noopener" href="https://github.com/AustinMusiku/" class="underline social__link">Github</a></li>
        <!-- <li><a target="_blank" rel="noopener" href="https://codepen.io/austinmusiku" class="underline social__link">Codepen</a></li> -->
        <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/austin-musiku-0b37b819b/" class="underline social__link">LinkedIn</a></li>
      </ul>
      <p class="copyright">Austin Musiku {{ date }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      date: new Date().getFullYear()
    };
  },
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
        padding: 1.5em 0;
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
        justify-self: center;
        align-items: flex-start;
        
        .social{
          padding: 0 0 1em;
          gap: 2em;
          max-width: 20em;
        }

        .copyright{
          text-align: center;
          width: 100%;
        }
      }
  }
  }
</style>