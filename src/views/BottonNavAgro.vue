 
<template>
  <footer id="bottonNavAgro" v-if="logged" app>
    <v-bottom-navigation
      app
      class="hidden-md-and-up"
      grow
    >
      <v-btn value="home" to="/">
        <v-icon center>home</v-icon>
      </v-btn>

      <v-btn value="search" to="/search">
        <v-icon center>search</v-icon>
      </v-btn>

      <v-btn value="notifications" to="/notifications">
        <v-icon center>notifications</v-icon>
      </v-btn>

      <v-btn value="person" to="/perfil">
        <v-icon center>person</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        logged: true,
      }
    },
  }
</script>