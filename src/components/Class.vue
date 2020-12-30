<template>
  <div class="class">
  <v-card
    class="mx-auto"
    max-width="700"
    max-height="300"
    link
    to=""
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-text-field v-model="this.name" :readonly="!this.canEdit"></v-text-field>
        <router-link :to="{ name: 'Calculator', params: { classTitle: this.name } }">Go to Class Page</router-link>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </div>
</template>

<script>
    export default {
      props: {
        name: String,
        canEdit: Boolean,
      },
    }
</script>

<style scoped>
  .class{
    padding: 10px;
  }
  .custom.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none;
  }
  .custom.v-text-field>.v-input__control>.v-input__slot:after {
    border-style: none;
  }

</style>
