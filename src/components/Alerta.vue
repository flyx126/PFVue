<template>
<div >
  <v-container>
    <v-layout>
      <v-flex mt-5 xs-12>
    <v-alert id="alerta"
    color="#eeeeee"
><v-icon>mdi-alert-circle</v-icon> Existen {{datos}} registros prendientes por cargar POD</v-alert>
</v-flex>
</v-layout>
</v-container>
</div>
</template>

<script>
export default {
    name: 'Alerta',
    data(){
      return {
      datos:[]
      }
    },
    mounted(){
      this.getDatos()
    },
methods: {
   getDatos(){
    this.axios.get("http://127.0.0.1:7000/api/v1.0/cantidad_faltante")
    .then((response)=>{
        this.datos=response.data[0]['count']
    }).catch((error)=>{
      console.log(error)
    }) ;
      
    }
  }

}
</script>

<style scoped>
  .alerta{
    margin-top: 0px;
  }
</style>