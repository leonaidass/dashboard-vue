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
  <template v-slot:[`item.vacunacion`]>
   <v-btn color="primary" @click="dialogCovid=true">Covid</v-btn>
  </template>
  <template v-slot:[`item.acciones`]>
   <v-btn color="success" @click="dialog=true">Ver mas</v-btn>
  </template>
  
  </v-data-table>


     </v-col>
   </v-row>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      
   <v-card
    class="mx-auto"
    max-width="500"
    outlined
    
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Ficha Personal
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Of Ayte Perez Dario
        </v-list-item-title>
        <v-list-item-subtitle>Dirección de Telecomunicaciones y Emergencias Policiales D-8</v-list-item-subtitle>
        
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="grey"
      ><v-img
                  src="../assets/dario.jpg"
                ></v-img></v-list-item-avatar>
    </v-list-item>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="padron"
            label="Padron"
            filled
            
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="credencial"
            label="Credencial"
            filled
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="categoriaP"
            label="Categoria Profesional"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="fIngreso"
            label="Fecha Ingreso"
            filled
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="domicilio"
            label="Domicilio"
            filled
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="antGral"
            label="Ant Genenral"
            filled
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="antGrado"
            label="ant. Grado"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>


    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="green"
       class="white--text"
       rounded
        
        @click="dialog=false"
        
      >
        Cerrar
      </v-btn>
    </v-card-actions>
  </v-card>
     
    </v-dialog>
    <v-dialog
      v-model="dialogCovid"
      width="700"
    >
      <v-card outlined class="mx-auto"
    max-width="700"
    >
    <v-card-title>Vacuna Covid 19</v-card-title>
    <v-container>
          <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in itemsCovid"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h6">
          {{item.dosis}}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{item.fecha}} <br> {{item.vacuna}}</p>
          
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
    </v-container>
      </v-card>
   
     
    </v-dialog>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        dialogCovid:false,
        credencial:8084,
        padron:"405187-7",
        arma:"10750px",
        domicilio:"Av Rioja 1515 Sur Capital",
        antGrado:"5 años y tres Meses",
        antGral:"7 años y Ocho meses",
        fIngreso:"20/08/2015",
        categoriaP:"A3 B1 B2 B3 D1",
        
        datos:[
          {titulo:'Personal Policial en Actividad', subtitulo:'Año 2022', color:'primary',total:'4577'},
          {titulo:'Personal Policial Situacion Especial', subtitulo:'Carpeta Medica', color:'red',total:'152'},
          {titulo:'Personal Policial Licencia', subtitulo:'Liencias Especiales y Anuales', color:'warning',total:'143'},
          {titulo:'Personal Policial Situacion Especial', subtitulo:'Retiro', color:'#7986CB',total:'371'}
        ],
        headers: [
          { text: 'N°', value: 'numero' },
          { text: 'Cuerpo', value: 'cuerpo' },
          { text: 'D.N.I', value: 'dni' },
          { text: 'Jerarquia', value: 'jerarquia' },
          { text: 'Nombre y Apellido', value: 'nombre' },
          { text: 'Destino', value: 'destino' },
          { text: 'Arma', value: 'arma' },
          { text: 'Vacunacion', value: 'vacunacion' },
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
         ],
         itemsCovid: [
        {
          color: '#607D8B',
          icon: 'mdi-star',
          fecha:"15/04/2021",
          vacuna:"Sputnik",
          dosis:"Primer  Dosis"
        },
        {
          color: '#2962FF',
          icon: 'mdi-book-variant',
          fecha:"20/11/2021",
          vacuna:"Pfizer",
          dosis:"Segunda Dosis"
        },
        {
          color: '#00BFA5',
          icon: 'mdi-airballoon',
          fecha:"15/01/2022",
          vacuna:"Astrazeneca",
          dosis:"Tercer Dosis"
        },
       
      ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>