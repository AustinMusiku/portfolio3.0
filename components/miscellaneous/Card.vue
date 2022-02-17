<template>
    <a
    target="_blank"
    rel="noopener"
    :href="work.link"
    class="cards__item">

        <figure>
            <img
             :src="work.imgUrl" 
             alt="fplfriend">


        </figure>
        <div>
            <h2 class="sub-heading">{{ work.title }}</h2>
            <p>{{ work.description }}</p>
        </div>

    </a>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        work: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .cards__item{
        border: 1px solid;
        figure{
            img{
                width: 100%;
            }
        }
    }
</style>