import Axios from "axios"
import EventBus from "@/EventBus"

const URL = 'https://pokeapi.co/api/v2/pokemon/'

const state = {
  pokemons: Array
}

const getters = {
  POKEMONS: (state: any): Array<Object> => {
    return state.pokemons
  }
}

const mutations = {
  SET_POKEMONS: (state: any, { data }: any ) => {
    state.pokemons = data.results
  }
}

const actions = {
  FETCH_POKEMONS: async (context: any, payload: any): Promise<void> => {
    context.commit('SET_POKEMONS', await Axios.get(URL))
  }
}

const plugin = (store: any): void => {
  store.subscribe((mutation: any) => {
    const { data } = mutation.payload
    if (mutation.type === 'SET_POKEMONS') {
      EventBus.$emit("POKEMONS", data.results)
    }
  })
}

export default {
  state, getters, mutations, actions, plugin
}