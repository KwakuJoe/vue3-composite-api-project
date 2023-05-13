import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },

    getters:{
      counte(state){
        return state.count;
      }
    },

    mutations: {
      setCounter (state, data) {
        state.count += data;
      }
    },

    actions:{
      increment(context){
        context.commit('setCounter',1)
      }
    }
  })

  export default store;