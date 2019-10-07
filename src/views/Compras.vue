<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card>
            <v-app-bar color="success" flat>
              <v-btn icon text color="success" to="/perfil">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text m-2l font-weight-bold title"><b>Compras</b></v-toolbar-title>
            </v-app-bar>
            <v-container>
              <v-expansion-panels>
                <v-expansion-panel v-for="card in cards" :key="card.id" :class="`card ${card.tipo}`">
                  <v-expansion-panel-header>
                    <v-row no-gutters>
                      <v-col xs="12">
                        <div class="body-2 grey--text font-weight-medium text-justify text-no-wrap text-capitalize">Compra: {{card.data}}</div>
                        <div class="body-2 grey--text font-weight-medium text-justify text-no-wrap text-capitalize">Itens: {{card.quantidade}}</div>
                        <div class="body-2 grey--text font-weight-medium text-justify text-no-wrap">Valor: R$ {{card.valor}}</div>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-subheader class="caption grey--text font-weight-medium text-justify text-no-wrap text-uppercase ml-n5 mb-n4"><v-icon left size="20">local_mall</v-icon>Produtos</v-subheader>
                    <v-list v-for="produto in produtos" :key="produto.id" dense>
                      <v-divider></v-divider>
                      <v-list-item readonly class="ml-n5 mt-n4">
                        <v-list-item-content class="mb-n5" dense>
                          <v-row class="mb-n3">
                            <v-col>
                              <div class="caption grey--text font-weight-medium text-justify text-no-wrap text-capitalize"><span class="font-weight-bold">{{produto.nome}}</span></div>
                            </v-col>
                            <v-col>
                              <div class="caption grey--text font-weight-medium text-justify text-no-wrap text-capitalize">Estado: <span :class="`produto ${produto.estado}`">{{produto.estado}}</span></div>
                            </v-col>
                            <v-col>
                              <div class="caption grey--text font-weight-medium text-justify text-no-wrap text-capitalize">Quantidade: {{produto.quantidade}}</div>
                            </v-col>
                            <v-col>
                              <div class="caption grey--text font-weight-medium text-justify text-no-wrap text-capita2962FFlize">Valor: R$ {{produto.valor}}</div>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
      count:1,
      dialog:true,
      cards:[
        {data:'10/08/2019',quantidade:'10' , valor:'3',tipo:'cart',id:1},
        {data:'10/08/2019',quantidade:'10' , valor:'3',tipo:'cart',id:2}
      ],
      produtos:[
        {nome:'Banana', quantidade:'2', valor:'3.00',estado:'aceito',id:1},
        {nome:'Banana', quantidade:'2', valor:'3.00',estado:'pendente',id:2},
        {nome:'Banana', quantidade:'2', valor:'3.00',estado:'negado',id:3},
        {nome:'Banana', quantidade:'2', valor:'3.00',estado:'entregue',id:4},
        {nome:'Banana', quantidade:'2', valor:'3.00',estado:'cancelado',id:5},
      ]
    }
  }
}
</script>

<style>
  .m-2l{
    margin-left: -3%;
  }
  .card.cart{
    border-left: 4px solid #009B36;
  }
  .produto.aceito{
    color: #8BC34A;
  }
  .produto.pendente{
    color: #2962FF;
  }
  .produto.negado{
    color: #F44336;
  }
  .produto.entregue{
    color: #009B36;
  }
  .produto.cancelado{
    color: #607D8B;
  }
</style>