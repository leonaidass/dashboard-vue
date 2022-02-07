<template>
  <v-app id="inspire">
     <Cabecera v-if="loginState"  @cerrarDrawer="drawer=!drawer" />
     <Menu v-if="loginState" :drawer="drawer"/>
   

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Menu from "./components/Menu.vue"
import {mapGetters } from "vuex"

  export default {
    components:{
      Cabecera,
      Menu
      
    },
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: true,
      login:false
      
    }),
     computed: {
    ...mapGetters(["loginState"]),
   
  },
    
   created() {
     
    const expires = localStorage.getItem("expires");
    
    //expires trae de localstore la fecha y hora de momento
    const token = localStorage.getItem("token");

    if (expires && token) {
      var expiresMs = new Date(expires);
      //expiresMS guarda en formato fecha tdo lo de expires
      var now = new Date();
      now = now.getTime();
      
      expiresMs = expiresMs.getTime();
      
      if (now > expiresMs) {
        this.$store.dispatch("logout");
      } else {
        this.$store.dispatch("login", expiresMs - now);
      }
    } else {
      if (this.$router.currentRoute.name !== "Login")
        this.$router.push({ name: "Login" });
    }
  }
  }
</script>