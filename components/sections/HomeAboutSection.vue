<template>
    <section class="grid fullscreen">
        <div class="grid__container">
            <div class="block">
                <p class="sub-heading quote">‘‘I cherish good websites with all my heart, I dont care how many libraries, frameworks and technologies I need to learn to make them’’</p>

                <p class="--margin-top-2 --margin-left-1 person">~Peacemaker</p>
            </div> 
        </div>
    </section>
</template>

<script>

export default {
    name: 'About'
}
</script>

<style lang="scss" scoped>
    .block{
        top: 50%;

    }

    .quote{
        text-indent: -.5em;
    }

    .person{
        position: relative;
        width: fit-content;
        text-decoration: line-through;

        &::before{
            content: "Myself";
            position: absolute;
            width: fit-content;
            height: 100%;
            top: -1em;
            left: 2%;
            text-transform: uppercase;
            transform: rotate(-7.5deg);
            transform-origin: center center;
            z-index: 1;
        }

        &::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            background-color: #90d78b;
            z-index: 1;
        }
    }
</style>
