<template>
  <v-container class="my-auto">
    <div class="hidden-md-and-up">
      <v-form class="hidden-md-and-up">
        <v-card 
          class="mx-auto"
          max-width="500"
        >
        <v-card-title class="title font-weight-regular justify-center">
          <span>Anunciar Produto</span>
          </v-card-title>
        <v-divider></v-divider>
          <v-container>
          <v-subheader class="text-uppercase mt-n5">Imagens do produto:</v-subheader>
          <v-fade-transition mode="out-in" >
            <v-row class="mt-n4">
              <v-col cols="4" sm="4" class="mt-n2 mb-2">
                <v-card flat tile>
                  <v-img 
                    :src="img[0]"
                    aspect-ratio="1"
                  >
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="4" sm="4" class="mt-n2 mb-2" >
                <v-card flat tile>
                  <v-img 
                    :src="img[1]"
                    aspect-ratio="1"
                  >
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="4" sm="4" class="mt-n2 mb-2">
                <v-card flat tile>
                  <v-img 
                    :src="img[2]"
                    aspect-ratio="1"
                  >
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-fade-transition>
          <v-file-input
            v-model="preview"
            color="success"
            accept="image/png, image/jpeg, image/bmp"
            label="Fotos do produto"
            placeholder="Envie suas fotos"
            prepend-icon=""
            prepend-inner-icon="mdi-paperclip"
            small-chips
            clearable
            multiple
          ></v-file-input>
          <v-divider></v-divider>
          <v-subheader class="text-uppercase ">Informações do produto:</v-subheader>
            <v-text-field
              filled
              shaped
              v-model="nome"
              type="text"
              label="Nome do produto"
              color="success"
              hint="Digite o nome do produto."
              required
              counter
              maxlength="20"  
              ></v-text-field>
            <v-select
              :items="items"
              filled
              shaped
              v-model="categoria"
              label="Categoria"
              required
              color="success"
              item-color="success"
              transition="slide-x-transition"
            ></v-select>
            <v-text-field
              filled
              shaped
              v-model="subcategoria"
              type="text"
              label="Subcategoria"
              color="success"
              hint="Digite a subcategoria do produto."
              required
              counter
              maxlength="20"
              ></v-text-field>
            <v-text-field
              filled
              shaped
              v-model="preco"
              type="text"
              label="Preço"
              color="success"
              hint="Digite o preço do produto."
              required
              v-mask="mask"
              ></v-text-field>
              <v-text-field
              filled
              shaped
              v-model="estoque"
              type="text"
              label="Estoque"
              color="success"
              hint="Digite a quantidade de produtos disponíveis."
              v-mask="mask1"
              required
              ></v-text-field>
            <v-select
              :items="medidas"
              filled
              shaped
              v-model="medida"
              label="Medida"
              required
              color="success"
              item-color="success"
              transition="slide-x-transition"
            ></v-select>
            <v-textarea
              filled
              shaped
              v-model="descricao"
              type="text"
              label="Descrição"
              color="success"
              hint="Digite a descrição do produto"
              required
              counter
              maxlength="100"
              no-resize
              ></v-textarea>
            <v-divider></v-divider>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="success">Anunciar</v-btn>
            </v-card-actions>
            </v-container>
          </v-card>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { mask, mask1 } from 'vue-the-mask'
export default {
  directives:{
    mask, mask1
  },
  data(){
    return{
      rules: [
        value => !value || value.size < 3000000
      ],
      dialog: true,
      nome: '',
      categoria:'',
      items:['sla'],
      subcategoria:'',
      descricao:'',
      estoque:'',
      medidas:['Kg','l','Unidade','m','T'],
      medida:'',
      preco:'',
      n: 3,
      mask: '######.##',
      mask1:'#####',
      img:[require('../assets/produto.jpg'),require('../assets/produto.jpg'),require('../assets/produto.jpg')],
      preview:[]
    }
  },
  watch:{
    preview:function(){
      if(this.preview.length > 0){
        let test = this.preview.map(URL.createObjectURL)
        let j = 0
        for(let i = 0; i < test.length; i++){
          this.img.splice(j,1,test[i])
          j ++
        }
      } else {
        this.preview.map(URL.revokeObjectURL)
        this.img = [require('../assets/produto.jpg'),require('../assets/produto.jpg'),require('../assets/produto.jpg')]
      }
    }
  }
}

</script>

<style>

</style>