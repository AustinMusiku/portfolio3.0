<template>
    <a
    data-scroll data-scroll-speed="2"
    target="_blank"
    rel="noopener"
    :href="work.link"
    class="cards__item hover-link">

        <figure data-scroll>
            <img
            data-scroll
            data-scroll-speed="0"
             :src="work.imgUrl.outer" 
             class="outer-img"
             alt="fplfriend">

            <img
            data-scroll
            data-scroll-speed="1.5"
             :src="work.imgUrl.inner" 
             class="inner-img"
             alt="fplfriend">
             
        </figure>
        <div data-scroll data-scroll-speed="3" class="item__text">
            <div class="item-text__header">
                <h2 class="heading">{{ work.title }}</h2>
                <svg viewBox="0 0 128 128">
                    <g>
                        <g>
                            <line style="stroke-linecap:square;stroke-miterlimit:10;" x1="42.288" x2="105.999" y1="22" y2="22.001"/>
                            <line style="stroke-linecap:square;stroke-miterlimit:10;" x1="105.999" x2="106.001" y1="22.001" y2="85.713"/>
                        </g>
                        <line style="stroke-miterlimit:10;" x1="105.999" x2="15.999" y1="22.001" y2="112"/>
                    </g>
                </svg>
            </div>
            <ul>
                <li
                v-for="(tech, i) in work.techStack"
                :key='i'
                class="caption"
                >{{ tech }}</li>
            </ul>

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
                    width: 60%;
                    height: auto;
                    left: 20%;
                    top: 13.5%;
                    z-index: 1;
                }
            }
        }
        .item__text{
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            right: 0;
            max-width: 50%;
            z-index: 2;

            .item-text__header{
                display: flex;
                width: 100%;
                justify-content: space-between;

                svg{
                    display: none;
                }
            }

            ul{
                display: flex;
                flex-wrap: 1;
                flex-direction: row;
                gap: .4em;
                margin: .25em 0 0;
                width: 100%;

                .caption{
                    padding: 0em .1em;
                }
            }
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

    @media(max-width: 62rem){
        .cards__item{
            figure{
                width: 100%;
            }
            .item__text{
                position: relative;
                padding: .25em 0 0;
                top: 0;
                transform: translateY(0%);
                max-width: 100%;

                .item-text__header{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
        
                    svg{
                        display: block;
                        width: 30px;
                        height: 30px;

                        *{
                            stroke: $clr-dark;
                            fill: none;
                            stroke-width: 4;
                        }
                    }
                }

                .heading{
                    font-size: var(--fs-l);
                }
            }

        }
    }
</style>