<template>
  <v-container class="my-auto">
    <v-form ref="form" v-model="valid"
    lazy-validation class="hidden-md-and-down">
      <v-card
        class="mx-auto text-center"
        max-width="500"
      >
        <v-card-title class="title font-weight-regular justify-center">
          <span >Olá! Insira seu E-mail e Senha para continuar.</span>
        </v-card-title>
            <v-card-text>
              <v-text-field
                placeholder="Digite seu email"
                color="success"
                v-model="login.email"           
                :rules="emailRules"
                label="Email"
                required
                autocorrect="off" autocapitalize="none"
              ></v-text-field>
              <span class="caption grey--text text--darken-1">
                Este é o email que você irá utilizar para entrar na sua conta Agro+
              </span>
              <v-text-field
                placeholder="Digite sua senha"
                label="Senha"
                type="password"
                color="success"
                v-model="login.pass"
                :rules="passRules"
                required
              ></v-text-field>
              <span class="caption grey--text text--darken-1">
                  Por favor entre com sua senha
                </span>
                <v-spacer></v-spacer>
                <v-btn class="success--text white" text depressed >Não sei minha senha</v-btn>
            </v-card-text>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text to="/registrar">Criar conta</v-btn>
              <div class="flex-grow-1"></div>
              <v-btn
              :disabled="!valid"
              color="success"
              @click.prevent="logar"
              >Login</v-btn>
            </v-card-actions>
      </v-card>
    </v-form>

    <!-- Mobile -->
    <v-form ref="form" v-model="valid"
    lazy-validation class="hidden-sm-and-up">
      <v-card
        class="mx-auto text-center"
        max-width="500"
        min-height="300"
        
      >
        <v-card-title class="title font-weight-regular justify-center">
          <span >Olá! Insira seu E-mail e Senha para continuar.</span>
        </v-card-title>
        <v-card-text>
          <!-- :rules="emailRules" -->
          <v-text-field
            type="email"
            color="success"
            v-model="login.email"           
            
            label="Email"
            required="Required"
            autocorrect="off" autocapitalize="none"
            shaped
            filled
            hint="Insira seu E-mail cadastrado na plataforma Agro+."
          ></v-text-field>
         <!--  :rules="passRules" -->
          <v-text-field
            :append-icon="show ? 'visibility' : 'visibility_off'"
            label="Senha"
            :type="show ? 'text' : 'password'"
            color="success"
            v-model="login.pass"
            
            required
            shaped
            @click:append="show = !show"
            filled
            hint="Sua senha deve conter mais de 6 caracteres."
          ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="success--text white" text depressed to="/recuperarsenha">Não sei minha senha</v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text to="/registrar">Criar conta</v-btn>
          <div class="flex-grow-1"></div>
          <v-btn
          :disabled="!valid"
          color="success"
          @click.prevent="logar"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    <!-- <router-view></router-view> -->
  </v-container>
  
</template>

<script>
 export default {
    data(){
      return{
        show: false,
        valid: true,
        password: 'Password',
      login: {
        email: "",
        pass: ""
      },
        emailRules: [
          v => /.+@.+\..+/.test(v) || 'Insira um E-mail válido',
        ],
        passRules:[
          v => v >= 6 || 'Sua senha deve possuir mais de 6 caracteres'
        ]
    }
  },
    methods:{
      logar() {
        this.$store.dispatch("logarUsuario", this.login).then(response => {
        this.$router.push("/");
      });
    }
  }
}
</script>

<style>
</style>