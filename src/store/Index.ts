import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './State'
import { mutations } from './Mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
