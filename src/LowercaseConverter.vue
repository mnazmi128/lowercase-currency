<template>

  <div class="container">

  <h1> Lowercase Converter </h1>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="form-group mb-2">
          <label for="userInput" class="mb-1"> Your Message: </label>
          <input type="text" class="form-control" v-model="userInput" id="userInput" placeholder="Enter your message">
        </div>

        <div class="output-msg">
        <p > Output: {{ outputMsg }} </p>
        </div>
      </div>
    </div>
    <CurrencyConverter />
  </div>
</template>

<script>
import CurrencyConverter from "./CurrencyConverter.vue";

export default {
  name: 'LowercaseConverter',
  data() {
    return {
      userInput: ""
    }
  },
  computed: {
    outputMsg(){
      return this.userInput.toLowerCase();
    }
  },
  components: {
    CurrencyConverter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label, p, h1 {
  color: white;
}
</style>
