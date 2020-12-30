<template>
  <div id="app">
    <button @click="addGradeCategory">Add Grade Category</button>
    <h1> The Categories: </h1>
    <GradeCategory v-for="i in categories" :key="i.id" :todo="todo" @remove="removeGradeCategory"/>
  </div>
</template>

<script>
  import GradeCategory from "./components/GradeCategory.vue";

  let nextCategoryId = 1;

  export default {
    components: {
        GradeCategory
    },
    data() {
      return {
        newGradeCategory: "",
        categories: [
          {
            id: nextCategoryId++,
          },
        ]
      };
    },
    methods: {
      addGradeCategory() {
        this.categories.push({
          id: nextCategoryId++,
        });
        this.newGradeCategory = "";
      },
      removeGradeCategory(idToRemove) {
        this.categories = this.categories.filter(todo => {
          return todo.id !== idToRemove;
        });
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #app {
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.4;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(118, 158, 201);
  }

  h1 {
    text-align: center;
  }

  button {
    justify-items: center;
    align-items: center;
  }



body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
</style>