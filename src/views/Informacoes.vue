<template>
  <v-container class="my-auto" fluid>
    <div class="hidden-md-and-up">
      <v-row justify="center">
        <v-dialog fullscreen light v-model="dialog" hide-overlay transition="dialog-right-transition">
          <v-card class="grey lighten-5">
            <v-app-bar flat color="success">
              <v-btn icon text color="success" to="/perfil">
                <v-icon size="28" color="white">arrow_back</v-icon>
              </v-btn>
              <v-toolbar-title class="white--text m-2l font-weight-bold title"><b>Informações adicionais</b></v-toolbar-title>
            </v-app-bar>
            <v-container >
              <div class="text-center">
                <h4 class=" subtitle font-weight-regular mt-3 mb-3 grey--text text--darken-2">Preencha as informações a seguir para habilitar a função de compra!</h4>
              </div>
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
                    <v-radio-group v-model="pessoa.tipo" column>
                      <v-radio color="success" label="Pessoa Física" value="pf"></v-radio>
                      <v-radio color="success" label="Pessoa Jurídica" value="pj"></v-radio>
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
                    <v-form v-if="pessoa.tipo === 'pf'">
                      <br>
                      <v-text-field
                      filled
                      shaped
                      v-model="pessoa.nome"
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
                      v-model="pessoa.cpfcnpj"
                      label="CPF"
                      type="number"
                      color="success"
                      hint="Digite seu CPF."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="pessoa.contato"
                      label="Contato"
                      color="success"
                      type="number"
                      hint="Digite seu número de telefone ou WhatsApp"
                      required
                      ></v-text-field>
                    </v-form>
                    <!-- Conta juridica -->
                    <v-form v-if="pessoa.tipo === 'pj'">
                      <br>
                      <v-text-field
                      filled
                      shaped
                      v-model="pessoa.nome"
                      type="text"
                      label="Nome do responsável"
                      color="success"
                      hint="Digite o nome do responsável."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="pessoa.responsavel"
                      type="text"
                      label="Nome Fantasia"
                      color="success"
                      hint="Digite o nome fantasia."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="pessoa.cpfcnpj"
                      label="CNPJ"
                      type="number"
                      color="success"
                      hint="Digite o CNPJ."
                      required
                      ></v-text-field>
                      <v-text-field
                      filled
                      shaped
                      v-model="pessoa.contato"
                      label="Contato"
                      color="success"
                      type="number"
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
                      type="number"
                      v-model="logradouro.cep"
                      label="CEP"
                      hint="Ao digitar seu CEP nós iremos preencher automaticamente os dados abaixo, porém você ainda poderá autalizá-los."
                      color="success"
                      required
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="logradouro.endereco"
                      label="Endereço"
                      color="success"
                      required
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="logradouro.cidade"
                      label="Cidade"
                      color="success"
                      required
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="logradouro.bairro"
                      label="Bairro"
                      color="success"
                      required
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="text"
                      v-model="logradouro.complemento"
                      label="Complemento"
                      color="success"
                      ></v-text-field>
                      <v-text-field
                      shaped
                      filled
                      type="number"
                      v-model="logradouro.numero"
                      label="Número"
                      color="success"
                      required
                      ></v-text-field>
                    </v-form>
                    <v-btn text class="float-left" @click="e1--">Voltar</v-btn>
                    <v-btn
                      color="success"
                      @click="enviar"
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
import { api } from '@/services'

import { maskcpf,maskcep,maskcnpj,maskcontato } from 'vue-the-mask'
export default {
  directives:{
    maskcpf,maskcep,maskcnpj,maskcontato
  },
  data () {
      return {
        dialog:true,
        e1: 0,
        pessoa: {
            nome:null,
            responsavel:null,
            cpfcnpj: null,
            contato:null,
            tipo:'pf',
        },
        logradouro: {
            cep:null,
            endereco:null,
            bairro:null,
            cidade:null,
            complemento:null,
            numero:null,
            exibir: true,

        }
      }
    },
    methods:{
      enviar(){
        api
        .post("/registro_pessoa", {
          "pessoa": this.pessoa,
          "logradouro": this.logradouro
        }).then(response => {
          console.log(response)
        })
      }
    }
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