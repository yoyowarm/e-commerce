<template>
  <el-container class="authoriztion is-vertical">
    <el-row class="block receive" type="flex" justify="space-between">
      <el-col :span="20">
        <img src="@/assets/images/setting/bell.svg" alt="">
        <span>接收推播</span>
      </el-col>
      <el-col :span="4" class="text-right">
        <el-button type="text" class="check" icon="el-icon-circle-check" />
      </el-col>
    </el-row>
    <div class="block camera">
      <div>
        <img src="@/assets/images/setting/landmark.svg" alt="">
        <span>取用您的所在位置</span>
      </div>
      <div class="text">
        開啟相機功能，可用來掃描 RQCODE 加入好友，掃描候位及消費支付
      </div>
      <div class="text-right">
        <el-button type="text" >你已拒絕，由此前往開啟設定></el-button>
      </div>
    </div>
    <el-row class="block receive" type="flex" justify="space-between">
      <el-col :span="20">
        <img src="@/assets/images/setting/landmark.svg" alt="">
        <span>取用您的所在位置</span>
      </el-col>
      <el-col :span="4" class="text-right">
        <el-button type="text" class="check" icon="el-icon-circle-check" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "Authoriztion",
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
.authoriztion {
  padding: 20px;
  img {
    width: 32px;
    margin-right: 10px
  }
}
.block {
  padding: 15px;
  border-radius: 12px;
  background: #B8B3AF;
  margin: 10px 0px
}
.receive {
  color: #fff;
  display: flex;
  align-items: center;
  .check {
    color: #fff;
    font-size: 20px;
    padding: 0px
  }
}
.camera {
  background: #eee;
  span {
    color: #000
  }
  .text {
    line-height: 20px;
    margin: 20px 0px
  }
  button {
    padding: 0px;
    color: #000
  }
}
</style>