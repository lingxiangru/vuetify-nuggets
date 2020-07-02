<template>
  <v-app>
      <v-app-bar app>
        掘银网
      </v-app-bar>

      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      //
    }),
    mounted() {
      console.log('初始化')
    }
  }
</script>
