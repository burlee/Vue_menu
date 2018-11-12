<template>
    <button @click="scrollToTop">Scroll</button>
</template>

<script>
export default {
    props: ['testowyProp', 'tablica'],
    name: 'ScrollToTop',
    methods: {
        scrollToTop(){
            window.scrollTo({
                top:0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style lang="scss">
    button{
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: 1px solid #ccc;
        width: 50px;
        height: 50px;
    }
</style>

