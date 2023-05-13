<template lang="">
    <div>
        <p class="display-1">Contact Page</p>
        <a href="" @click.prevent="gotToContact()">Got to contact Page</a>

    </div>
</template>
<script>
import {useRouter} from "vue-router";
export default {
    name:'ContactPage',
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