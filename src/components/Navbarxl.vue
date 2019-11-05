<template>
  <div id="Navbar" class="my-auto">
    <!-- Desktop -->
    <div>
      <v-toolbar class="pa-2" elevation="2">
        <router-link to="/" class="router-bar">
          <v-toolbar-title class="logo">Agro+</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>
        <v-text-field
          autofocus
          placeholder="Buscar"
          color="success"
          clearable
          solo
          rounded
          v-model="busca"
          class="mt-8 border-color-green-search"
        >
          <template slot="append">
            <v-icon v-if="busca" color="success" @click.prevent="buscarProdutos">search</v-icon>
          </template>
        </v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text class="hover-link" to="login">Entrar</v-btn>
          <v-btn text class="hover-link" to="registrar">Cadastrar</v-btn>
          <v-btn text class="hover-link" to="anunciar">Anunciar</v-btn>
        </v-toolbar-items>

        <v-btn icon text color="white">
          <v-icon color="success" size="24">notifications</v-icon>
        </v-btn>
        <v-btn icon text color="white" @click="mall = !mall">
          <v-icon color="success" size="24">local_mall</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <v-navigation-drawer v-model="mall" app temporary right>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-title class="logo sacola">Sacola</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense three-line>
        <v-list-item-group
          v-model="produtos"
          color="success"
          v-for="produto in produtos"
          :key="produto.id"
        >
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
      <v-list-item>
        <v-list-item-content>Total: R$ {{total}}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <div class="d-flex">
            <v-btn class="mr-5" @click="limparSacola">Limpar</v-btn>
            <v-btn color="success" to="checkout">Comprar</v-btn>
          </div>
        </v-list-item-action>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mall: null,
      produtos: [
        {
          foto: require("../assets/produto.jpg"),
          nome: "Uva",
          quantidade: "3",
          valor: 5.5,
          id: 0
        }
      ],
      total: 28
    };
  },
  methods: {
    limparSacola() {
      (this.produtos = null), (this.total = "0");
    }
  }
};
</script>

<style>
</style>