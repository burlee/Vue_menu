<template>
  <Fragment>
    <Navigation/>

    <input 
      type="text" 
      :style="{ border: `1px solid ${borderColor}`}"
      @input="emailValHandler"  
      ref="input"
      maxlength="30"
    >
    <button :disabled="disabled">Wyślij</button>
    <button @click="cleanInput">Clear</button>
    <Slider/>
  </Fragment>
</template>

<script>
import Navigation from '@/components/Navigation';
import Fragment from '../Fragment.js';
import Slider from '../components/opinionsSlider';

export default {
  components: {
    Navigation,
    Slider
  },
  data(){
    return{
      borderColor: `red`,
      title: 'Example title',
      disabled: true,
      numbers: [1,2,3,4,5],
      test: [
        {name: "Seweryn", age: 22},
        {name: "John", age: 50}
      ]
    }
  },
  methods: {
      cleanInput(){
        setTimeout(() => {
          
          this.$refs.input.value = '';
        }, 2000)
      },
      pressKey(e){
        console.log(e.charCode)
      },
      emailValHandler(e){
        const inputValue = e.target.value;
        console.log(inputValue);
        if(inputValue.length >= 5){
          this.borderColor = 'green'
          this.disabled = false
        }else{
          this.borderColor = `red`
          this.disabled = true
        }
      }
  }
}
</script>

<style lang="scss">
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
</style>

