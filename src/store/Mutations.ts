import {MutationTree} from 'vuex'
import { MutationTypes } from './MutationTypes'
import {state} from './State'

export type Mutations<S = state> = {
  [MutationTypes.SHOW_TOAST](state: S, payload: string): void;
}

export const mutations: MutationTree<state> & Mutations = {
    [MutationTypes.SHOW_TOAST](state: state, payload: string) {
        state.toast.message = payload;
    },
}