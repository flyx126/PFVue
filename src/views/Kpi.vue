<template>
  <div>
    <Navbar />
    <!-- <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly> -->
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  // import { Plotly } from 'vue-plotly'

  export default {
    name: 'Dashboard',
      mounted(){
            this.getDatos()
    },
    data(){
      return{
          data:[{
                cargados:[],
                faltantes:[],
                type:"scatter"
          }],
          layout:{
            title:"My Graph"
          }

      }
    },
    components: {
      Navbar  
      
    },
    methods:{
       getDatos(){
            this.axios.get("http://127.0.0.1:7000/api/v1.0/nuevo_kpi")
            .then((response)=>{
            this.cargados=response.data[1][0]
            this.faltantes=response.data[0][0]
            console.log(this.faltantes)
            })
       }
    }
   
  }
</script>