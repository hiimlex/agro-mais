<template>
<div>
  <v-container class="my-auto">
    <!-- <v-alert v-if="perfil_inc" class="white--text" color="success" icon="person" dismissible prominent dense >
      {{p_incomplete}}
    </v-alert>-->
    <!-- Categorias mobile -->
    <div>
      <div class="hidden-sm-and-up">
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
      </div>
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
  <v-container fluid class="my-auto grey lighten-2" transition="fade-transition">
            <v-row class="justify-center">
                <v-col md="10" xl="12">
                    <h3 class="text-center">EQUIPE RESPONSÁVEL
                        <br>
                        <v-icon color="black" size="32px">developer_mode</v-icon>
                    </h3>
                    <v-row class="justify-center">
                        <v-col md="6" xl="6">
                            <p class="text-center">
                                Entusiastas e amantes da programação, bacharelandos de Sistemas de Informação no IFCE - Campus Crato!
                            </p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4" xl="4">
                            <h4 class="text-center">
                                <v-icon color="black" size="32px">account_tree</v-icon>
                                <br>
                                LUCAS</h4>
                                <h5 class="text-center">
                                    Infra e Back-End
                                </h5>
                        </v-col>
                        <v-col md="4" xl="4">
                            <h4 class="text-center">
                                <v-icon color="black" size="32px">palette</v-icon>
                                <br>
                                ALEX</h4>
                                <h5 class="text-center">
                                    Front-end e UX Design
                                </h5>
                        </v-col>
                        <v-col md="4" xl="4">
                            <h4 class="text-center">
                                <v-icon color="black" size="32px">build</v-icon>
                                <br>
                                RENAN</h4>
                                <h5 class="text-center">
                                    Back-end e Banco de Dados
                                </h5>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        </div>
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