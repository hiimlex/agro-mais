<template>
  <v-row class="my-auto" v-if="produtos">
    <v-col
      cols="6"
      xs="6"
      sm="4"
      md="4"
      lg="3"
      xl="3"
      class="d-flex"
      v-for="produto in produtos"
      :key="produto.id"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="mx-auto justify-content-center pb-4"
           :elevation="hover ? 12 : 4"
          link
          :to="{name: 'produto', params:{id: produto.id}}"
        >
          <v-img max-height="60%" min-height="52%" :src="produto.imagem_produto[0].imagem"></v-img>
          <v-card-title class="justify-center mb-n2 text-no-wrap">{{produto.nome}}</v-card-title>
          <v-card-text class="justify-center mb-n5">
            <v-row
              class="justify-center subtitle-1 text-truncate"
            >{{produto.produtor.pessoa[0].nome}}</v-row>
            <v-row class="justify-center green--text subtitle-2">R$ {{produto.preco}}</v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { api } from "@/services";
import { serialize } from "@/helpers";
export default {
  data() {
    return {
      produtos: null,
      busca: null
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      console.log(query);
      if (query) {
        console.log(`produtos${query}`);
        return `produtos${query}`;
      } else {
        return "/produtos";
      }
    }
  },
  methods: {
    getProdutos() {
      this.produtos = null;
      api.get(this.url).then(response => {
        if (response.data) {
          this.produtos = response.data.produtos;
          console.log(this.produtos);
        }
      });
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>
.card-text {
  margin-top: -4%;
}
</style>