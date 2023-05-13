<template>
 <div class="container">
 <hr>
 <p class="display-5">UseRouter to navigate in Compo Api</p>
    <router-view></router-view>
 <hr>
 <hr>
  <p class="display-5"> Life cycle Hooks</p>
  <LifeCycleHooks v-if="showLifeCycle"></LifeCycleHooks>
  <button class="btn btn-success" @click.prevent="toggleLifeCycle">Toggle life cycle</button>
 <hr>
  <p class="display-1">His user name is {{ userName }}</p>
  <hr>
  <userData :user-details="userDetails" @changeFirstName="firstNameChange">
    <template #header>
        <div class="bg-dark">
          <p class="display p-3 text-white">Named Slot Elemet Here...</p>
        </div>
    </template>
    <div class="bg-light">
      <p class="display p-3">Slot Elemet Here...</p>
    </div>
  </userData>
  <hr>
  <!-- forms -->
  <p class="display-3">{{ fullname }}  </p>
  <div class="row mt-3">
    <div class="col-lg-4">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" v-model="firstName">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" v-model="lastName">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  </div>
  <hr>
  <p class="display-5">Watchers in Compo.. API</p>
  <p class="mt-4 display-1 fw-bold">{{ ageValue }}</p>
  <button class="btn btn-dark" @click="updateAge">Update age</button>
  <hr>  
  </div>
</template>

<script>
import {ref, reactive, isReactive, isRef, toRefs, computed, watch} from 'vue';
import userData from './components/userData.vue';
import LifeCycleHooks from './components/LifeCycleHooksCompoApi.vue'
export default {
  name: 'App',
  components:{
    userData,
    LifeCycleHooks
  },
  setup(){
    // life cycle 
    let showLifeCycle = ref(true);

      function toggleLifeCycle(){
          showLifeCycle.value = !showLifeCycle.value;
        }


    // This is for watcher
    let ageValue = ref(30)

    function updateAge(){
      ageValue.value = 50;
    }

    watch([ageValue], (newvalue, oldValue) => {
      console.log(newvalue);
      console.log(oldValue);
    });


    /* This is for the forms javascript */
    let firstName = ref('')
    let lastName = ref('')

    // computed to get firts and lastna

    const fullname = computed(() => {
      return firstName.value + ' ' + lastName.value;
    })


    /* This is for the user javascript */
    // name variable
    let name = ref('Kwaku');
    //
    let userDetails = reactive({
      name:'Leela',
      age:30
    });

    // change name function
    function changeName(){
      userDetails.name = 'Kwaku v3 :) Modified name by function';
    }

    // emitted function
    function firstNameChange(){
      firstName.value = "First name changed through emit property .."
    }

    // convertingg userdatils to be reactive
    let userRefs = toRefs(userDetails)

    // check whether tha values are reactive
    console.log(isReactive(userDetails))
    console.log(isRef(name))
    // timer to chnager name
    setTimeout(() => {
      // console.log('Executing timter in composition api');
      name.value = "Kwaku v2 :)";
      userDetails.name = "Updated Leela";
    }, 3000);

    return{
      userName:name,
      userDetails,
      name: userRefs.name,
      age: userRefs.age,
      changeName,
      firstName,
      lastName,
      fullname,
      ageValue,
      updateAge,
      firstNameChange,
       showLifeCycle,
       toggleLifeCycle

    }
  }
}
</script>

<style>

</style>
