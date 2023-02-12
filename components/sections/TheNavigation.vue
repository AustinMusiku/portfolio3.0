<template>
  <nav class="grid">
      <div class="navigation grid__container">
          <div class="logo">
              <nuxt-link to="/"><h1 class="sub-heading">AM</h1></nuxt-link>
          </div>
          <ul class="navigation__links">
                <li>
                    <button type="button" class="navigation__link contact-link underline" @click="$nuxt.$emit('scrollToContact')">Contact</button>
                </li>
          </ul>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'TheNavigation'
}
</script>

<style lang="scss" scoped>
    nav{
        position: absolute;
        width: 100%;
        height: 10vh;
        z-index: 10000;

        .navigation{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
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
        }
    }
</style>