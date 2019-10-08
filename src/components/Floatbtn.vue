<template>
  <v-btn
      v-if="$route.name === 'index'"
      dark
      fab
      color="success"
      to="/anunciar"
      class="add-btn"
    >
      <v-icon size="38">mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {

}
</script>

<style>

</style>