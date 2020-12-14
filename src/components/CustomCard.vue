<template>
  <el-card class="box-card">
    <slot/>
  </el-card>
</template>

<script>
export default {
  name: "CustomCard",
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
.box-card {
  margin-bottom: 10px;
  border-radius: 0px;
  border: 0px
}
</style>