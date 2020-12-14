<template>
  <el-row type="flex" justify="space-between" class="date-picker">
    <el-col :span="4" class="text-center">
      <el-button type="text"><img src="@/assets/images/next.svg" alt=""></el-button>
    </el-col>
    <el-col :span="16" class="text-center">
      <span>2020.05.01-2020.06.30</span>
    </el-col>
    <el-col :span="4" class="text-center">
      <el-button type="text"><img src="@/assets/images/disable-next.svg" alt=""></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "DatePicker",
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
.date-picker {
  padding: 0px;
  margin-bottom: 20px;
  button {
    padding: 0px;
    width: 38px;
  }
}
</style>