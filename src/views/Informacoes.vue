<template>
  <v-container class="my-auto">
    <div class="hidden-sm-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-botton-transition">
          <v-card class="grey lighten-5">
            <v-app-bar flat class="border-botton-grey">
              <v-btn icon text color="white" to="/perfil">
                <v-icon size="28" color="success">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="success--text m-2l font-weight-bold title">Informações adicionais</v-toolbar-title>
            </v-app-bar>
            <v-container >
              <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step editable color="success" :complete="e1 > 1" step="1">Informações pessoais</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step editable color="success" :complete="e1 > 2" step="2">Logradouro</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step editable color="success" step="3">Fim</v-stepper-step>

              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card flat mb-1>
                    <v-container>
                    <v-card-title class="title font-weight-regular justify-center text-center">
                      <span>Informe qual tipo de conta você deseja criar.</span>
                    </v-card-title>
                    <v-radio-group v-model="conta" column>
                      <v-radio color="success" label="Pessoa Física" value="F"></v-radio>
                      <v-radio color="success" label="Pessoa Jurídica" value="J"></v-radio>
                    </v-radio-group>
                    </v-container>
                    <v-btn
                      color="success"
                      @click="e1 = 2"
                      class="float-right"
                      >
                      Continuar
                      </v-btn>
                  </v-card>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card flat>
                      <v-card-title class="title font-weight-regular justify-center">
                      <span>Informações Pessoais</span>
                    </v-card-title>
                    <!-- Conta fisica -->
                    <v-form v-if="conta === 'F'">
                      <br>
                      <v-text-field
                      filled
                      shaped
                      v-model="nome"
                      type="text"
                      label="Nome completo"
                      color="success"
                      hint="Digite seu nome completo."
                      required
                      counter
                      maxlength="50"
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="cpf"
                      label="CPF"
                      type="text"
                      color="success"
                      hint="Digite seu CPF."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="contato"
                      label="Contato"
                      color="success"
                      type="text"
                      hint="Digite seu número de telefone ou WhatsApp"
                      required
                      ></v-text-field>
                    </v-form>
                    <!-- Conta juridica -->
                    <v-form v-if="conta === 'J'">
                      <br>
                      <v-text-field
                      filled
                      shaped
                      v-model="nome"
                      type="text"
                      label="Nome do responsável"
                      color="success"
                      hint="Digite o nome do responsável."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="responsavel"
                      type="text"
                      label="Nome Fantasia"
                      color="success"
                      hint="Digite o nome fantasia."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="cnpj"
                      label="CNPJ"
                      type="text"
                      color="success"
                      hint="Digite o CNPJ."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="contato"
                      label="Contato"
                      color="success"
                      type="text"
                      hint="Digite o número de telefone ou WhatsApp"
                      required
                      ></v-text-field>
                    </v-form>
                      <v-btn text class="float-left" @click="e1--">Voltar</v-btn>
                      <v-btn
                        color="success"
                        @click="e1 = 3"
                        class="float-right"
                      >
                        Continuar
                      </v-btn>
                  </v-card>
                </v-stepper-content>

                <v-stepper-content step="3">
                  
                    <v-card-title class="title font-weight-regular justify-center">
                      <span>Logradouro</span>
                    </v-card-title>
                    <v-form>
                      <br>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="cep"
                      label="CEP"
                      hint="Ao digitar seu CEP nós iremos preencher automaticamente os dados abaixo, porém você ainda poderá autalizá-los."
                      color="success"
                      required
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="endereco"
                      label="Endereço"
                      color="success"
                      required
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="bairro"
                      label="Bairro"
                      color="success"
                      required
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="cidade"
                      label="Cidade"
                      color="success"
                      required
                      ></v-text-field>
                        <v-checkbox v-model="exibir" color="success" label="Deseja exibir endereço durante a compra ?" class="ml-1"></v-checkbox>
                    </v-form>
                    <v-btn text class="float-left" @click="e1--">Voltar</v-btn>
                    <v-btn
                      color="success"
                      @click="e1 = 2"
                      class="float-right"
                    >
                      Finalizar
                    </v-btn>
                  
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
      return {
        dialog:true,
        e1: 0,
        conta:'F',
        nome:null,
        responsavel:null,
        cnpj:null,
        cpf:null,
        contato:null,
        cep:null,
        endereco:null,
        bairro:null,
        cidade:null,
        exibir:false,
      }
    },
}
</script>

<style>
  .margin-minor{
    margin-top: -11%;
  }
  .m-2l{
    margin-left: -3%;
  }
  .border-botton-grey{
    border-bottom: 1.4px solid #E0E0E0 !important;
  }
</style>