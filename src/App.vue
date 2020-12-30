<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
  import GradeCategory from "./components/GradeCategory.vue";
  import NavBar from "./components/NavBar.vue";

  // remove this later
  import Account from "./components/Account.vue";
  import Calculator from "./components/Calculator";
  let nextCategoryId = 1;
  export default {
    components: {
      Account,
      NavBar,
      GradeCategory,
      Calculator
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
