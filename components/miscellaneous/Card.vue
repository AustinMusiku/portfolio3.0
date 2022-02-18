<template>
    <a
    target="_blank"
    rel="noopener"
    :href="work.link"
    class="cards__item">

        <figure>
            <img
             :src="work.imgUrl.outer" 
             class="outer-img"
             alt="fplfriend">

            <img
             :src="work.imgUrl.inner" 
             class="inner-img"
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
            position: relative;
            width: 80%;

            img{
                position: relative;
                width: 100%;
                height: 100%;
                
                &.inner-img{
                    position: absolute;
                    width: 70%;
                    height: 75%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                }
            }
        }
        .item__text{
            position: absolute;
            top: 80%;
            transform: translateY(-50%);
            right: 0;
            max-width: 50%;
            z-index: 2;
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
                max-width: 100%;
            }

        }
    }
</style>