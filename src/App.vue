<template>
  <div id="app">
    <!-- <nav :class="{'animation-in': !isUp, 'animation-out': isUp, static: scroll === 0}"></nav>
    <button @click="toggle">Toggle</button> -->
    <PopUp/>
  </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import throttle from 'lodash.throttle';
import PopUp from './components/PopUp';

export default {
  components: {
    PopUp
  }
  // data() {
  //   return {
  //     scroll: 0,
  //     isUp: false,
  //     isAnimation: true
  //   };
  // },
  // created() {
  //   window.scrollTo(0,0)
  //   if (window.innerWidth < 428) {
  //     window.addEventListener("scroll", throttle(this.handleScroll, 250));
  //   }else{
  //     this.isUp = true;
  //   }
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", throttle(this.handleScroll, 250));
  // },
  // methods: {
  //   handleScroll() {
  //     console.log(1)
  //     let st = $(window).scrollTop();
  //     if (st < this.scroll) {
  //       this.isUp = true;
  //     } else {
  //       this.isUp = false;
  //     }
  //     this.scroll = st;
  //   },
  //   toggle() {
  //     this.isAnimation = !this.isAnimation;
  //   }
  // }
};
</script>

<style lang="scss">
nav {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100px;
  width: 100%;
  background: green;
}
#app {
  height: 2500px;
}
.static {
  position: inherit;
  background: red;
}
.animation-in {
  opacity: 0;
  transform: translateY(-120px);
  transition: 0.25s;
}

.animation-out {
  opacity: 1;
  transform: translateY(0px);
  transition: 0.5s;
}

@keyframes revblock {
  form {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
