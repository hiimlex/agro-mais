<template>
  <v-container class="my-auto">
    <v-row class="justify-center mt-5">
      <v-col cols="12" sm="10" lg="6" xl="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card class="mx-auto text-center">
            <v-card-title class="logo justify-center font-weight-black display-2">Agro+</v-card-title>
            <v-card-title class="title font-weight-regular justify-center">
              <span>Olá! Insira seu E-mail e Senha para continuar.</span>
            </v-card-title>
            <v-card-text>
              <!-- :rules="emailRules" -->
              <v-text-field
                type="email"
                color="success"
                v-model="login.email"
                label="Email"
                required="Required"
                autocorrect="off"
                autocapitalize="none"
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
                v-on:keyup.enter="logar"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn
                class="success--text white"
                text
                depressed
                to="/recuperarsenha"
              >Não sei minha senha</v-btn>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text to="/registrar">Criar conta</v-btn>
              <div class="flex-grow-1"></div>
              <v-btn :disabled="!valid" color="success" @click.prevent="logar">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
      <!-- <router-view></router-view> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      valid: true,
      password: "Password",
      login: {
        email: "",
        pass: ""
      },
      emailRules: [v => /.+@.+\..+/.test(v) || "Insira um E-mail válido"],
      passRules: [v => v >= 6 || "Sua senha deve possuir mais de 6 caracteres"]
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("logarUsuario", this.login).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
</style>