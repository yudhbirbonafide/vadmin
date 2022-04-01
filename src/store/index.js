import createPersistedState from "vuex-persistedstate";
import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  user_records: []
}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    //if you want to split the store files into different modules.(st-overflow:break-up-my-vuex-file)
  },
  plugins: [createPersistedState()]
})
