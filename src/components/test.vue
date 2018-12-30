<template>
<section>

<div v-for="dat in data">
    <p>{{dat.name}}</p>

</div>
</section>
</template>

<script>
export default {
    name: 'test',
    props: ['data'],
    mounted(){
    }
}
</script>

<style>


</style>
