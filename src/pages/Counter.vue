<template lang="">
  <div>
    <p class="display-4">Vuex using Composite API</p>
    <p class="display-4 fw-bold">{{counter}}</p>
    <button class="btn btn-primary" @click="onIncrement()">Increment</button>
  </div>
</template>
<script>
import {  useStore } from "vuex";
import {computed} from 'vue';
export default {
  name: "CounterComponent",



  setup() {

    const store = useStore();
    
    const counter = computed(() => {
        return store.state.count;
    })


    function onIncrement(){
        return store.dispatch('increment');
    }


    return {
        counter,
        onIncrement
    };
  },
};
</script>
<style lang=""></style>
