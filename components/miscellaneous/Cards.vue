<template>
  <div class="cards">
      <card
        v-for="(work, i) in works"
        :key= "i"
        :work="work"
        :class = "[i%2 ? 'cards__item--even' : 'cards__item--odd']"
      ></card>
  </div>
</template>

<script>
import Card from '@/components/miscellaneous/Card';
export default {
    name: 'Cards',
    components: {
        Card
    },
    data(){
        return{
            works: []
        }
    },
    mounted(){
        this.getWorks();
    },
    methods: {
        async getWorks(){
            this.works = await this.$content('works').fetch();
        }
    }
}
</script>

<style lang="scss" scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 6em;
    }

    @media(max-width: 48em){
        .cards{
            grid-template-columns: repeat(1, 1fr);
            gap: 5em;

            .cards__item{
                &.cards__item--even{
                    margin: 0 0 0 ;
                }
            }
        }
    }
</style>