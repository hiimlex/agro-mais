<template>
  <v-container class="my-auto">
    <v-list>
      <v-list-item-group v-model="produtos" color="success" v-for="produto in produtos" :key="produto.id">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="produto.foto"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="produto.nome"></v-list-item-title>
                <v-list-item-subtitle>Quantidade: {{produto.quantidade}}</v-list-item-subtitle>
                <v-list-item-subtitle>Valor: R$ {{produto.valor}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="success">close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
          </v-list-item-group>
    </v-list>
    <v-btn block color="success">Comprar</v-btn>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      produtos:[
        {
          foto:require('../assets/produto.jpg'),nome:'Nome',quantidade:3,valor:5.50,id:0
        }
      ]
    }
  }
}
</script>

<style>
.sacola{
  font-size: 26px !important;
}
</style>