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
              <strong>Inf-Sumaria 218/2022</strong>
              <div class="text-caption">
                Inicio 10/05/2020
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
              <strong>En Proceso</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          small
        >
          <v-row class="pt-1">
            
            <v-col>
              <strong>Finalizado</strong>
              <div class="text-caption">
                Fecha 20/05/2020
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
       </v-card>
     </v-col>
   </v-row>
   <v-row>
     <v-col lg-12>
       
  <v-data-table
     caption="Indice de Personal"
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:[`item.acciones`]>
   <v-btn color="success">Ver mas</v-btn>
  </template>
  
  </v-data-table>


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
          {titulo:'Personal Policial Licencia', subtitulo:'Liencias Especiales y Anuales', color:'warning',total:'143'},
          {titulo:'Personal Policial Situacion Especial', subtitulo:'Retiro', color:'warning',total:'371'}
        ],
        headers: [
          { text: 'N°', value: 'numero' },
          { text: 'Cuerpo', value: 'cuerpo' },
          { text: 'D.N.I', value: 'dni' },
          { text: 'Jerarquia', value: 'jerarquia' },
          { text: 'Nombre y Apellido', value: 'nombre' },
          { text: 'Destino', value: 'destino' },
          { text: 'Arma', value: 'arma' },
          { text: 'Acciones', value: 'acciones' },
        ],
        desserts: [
          {
            numero:'1',
            cuerpo: 'C.S.E.G',
            dni: '38.216.729',
            jerarquia: "Of Ayte",
            nombre: "Perez Dario",
            destino: "Dirección de Telecomunicaciones y Emergencias Policiales D-8 ",
            arma: 'Posee',
          },
           {
            numero:'2',
            cuerpo: 'C.S.E.G',
            dni: '29.857.215',
            jerarquia: "Of Ayte",
            nombre: "Ramos Rodrigo",
            destino: "Dirección de Telecomunicaciones y Emergencias Policiales D-8 ",
            arma: 'Posee',
          },
           {
            numero:'3',
            cuerpo: 'C.S.E.G',
            dni: '35.507.410',
            jerarquia: "Cabo",
            nombre: "Esquivel Leonardo",
            destino: "Dirección de Telecomunicaciones y Emergencias Policiales D-8 ",
            arma: 'Posee',
          },
           {
            numero:'4',
            cuerpo: 'C.S.E.G',
            dni: '36.745.894',
            jerarquia: "Agte",
            nombre: "Guzman Eduardo",
            destino: "Dirección de Telecomunicaciones y Emergencias Policiales D-8 ",
            arma: 'Posee',
          },
           {
            numero:'5',
            cuerpo: 'C.S.E.G',
            dni: '39.887.325',
            jerarquia: "Agte",
            nombre: "Ovalles Michel",
            destino: "Dirección de Telecomunicaciones y Emergencias Policiales D-8 ",
            arma: 'Posee',
          }
         ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>