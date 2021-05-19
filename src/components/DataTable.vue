<template>
  <div>
          <v-card>
    <v-card-title>
      Estatus POD
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        color="accent"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="datos"
      :search="search"
    ></v-data-table>
  </v-card>
      

  </div>
</template>

<script>
  
  import axios from "axios";
  export default {
  name: 'DataTable',
  components: {
    },
    mounted(){
            this.getDatos()
  },
  data () {
      return {
        datos:[],
        search:'',
        headers:[{text:'ID',value:'id'},{text:'Número SO',value:'sales_order'},
        {text:'Transportista',value:'transportista'},{text:'Estatus POD',value:'pod'},{text:'Cliente',value:'cliente'},
        {text:'Fecha estimada de entrega',value:'fecha_entrega_estimada'},{text:'Acciones'}]
        
      }
    },

  methods: {
   getDatos(){
    this.axios.get("http://127.0.0.1:7000/api/v1.0/datos")
    .then((response)=>{
        this.datos=response.data
        console.log(this.datos)
    }).catch((error)=>{
      console.log(error)
    }) ;
      
    }
  }


  };

</script>