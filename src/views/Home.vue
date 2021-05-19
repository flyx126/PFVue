<template>
<v-app id="inspire">
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="rgb(141, 153, 174)">
                       <img alt="PFlogo" src="@/assets/logo.png" width="45px" height="40px"><img>
                        <v-toolbar-title>Pierre Fabre</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              color="secondary"
                              prepend-icon="person"
                              name="login"
                              label="Usuario"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              color="secondary"
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Contraseña"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="accent" to="/dashboard">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
   </v-app>
</template>

<script>
  

  export default {
    name: 'Home',

    components: {
      
    },
  }
</script>

