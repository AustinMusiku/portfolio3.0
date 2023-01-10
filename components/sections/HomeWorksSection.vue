<template>
    <section class="grid">
        <div class="grid__container">
            <h1 class="section__heading sub-heading">Projects</h1>
            <cards></cards> 
        </div>
    </section>
</template>

<script>
import Cards from '@/components/miscellaneous/Cards';

export default {
    name: 'Works',
    components: {
        Cards
    }
}
</script>

<style lang="scss" scoped>
    
</style>
