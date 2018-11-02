<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Peek-it-all
        </h1>
        <p class="subheading font-weight-regular">
          Will decide it later
        </p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="username"
                :counter="10"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions align-end>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>

</style>
