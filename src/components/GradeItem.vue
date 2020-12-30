<template>
  <li>

    <input v-model="item.name" placeholder="HW 1">
    <button @click="$emit('remove', item.id)"> - </button>

    <form>
      <input v-model="item.score" placeholder="XX">
      <input v-model="item.grade" placeholder="XX" >
    </form>

    <!-- <p> {{item.name}} </p> -->

    <h1 v-if="item.score / item.grade > .000001 ">
      {{ (item.score / item.grade)*100 }}%
    </h1>

  </li>
</template>

<script>
  export default {
    data() {
      return {
        bool: true,
        final: score / grade,
      };
    },
    props: {
      item: {
        name: 'HW 1',
        // score: 'XX',
        // grade: 'XX',
        type: Object,
        required: true
      }
    },

    methods : {
      addName(){
        this.grades.push({name: this.name});
        this.name = '';
      }
    },
  };
</script>

<style scoped>
  h1 {
    text-align: left;
  }
</style>
