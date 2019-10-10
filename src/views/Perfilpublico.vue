<template>
  <v-container class="my-auto" fluid>
    <div class="hidden-md-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card class="grey lighten-4">
            <v-toolbar color="white" flat>
              <v-btn icon text @click="voltar(-1)">
                <v-icon size="28" color="success">arrow_back</v-icon>
              </v-btn>
              <div class="flex-grow-1"></div>
              <router-link to="/" class="router-bar"><v-toolbar-title class="logo">Agro+</v-toolbar-title></router-link>
              <div class="flex-grow-1"></div>
              <!-- <v-btn icon text>
                <v-icon size="28" color="amber">favorite</v-icon>
              </v-btn> -->
              <v-btn icon text color="white" disabled>
                <v-icon size="28" color="success"></v-icon>
              </v-btn>
            </v-toolbar>
            <v-tabs
              grow
              color="success"
              light
              background-color="white"
              center-active
              centered
              >
              
              <v-tab href="#descricao">Descrição</v-tab>
              <v-tab href="#produto">Produtos</v-tab>
              
              <v-tab-item id="descricao">
                <v-container class="grey lighten-4 my-auto">
                  <div class="text-center">
                      <h4 class=" subtitle font-weight-regular mb-3 grey--text text--darken-2">Informações de Perfil</h4>
                      <v-responsive>
                        <v-avatar size="128"><v-img :src="foto"></v-img></v-avatar>
                      </v-responsive>
                      <h3 class="font-weight-medium mt-2"><span>{{nome}}</span></h3>
                  </div>
                </v-container>
                <v-container class="grey lighten-4 my-auto">
                  <v-row no-gutters>
                    <v-col cols="12" sm="12">
                      <div class="body-1 font-weight-light grey--text text--darken-3 text-no-wrap">
                      <span class="text-uppercase font-weight-medium text-decoration-line">contato: </span>
                        <input  v-model="contato" v-mask="mask" readonly color="grey"/>  
                      </div>
                    </v-col>
                    <!-- <div class="body-1 font-weight-light mb-3 grey--text text--darken-3 "><span class="text-uppercase font-weight-medium">descrição geral:</span>{{descricao}}</div> -->
                    <div class="body-1 font-weight-light text-justify grey--text text--darken-3"></div>
                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item id="produto">
                <v-container class="grey lighten-4 my-auto" grid-list-xs>
                  <Cards/>  
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Cards from '../components/Cards'
import {voltar} from '../services/helpers'
import { mask,mask1 } from 'vue-the-mask'
export default {
  directives:{
    mask,mask1
  },
  components:{
    Cards
  },
  data(){
    return{
      dialog:true,
      tab: null,
      tabs:2,
      nome:'Fulano de tal',
      contato:'81232132111',
      /* deixar a padrão se não for vendedor */
      foto:require('../assets/padrao.jpg'),
      mask:'(##) #####-####',
      /* cep:'28177123', */
      mask1:'#####-###',
     /*  endereco:'Rua josé de tal das quantas', */
    }
  },
  methods:{
    voltar,
  }
}
</script>

<style>
</style>