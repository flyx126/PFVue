<template>
<v-container>
    <v-layout>
        <v-flex>
 <table id="tabla_datos" class="table table-bordered table-sm">
    <thead>
        <tr>
            <th>ID</th>
            <th>Número SO</th>
            <th>Transportista</th>
            <th>Estatus POD</th>
            <th>Cliente</th>
            <th>Fecha estimada de entrega</th>
            <!-- <th>Fecha límite de entrega POD</th> -->
            <th>Acciones</th>
        </tr>
    </thead>
</table>
    </v-flex>
</v-layout>
</v-container>
</template>

<script>
 
        
export default {
    
    name:'TableData',
    mounted(){
            this.getDatos()
    },

    data(){
        return {
             datos:[]
        }
    },
    
      methods: {
            getDatos(){
            this.axios.get("http://127.0.0.1:7000/api/v1.0/datos")
            .then((response)=>{
            this.datos=response.data
              $(document).ready(function() {
        $('#tabla_datos').DataTable({
             dom: "<'row'<'col-sm-4 col-md-4'l><'col-sm-4 col-md-4'B><'col-sm-4 col-md-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    buttons: ['copy', 'excel'],
    responsive: true,
    data: response.data,
     columns: [
        { "data": 'id' },
        { "data": 'sales_order' },
        { "data": 'transportista' },
        { "data": 'pod' },
        { "data": 'cliente' },
        { "data": 'fecha_entrega_estimada' },
        {
            "data": { "info1": 'sales_order', "info2": "'pod" },
            "render": function(data) {
                if (data['pod'] == 'No Cargado') {
                    return '<form action="" method="POST" enctype="multipart/form-data" id="form-submit"><div class="form-group" style="display:none"></div><input type ="hidden" name="so" value="' + data["sales_order"] + '"><input type="file" name="file" value="file"  style="display:none" class="form-control-file" id="file-input"><input type="button" name="upload" value="Cargar POD" class="btn btn-secondary" id="boton_upload" @click="upload()"></form>'
                } else if (data['pod'] == 'Error en POD') {
                    return '<button type="button" id="' + data['sales_order'] + '" class="btn btn-warning btnEdit delete" >Eliminar POD</button>'
                } else {
                    return '<button type="button" id="' + data['sales_order'] + '" class="btn btn-primary btnEdit download" >Descargar POD</button>'
                }
            }

        }
    ],
    language: {
        search: "Buscar Registro",
        paginate: {
            first: "Primera",
            previous: "Anterior",
            next: "Siguiente",
            last: "Última"
        },
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando _START_ a _END_ de _TOTAL_ elementos",
        infoFiltered: "(filtrados de _MAX_ elementos)",
        buttons: {
            copy: 'Copiar Tabla',
            excel: 'Exportar Tabla a Excel',
            copySuccess: {
                _: "Se copiaron %d filas"
            },
            copyTitle: "Tabla Copiada"
        }
    },
    "columnDefs": [
        { "className": "dt-center", "targets": "_all" }
    ],
    "createdRow": function(row, data, index) {
        if (data['pod'] === 'No Cargado') {
            $('td', row).addClass('filas');

        }
    },
    "bStateSave": true,
    "fnStateSave": function(oSettings, oData) {
        localStorage.setItem('offersDataTables', JSON.stringify(oData));
    },
    "fnStateLoad": function(oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTables'));
    }
    });
    });      
    }).catch((error)=>{
      console.log(error)
    });
      
    },

    upload(){
        document.getElementById("file-input").onchange = function() {
        document.getElementById("form-submit").submit();
        }
    },

  }
  
}

</script>