<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card class="grey lighten-4">
            <v-app-bar color="success" flat>
              <v-btn icon text to="/">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text m-2l font-weight-bold title"><span></span></v-toolbar-title>
              <div class="flex-grow-1"></div>
              <!-- <v-btn icon text>
                <v-icon size="28" color="amber">favorite</v-icon>
              </v-btn> -->
              <v-btn icon text color="success">
                <v-icon size="28" color="white">local_mall</v-icon>
              </v-btn>
            </v-app-bar>
            <v-carousel
              cycle
              hide-delimiter-background
              show-arrows-on-hover
              hide-delimiters
              height="250"
              
            >
              <v-carousel-item
                v-for="foto in fotos"
                :key="foto" :src="foto"
              >
              </v-carousel-item>
            </v-carousel>
            <v-container v-for="prod in produto" :key="prod.id">
              <div class="headline text-capitalize font-weight-light text-justify">{{prod.nome}}</div>
              <div class="caption grey--text text-justify">por <router-link :to="`/perfil/${prod.idprodutor}`"><span class="remove-text-underline">{{prod.produtor}}</span></router-link></div>

            </v-container>
            
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
      fotos:[
        '/tangerina.jpeg',
        '/tangerina-2.jpeg',
        '/tangerina-3.jpeg'
      ],
      produto:[
        {nome:'Tangerina da boa', produtor:'Loja de Frutas',idprodutor:1,preco: 5.00, estoque:10,medida:'kg', categoria:'Frutas',subcategoria:'Sem veneno',rate:4, id:1}
      ]
    }
  }
}
</script>

<style>
.remove-text-underline{
  text-decoration: none;
}
</style>