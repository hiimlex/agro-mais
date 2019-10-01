<template>
  <v-row class="my-auto">
    <v-col cols="12" sm="6" md="6" lg="4" class="d-flex" v-for="produto in produtos" :key="produto.id">
      <v-card
        class="mx-auto justify-content-center"
        elevation="2"
        link :to="produto.route"
        height="148"
      >
        <v-row>
          <v-col cols="6" class="shrink mt-n3 mb-n3">
            <v-img height="148" :src="produto.foto"></v-img>
          </v-col>
          <v-col cols="6">
            <div xs="6" md="4" lg="3" class="ml-n4">
              <v-card-title xs="6" class="justify-center mb-n2">{{produto.nome}}</v-card-title>
              <v-card-text class="justify-center">
                <v-row class="justify-center subtitle-1">{{produto.produtor}}</v-row>
                <v-row class="justify-center green--text subtitle-2">R$ {{produto.preco}}</v-row>
              </v-card-text>
              </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      widthDevice:'',
      produtos: [
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.50',route:'/produto',id:'asdas',rating:2.9 },
        { nome: 'Uva', produtor: 'Loja de frutas', foto: '/uva.jpeg',preco:'3.40',route:'/produto',id: 'asdasd',rating:4.5}
      ]
    }
  }
}
</script>

<style>

</style>