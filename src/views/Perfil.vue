<template>
  <v-container>
    <!-- mobile -->
    <div class="hidden-md-and-up">
      <v-row justify="center">
        <v-dialog
          fullscreen
          light
          v-model="dialog"
          hide-overlay
          transition="dialog-botton-transition"
        >
          <v-card class="grey lighten-5">
            <v-app-bar class="border-botton-grey" flat>
              <v-btn icon text color="white" disabled>
                <v-icon size="28" color="success"></v-icon>
              </v-btn>
              <div class="flex-grow-1"></div>
              <router-link to="/" class="router-bar">
                <v-toolbar-title class="logo">Agro+</v-toolbar-title>
              </router-link>
              <div class="flex-grow-1"></div>
              <v-btn icon text color="white" disabled>
                <v-icon size="28" color="success"></v-icon>
              </v-btn>
            </v-app-bar>
            <v-container v-show="photo">
              <div class="text-center">
                  <h4 class=" subtitle font-weight-regular mb-3 grey--text text--darken-2">Informações de Perfil</h4>
                  <v-responsive>
                    <v-avatar size="128"><v-img src="../assets/padrao.jpg"></v-img></v-avatar>
                  </v-responsive>
                  <h3 class="font-weight-medium mt-2"><span>{{nome}}</span></h3>

              </div>
            </v-container>
            <v-container fluid class="mb-5">
              <v-alert
                v-if="p_incomplete"
                class="white--text"
                color="success"
                icon="person"
                dismissible
                prominent
                dense
              >{{p_incomplete}}</v-alert>
              <v-divider></v-divider>
              <v-list class="grey lighten-5">
                <v-subheader>CONFIGURAÇÕES DA CONTA</v-subheader>
                
                <v-list-item-group>
                 
                  <v-list-item v-if="p_incomplete" :to="{name: 'informacoes'}">
                    <v-icon left>person</v-icon>
                    <v-list-item-title right>Concluir Cadastro</v-list-item-title>
                  </v-list-item>
             
                  <v-list-item to="compras">
                    <v-icon left>receipt</v-icon>
                    <v-list-item-title right>Compras</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="editar">
                    <v-icon left>edit</v-icon>
                    <v-list-item-title right>Editar Perfil</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-divider></v-divider>
              <div class="text-center">
                {{p_incomplete}}
                <v-btn text @click="sair">SAIR</v-btn>
              </div>
              <br />
              <br />
            </v-container>
            <BottonNavAgro />
          </v-card>
        </v-dialog>
      </v-row>
      <transition mode="out-in">
        <router-view ></router-view>
      </transition>
    </div>
  </v-container>
</template>

<script>
import BottonNavAgro from "./BottonNavAgro";
import { mapState } from "vuex";

export default {
  components: { BottonNavAgro },

  data() {
    return {
      nome: "Nome do cara",
      dialog: true,
      links: [
        { icon: "receipt", route: "/compras", text: "Compras" },
        { icon: "local_atm", route: "/vendas", text: "Vendas" },
        {
          icon: "local_offer",
          route: "/perfil/informacoesvendas",
          text: "Informações para Anunciar"
        },
        {
          icon: "local_mall",
          route: "/perfil/informacoes",
          text: "Informações para Comprar"
        },
        { icon: "edit", route: "/perfil/editar", text: "Editar Perfil" }
      ],
      photo: false
    };
  },
  computed: {
    ...mapState(["p_incomplete", "usuario"])
  },

  methods: {
    sair() {
      this.$store.dispatch("deslogar").then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
.m-2l {
  margin-left: -3%;
}
</style>