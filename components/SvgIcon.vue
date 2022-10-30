<template>
  <component :is="`Icon${name}`"
             :width="width"
             :height="height"
             :color="color"/>
</template>

<script >
export default {
  name: 'SvgIcon',
  components: {
    IconInfo: () => import(/* webpackChunkName: 'IconInfo' *//* webpackMode: "lazy" *//* webpackExports: ["default", "named"] */'../components/icons/IconInfo.vue').then((m) => m.default),
    IconMoney: () => import(/* webpackChunkName: 'IconMoney' *//* webpackMode: "lazy" *//* webpackExports: ["default", "named"] */'../components/icons/IconMoney.vue').then((m) => m.default),
  },
  props: {
    name: String,
    color: String,
    width: Number,
    height: Number
  }
}
</script>
