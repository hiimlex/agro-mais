<template>
  <v-container class="my-auto">
    <div class="hidden-md-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="fade-transition">
          <v-card class="grey lighten-5">
            <v-text-field
                  autofocus
                  placeholder="Buscar"
                  append-icon="search"
                  color="success"
                  clearable
                  outlined
                ></v-text-field>
            <v-container class="mt-n3">
              <div class="text-center mt-n5 mb-3">
                <span class="subtitle font-weight-regular grey--text text--darken-2">Exibindo buscas ...</span>
              </div>
              <CardPesq class="mt-n4"/>
              <v-row class="mt-n5">
                <v-col cols="12">
                  <v-container fluid>
                    <div class="caption text-center font-weight-light mb-1">Não encontrou o que procura ? Verifique a caixa de pesquisa <v-icon small>search</v-icon></div>
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
import CardPesq from '../components/Cardpesq'
import BottonNavAgro from './BottonNavAgro'
export default {
  components:{BottonNavAgro,CardPesq},
  data(){
    return{
      dialog: true,
      cor:'success'
    }
  },

}
</script>

<style>
  
</style>