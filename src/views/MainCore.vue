<template>
  <Fragment>
    <Navigation/>
      <Slider/>
  </Fragment>
</template>

<script>
import Navigation from '@/components/Navigation';
import Fragment from '../Fragment.js';
import Slider from '@/components/opinionsSlider';
import $ from 'jquery';

export default {
  components: {
    Navigation,
    Slider
  },
  data(){
    return{
      currentDisplaySilde: 1
    }
  },
  methods: {
    toggle: e => {
      const letx = $(e.target).parent().find('ul').slideToggle();
      console.log(letx)
    }
  }
}
</script>

<style lang="scss">
  .displayNone{
    display: none;
  }
  .displayBlock{
    display: block;
    animation: fadeInFromNone;
    animation-duration: 1s;
  }  
  .contact{
    width: 250px;
    height: 250px;
    border: 1px solid red;
    background: #ccc;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }

  @-webkit-keyframes slideInLeft {
        from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
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
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }

        100% {
            display: block;
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
        }
    }
</style>

