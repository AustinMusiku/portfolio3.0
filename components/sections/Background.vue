<template>
    <div class="bg"></div>
</template>

<script>
export default {
    name: 'Background',
}
</script>

<style lang="scss" scoped>
    .bg{
        position: fixed;
        top: -100%;
        left: -100%;
        right: -100%;
        bottom: -100%;
        width: 500%;
        height: 1000vh;
        background: transparent url('static/images/noise-transparent.png') repeat 0 0;
        background-repeat: repeat;
        -webkit-animation: bg-animation .2s infinite;
        animation: bg-animation .2s infinite;
        opacity: 1;
        pointer-events: none;
        z-index: 200;
    }

    @keyframes bg-animation {
        0% { transform: translateX(0) }
        10% { transform: translateX(-05%) }
        20% { transform: translateX(-10%) }
        30% { transform: translateX(005%) }
        40% { transform: translateX(-05%) }
        50% { transform: translateX(-10%) }
        60% { transform: translateX(015%) }
        70% { transform: translateX(0000) }
        80% { transform: translateX(-15%) }
        90% { transform: translateX(010%) }
        100% { transform: translateX(05%) }
    }
</style>