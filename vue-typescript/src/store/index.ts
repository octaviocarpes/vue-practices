import Vue from "vue";
import Vuex from "vuex";
import pokemons from "./modules/pokemons"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LoadingStatus: Boolean,
  },

  mutations: {
    SET_LOADING_STATUS: (state, status): void => {
      state.LoadingStatus = status
    }
  },
  
  actions: {
    loading: (context): void => {
      context.commit('SET_LOADING_STATUS', true)
    },
  
    doneLoading: (context): void => {
      context.commit('SET_LOADING_STATUS', false)
    }
  },

  getters: {},

  modules: {
    pokemons
  },

  plugins: [ pokemons.plugin ]
});
