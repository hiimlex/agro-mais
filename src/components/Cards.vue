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
        <v-card-title class="justify-center mb-n2 text-no-wrap">{{produto.nome}}</v-card-title>
        <v-card-text class="justify-center mb-n5">
          <v-row class="justify-center subtitle-1 text-truncate">{{produto.produtor}}</v-row>
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
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.50',route:'/produto',id:'asdasss',rating:2.9 },
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asdsd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asdasscd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asdassd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asdasdd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'assdsd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'ascasd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asdasd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'adasd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asd',rating:4.5},
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'aasd',rating:4.5},
        { nome: 'Uva Roxa', produtor: 'Agro Frutas', foto: '/uva.jpeg',preco:'2.00',route:'/produto',id:'asdas',rating:2.9 },
        { nome: 'Kiwi', produtor: 'Loja de frutas', foto: '/kiwi.jpeg',preco:'10.0',route:'/produto',id: 'asdasdasda',rating:4.5}
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