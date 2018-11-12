<template>
    <nav>
        <div class="Logo">LOGO</div>
        <ul v-if="showMenu">
            <li>Home</li>
            <li>Official</li>
            <li>Contact</li>
        </ul>
        <button v-if="showToggleButton" @click="toggleMenu">X</button>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
        return{
            showToggleButton: false,
            showMenu: false
        }
    },
    methods: {
        toggleMenu(){
            console.log(this.showMenu)
            this.showMenu = !this.showMenu;
        },
        resizeWindowHandler(){
            const windowSize = window.innerWidth;
            console.log(this.showToggleButton);
            if(windowSize <= 768){
                this.showToggleButton = true;
                this.showMenu = false;
            }else{
                this.showToggleButton = false;
                this.showMenu = true;
            }
        }
    },
    created() {
        window.addEventListener("resize", this.resizeWindowHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeWindowHandler);
    },
}
</script>

<style lang="scss">
    @import '../_config.scss';

    nav{
        width: 100%;
        height: 100px;
        background: #ccc;
        padding: 0px 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            width: 25px;
            height: 25px;
            background: #808080;
            border-radius: 1px;
            z-index: 1;
        }
        .Logo{
            font-size: 26px;
            color: red;
            display: flex;
            align-items: center;
        }
        ul{
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                list-style: none;
            }
        }
    }
    @include Medium{
        nav{
            ul{
                position: fixed;
                top: 0;
                right: 0;
                width: 400px;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: red;
            }
        }
    }

</style>
