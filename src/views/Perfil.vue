<template>
  <v-container>
    <!-- mobile -->
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card class="grey lighten-5">
            <v-app-bar class="border-botton-grey" flat>
              <v-btn icon text color="white" disabled>
                <v-icon size="28" color="success"></v-icon>
              </v-btn>
              <div class="flex-grow-1"></div>
              <router-link to="/" class="router-bar"><v-toolbar-title class="logo">Agro+</v-toolbar-title></router-link>
              <div class="flex-grow-1"></div>
              <v-btn icon text color="white" to="/cart">
                <v-icon size="28" color="success">local_mall</v-icon>
              </v-btn>
            </v-app-bar>
            <v-container>
              <div class="text-center">
                  <h4 class=" subtitle font-weight-regular mb-3 grey--text text--darken-2">Informações de Perfil</h4>
                  <v-responsive>
                  <v-avatar size="128"><v-img src="http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg"></v-img></v-avatar>
                  </v-responsive>
                  <h3 class="font-weight-medium"><span>{{nome}}</span></h3>
              </div>
            </v-container>
            <v-container fluid class="mb-5">
              
              <v-divider></v-divider>
              <v-list class="grey lighten-5">
                <v-subheader>CONFIGURAÇÕES DA CONTA</v-subheader>
                <v-list-item-group>
                  <v-list-item
                      v-for="link in links"
                      :key="link.text"
                      router :to="link.route"
                    >
                    <v-icon left v-text="link.icon"></v-icon>
                    <v-list-item-title right v-text="link.text"></v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-divider></v-divider>
              <div class="text-center">
                <v-btn text>SAIR</v-btn>
              </div>
              <br><br>
            </v-container>
            <BottonNavAgro/>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import {voltar} from '../services/helpers'
import BottonNavAgro from './BottonNavAgro'
export default {
  components:{BottonNavAgro},
  data(){
    return{
      nome: 'Nome do cara',
      dialog: true,
      links:[
        {icon: 'receipt',route: '/compras', text: 'Compras'},
        {icon:'local_atm',route:'/vendas', text:'Vendas'},
        {icon:'local_offer', route:'/perfil/informacoesvendas',text:'Informações para Vendas'},
        {icon:'info',route:'/perfil/informacoes',text:'Completar Informações'},
        {icon:'edit', route: '/perfil/editar', text: 'Editar Perfil'}
      ]
    }
  },
  methods:{
    voltar
  }
}
</script>

<style>
  .m-2l{
    margin-left: -3%;
  }
</style>