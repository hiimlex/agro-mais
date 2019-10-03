<template>
  <v-container class="my-auto" fluid>
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card class="grey lighten-4">
            <v-toolbar color="success" flat>
              <v-btn icon text @click="voltar(-1)">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text ml-n5 font-weight-bold title"><span>Detalhes</span></v-toolbar-title>
              <div class="flex-grow-1"></div>
              <!-- <v-btn icon text>
                <v-icon size="28" color="amber">favorite</v-icon>
              </v-btn> -->
              <v-btn icon text color="success">
                <v-icon size="28" color="white">local_mall</v-icon>
              </v-btn>
            </v-toolbar>
            <v-tabs
              grow
              color="white"
              dark
              class="mt-n2"
              background-color="success"
              center-active
              centered
              >
              <v-tab href="#produto">Produto</v-tab>
              <v-tab href="#descricao">Descrição</v-tab>
              <v-tab href="#avaliacoes">Avaliações</v-tab>
              <v-tab-item id="produto">
                <v-card flat color="white">
                  <v-carousel
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
                  <v-container v-for="prod in produto" :key="prod.id" class="grey lighten-4">
                    <div class="headline text-capitalize grey--text text--darken-3 font-weight-light text-justify">{{prod.nome}}</div>
                    <div class="caption grey--text text--darken-3 text-justify font-weight-light">por <router-link :to="`/perfil/${prod.idprodutor}`" class="remove-text-underline grey--text font-weight-medium"><span>{{prod.produtor}}</span></router-link></div>
                    <div class="display-1 text-justify grey--text text--darken-3 font-weight-light">R$ {{prod.preco}}</div>
                    <v-form color="white">
                      <v-text-field
                        prepend-inner-icon="store"
                        class="mt-2 mb-n4"
                        label="solo"
                        :value="`Estoque: ${prod.estoque} ${prod.medida}`"
                        solo
                        flat
                        disabled
                      ></v-text-field>
                      <v-divider></v-divider>
                      <v-text-field
                        prepend-inner-icon="add"
                        type="number"
                        class="mt-n4 mb-5"
                        label="solo"
                        placeholder="Quantidade"
                        solo
                        flat
                        color="success"
                        clearable
                        v-model="prod.quantidade"
                      ></v-text-field>
                      <v-btn block color="success" depressed class="mt-n5"> Adicionar à sacola </v-btn>         
                    </v-form>
                  </v-container>
                </v-card>
              </v-tab-item>
              <v-tab-item id="descricao">
                <v-card flat>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero neque soluta, rerum culpa minima pariatur cumque accusamus laudantium veniam asperiores eligendi, repellat ipsa sequi, similique dolores commodi minus laborum.
                </v-card>
              </v-tab-item>
              <v-tab-item id="avaliacoes">
                <v-card flat>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero neque soluta, rerum culpa minima pariatur cumque accusamus laudantium veniam asperiores eligendi, repellat ipsa sequi, similique dolores commodi minus laborum.
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import {voltar} from '../services/helpers'
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
        {nome:'Tangerina da boa', produtor:'Loja de Frutas',idprodutor:1,preco:'5.00', estoque:10,medida:'Unidades', categoria:'Frutas',subcategoria:'Sem veneno',rate:4, id:1}
      ],
      tab: null,
      tabs:3,
    }
  },
  methods:{
    voltar,
  }
}
</script>

<style>
.remove-text-underline{
  text-decoration: none;
}
</style>