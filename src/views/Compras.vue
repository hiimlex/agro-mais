<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card>
            <v-app-bar class="border-botton-grey" flat>
              <v-btn icon text color="white" to="/perfil">
                <v-icon size="28" color="success">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="success--text m-2l font-weight-bold title">Compras</v-toolbar-title>
            </v-app-bar>
            <v-container>
              <v-card class="pa-2 body-2 mb-2" v-for="card in cards" :key="card.id" link to="/compras/descricao">
                <v-row wrap :class="`mt-n2 mb-n2 card ${card.tipo}`">
                  <v-col xs="3" md="4">
                    <div class="caption grey--text font-weight-medium text-justify text-no-wrap text-capitalize">Compra: {{card.data}}</div>
                  </v-col>
                  <v-col xs="3" md="4">
                    <div class="caption grey--text font-weight-medium text-justify text-no-wrap text-capitalize">Itens: {{card.quantidade}}

                    </div>
                  </v-col>
                  <v-col xs="3" md="4">
                    <div class="caption grey--text font-weight-medium text-justify text-no-wrap">
                      Valor: R${{card.valor}}
                    </div>
                  </v-col>
                </v-row>
              </v-card>
              
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
      dialog:true,
      cards:[
        {data:'10/08/2019',quantidade:'12' , valor:'3',tipo:'cart'},
        {data:'10/08/2019',quantidade:'12' , valor:'3',tipo:'cart'},
        {data:'10/08/2019',quantidade:'12' , valor:'3',tipo:'cart'},
        {data:'10/08/2019',quantidade:'12' , valor:'3', tipo:'cart'},
        {data:'10/08/2019',quantidade:'12' , valor:'3', tipo:'cart'}
      ]
    }
  }
}
</script>

<style>
  .m-2l{
    margin-left: -3%;
  }
  .card.normal{
    border-left: 4px solid #607D8B;
  }
  .card.cart{
    border-left: 4px solid #009B36;
  }
</style>