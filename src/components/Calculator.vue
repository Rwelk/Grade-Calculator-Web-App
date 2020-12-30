<template>

  <div class="container mt-4">
        
    <div class=#app>

      <h2>&nbsp;</h2>
      <h1> Grade Calculator </h1>
      <input class="form-control" placeholder="Class Name" style="font-size: 20px">
      <h6>&nbsp;</h6>
      

      <table class="table table-bordered mt-3" id="t01">
        <thead>
          <tr>
            <th width="58%">
              Category Name  &nbsp;
              <button @click="addGradeCategory" id="b1">Add Grade Category</button>
            </th>
            <th width="15%">Weight</th>
            <th width="15%" style="text-align:center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in categories" :key="index">

            <!-- Category Name -->
            <td>
              <input class="form-control form-control-sm" v-model="category.name">
            </td>

            <!-- Category Weight -->
            <td>
              <span>
                <input class="form-control form-control-sm" v-model="category.weight">
              </span>
            </td>

            <!-- Total -->
            <td>
              <!-- <input class="form-control text-right" disabled :value="category.total.toFixed(2) + '%'"> -->
              <span>{{ parseFloat(category.total).toFixed(2) }}%</span>
            </td>
            
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th style="text-align:right">Final Grade&nbsp;</th>
            <th>&nbsp;  {{ this.sum.toFixed(2) }}</th>
            <th>
              {{ this.weightedAverage.toFixed(2) }}%		&nbsp;
              <span v-if="this.weightedAverage >= 90">A</span>
              <span v-else-if="this.weightedAverage >= 80">B</span>
              <span v-else-if="this.weightedAverage >= 70">C</span>
              <span v-else-if="this.weightedAverage >= 60">D</span>
              <span v-else>F</span>
            </th>
          </tr>
        </tfoot>
      </table>

      <p style="text-align:center">-----------------------------------------------------------------------</p>

      <GradeCategory v-for="i in categories" v-bind:key="i.id" :temp="i.id" :name="i.name" @gradeUpdated="avg" @removeCategory="removeCategory"/>

      <h1>&nbsp;</h1>
    </div>


  </div>

</template>

<script>
import GradeCategory from "./GradeCategory.vue";

let nextCategoryId = 1;

export default {
  components: {
        GradeCategory
      },
      
  data() {
    return {
      newGradeCategory: "",
        categories: [
          {id: nextCategoryId++, name: 'Homework', weight: .1, total: ''},
        ]      
    }
  },

  methods: {

    addGradeCategory() {
      this.categories.push({id: nextCategoryId++, name: 'Homework', weight: .1, total: '100'})
    },

    removeCategory(idToRemove) {
      this.categories = this.categories.filter(todo => {
        return todo.id !== idToRemove;
      });
    },

    avg(data) {
      this.categories[data.id - 1].total = data.average
    },


  },

  computed: {

    // sum() {
    //   var sum = 0;
    //   for(var i = 0; i < this.items.length; i++) {
    //     sum += this.items[i].weight
    //   }
    // },

    sum() {
      var sum = 0;

      for (var i = 0; i < this.categories.length; i++) {

        var num = parseFloat(this.categories[i].weight);

        if (!isNaN(num)){
          sum += num
        
          // if (sub != 0){
          //   sum += sub;
          //   len += 1
          // }
    
        }

      }

      return sum
    },

    weightedAverage() {

      var sum = 0;
      var weights = 0;

      for (var i = 0; i < this.categories.length; i++) {

        var combinedWeight = 0

        if (!isNaN(parseFloat(this.categories[i].total))){
          sum += this.categories[i].weight * this.categories[i].total
        
          // if (sub != 0){
          //   sum += sub;
          //   len += 1
          // }
    
        }

      }

      return sum


    }

  },

}
</script>

<style>

  h1 {
    font-size: 50px;
  }

  table#t01 thead {
    color: #FFFFFF;
    background-color: #373A3C;
    font-size: 24px;
  }

  table#t01 tbody tr:nth-child(odd) {
    background-color: #94dbf4;
  }

  table#t01 tbody tr:nth-child(even) {
    background-color: #d9f2fb;
  }






  

  table#t01 tfoot {
    color: #FFFFFF;
    background-color: #19799c;
    border: 2px solid #000000;
    font-size: 18px;
  }

  button#b1 {
    background-color:#7dd3f2;
    border-radius:28px;
    border:2px solid #19799c;
    color:#000000;
    font-size:12px;
    padding:5px 11px;
    float: center;
    overflow:hidden
  }
 
</style>
