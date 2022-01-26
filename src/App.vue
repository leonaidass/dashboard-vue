<template>
  <v-app id="inspire">
     <Cabecera @cerrarDrawer="drawer=!drawer" />
     <Menu :drawer="drawer"/>
   

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Menu from "./components/Menu.vue"

  export default {
    components:{
      Cabecera,
      Menu
      
    },
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: true,
      
    }),
  }
</script>