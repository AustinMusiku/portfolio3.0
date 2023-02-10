<template>
  <div class="cards">
      <card
        v-for="(work, i) in works"
        :key= "i"
        :work="work"
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
    async fetch(){
        this.works = await this.$content('works')
            .where({'live': true})
            .fetch();
    }
}
</script>

<style lang="scss" scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
</style>