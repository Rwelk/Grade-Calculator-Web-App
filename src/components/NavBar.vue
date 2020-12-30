<template>
  <v-card
    color="grey lighten-4"
    flat
    height="0px"
    tile
  >
    <v-toolbar dense>

      <v-toolbar-title @click="home">Grade Genie</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-pencil-box</v-icon>
      </v-btn>

      <v-btn icon @click="calculator">
        <v-icon>mdi-calculator-variant</v-icon>
      </v-btn>

      <v-btn icon @click="account">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cogs</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
    export default {
        name: "NavBar",
        methods: {
          home() {
            this.$router.push('/');
          },
          account() {
            this.$router.push('/account');
          },
          calculator() {
            this.$router.push('/calculator');
          },
        }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

</style>
