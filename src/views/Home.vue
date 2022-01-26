<template>
  <div class="dashboard">
   <v-subheader class="d-flex justify-space-between align-center">
     <h3>Inicio</h3>
     <v-btn color="success" class="rounded-lg">Consultas</v-btn>
   </v-subheader>
   <v-row>
     <v-col lg="7" cols="12">
     <v-alert
     
      dense
      text
      type="success"
    >
      <strong>Ingreso Autorizado</strong> Buenos Dias!
    </v-alert>
    <v-row>
      <v-col lg="6" cols="12" v-for="(dato,i) in datos" :key="i">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex justify-space-between align-center" >
            <div>
              <strong>{{dato.titulo}}</strong><br>
              <small>{{dato.subtitulo}}</small>
              
            </div>
            <v-avatar :color="dato.color" size="60">
              <span class="white--text">{{dato.total}}</span>
            </v-avatar>
          </v-card-text>
          
        </v-card>

      </v-col>

         
    </v-row>
     </v-col>
     <v-col lg="5" cols="12">
       <v-card>
         <v-card-title>
           Expedientes Importantes
         </v-card-title>
         <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          color="pink"
          small
        >
          <v-row class="pt-1">
            
            <v-col>
              <strong>New Icon</strong>
              <div class="text-caption">
                Mobile App
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
         
        </v-timeline-item>

        <v-timeline-item
          color="pink"
          small
        >
          <v-row class="pt-1">
            
            <v-col>
              <strong>Lunch break</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
          <v-row class="pt-1">
            
            <v-col>
              <strong>Finish Home Screen</strong>
              <div class="text-caption">
                Web App
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
       </v-card>
     </v-col>
   </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        datos:[
          {titulo:'Personal Policial en Actividad', subtitulo:'Año 2022', color:'primary',total:'4577'},
          {titulo:'Personal Policial Situacion Especial', subtitulo:'Carpeta Medica', color:'red',total:'152'},
          {titulo:'Personal Policial Licencia', subtitulo:'Liencias Especiales y Anuales', color:'warning',total:'371'}
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>