<template>
  <v-container class="my-auto">
    <v-row class="justify-center">
      <v-col cols="12" sm="10" md="6" xl="6">
        <v-card>
          <v-container>
            <div>
              <v-list disabled>
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
                  </v-list-item>
                  <v-divider></v-divider>
                </v-list-item-group>
              </v-list>
            </div>
          </v-container>
          <v-container>
            <div
              class="text-center grey--text text--darken-3 font-weight-medium"
            >Total a pagar: R$ {{total}}</div>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-card>
                <v-card-title class="headline">Pedido efetuado com sucesso</v-card-title>
                <v-card-text>Em breve você receberá uma notificação sobre o estado do seu pedido.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="success" text @click="dialog = false">OK!</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
          <v-row class="justify-center">
            <v-col cols="12" md="4" xl="4">
              <v-btn
                block
                color="success"
                :to="{name:'checkout'}"
                @click="dialog = !dialog"
              >Finalizar compra</v-btn>
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        {
          foto: require("../assets/produto.jpg"),
          nome: "Nome",
          quantidade: 3,
          valor: "5.50",
          id: 0
        },
        {
          foto: require("../assets/produto.jpg"),
          nome: "Nome",
          quantidade: 3,
          valor: "5.50",
          id: 0
        }
      ],
      total: "17.50",
      dialog: false
    };
  }
};
</script>

<style>
.sacola {
  font-size: 26px !important;
}
</style>