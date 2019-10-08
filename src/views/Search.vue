<template>
  <v-container class="my-auto">
    
    <div class="hidden-sm-and-up">
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
              <CardPesq class="mt-n4 mb-n4"/>
            </v-container>
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
  }
}
</script>

<style>
  
</style>