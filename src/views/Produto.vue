<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card>
            <v-app-bar color="success">
              <v-btn icon text color="success" to="/">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text m-2l font-weight-bold title"><span>{{produto}}</span></v-toolbar-title>
              <div class="flex-grow-1"></div>
              <v-btn icon text color="success">
                <v-icon size="28" color="white">local_mall</v-icon>
              </v-btn>
            </v-app-bar>
            
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      dialog:true,
      produto:'Produto',
      tabs:[
        {text:'Detalhes',id:'1'},{text:'Informações',id:'2'},{text:'Avaliações',id:'3'}
      ]
    }
  }
}
</script>

<style>

</style>