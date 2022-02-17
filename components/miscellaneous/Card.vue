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
        <div class="item__text">
            <h2 class="heading">{{ work.title }}</h2>
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
        position: relative;

        figure{
            width: 80%;
            img{
                width: 100%;
            }
        }
        .item__text{
            position: absolute;
            top: 80%;
            transform: translateY(-50%);
            right: 0;
        }

        &.cards__item--even{
            figure{
                margin-left: auto;
            }
            .item__text{
                left: 0;
            }
        }
    }

    @media(max-width: 48rem){
        .cards__item{
            figure{
                width: 100%;
            }
            .item__text{
                position: relative;
                padding: .5em 0 0;
                top: 0;
                transform: translateY(0%);
            }

        }
    }
</style>