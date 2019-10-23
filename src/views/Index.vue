<template>
  <v-container class="my-auto">
    <!-- <v-alert v-if="perfil_inc" class="white--text" color="success" icon="person" dismissible prominent dense >
      {{p_incomplete}}
    </v-alert>-->
    <!-- Categorias -->
    <div class="hidden-md-and-up">
    <v-text-field
      autofocus
      placeholder="Buscar"

      color="success"
      clearable
      solo
      rounded
      v-model="busca"
      @append-icon-cb="buscarProdutos"
    >
      <template slot="append">
        <v-icon v-if="busca" color="success" @click.prevent="buscarProdutos">search</v-icon>
      </template>
    </v-text-field>
      <v-card>
        
        <v-tabs
          background-color="white"
          center-active
          color="success"
          grow
          show-arrows
          elevation="2"
        >
          <v-tab v-for="c in categorias" :key="c.id" @click="(filtraPorCategoria(c.id))">{{c.nome}}</v-tab>
        </v-tabs>
      </v-card>
      <Cards />
      <v-row class="mt-n5">
        <v-col cols="12">
          <v-container fluid>
            <div class="caption text-center font-weight-light mb-1">
              Não encontrou o que procura ? Anuncie
              <v-icon small>local_atm</v-icon>
            </div>
          </v-container>
        </v-col>
      </v-row>
      
    </div>
  </v-container>
</template>

<script>
import { api } from "@/services";
import Cards from '../components/Cards'
import { mapState } from 'vuex'
import { getCategorias } from '@/helpers'
export default {
  data(){
    return {
      categorias: null,
      busca: null
    }
  },
  methods:{
    filtraPorCategoria(idCat){
      console.log(idCat)
    },
    buscarProdutos() {
      this.$router.push({query: {s: this.busca}})
    }
  },
 async mounted(){
    try{
      let cat = await api.get("categorias")
      let { data } = cat
      this.categorias = data.categorias
    } catch(e){
      console.log(e)
    }
  },
  components:{Cards}
}
</script>

<style>
</style>