<template>
  <div>
    <Navbar />
    <Alerta />
    <DataTable />
    <!-- <TableData /> -->
    
 

  </div>
</template>

<script>
  
  import Navbar from '@/components/Navbar.vue';
  import DataTable from '@/components/DataTable.vue';
  import Alerta from '@/components/Alerta.vue';
  import TableData from '@/components/TableData.vue';
  
  
  export default {
  name: 'Dashboard',
    components: {
      Navbar,
      DataTable,
      Alerta,
      TableData
      
    },
   
  };

</script>