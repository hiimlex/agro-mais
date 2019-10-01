<template>
  <v-row class="my-auto">
    <v-col cols="6" xs="6" sm="4" md="4" lg="3" xl="3" class="d-flex" v-for="produto in produtos" :key="produto.id">
      <v-card
        class="mx-auto justify-content-center pb-4"
        elevation="2"
        link :to="produto.route"
      > 
          <v-img
            max-height="60%"
            min-height="52%"
            :src="produto.foto"
          >
          </v-img>
        <v-card-title class="justify-center mb-n2">{{produto.nome}}</v-card-title>
        <v-card-text class="justify-center mb-n5">
          <v-row class="justify-center subtitle-1">{{produto.produtor}}</v-row>
          <v-row class="justify-center green--text subtitle-2">R$ {{produto.preco}}</v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.50',route:'/produto',id:'asdas',rating:2.9 },
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asdasd',rating:4.5}
      ]
    }
  }
}
</script>

<style scoped>
  .card-text{
    margin-top: -4%;
  }
</style>