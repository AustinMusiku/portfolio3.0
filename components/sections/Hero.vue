<template>
    <div class="hero grid">
        <div class="grid__container hero__content">
            <slot name="hero-content"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hero{
        align-items: end;
        height: 100vh;

        .hero__content{
            margin: 0 0 2.5em;
        }
    }

    @media(max-width: 90rem){
        .hero{
            .hero__content{
                margin: 0 0 2.5em;
            }
        }
    }

    @media(min-width: 90rem){
        .hero{
            .hero__content{
                margin: 0 0 4em;
            }
        }
    }

    @media(max-width: 48rem){
        .hero{
            padding: 0 1.5em;

            .hero__content{
                margin: 0 0 5em;
                padding: 0;
            }
        }
    }

    @media(max-width: 20rem){
        .hero{
            padding: 0 1em;

            .hero__content{
                margin: 0 0 1em;
                padding: 0;
            }
        }
    }
</style>