<template>
  <div class="container">
    <h1> Currency Converter </h1>

   <form @submit.prevent="calculateExchange">
      <div class="row">

        <div class="col-3">
          <label for="base-amount" class="mb-1"> Amount </label>
          <input type="number" class="form-control" name="amount" id="base-amount" placeholder="Enter an amount">
        </div>

        <div class="col-3">
          <label for="base-currency" class="mb-1"> From </label>
          <select
            name="baseCurrency"
            id="base-currency"
            class="form-control"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="MYR">MYR</option>
          </select>
        </div>

        <div class="col-3">
          <label for="target-currency" class="mb-1"> To </label>
          <select
            name="targetCurrency"
            id="target-currency"
            class="form-control"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="MYR">MYR</option>
          </select>
        </div>

        <div class="col-3 mt-4">
          <button type="submit" @click="calculateExchange" class="btn btn-primary">Submit</button>
        </div>

      </div>
      </form>

      <div class="row">
        <div class="col-12 text-center mt-2">
          <p > {{ baseAmount }} {{ baseCurrency }} = <br />
               <span class="text-bigger"> {{ convertedAmount }} </span> {{ targetCurrency }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <p class="text-smaller"> 1 {{baseCurrency}} = {{rate}} {{targetCurrency}} </p>
          <p class="text-smaller"> 1 {{targetCurrency}} = {{switchRate}} {{baseCurrency}} </p>
        </div>
      </div>
    </div>
</template>

<script>

import LowercaseConverter from "./LowercaseConverter"

export default {
  name: 'CurrencyConverter',
  data() {
    return {
      baseAmount: 1,
      baseCurrency: "USD",
      targetCurrency: "EUR",
      rate: 0.849,
      switchRate: 1.1778,
      convertedAmount: 0.849
    }
  },
  methods: {
    calculateExchange(submitEvent){
      this.baseAmount = submitEvent.target.elements.amount.value
      this.baseCurrency = submitEvent.target.elements.baseCurrency.value
      this.targetCurrency = submitEvent.target.elements.targetCurrency.value


      let xhr = new XMLHttpRequest();
      let path = "https://v6.exchangerate-api.com/v6/be14688d862260bee31e1bb2/pair/" + this.baseCurrency + "/" + this.targetCurrency;
      xhr.open('GET', path);

      xhr.onload = () => {
          const data = JSON.parse(xhr.response);
          console.log(data);
          this.rate = data.conversion_rate;
          this.convertedAmount = this.baseAmount * this.rate;
      };

      xhr.send();

      let xhr2 = new XMLHttpRequest();

      let path2 = "https://v6.exchangerate-api.com/v6/be14688d862260bee31e1bb2/pair/" + this.targetCurrency + "/" + this.baseCurrency;
      xhr2.open('GET', path2);

      xhr2.onload = () => {
          const data = JSON.parse(xhr2.response);
          console.log(data);
          this.switchRate = data.conversion_rate;
      };

      xhr2.send();

    }
  },
  computed: {

  },
  components: {
    LowercaseConverter
  }
}
</script>


<style scoped>

p {
  font-size: 18px;
}

.text-bigger{
  font-size: 40px;
}

.text-smaller{
  font-size: 14px;
}

.container {
  width: 100%;
  height: 100%;
}

label, p, h1 {
  color: white;
}





</style>
