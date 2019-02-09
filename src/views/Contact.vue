<template>
    <div class="modal">
        <h1>To jest modal</h1>
        <button class="btn btn-danger" @click="show">Hej</button>
        <button class="btn btn-primary">Hejjj</button>
    </div>
</template>

<script>
export default {
    props: ['isOpen'],
    created(){
        console.log(this.$props)
    },
    methods: {
        show(){
            console.log(this.$props)
        }
    }
}
</script>

<style lang="scss">
    @import '../_config.scss';

    .modal{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 25px;
            font-weight: bold;
        }
    }
</style>

