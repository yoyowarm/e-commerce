<template>
  <el-row type="flex" justify="space-between" class="store">
    <el-col :span="4">
      <img class="avatar" src="@/assets/images/history-avatar.svg" alt="">
    </el-col>
    <el-col :span="20">
      <el-row type="flex" justify="space-between" class="name">
        <el-col :span="23" class="text">碳佐麻里精品燒肉-碳佐國際</el-col>
        <el-col :span="1">
          <img src="@/assets/images/pink-arrow.svg" alt="">
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" class="detail">
        <el-col :span="16">
          <ul class="left">
            <li>台南府前店</li>
            <li class="block">2019.06.30 14:03</li>
          </ul>
        </el-col>
        <el-col :span="8" class="text-right">
          <ul class="right">
            <li><span class="void">已作廢</span></li>
            <li>2,348元</li>
          </ul>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button class="link" round>評論去</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Store",
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
.store {
  padding: 10px;
  border-bottom: 2px solid #F6F5F4;
  .avatar {
    width: 50px;
  }
  .name {
    color: #6F5B62;
    font-size: 20px;
    padding-left: 5px;
    .text {
      overflow : hidden;
      text-overflow : ellipsis;
      white-space : nowrap;
      width: 100%;
    }
    img {
      width: 8px;
      margin-left: 4px
    }
  }
  .detail {
    margin-top: 4px;
    .left {
      font-size: 14px;
      line-height: 22px;
      li::before {
        color: #D96771;
        content: "\2022";
        font-weight: bold;
        display: inline-block; 
        width: 8px;
        margin-left: 5px;
        margin-right: 5px;
      }
      .block::before { color: #A9A29B; }
    }
    .right {
      font-size: 14px;
      color: #CD646C;
      line-height: 22px;
      .void {
        color: #fff;
        padding: 2px 10px;
        background:#A9A29B;
        border-radius: 20px;
        font-size: 12px;
      }
    }
  }
  .link {
    padding: 8px 20px;
    color: #8E8E8F
  }
}
</style>