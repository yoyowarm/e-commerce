<template>
  <div class="history">
    <date-picker />
    <template v-for="s in 5">
      <store :key="s"/>
    </template>
  </div>
</template>

<script>
import DatePicker from './components/datePicker.vue'
import Store from './components/store.vue'

export default {
  name: "History",
  components: {DatePicker, Store},
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.history {
  padding: 20px
}
</style>