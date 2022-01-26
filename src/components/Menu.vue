<template>
     <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-img src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="pa-4">
      <div class="text-center mt-4">
          <v-avatar class="mb-4" color="grey darken-1" size="80">
             <v-img aspect-ratio="30" src="https://cdn.vuetifyjs.com/images/lists/5.jpg"  ></v-img>
          </v-avatar>
          <h2 class="white--text">Administrador</h2>
      </div>
      </v-img>
      
      

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props:{
            drawer:Boolean
        },
        data() {
            return {
                links: [
        ['mdi-microsoft-windows', 'Inicio'],
        ['mdi-account-group', 'Personal'],
        ['mdi-file-document-edit', 'Legajos'],
        ['mdi-text-box-search', 'Indice'],
      ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>