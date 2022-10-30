<template>
  <div class="w-full relative">
    <input class="pl-5 pr-5 text-12 outline-none border rounded-5 border-input-border h-50px w-full"
           type="text"
           placeholder="Введите название или код"
           :value="input"
           @keydown.tab.prevent="complete()"
           @keyup="onInputChange"
           @keydown="onSelectData" />
    <table
        class="w-full mt-2 absolute bg-gray z-10 rounded-5"
        v-show="filteredData.length">
      <tbody>
      <tr v-for="(person, i) in filteredData"
          :key="person.id"
          @click="complete(i)">
        <td class="px-4 py-2">{{ person[field] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const ARROW_DOWN_KEYCODE = 40;
const ARROW_UP_KEYCODE= 38;
const ENTER_KEYCODE = 13;
const TAB_KEYCODE = 9;
export default {
  name: "AutoComplete",
  props: {
    valueModel: String,
    data: Array,
  },
  data() {
    return {
      input: '',
      field: '',
      filteredData: [],
      searchIndex: 0
    };
  },
  methods: {
    complete(i) {
      this.$emit('change-data', this.filteredData[i], this.valueModel)
      this.input = this.filteredData[i][this.field]
      this.filteredData = [];
    },
    onInputChange(e) {
      const isEnterKey = e.keyCode === ENTER_KEYCODE;
      const isArrowDownKey = e.keyCode === ARROW_DOWN_KEYCODE;
      const isArrowUpKey = e.keyCode === ARROW_UP_KEYCODE;
      const isTabKey = e.keyCode === TAB_KEYCODE;

      if(isEnterKey || isArrowDownKey || isArrowUpKey || isTabKey) {
        return;
      }
      const search = e.target.value.toLowerCase();
      this.input = e.target.value;
      this.searchIndex = 0;

      if(this.input.length) {
        if (/^[a-zA-Z]+$/.test(this.input)){
         this.field = 'CharCode';
        }
        else {
          this.field = 'Name';
        }
        this.filteredData = this.data.filter((person) => person[this.field].toLowerCase().startsWith(search));
      } else {
        this.filteredData = [];
      }
    },
    onSelectData(e) {
      const isArrowDownKey = e.keyCode === ARROW_DOWN_KEYCODE;
      const isArrowUpKey = e.keyCode === ARROW_UP_KEYCODE;
      const isEnterKey = e.keyCode === ENTER_KEYCODE;

      if(isArrowDownKey && this.searchIndex < this.filteredData.length - 1) {
        this.searchIndex++;
      } else if(isArrowUpKey && this.searchIndex > 0) {
        this.searchIndex--;
      } else if(isEnterKey) {
        this.complete(this.searchIndex);
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
