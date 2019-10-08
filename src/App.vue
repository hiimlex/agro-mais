<template>
  <v-app class="poppins-font bc-white">
    <Navbar/>
        <v-content class="grey lighten-5 justify-content-center" transition="fade-transition">
            <router-view transition="fade"/>
            <FloatBtn class="hidden-md-and-up"/>
        </v-content>
    <BottonNavAgro/>
  </v-app>  
</template>

<script>
import FloatBtn from './components/Floatbtn'
import Navbar from './components/Navbar'
import BottonNavAgro from './views/BottonNavAgro'
export default {
  name: 'App',
  components: {Navbar,BottonNavAgro, FloatBtn}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap');
.poppins-font{
  font-family: 'Poppins', sans-serif !important;
}
.bc-white{
  background: #fefefe !important;
}
.success{
  color: #009B36 !important;
}
.border-botton-grey{
    border-bottom: 1.6px solid #E0E0E0 !important;
}
.add-btn{
  position: fixed;
  right: 5%;
  bottom: 12%;
  color: white !important;
}
</style>
