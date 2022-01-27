<template>
     <v-navigation-drawer
      v-model="drawer"
      app
    >
    <div>
      <v-img src="../assets/logo2.png">
      <!-- <div class="text-center mt-4"> -->
          <!-- <v-avatar class="mb-4" color="grey darken-1" size="80">
             <v-img aspect-ratio="30" src="https://cdn.vuetifyjs.com/images/lists/5.jpg"  ></v-img>
          </v-avatar> -->
          <!-- <h2 >Administrador</h2> -->
      <!-- </div> -->
      </v-img>
      </div>
      

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
        ['mdi-ballot', 'Salario'],
        ['mdi-file-account', 'Acc. de Trabajo'],
        ['mdi-clipboard-multiple', 'Calificaciones'],
        ['mdi-calendar-text', 'Prevision'],
        ['mdi-cards-playing-heart-multiple', 'A. Fisico'],
      ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>