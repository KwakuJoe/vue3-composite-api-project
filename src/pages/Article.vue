<template lang="">
    <div>
        <p class="display-1">Article </p>
        <p class="display-3">Aartice ID: {{id}}</p>
        <router-link to="/article/leela">Got to leela article</router-link>

    </div>
</template>
<script>
import {useRouter} from "vue-router";
export default {
    name:'ArticlePage',
    props:['id'],
    setup(){
        const router = useRouter();

        function gotToContact(){
            router.push('/about');
        }

        return{
            gotToContact,
        }
    }
}
</script>
<style lang="">
    
</style>