<template lang="">
    <div>
        <p class="display-4">Post Page</p>
        <p>Post ID: {{id}}</p>
        <router-link to="/posts/leela">Got to lee post</router-link>
    </div>
</template>
<script>
import {useRoute} from 'vue-router'
import { ref, watch} from 'vue';
export default {
    name:"PostsPage",

    setup() {

        const id = ref('');
        const route = useRoute();
        console.log(route.params);
        
        id.value = route.params.id;

        // using watch to watch changes in params so its update acco
        watch(() => route.params.id, () => {
            id.value = route.params.id;
        })

        return{
            id
        }
    }
}
</script>
<style lang="">
    
</style>