<template>
     <div>
      <v-app-bar app color="rgb(237, 242, 244)">
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
                <img alt="PFLogo" src="@/assets/logo.png" width="45px" height="40px">
                <v-toolbar-title id="titulo">Pierre Fabre</v-toolbar-title>
            <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" temporary color="drawer"> 
          <v-layout mt-4 column align-center>
              <v-flex>
                  <img src="@/assets/logo.png" alt="" width="45px" height="40px">
              </v-flex>
              <v-flex>
                    <p class="mt-3 headline" id="titulo_nav">Menú</p>
              </v-flex>
              </v-layout>
              <v-layout mt-4 column>
                <v-list rounded>
                    
                    <v-list-item-group
                        v-model="model"
                        active-class="bg-active"
                        color="secondary"
                    >
                        <v-list-item
                        v-for="(item, i) in items"
                        :key="i" 
                        >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <router-link :to="item.ruta">{{item.text}}</router-link>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
          </v-layout>

      </v-navigation-drawer>
    </div>
</template>

<script>
  

  export default {
    name: 'Navbar',
      data(){
      return {
          drawer: false,
          model:1,
          items: [
                {id:0, text: 'Dashboard', icon: 'mdi-view-dashboard-outline',ruta:"/dashboard"},
                {id:1, text: 'Carga Masiva POD', icon: 'mdi-upload-multiple',ruta:"/upload"},
                {id:2, text: 'KPI', icon: 'mdi-chart-line',ruta:"/kpi"},
            ],
      }
  },
    
  }

</script>

<style scoped>
#titulo{
    font-size: 35px;
}
#titulo_nav{
    font-size: 15px;
}
#subheader{
    font-size: 25px;
}
a{
    color:rgb(58, 110, 165);
     text-decoration: none;
     font-size: 17px;
}


p{
    color:rgb(58, 110, 165);
}
.bg-active{
    background-color: black;
    color:white !important;
}

</style>