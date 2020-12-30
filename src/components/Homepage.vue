<template>
  <div class="body">

    <div class="top">
      
      <h1 class="welcome">Welcome To Grade Genie</h1>
      
    </div>

    <div class="left pannel">
      <h1>Design</h1>
      <ul>
        <li>Design your classes to match their actual grading criteria.</li>
        <li>Add different categories of assessments with their weight on your final grade.</li>
        <li><p>Provide current assignments with grades and future assignments.</p></li>
      </ul>
    </div>

    <div class="middle pannel">
      <h1>Calculate</h1>
      <ul>
        <li>Calculate total grades based on grades inputed for assignments.</li>
        <li>Estimate final grade based on current grades in the course.</li>
      </ul>
    </div>

    <div class="right pannel">
      <h1>Account</h1>
      <ul>
        <li>Create an account now to save your progress!</li>
        <button @click="account">Get Started</button>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      account() {
        this.$router.push('/account');
      },
    },
  }
</script>

<style scoped>
  button {
    color: #2d2d2d;
    margin-left: 25%;
    margin-top: 15%;
    background-color: #00DA63;
    border: solid 3px black;
    width: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  li {
    color: #2d2d2d;
    font-weight: bold;
    text-align: left;
    margin-top: 5%;
    font-size: 24px;
    margin-left: 40px;
  }

  h1 {
    color: #FFFFFF;
    text-shadow: 3px 3px black;
    margin-top: 3%;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
  }

  .body {
    background-color: black;
  }

  .top {
    background-image: url("../assets/homescreen.png");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 300px;
    text-align: center;
    opacity: 0.9;
  }

  .welcome {
    padding-top: 8%;
    color: white;
    font-size: 75px;
    text-shadow: 5px 5px black;
  }

  .pannel {
    width: 33.33%;
    height: 500px;
    border: solid 25px black;
    float: left;
  }

  .left {
    background-color: #00B0F0;
  }

  .middle {
    background-color: #00DA63;
    border-left: solid 0px black;
    border-right: solid 0px black;
  }

  .right {
    background-color: #00B0F0;
  }

</style>
