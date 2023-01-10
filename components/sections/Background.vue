<template>
    <div class="bg-container">
        <div class="bg-wrapper">
            <div class="bg"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Background',
}
</script>

<style lang="scss" scoped>
    .bg-container{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 200;
        pointer-events: none;
        
        .bg-wrapper{
            position: relative;
            width: 100%;
            height: 1000vh;
            overflow: hidden;
            z-index: 205;
            pointer-events: none;
            
            .bg{
                position: absolute;
                top: -50%;
                left: -50%;
                right: -50%;
                bottom: -50%;
                width: 200vw;
                height: 200%;
                background: transparent url('static/images/noise-transparent.png') repeat 0 0;
                animation: bg-animation .2s infinite;
                pointer-events: none;
            }
        }
    }    

    @keyframes bg-animation {
        0% { transform: translate(0,0) }
        10% { transform: translate(-5%,-5%) }
        20% { transform: translate(-10%,5%) }
        30% { transform: translate(5%,-10%) }
        40% { transform: translate(-5%,15%) }
        50% { transform: translate(-10%,5%) }
        60% { transform: translate(15%,0) }
        70% { transform: translate(0,10%) }
        80% { transform: translate(-15%,0) }
        90% { transform: translate(10%,5%) }
        100% { transform: translate(5%,0) }
    }
</style>
