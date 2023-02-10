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
