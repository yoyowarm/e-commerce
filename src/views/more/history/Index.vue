<template>
  <div class="history">
    <date-picker />
    <template v-for="s in 5">
      <store :key="s"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DatePicker from './components/datePicker.vue'
import Store from './components/store.vue'
@Component({ components: {DatePicker, Store}})
export default class History extends Vue {

}
</script>

<style lang="less" scoped>
.history {
  padding: 20px
}
</style>