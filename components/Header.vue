<template>
  <div class="mx-auto py-4 bg-gray">
    <nav class="flex container-xl md:px-20 sm:px-16 px-8">
      <nuxt-link :to="{name: 'index'}"
                 class="text-text-gray-500 text-12 mr-8 font-medium"
                 active-class="text-text-gray-700"
                 exact>Калькулятор</nuxt-link>
      <nuxt-link :to="{name: 'rates'}"
                 exact
                 active-class="text-text-gray-700"
                 class="text-text-gray-500 text-12 font-medium">Курс рубля</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
