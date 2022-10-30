<template>
  <div class="w-full">
    <Title>Курс рубля</Title>
    <div class="grid gap-3 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 mb-8">
      <CurrencyCard v-for="(item, index) in currencyList"
                    :itemIndex="index"
                    :currency="item"
                    :key="item.ID"/>
    </div>
  </div>
</template>

<script>
import CurrencyCard from "../components/CurrencyCard";
import Title from "../components/Title";
export default {
  name: "rates",
  components: {
    CurrencyCard,
    Title
  },
  computed: {
    currencyList() {
      return this.$store.getters['currencyList/currencyList']
    }
  },
}
</script>
