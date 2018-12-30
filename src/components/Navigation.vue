<template>
    <nav>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero recusandae quo quos nesciunt itaque consectetur dolores quis magnam vel, rem dignissimos! Molestias ducimus dolorem corporis consequatur temporibus, sed adipisci! Quasi, voluptates? Obcaecati assumenda adipisci ducimus, numquam hic, dolores iure corrupti consequatur, deleniti impedit voluptates blanditiis non nobis odit porro ab perspiciatis dignissimos amet qui ullam maxime! Ex a, facilis quod corrupti libero laboriosam eum maiores aperiam, facere explicabo corporis voluptatum!
        </p>
        
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
        sizeWindowHandler(){
            const windowSize = window.innerWidth;
            console.log(this.showToggleButton);
            if(windowSize <= 768){1
                this.showToggleButton = true;
                this.showMenu = false;
            }else{
                this.showToggleButton = false;
                this.showMenu = true;
            }
        }
    },
    mounted(){
        this.$nextTick(()=>{
            
        })
    }
}
</script>

<style lang="scss">
    @import '../_config.scss';

    nav{
        width: 100%;
        height: 50px;
        background: #ccc;
        padding: 0px 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            
        }
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

    @media (orientation: landscape) and (max-width: 320px){
        nav{

        .Logo{
            color: green;
            font-size: 12px;
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
