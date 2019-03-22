<template lang="pug">
  .pokedex
    h2 Pokédex
    .pokedex-display
      .pokemon-img
        img(:src="src")
        p.
          {{ name }}
</template>

<script lang="ts" src="./app">
</script>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
