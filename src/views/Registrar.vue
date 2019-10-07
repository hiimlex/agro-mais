<template>
  <v-container class="my-auto">
  <v-container fluid>
  <!-- <v-divider class="hidden-md-and-up"></v-divider> -->
  <v-form class=" hidden-sm-and-up">
    <v-card 
      class="mx-auto"
      max-width="500"
    >
      <v-card-title class="title font-weight-regular justify-center">
        <span>Crie sua contra Agro+</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          type="email"
          filled
          color="success"
          v-model="email"           
          :rules="emailRules"
          label="Email"
          required
          autocorrect="off" autocapitalize="none"
          shaped
          hint="Este é o email que você irá utilizar para entrar na sua conta Agro+"
        ></v-text-field>
        <v-text-field
          :append-icon="show ? 'visibility' : 'visibility_off'"
          filled
          label="Senha"
          :type="show ? 'text' : 'password'"
          color="success"
          v-model="pass"
          :rules="passRules"
          required
          shaped
          hint="Este é a senha que você irá utilizar para entrar na sua conta Agro+"
        ></v-text-field>
        <v-checkbox v-model="termos" color="success" label="Você aceita os termos de usuário ?" class="ml-1 mt-n3 mb-n3" @click.prevent="aceitarTermos()"></v-checkbox>
      </v-card-text>
      
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text to="/login">Fazer login</v-btn>
        <div class="flex-grow-1"></div>
        <v-btn
        color="success"
        @click="createAccount"
        :disabled="!active"
        >Criar conta</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
  <!-- snackbar -->
  <v-snackbar
  v-model="snackbarHidden"
  :color="cor"
  class="white--text"
  :timeout="timeout"
  >
    {{ message }}
  </v-snackbar>
  <v-row justify="center">
    <v-dialog v-model="modal" persistent max-width="290" scrollable>
      <v-card>
        <v-card-title class="headline">Termos de usuário</v-card-title>
        <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vel suscipit, id deleniti odio quia a accusantium optio sit nihil eligendi, delectus maiores dicta voluptatem. Deleniti porro quae tempora minima.
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" text @click="modal = false">Aceito</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</v-container>
</template>

<script>
import api from '@/services/api'
import router from '@/router'

export default {
  data(){
    return{
      show: false,
      active: true,
      password: 'Password',
      cor: 'success',
      valid: true,
      timeout:6000,
      snackbarHidden:false,
      message: null,
      email: '',
      termos:false,
      status: false,
      modal:false,
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'Insira um E-mail válido',
      ],
      pass: null,
      passRules:[
        v => v >= 6 || 'Sua senha deve possuir mais de 6 caracteres'
      ]
    }
  },
  methods:{
      createAccount(){
        if(this.pass !== null){
          this.active = false,
          api
          .post('registro',{
            email: this.email,
            pass: this.pass
        }).then(response => {
          this.cor = 'success',
          this.message = response.data.message,
          this.snackbarHidden = true
          this.status = true
          setTimeout(function () {
          router.replace('/login')
        }, 3000);
        }).catch(error =>{
          this.cor = 'error',
          this.message = error.response.data.error,
          this.snackbarHidden = true,
          this.active = true
        })
      }
    },
    aceitarTermos(){
      if(this.modal !== null){
        this.modal = true
        this.termos = true
      }
    },
    negarTermos(){
      this.modal = false
      this.termos = false
    }
  }

}
</script>

<style>

</style>