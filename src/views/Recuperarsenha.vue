<template>
      <v-container class="my-auto">
            <v-row class="justify-center mt-5">
                  <v-col cols="12" sm="10" lg="6" xl="6">
                        <v-card
                              class="mx-auto text-center"
                              max-width="500"
                        >
                              <v-card-title class="logo justify-center font-weight-black display-2">Agro+</v-card-title>
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
                  </v-col>
            </v-row>
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