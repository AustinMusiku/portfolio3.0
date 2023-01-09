<template>
    <a
    target="_blank"
    rel="noopener"
    :href="work.link"
    class="cards__item hover-link">
        <div class="item__text">
            <div class="item-text__header">
                <h2 class="heading">{{ work.title }}</h2>
                <SvgIcon iconName="upright-icon" dark="true"></SvgIcon>
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
import SvgIcon from './SvgIcon.vue';
export default {
    name: "Cards",
    props: {
        work: {
            type: Object,
            required: true
        }
    },
    components: { SvgIcon }
}
</script>

<style lang="scss" scoped>
    .cards__item{
        padding: 2em 0;
        position: relative;
        border-top: 1px solid $clr-grey;

        .item__text{
            position: relative;

            .item-text__header{
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;

                svg{
                    width: 50px;
                    height: 50px;
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

                ul{
                    margin: 0 0 .25em;
                }
                .item-text__header{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
        
                    svg{
                        display: block;
                        width: 25px;
                        height: 25px;
                    }
                }

                .heading{
                    font-size: var(--fs-l);
                }
            }

        }
    }
</style>