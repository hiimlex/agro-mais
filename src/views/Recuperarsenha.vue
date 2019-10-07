<template>
  <v-container class="my-auto">
    <v-container fluid>
    <v-card
      class="mx-auto text-center"
      max-width="500"
    >
      <v-card-title class="title font-weight-regular justify-center">
        <span >Insira seu E-mail para recuperar sua senha.</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          type="email"
          color="success"
          v-model="email"
          label="Email"
          required="Required"
          autocorrect="off" autocapitalize="none"
          shaped
          filled
          hint="Insira o email que você utilizou para criar sua conta Agro+."
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text to="/login">Fazer login</v-btn>
        <div class="flex-grow-1"></div>
        <v-btn
          color="success"
          >Enviar</v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      email:''
    }
  }
}
</script>

<style>

</style>