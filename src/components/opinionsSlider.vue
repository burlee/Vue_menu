<template>
    <div class="sliderContainer">
        <div 
            v-for="({id, opinionDescription, name}) in clientsOpinion.slice(startSliderNumber, endSliderNumber)" 
            :class="{ slideInLeft: middleSlideIndex === id }"
            :key="id"
            class="opinionContainer"
            >
            <p :class="{ slideInDown: middleSlideIndex === id }">{{opinionDescription}}</p>
            <span>{{name}}</span>
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
            startSliderNumber: 0,
            endSliderNumber: 3,
            middleSlideIndex: 2,
            clientsOpinion: [
                {
                    id: 1,
                    name: '',
                    opinionDescription: ''
                },
                {
                    id: 2,
                    name: '1',
                    opinionDescription: 'Opis pierwszej opini'
                },
                {
                    id: 3,
                    name: '2',
                    opinionDescription: 'Opis pierwszej opini'
                },
                {
                    id: 4,
                    name: '3',
                    opinionDescription: 'Opis drugiej opini'
                },
                {
                    id: 5,
                    name: '4',
                    opinionDescription: 'Opis drugiej opini'
                },
                {
                    id: 6,
                    name: '5',
                    opinionDescription: 'Opis drugiej opini'
                },
                {
                    id: 7,
                    name: '6',
                    opinionDescription: 'Opis drugiej opini'
                },
                {
                    id: 8,
                    name: '6',
                    opinionDescription: 'Opis drugiej opini'
                },
                {
                    id: 9,
                    name: '',
                    opinionDescription: ''
                },
            ]
        }
    },
    methods: {
        nextSlide(){
            if(this.startSliderNumber+3 === this.clientsOpinion.length){
                this.startSliderNumber=-1;
                this.endSliderNumber=2;
                this.middleSlideIndex=1;
            };
            this.startSliderNumber++;
            this.endSliderNumber++;
            this.middleSlideIndex++;
        },
        previousSlide(){
            if(this.endSliderNumber === 3) return;
            this.startSliderNumber--;
            this.endSliderNumber--;
            this.middleSlideIndex--;
        }
    }
}
</script>

<style lang="scss" scoped>
    .sliderContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        background: #ccc;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 25%;
            height: 100%;
            border-radius: 3px;
            background: #40505d;
            filter: blur(15px);
        }
        &::after{
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            width: 25%;
            height: 100%;
            border-radius: 3px;
            background: #40505d;
            filter: blur(15px);
        }
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
            width: 100%;
            height: 250px;
            box-shadow: 0px 0px 15px #4c4c4c;
            border-radius: 20px;
            margin:0px 30px;
            background: #FFF;
        }
        .slideInLeft{
            animation: slideInLeft;
            animation-duration: 1s;
        }
        .slideInDown{
            animation: slideInDown;
            animation-duration: 1s;
        }
    }

    @-webkit-keyframes slideInLeft {
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

