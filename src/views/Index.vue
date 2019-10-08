<template>

  <v-container class="my-auto mt-3">
     <v-alert v-if="perfil_inc" class="white--text" color="success" icon="person" dismissible prominent>
      {{p_incomplete}}
      </v-alert>
    <!-- Categorias -->
    <div class="hidden-md-and-up">
     <v-card>
      <v-tabs
        background-color="white"
        center-active
        color="success"
        grow
        show-arrows
        elevation="2"
      >
        <v-tab>One</v-tab>
        <v-tab>Two</v-tab>
        <v-tab>Three</v-tab>
        <v-tab>Four</v-tab>
        <v-tab>Five</v-tab>
        <v-tab>Six</v-tab>
        <v-tab>Seven</v-tab>
        <v-tab>Eight</v-tab>
        <v-tab>Nine</v-tab>
        <v-tab>Ten</v-tab>
        <v-tab>Eleven</v-tab>
        <v-tab>Twelve</v-tab>
        <v-tab>Thirteen</v-tab>
        <v-tab>Fourteen</v-tab>
        <v-tab>Fifteen</v-tab>
        <v-tab>Sixteen</v-tab>
        <v-tab>Seventeen</v-tab>
        <v-tab>Eighteen</v-tab>
        <v-tab>Nineteen</v-tab>
        <v-tab>Twenty</v-tab>
      </v-tabs>
    </v-card>
    <Cards/>
    <v-row class="mt-n5">
      <v-col cols="12">
        <v-container fluid>
          <div class="caption text-center font-weight-light mb-1">Não encontrou o que procura ? Anuncie <v-icon small>local_atm
</v-icon></div>
        </v-container>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script>
import Cards from '../components/Cards'
import { mapState } from 'vuex'
  export default {
    components:{Cards},
    data(){
      return{
        perfil_inc: false
      }
    },
    computed:{
      ...mapState(['p_incomplete'])
    },
    created(){
      if(this.$store.state.usuario.pessoa){
          this.$store.commit('UPDATE_MESSAGE_PERFIL')
          this.perfil_inc = true
      }
    }
    
  }
</script>

<style>

</style>