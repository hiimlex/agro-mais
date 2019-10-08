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
                        v-model="prod.quantidade"
                      ></v-text-field>
                      <v-btn block color="success" depressed class="mt-n5"> Adicionar à sacola </v-btn>         
                    </v-form>
                  </v-container>
                </v-card>
              </v-tab-item>
              <v-tab-item id="descricao">
                <v-container v-for="prod in produto" :key="prod.id" class="grey lighten-4 my-auto">
                    <div class="body-1 font-weight-light mb-3 grey--text text--darken-3"><span class="text-uppercase font-weight-medium">Categoria:</span> {{prod.categoria}}</div>
                    <div class="body-1 font-weight-light mb-3 grey--text text--darken-3"><span class="text-uppercase font-weight-medium">Subcategoria: </span> {{prod.subcategoria}}</div>
                    <div class="body-1 font-weight-light mb-3 grey--text text--darken-3 "><span class="text-uppercase font-weight-medium">descrição geral:</span></div>
                    <div class="body-1 font-weight-light text-justify grey--text text--darken-3">{{prod.descricao}} </div>
                </v-container>
              </v-tab-item>
              <v-tab-item id="avaliacoes">
                <v-container v-for="prod in produto" :key="prod.id" class="grey lighten-4 my-auto">
                  <div class="body-1 text-uppercase text-center font-weight-medium mb-2 grey--text text--darken-3">
                    Avaliação Total
                    <v-rating readonly color="amber" class="mt-n2" background-color="amber" half-increments v-model="prod.rate"></v-rating>
                  </div>
                  <div class="body-1 grey--text mt-n3 text--darken-1 text-center font-weight-light mb-2">({{prod.rate}})</div>
                  <v-card 
                  v-for="v in avaliacoes" :key="v.id" flat max-width="344"
                  class="mx-auto"
                  > 
                    <v-card-title class="body-1 grey--text text--darken-1 text-justify">
                      {{v.texto}}
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col>{{v.data}}</v-col>
                        <v-col>
                          <v-rating readonly size="22" class="mt-n1 float-right" dense color="amber" background-color="amber" half-increments v-model="v.rate"></v-rating>
                        </v-col>
                       </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                  </v-card>
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
        {nome:'Tangerina da boa', produtor:'Loja de Frutas',idprodutor:1,preco:'5.00', estoque:10,medida:'Unidades', categoria:'Frutas',subcategoria:'Sem veneno',rate:4.5, id:1, descricao:'Tangerina cultivada naturalmente sem nenhum uso de agrotóxicos.'}
      ],
      avaliacoes:[
        {texto:'Esse produto é muito bom!', rate:5,data:'13/08/2019',id:1},
        {texto:'Docinha que só o mel', rate:4, data:'15/08/2019',id:2},
        {texto:'Entregou dentro do prazo', rate:4, data:'14/08/2019',id:3},
        {texto:'Bom atendimento', rate:5, data:'12/08/2019',id:4}
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