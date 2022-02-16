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
    mounted(){
        console.log('hey');
        this.getWorks();
    },
    methods: {
        async getWorks(){
            this.works = await this.$content('works').fetch();
            console.log(this.works);
        }
    }
}
</script>

<style>

</style>