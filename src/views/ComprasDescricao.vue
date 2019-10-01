<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card>
            <v-app-bar color="success">
              <v-btn icon text color="success" to="/compras">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text m-2l font-weight-bold title">Descrição</v-toolbar-title>
            </v-app-bar>
            <v-container>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      dialog: true
    }
  }
}
</script>

<style>
  .card.aceito{
    border-left: 4px solid #00E676;
  }
  .card.negado{
    border-left: 4px solid #FF5722;
  }
  .card.pendente{
    border-left: 4px solid #FFC107;
  }
  .card.cancelado{
    border-left: 4px solid #607D8B;
  }
  .card.entregue{
    border-left: 4px solid #009B36;
  }
</style>