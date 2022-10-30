<template>
  <div class="bg-gray h-330 w-full cursor-pointer rounded-16 px-8 py-10">
    <svg-icon
        name="Money"
        :width="55"
        :height="55"
        :color="!redIcon ? '#404456': '#E02025'"
        class="mb-8"
    />
    <h3 class="font-bold text-20 text-text-main mb-4">{{ currency.CharCode }}</h3>
    <p class="text-15 text-text-gray-900 mb-6 font-medium">{{currency.Name}}</p>
    <ul class="text-15 text-text-gray-900 font-medium space-y-6">
      <li class="flex leading-5 items-center">Номинал: {{currency.Nominal}}</li>
      <li class="flex leading-5 items-center">Курс: {{currency.Previous}}</li>
    </ul>
  </div>
</template>

<script>
import SvgIcon from "../components/SvgIcon";
export default {
  name: "CurrencyCard",
  components: {
    SvgIcon,
  },
  props: {
    itemIndex: {
      type: Number,
      default: 0
    },
    currency: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    redIcon() {
      return this.itemIndex % 2 === 0;
    }
  }
}
</script>
