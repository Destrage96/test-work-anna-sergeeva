<template>
  <div>
    <Header/>
    <div class="container-xl xl:px-20 md:px-14 sm:px-7 px-3 md:py-8 py-5">
      <nuxt />
      <FooterCurrency v-if="$route.name === 'rates'"/>
    </div>
    <FooterMain v-if="$route.path === '/'"/>
  </div>
</template>

<script>
import FooterCurrency from "../components/FooterCurrency";
import FooterMain from "../components/FooterMain";
export default {
  name: "default",
  components: {
    FooterMain,
    FooterCurrency
  },
  created() {
    this.$store.dispatch('currencyList/fetchList')
    this.$store.dispatch('currencyList/fetchRates')
  },
}
</script>
