<template>
  <div id="app">
    <Swiper/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Swiper from '@/components/Swiper';

export default {
  components: {
    Navigation,
    Swiper
  }
}
</script>

<style lang="scss">
  body{
    height: 2000px;
  }
  .router-link-exact-active{
    color: green;
    border-bottom: 3px solid #ccc;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
