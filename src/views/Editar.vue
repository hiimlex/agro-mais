<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-right-transition">
          <v-card>
            <v-app-bar color="success" flat>
              <v-btn icon text  color="success" to="/perfil">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text m-2l font-weight-bold title"><b>Editar Perfil</b></v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-app-bar>
            <br>
            <div class="text-center"><h3 class="font-weight-medium">Informações Pessoais</h3></div>
            
            <v-container>
              <v-divider></v-divider>
              <br>
              <h4 class="font-weight-medium grey--text">TIPO DA CONTA: <span>{{tipo}}</span></h4>
              <br>
              <!-- Form Fisica -->
              <v-form v-if="tipo === 'Fisica'">
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Nome"
                v-model="nome"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                disabled
                color="success"
                label="CPF"
                v-model="cpf"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Contato"
                v-model="contato"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="CEP"
                v-model="cep"
                hint="Ao digitar seu CEP nós iremos preencher automaticamente os dados abaixo, porém você ainda poderá autalizá-los."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Endereço"
                v-model="endereco"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Bairro"
                v-model="bairro"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Cidade"
                v-model="cidade"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
              </v-form>
              <!-- Form Juridica -->
              <v-form v-if="tipo === 'Juridica'">
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Nome do responsável"
                v-model="nome"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Nome Fantasia"
                v-model="responsavel"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                disabled
                color="success"
                label="CNPJ"
                v-model="cnpj"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Contato"
                v-model="contato"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="CEP"
                v-model="cep"
                hint="Ao digitar seu CEP nós iremos preencher automaticamente os dados abaixo, porém você ainda poderá autalizá-los."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Endereço"
                v-model="endereco"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Bairro"
                v-model="bairro"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
                <v-text-field
                type="text"
                shaped
                filled
                color="success"
                label="Cidade"
                v-model="cidade"
                hint="Se lembre de salvar as alterações antes de sair."
                ></v-text-field>
              </v-form>
              <v-card-actions>
                <v-btn text to="/perfil">Voltar</v-btn>
                <div class="flex-grow-1"></div>
                <v-btn color="success">Salvar</v-btn> 
              </v-card-actions>
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
      nome:'José',
      cpf:'782.123.452-15',
      cnpj:'',
      responsave:'',
      tipo:'Fisica',
      contato:'(88) 99090-9899',
      cep: '61235-123',
      endereco: 'Rua José da Penha, 88',
      bairro: 'Seminário',
      cidade: 'Crato',
    }
  }
}
</script>

<style>
  .m-2l{
    margin-left: -3%;
  }
</style>