<template>
  <div class="Home">
    <el-row type="flex">
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <div class="tabs">
      <div :class="{active: activeName === 'first'}" @click="activeName = 'first'"><span>可使用</span></div>
      <div :class="{active: activeName === 'second'}" @click="activeName = 'second'"><span>紀錄</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gift",
  data() {
    return {
      activeName: 'first'
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

<style lang="less" scope>
  .tabs {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    overflow: auto;
    >div {
      padding: 5px 0px;
      min-width: 28%;
      text-align: center;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: 0px;
        left: 0px;
        background: #F6F5F4
      }
    }
    .active {
      position: relative;
      &::after {
        background: #F0D870;
        z-index: 2;
        width: 70%;
        left: 15%;
        border-radius: 5px;
      }
    }
  }
</style>