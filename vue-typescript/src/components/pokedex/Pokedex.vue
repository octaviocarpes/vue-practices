<template lang="pug">
  .pokedex
    h2 Pokédex
    .pokedex-display
      p(v-for="pokemon in pokemons") {{ pokemon.name.toUpperCase() }}
</template>

<script lang="ts" src="./app">
</script>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
