<template>
    <div class="sliderContainer">
        <div class="opinionContainer">

        </div>
        <div class="opinionContainer">
            <p>{{clientsOpinion[currentIndex].name}}</p>
        </div>
        <div class="opinionContainer">
        </div>
        <button class="nextBtnSlider" @click="nextSlide">Next</button>
        <button class="previousBtnSlider" @click="previousSlide">Prev</button>
    </div>
</template>

<script>

export default {
    name: 'opinionSlider',
    data(){
        return{
            currentIndex: 0,
            clientsOpinion: [
                {
                    id: 1,
                    name: 'Seweryn',
                    opinionDescription: 'Opis pierwszej opini'
                },
                {
                    id: 2,
                    name: 'Andrzej',
                    opinionDescription: 'Opis pierwszej opini'
                },
                {
                    id: 3,
                    name: 'Kimla',
                    opinionDescription: 'Opis drugie opini'
                },
                {
                    id: 4,
                    name: 'ada',
                    opinionDescription: 'Opis trzeciej opini'
                },
                {
                    id: 4,
                    name: 'arek',
                    opinionDescription: 'Opis czwartej opini'
                },
                {
                    id: 4,
                    name: 'xd',
                    opinionDescription: 'Opis drugiej opini'
                }
            ]
        }
    },
    methods: {
        nextSlide(){
            if(this.currentIndex === this.clientsOpinion.length-1){
                this.currentIndex = 0;
            }else{
                this.currentIndex++;
            }
        },
        previousSlide(){
            if(this.currentIndex === 0 ){
                alert('jest')
                this.currentIndex = this.clientsOpinion.length;
            }else{
            
                this.currentIndex--;
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .sliderContainer{
        .displayNone{
            display: none;
        }
        .displayBlock{
            display: block;
        }
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        background: #ccc;
        position: relative;
        // &::before{
        //     content: "";
        //     position: absolute;
        //     top: 0px;
        //     left: 0px;
        //     width: 25%;
        //     height: 100%;
        //     border-radius: 3px;
        //     background: #40505d;
        //     z-index: 1;
        //     box-shadow: 10px 5px 5px #40505d;
        // }
        // &::after{
        //     content: "";
        //     position: absolute;
        //     top: 0px;
        //     right: 0px;
        //     width: 25%;
        //     height: 100%;
        //     border-radius: 3px;
        //     background: #40505d;
        //     filter: blur(15px);
        //     animation: slideInLeft;
        //     animation-duration: 1s;
        // }
        .nextBtnSlider{
            position: absolute;
            top: 50%;
            left: 66%;
            transform: translate(-50%,-50%);
        }
        .previousBtnSlider{
            position: absolute;
            top: 50%;
            left: 33%;
            transform: translate(-50%,-50%);
        }
        .opinionContainer{
            display: flex;
            flex-direction: column;
            width: 30%;
            height: 250px;
            box-shadow: 0px 0px 15px #4c4c4c;
            border-radius: 20px;
            margin:0px 30px;
            background: #FFF;
        }
        .width{
            width: 40%;
        }
        .slideInLeft{
            animation: slideInLeft;
            animation-duration: 1s;
        }
        .slideInDown{
            animation: slideInDown;
            animation-duration: 1s;
        }
        .fadeInFromNone{
            animation: fadeInFromNone;
            animation-duration: 1s;
        }
    }

    @keyframes fadeInFromNone {
        0% {
            display: none;
            opacity: 0;
        }

        1% {
            display: block;
            opacity: 0;
        }

        100% {
            display: block;
            opacity: 1;
        }
    }

    @-webkit-keyframes slideInLeft {
        0% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            visibility: visible;
        }

        100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes slideInLeft {
    from {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    }

    @-webkit-keyframes slideInDown {
        from {
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
            visibility: visible;
        }

        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>

