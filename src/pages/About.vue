<template lang="">
    <div>
        <p class="display-1">About Page</p>
        <a href="" @click.prevent="gotToAbout()">Got to contact Page</a>
    </div>
</template>
<script>
import {useRouter} from "vue-router";
export default {
    name:'AboutPage',
    setup(){
        const router = useRouter();
        function gotToAbout(){
            router.push('/contact');
        }

        return {
            gotToAbout,
        }
    }
}
</script>
<style lang="">
    
</style>