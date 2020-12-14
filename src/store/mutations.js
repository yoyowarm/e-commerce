import * as types from './mutationTypes'

export default {
  [types.SHOW_TOAST] (state) {
    state.loadingCounter += 1
  },
}