<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="fade-transition">
          <v-card class="grey lighten-5">
            <v-app-bar class="border-botton-grey" flat>
              <v-btn icon text color="white" @click="activeNotifications">
                <v-icon size="28" color="success">{{notifications}}</v-icon>
              </v-btn>
              
              <div class="flex-grow-1"></div>
              <router-link to="/" class="router-bar"><v-toolbar-title class="logo">Agro+</v-toolbar-title></router-link>
              <div class="flex-grow-1"></div>
              <div class="text-center">
                <v-menu transition="fade-transition">
                  <template v-slot:activator="{ on }">
                    <v-btn icon text color="white" class="mr-n3">
                      <v-icon size="28" color="success" v-on="on">more_vert</v-icon>
                    </v-btn>
                  </template>
                  <!-- <v-list>
                    <v-list-item>
                      
                    </v-list-item>
                  </v-list> -->
                </v-menu>
              </div>
            </v-app-bar>
            <v-container >
              <div class="text-center">
                <h4 class=" subtitle font-weight-regular mb-3 grey--text text--darken-2">Central de Notificações</h4>
              </div>
              <v-card :class="`pa-2 body-2 mb-3 notf ${notf.estado}`" v-for="notf in notify" :key="notf.id">
                <v-row wrap class="mt-n2 mb-n2">
                  <v-col cols="12" md="6">
                    <div class="caption black--text font-weight-medium">{{notf.title}}</div>
                    <div class="caption font-weight-medium grey--text text--darken-1">{{notf.data}}
                      <v-btn text class="float-right mt-1" small>LER MAIS</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
              <v-row class="mt-n5">
                <v-col cols="12">
                  <v-container fluid>
                    <div class="caption text-justify"><span class="font-weight-bold">Spans</span>? Entre em contato com a gente através do E-mail.</div><div class="caption text-center"><p><span class="font-weight-medium"><v-icon size="18">mail</v-icon> faleconoscoagromais@gmail.com</span></p></div>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
            <br>
            
            <BottonNavAgro/>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import BottonNavAgro from './BottonNavAgro'
export default {
  components:{BottonNavAgro},
  data(){
    return{
      dialog: true,
      notifications:'notifications',
      notify:[
        {title:'O estoque de bananas do produtor tal voltou!!!',data:'26/09/19',estado:'new'},
        {title:'Fique ligado nas promoções diárias da loja tal',data:'26/09/19',estado:'new'},
        {title:'Seu pedido para o produto tal foi aceito!',data:'01/12/19',estado:'unread'},
        {title:'Faça sua primeira compra e ganhe um brinde!',data:'01/12/19',estado:'read'},
        {title:'Seja bem-vindo a plataforma Agro+',data:'01/12/19',estado:'read'}
      ]
    }
  },
  methods:{
    activeNotifications(){
      if(this.notifications === 'notifications'){
        this.notifications = 'notifications_active'
      } else{
        this.notifications = 'notifications'
      } 
    }
  }
}
</script>

<style>
  .notf.read{
    border-left: 4px solid #78909C;
    background-color: #EEEEEE;
  }
  .notf.new{
    border-left: 4px solid #69F0AE;
  }
  .notf.unread{
    border-left: 4px solid #00E676;
  }
</style>