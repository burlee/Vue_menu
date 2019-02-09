<template>
    <h1 @click="modalOpen">
        adsadasd
        {{type}}
    </h1>
</template>

<script>

export default {
    data(){
        return{
            type: ''
        }
    },
    methods: {
        modalOpen(data){
            this.type = data;
            console.log(data)
        }
    }
}
</script>

<style>
    h1{
        height: 500px;
    }
</style>
