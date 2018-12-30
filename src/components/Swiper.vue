<template>
<div>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(slide, i) in swiperSlides" :key="i">
            <h1>{{slide.name}}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas rerum qui in tempora alias earum quidem velit corrupti quae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odit rerum blanditiis voluptatibus est? Veritatis laboriosam ipsam adipisci earum debitis eius aperiam architecto? Aspernatur quibusdam officia enim, nostrum possimus vel culpa reiciendis, minima, impedit quaerat saepe quia. Quisquam iste fugiat molestias, porro dolorum accusamus sint, quibusdam in quos eligendi expedita!</p>
        </swiper-slide>
        <!-- Optional controls -->
    </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import test from './test.vue';

export default {
    props: ['testowyProp', 'tablica'],
    name: 'ScrollToTop',
    components: {
        swiper,
        swiperSlide,
        test
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 5
        
        },
        swiperSlides: [
            { des: 'lorem lorem lorem', name: 'Seweryn' },
            { des: 'lorem lorem lorem', name: 'Kimla' },
            { des: 'lorem lorem lorem', name: 'XD' },
            { des: 'lorem lorem lorem', name: 'dsadsa' }
            ]
      }
    },
    mounted(){
        console.log(this.$refs.static.localName)

    }
}
</script>

<style lang="scss" scoped>
div{
    display: flex;
    justify-content: space-between;
    height: auto;
    .swiper-container.swiper-container-horizontal{
        .swiper-slide-active{
            height: 100%;
            width: 100%;
            border-radius: 20px;
        }
        .swiper-slide{
            box-shadow: 0px 0px 15px #4c4c4c;
            border-radius: 20px;
            width: 90%;
            display: flex;
            flex-direction: column;
        }
        .swiper-slide-next, .swiper-slide-prev{
            height: 96%;
        }
    }
}
</style>

