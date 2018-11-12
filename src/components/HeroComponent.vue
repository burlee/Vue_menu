<template>
    <div class="HeroComponent">
        <header>
            Check our work!
        </header>
        <button @click="fetch(1)">Fetch products</button>
        <p :class="[activeClass]">dsadsa</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HeroComponent',
    data(){
        return{
            activeClass: 'active',
        }
    },
    methods: {
        fetch(id){
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then( ({data}) => {
                    console.log(data)
                })
        }
    }
}
</script>

<style lang="scss">
@import '../config.scss';
    
    .HeroComponent{
        .active{
            color: green;
        }
        max-width: 100%;
        height: 500px;
        background-image: url(https://i.redd.it/ihoxdlxnodpy.jpg);
        background-size: cover; 
        display: flex;
        justify-content: center;
        align-items: center;
        header{
            font-size: 26px;
            font-weight: bold;
            color: $primary-color;
            display: flex;
            flex-direction: column;
        }
    }
</style>
