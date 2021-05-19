<template>
  <div>
    <Navbar />
    <v-layout mt-5  column align-center>
        <v-flex>
            <h2>Selecciona los archivos que deseas cargar</h2>
        </v-flex>   
    </v-layout>
    <v-layout  column align-center>
    <v-container>
    <ol>
    <li v-for="(item, i) in items" :key="i">
    <v-container>
        <v-row>
    <v-col>
    <v-text-field
      label="Haga click para ingresar el número de SO"
      :rules="rules"
      hide-details="auto"
      color="accent"
    ></v-text-field>
    </v-col>
    <v-col>
    <v-file-input
    counter
    show-size
    placeholder="Haga click para seleccionar el archivo"
    color ="accent"
    ></v-file-input>
    </v-col>
    </v-row>
    </v-container>
    </li>
            </ol>
    <v-layout mt-3 mb-8>
        <v-flex >
            <div class="text-center">
            <v-btn color="accent" absolute >Cargar Archivos</v-btn>
            </div>
            <v-btn color="success" absolute fab small @click="sumar()">+</v-btn>
        </v-flex>
    </v-layout>
    </v-container>
    </v-layout>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';

  export default {
      name: 'Upload',
      data(){
          return {
              items:[1,2,3,4,5],
              rules: [
                        value => !!value || 'Requerido.',
                        value => (value && value.length >= 10) || 'Minimo 10 caracteres'
      ]
          }
      },
      methods:{
            sumar(){
                    let len_array=this.items.length-1
                    let sum=this.items[len_array]+1
                    return this.items.push(sum)
                }
                
                
            },

    components: {
        Navbar  
      
    },
  }
</script>

<style scoped>
h1{
    color:rgb(0, 53, 102);
}
    
</style>

