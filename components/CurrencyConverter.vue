<template>
  <div class="md:space-y-8 space-y-5">
    <div class="flex flex-wrap">
      <span class="text-16 text-text-dark font-medium">Валюта 1</span>
      <AutoComplete :data="currencyList"
                    @change-data="onChangeData"
                    :valueModel="'currencyOne'"/>
    </div>
    <div class="flex flex-wrap">
      <span class="text-16 text-text-dark font-medium">Валюта 2</span>
      <AutoComplete :data="currencyList"
                    @change-data="onChangeData"
                    :valueModel="'currencyTwo'" />
    </div>
    <div class="flex flex-wrap">
      <span class="text-16 text-text-dark font-medium">Количество</span>
      <input class="pl-5 pr-5 text-12 outline-none border rounded-5 border-input-border h-50px w-full"
             v-model="count"
             placeholder="Введите число"
             type="number">
    </div>
    <div class="bg-secondary md:p-8 px-7 py-5 rounded-lg flex space-x-5 w-full items-center">
      <svg-icon
          name="Info"
          color="#E02025"
      />
      <span class="md:text-16 text-14 font-bold text-text-main">Итого: {{total}}</span>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../components/SvgIcon";
import AutoComplete from "./AutoComplete";
import {fx} from 'money';
export default {
  name: "CurrencyConverter",
  components: {
    SvgIcon,
    AutoComplete,
  },
  data: () => ({
    currencyOne: {},
    currencyTwo: {},
    count: null,
    total: '...'
  }),
  computed: {
    currencyList() {
      return this.$store.getters['currencyList/currencyList']
    },
  },
  watch: {
    count(v) {
      if(v > 0) {
        this.convertCurrency();
      } else {
        this.total = '...'
      }
    },
  },
  methods: {
    onChangeData(value, type) {
      if(value) {
        this[type] = value;
        this.convertCurrency();
      }
    },
    convertCurrency() {
      if(this.currencyOne.CharCode && this.currencyTwo.CharCode && this.count > 0) {
        this.total = fx.convert(this.count, {from: this.currencyOne.CharCode, to: this.currencyTwo.CharCode});
      }
    }
  }
}
</script>
