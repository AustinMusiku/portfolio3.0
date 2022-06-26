<template>
    <svg
    v-if="iconName==='upright-icon'"
    :class="[ dark ? 'svg--dark' : 'svg--light']"
    viewBox="0 0 128 128">
        <g>
            <g>
                <line x1="42.288" x2="105.999" y1="22" y2="22.001"/>
                <line x1="105.999" x2="106.001" y1="22.001" y2="85.713"/>
            </g>
            <line x1="105.999" x2="15.999" y1="22.001" y2="112"/>
        </g>
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: [ 'iconName', 'dark' ]
}
</script>

<style lang="scss" scoped>
    .svg--dark{
        line{
            stroke: $clr-dark;
        }
    }
    line{
        fill:none;
        stroke: $clr-light;
        stroke-width:4;
        stroke-linecap:square;
        stroke-miterlimit:10;
    }
</style>
