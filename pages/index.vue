<template>
  <div class="w-full">
    <Title>Валютный калькулятор</Title>
    <div class="sm:flex sm:space-x-7">
      <div  class="sm:w-1/2 w-full sm:mb-0 mb-4">
        <CurrencyConverter/>
      </div>
      <div class="sm:w-1/2 w-full">
        <ListComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent";
import CurrencyConverter from "../components/CurrencyConverter";
import Title from "../components/Title";
export default {
  name: 'MainPage',
  components: {
    ListComponent,
    CurrencyConverter,
    Title
  },
}
</script>
