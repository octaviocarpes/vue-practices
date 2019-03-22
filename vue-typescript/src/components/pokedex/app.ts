import Vue from 'vue'
export default Vue.extend({

  name: "Pokedex",

  data () {
    const name: String = ""
    const src: String = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"

    return {
      name,
      src
    }
  },

  mounted () {
    this.name = "Pikachu"
  }

})
