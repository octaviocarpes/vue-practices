import Vue from 'vue'
import EventBus from "@/EventBus"
export default Vue.extend({

  name: "Pokedex",

  data () {
    let pokemons: Array<Object> = []

    return {
      pokemons
    }
  },

  created (): void {
    EventBus.$on("POKEMONS", (data: any) => {
      this.setPokemons(data)
    })
  },

  mounted (): void {
    this.$store.dispatch('FETCH_POKEMONS')
  },

  methods: {
    setPokemons (data: Array<Object>): void {
      this.pokemons = data
    }
  }

})
