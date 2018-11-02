<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <i class="material-icons">
          bubble_chart
        </i>
        <span class="font-weight-thin">PEEK-IT-ALL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="redirectToLogin()"
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <UserLogin />
    </v-content>
  </v-app>
</template>

<script>
import UserLogin from './components/UserLogin'

export default {
  name: 'App',
  components: {
    UserLogin
  },
  data () {
    return {
      //
    }
  }
}
</script>
