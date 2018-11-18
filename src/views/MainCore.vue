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

    <p class="displayNone" :class="{displayBlock: currentDisplaySilde === 1}">lorem1</p>
    <p class="displayNone" :class="{displayBlock: currentDisplaySilde === 2}">lorem2</p>
    <p class="displayNone" :class="{displayBlock: currentDisplaySilde === 3}">lorem3</p>
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
      currentDisplaySilde: 1,
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
      startSliderFn(){
        setInterval(()=> {
          if(this.currentDisplaySilde === 3){
              this.currentDisplaySilde = 1
              console.log(this.currentDisplaySilde)
          };
          this.currentDisplaySilde++;
        }, 2000)
      },
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
  },
  created(){
    this.startSliderFn();
  }
}
</script>

<style lang="scss">
  .displayNone{
    display: none;
  }
  .displayBlock{
    display: block;
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
</style>

