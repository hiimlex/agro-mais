<template>
  <div id="Navbar" class="my-auto">
    <!-- Mobile -->
    <v-app-bar class="border-botton-grey" elevation="0">
      <v-btn @click="drawer = !drawer" icon text color="white">
            <v-icon color="success" size="28">menu</v-icon>
      </v-btn>
      <div class="flex-grow-1"></div>
      <router-link to="/" class="router-bar">
            <v-toolbar-title class="logo">Agro+</v-toolbar-title>
      </router-link>
      <div class="flex-grow-1"></div>
      <v-btn icon text color="white" @click="mall = !mall">
            <v-icon color="success" size="28">local_mall</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list-item>
            <v-list-item-content class="text-center">
            <v-list-item-title class="logo">Agro+</v-list-item-title>
            </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
      <v-list-item
          link
          v-for="link in sidelinks"
          :key="link.title"
          router
          :to="link.route"
          color="success"
        >
          <v-list-item-icon>
            <v-icon left>{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle-1">{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-row>
          <v-col cols="2" class="ml-2">
            <v-icon right class="mt-n1">eco</v-icon>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="6">
            <div class="font-weight-medium">Categorias</div>
          </v-col>
          <v-col cols="1">
            <v-btn icon class="mt-n2">
              <v-icon size="24" @click="show = !show">keyboard_arrow_down</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-list-item v-show="show === true" v-for="categoria in categorias" :key="categoria.id">
          <v-list-item-icon>
            <v-icon right size="20">label</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitle-1">{{categoria.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item class="text-center">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <h3>SOBRE</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <p
              class="text-justify"
            >O Agro+Classificados visa auxiliar as atividades de exposição e vendas dos produtos de pequenos agricultores e pecuaristas, tendo em vista que, com frequência, a exposição dos seus produtos limitam-se apenas às feiras livres ou eventos não permanentes. Além disso, o número de clientes que visitam tais feiras é limitado a uma pequena região geográfica, geralmente de moradores de bairros ou cidades circunvizinhas.</p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
            <v-btn class="mr-5">Limpar</v-btn>
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
      drawer: null,
      mall: null,
      show: null,
      links: [
        { icon: "", text: "Login", route: "/login", id: "perfil" },
        { icon: "", text: "Comprar", route: "/compras", id: "comprar" },
        { icon: "", text: "Vender", route: "/vender", id: "vender" },
        { icon: "notifications", text: "", route: "", id: "notifications" }
      ],
      sidelinks: [
        { icon: "person", title: "Entrar", route: "/login" },
        { icon: "person_add", title: "Criar conta", route: "/registrar" },
        { icon: "local_atm", title: "Anunciar", route: "/anunciar" }
      ],
      categorias: [
        { name: "+Classificados", id: 1 },
        { name: "+Buscados", id: 2 },
        { name: "+Comprados", id: 3 },
        { name: "+Recomendados", id: 4 }
      ],
      produtos: [
        {
          foto: require("../assets/produto.jpg"),
          nome: "Uva",
          quantidade: "3",
          valor: 5.5,
          id: 0
        }
      ],
      total: 28,
      busca: null
    };
  }
};
</script>

<style >
.radius-plus {
  border-radius: 30px !important;
}
.logo {
  font-size: 36px !important;
  font-weight: 700;
  color: #009b36;
}
.router-bar {
  text-decoration: none;
}
.float-and-center {
  margin-top: 10% !important;
}
</style>