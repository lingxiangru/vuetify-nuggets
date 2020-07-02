<template>
  <v-app>
    <!-- <v-navigation-drawer app>
      </v-navigation-drawer> -->
    
      <v-app-bar app>
        top bar
      </v-app-bar>
    
      <!-- Sizes your content based upon application components -->
      <v-main>
    
        <!-- Provides the application the proper gutter -->
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    
      <v-footer app>
        footer
      </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      //
    })
  }
</script>
