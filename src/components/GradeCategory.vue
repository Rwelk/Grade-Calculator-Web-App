<template>
  <div class="container mt-4">
        
    <div class=#app>
      <h3> {{name}}</h3>

    </div>

    <table class="table table-bordered mt-3" id="t02">
      <thead>
        <tr>
          <th width="58%">
            Assignment
            <button @click="removeCategory" id="b2">Delete Category</button>
            &nbsp;
            <button @click="add" id="b2">+ Add Assignment</button>
          </th>
          <th width="15%" class="text-right">Score</th>
          <th width="15%" class="text-right">Out Of</th>
          <th width="10%" class="text-right">Grade</th>
          <th width="1%" class="text-center">Edit</th>
          <th width="1%" class="text-center">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">

          <!-- Assignment -->
          <td>
            <span v-if="!item.editable">{{ item.name }}</span>
            <span v-else>
              <input class="form-control form-control-sm" v-model="item.name">
            </span>
          </td>

          <!-- Score -->
          <td class="text-right">
            <span v-if="!item.editable">{{ item.score }}</span>
            <span v-else>
              <input class="form-control form-control-sm" v-model="item.score">
            </span>
          </td>

          <!-- Out Of -->
          <td class="text-right">
            <span v-if="!item.editable">{{ item.out_of }}</span>
            <span v-else>
              <input class="form-control form-control-sm" v-model="item.out_of">
            </span>
          </td>
          
          <!-- Grade -->
          <td class="text-right">
            {{ subtotal(item).toFixed(2) }}%
          </td>
          
          <!-- Edit -->
          <td style="text-align:center">
            <input style="transform: scale(1.2)" type="checkbox" v-model="item.editable" @click="edit(item, index)">
          </td>

          <!-- Remove -->
          <td style="text-align:center">
            <span v-if="editIndex !== index">
              <button @click="remove(item, index)" class="btn btn-sm btn-outline-secondary  ">
                &#10060;
              </button>
            </span>
          </td>

        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="2">&nbsp;</td>
          <th style="text-align:right">Average</th>
          <th style="text-align:right">{{  this.average.toFixed(2)  }}%</th>
          
          <th colspan="2" style="text-align:center">
            <span v-if="this.average >= 90">A</span>
            <span v-else-if="this.average >= 80">B</span>
            <span v-else-if="this.average >= 70">C</span>
            <span v-else-if="this.average >= 60">D</span>
            <span v-else>F</span>
          </th>

        </tr>
      </tfoot>

    </table>

    <p style="text-align:center">-----------------------------------------------------------------------</p>


  </div>
</template>

<script>
export default {

  data() {
    return {
      editIndex: null,
      originalData: null,
      items: [
        { name: 'HW 1', score: '10', out_of: '10', editable: false},
        { name: 'HW 2', score: '10', out_of: '10', editable: false},
        { name: 'HW 3', score: '10', out_of: '10', editable: false},
      ],
      tax: 10,
    }
  },

  props: [
    "temp",
    "name"
  ],

  methods: {

    add() {
      this.originalData = null
      this.items.push({ 
        name: 'Assignment ' + (this.items.length + 1), 
        score: 'XX', 
        out_of: 'XX', 
        editable: true})
    },

    edit(item, index) {
      item.editable = true
      this.originalData = Object.assign({}, item)
    },

    remove(item, index) {
      this.items.splice(index, 1)
    },

    save(item) {
      item.editable = false
      this.originalData = null
    },

    removeCategory(){
      if (confirm("Are you sure you want to permanently delete this category?\nIt will be gone forever! (A long time!)")){
        this.$emit('removeCategory', this.temp)
      }
    },

    subtotal(item) {
      var temp = ((item.score / item.out_of) * 100)
      if (isNaN(temp)){
        temp = 0
      }
      return temp
    }

  },

  computed: {

    average() {
      var sum = 0;
      var len = 0;

      for (var i = 0; i < this.items.length; i++) {

        if ((!isNaN(parseFloat(this.items[i].score)) && !isNaN(parseFloat(this.items[i].out_of))) ){
          var sub = this.subtotal(this.items[i]);
          if (sub != 0){
            sum += sub;
            len += 1
          }
    
        }

      }

      this.$emit('gradeUpdated', {id: this.temp, average: (sum/len)});

      return (sum / Math.max(len, 1))
    },

  },

}
</script>

<style>
  h3 {
    display: inline-block;
  }

  table#t02 thead {
    color: #FFFFFF;
    background-color: #373A3C;
    font-size: 20px;
  }

  table#t02 tbody {
    background-color: #97ffc6;
  }

  table#t02 tbody tr:nth-child(odd) {
    background-color: #97ffc6;
  }

  table#t02 tbody tr:nth-child(even) {
    background-color: #dfffed;
  }

  table#t02 tfoot {
    color: #FFFFFF;
    background-color: #2ca160;
    border: 2px solid #000000;
    font-size: 18px;
  }

  button#b2 {
    background-color:#7effb8;
    border-radius:28px;
    border:2px solid #2ca160;
    color:#000000;
    font-size:12px;
    padding:5px 11px;
    float: right;
    overflow:hidden
  }
  
  
 
</style>
