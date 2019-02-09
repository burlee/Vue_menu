<template>
  <section>
    <div class="container" :class="{'fade-out': isOpen, 'fade-in': !isOpen}">
      <button @click="open">Open</button>
    </div>
    <div class="person-container" :class="{'fade-in': isOpen}">
      <p
        :class="{'fade-in-slow': isOpen}"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, id.</p>
      <button @click="close">Hide</button>
    </div>
    <v-select :placeholder="Holder"></v-select>
  </section>
</template>

<script>
import vSelect from "vue-select";

export default {
  components: {
    vSelect
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
.fade-in {
  opacity: 1 !important;
  display: block !important;
  animation: zoomIn;
  animation-duration: 1.5s;
}

.fade-in-slow {
  opacity: 1 !important;
  display: block !important;
  animation: zoomIn;
  animation-duration: 2.75s;
}

.fade-out {
  opacity: 0;
  animation: fadeIn;
  animation-duration: 0.5s;
}

section {
  height: auto;
  width: 100%;
  padding: 25px;
  .container {
    position: relative;
    box-shadow: 0px 0px 10px #4c4c4c;
    background: moccasin;
    width: 400px;
    height: 400px;
  }
  .person-container {
    position: fixed;
    top: 10px;
    left: 10px;
    background: white;
    border-radius: 10px;
    width: 50%;
    height: 50%;
    opacity: 0;
    box-shadow: 0px 0px 10px red;
    display: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
</style>
