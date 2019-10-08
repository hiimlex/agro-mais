<template>
  <v-container class="my-auto">
    <div class="hidden-md-and-up">
      <div class="text-center">
        <h4 class=" subtitle font-weight-regular mb-3 grey--text text--darken-2">Preencha as informações a seguir para habilitar a função de anunciar!</h4>
      </div>
      <v-form class="hidden-md-and-up">
        <v-card 
          class="mx-auto"
          max-width="500"
        >
          <v-card-title class="title font-weight-regular justify-center">
            <span>Informações para anuncios</span>
          </v-card-title>
          <v-divider class="mb-3"></v-divider>
          <div class="text-center mb-3">
            <v-avatar size="128">
              <v-img :src="preview"></v-img>
            </v-avatar>
          </div>
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Enviar foto para perfil"
            prepend-icon="mdi-camera"
            label="Perfil"
            color="success"
            v-model="img"
            class="ml-3 mr-4"
            required
            @click:clear="cleanIMG"
          ></v-file-input>
          <v-textarea
            filled
            shaped
            v-model="descricao"
            type="text"
            label="Descrição"
            color="success"
            hint="Descrição da loja"
            required
            counter
            maxlength="100"
            class="ml-3 mr-3"
            ></v-textarea>
          <v-checkbox v-model="entrega" color="success" label="Faz entrega ?" class="ml-3 mt-n4"></v-checkbox>
          <v-select
            prepend-icon="local_shipping"
            v-if="entrega === true"
            v-model="bairros"
            :items="items"
            small-chips
            label="Bairros"
            multiple
            color="success"
            class="ml-3 mr-3 mt-n4"
            persinstent-hint="Selecione os bairros que atende"
            item-color="success"
            clearable
            required
          ></v-select>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="success">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      dialog: true,
      rules: [
        value => !value || value.size < 5000000 || 'O Arquivo deverá ser menor do que 5 MBs!',
      ],
      img:null,
      preview:'http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg',
      descricao:'',
      entrega: null,
      items:['Crato em geral','Seminário','São Miguel','Vila Alta','Novo Crato','Parque Recreio','Pinto Madeira','Muriti','Gizélia Pinheiro(batateiras)','Ossian Araripe(caixa D`água)'],
      bairros:[]
    }
  },
  methods:{
    cleanIMG(){
      this.img = null
    }
  },
  watch:{
    img:function(){
      if(this.img !== null){
      this.preview = URL.createObjectURL(this.img)
    } else {
      this.preview = URL.revokeObjectURL(this.img)
      this.preview = 'http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg'
      }
    }
  }
}
</script>

<style>

</style>