<template>
  <div class="class-list">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="8">
          <div v-for="(item, index) in classes">
            <Class :name="item.c" :can-edit="editable"></Class>
          </div>
        </v-col>

        <v-col cols="sm">
          <v-btn v-on:click="editable = true">Edit Classes</v-btn>

          <v-btn v-if="editable" v-on:click="saveChanges()">Save Changes</v-btn>
        </v-col>

        <v-col align-self="center" cols="2">
          <v-card
            class="mx-auto"
            max-width="700"
            min-width="200"
            outlined
          >
            <v-list-item-avatar
              size="80"
              color="grey"
            >
            <v-icon x-large>mdi-account-circle</v-icon></v-list-item-avatar>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">Jane Doe</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn block v-on:click="dialog = !dialog">Account Settings</v-btn>
            </v-card-actions>
          </v-card>

        </v-col>
      </v-row>
    </v-container>

    <v-btn
      absolute
      fab
      bottom
      right
      v-on:click="addClass('Calculus')"
    ><v-icon>mdi-plus</v-icon>
    </v-btn>

  </div>
</template>

<script>
  import Class from "./Class.vue";

  export default {
    components: {
      Class
    },
    data() { return {
      classes: [
        { c: 'Algebra' },
        { c: 'Software Engineering' }
      ],
      editable: false
    } },
    methods: {
      addClass: function() {
        this.classes.push({c: 'New Class'})
      },
      saveChanges: function () {
        this.editable = false
      }
    }
  }
</script>
<style scoped>
  .class-list {

  }

</style>
