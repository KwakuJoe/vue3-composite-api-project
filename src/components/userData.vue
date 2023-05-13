<template>
  <div>

    <p class="dsiplay-5">{{ fullDetails }}</p>
    <p class="error-text">Name: {{ user.name }}</p>
    <p class="error-text">Age : {{ user.age }}</p>
    <button class="btn btn-info text-white my-2" @click="changeName">
      Change name
    </button>
    <br>
    <button class="btn btn-info text-white" @click="changeFirstName">
      Change Firts name
    </button>
    <slot></slot>
    <slot name="header"></slot>

  </div>
</template>
<script>
import {reactive, computed} from 'vue';
export default {
    props:{
        userDetails:{
            required:true
        }
    },

    setup(props, context){
        console.log(context)
        console.log(props.userDetails)
        // this is if we want to modify props 
        let user = reactive(props.userDetails);

        // function to channge name
        function changeName(){
            user.name = "Updated name thru props .."
        }

        // get the full name using computed
        const fullDetails = computed(()=>{
            return user.name + ' '+ user.age;
        })

        // function to emit and change of the first name
         function changeFirstName(){
            context.emit('change-first-name', 'emitted changes first name')
         }


        // return our things here
        return{
           changeName,
           user,
           fullDetails,
           changeFirstName
        }
    }
};
</script>
