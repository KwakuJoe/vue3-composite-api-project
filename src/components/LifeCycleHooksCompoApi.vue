<template lang="">
    <div>
        <p>Life Cycle Hooks</p>
        <p class="fw-bold ">{{state.name}}</p>
        <button class="btn btn-info text-white" @click="updateName">Updated name</button>
    </div>
</template>
<script>
import {onBeforeMount, onBeforeUpdate, onUpdated, onMounted, onBeforeUnmount, onUnmounted, reactive, onRenderTracked, onRenderTriggered} from 'vue';
export default {
    setup(){

        const state = reactive({
            name:'Kwesi Authur'
        })

        function updateName(){
            state.name = 'Updated Authur Kwesi !! :)'
        }



        onBeforeMount(() => {
            console.log('Before Mounted');
        });

        onMounted(() => {
            console.log('On Mounted');
        });

        onBeforeUpdate(() => {
            console.log('On Before Updated'); 
        });

        onUpdated(() => {
            console.log('On Updated'); 
        });

        onBeforeUnmount(() => {
            console.log('On Before Unmount'); 
        });

        onUnmounted(() => {
            console.log('OnUnUnmount'); 
        });

        onRenderTracked((e) => {
            console.log(e)
        });

        onRenderTriggered((e)=> [
            console.log(e)
        ]);

        return{
            state,
            updateName,
        }
    }
}
</script>
<style lang="">
    
</style>