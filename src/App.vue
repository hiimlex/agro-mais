<template>
  <v-app class="poppins-font bc-white">
    <Navbar class="hidden-md-and-up"/>
    <Navbarxl class="hidden-sm-and-down"/>
        <v-content class="grey lighten-4 justify-content-center" transition="fade-transition">
            <router-view transition="fade"/>
            
            <FloatBtn class="hidden-md-and-up"/>
        </v-content>
    <BottonNavAgro v-if="$store.state.login"/>
  </v-app>  
</template>

<script>
import Navbarxl from "./components/Navbarxl"
import { validaToken } from "./mixins";
import FloatBtn from "./components/Floatbtn";
import Navbar from "./components/Navbar";
import BottonNavAgro from "./views/BottonNavAgro";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Navbar, BottonNavAgro, FloatBtn,Navbarxl },
  mixins: [validaToken]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap");

html {
  overflow: hidden !important;
}
.poppins-font {
  font-family: "Poppins", sans-serif !important;
}
.bc-white {
  background: #fefefe !important;
}
.success {
  color: #009b36 !important;
}
.border-botton-grey {
  border-bottom: 1.4px solid #e0e0e0 !important;
}
.link {
  text-decoration: none;

  border-bottom: 1.6px solid #e0e0e0 !important;
}
.add-btn {
  position: fixed;
  right: 5%;
  bottom: 12%;
  color: white !important;
}

</style>
