<template>
  <nav class="grid">
      <div class="navigation grid__container">
          <div class="logo">
              <a href="/"><h1 class="sub-heading">AM</h1></a>
          </div>
          <ul class="navigation__links">
                <li>
                    <a href="contact" class="navigation__link contact-link">Contact</a>
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