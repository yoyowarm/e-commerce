<template>
  <div>
    <div class="map">
      <img src="@/assets/images/gift/map.png" alt="">
    </div>
    <div class="footer">
      <el-row type="flex" justify="space-between" class="evaluation">
        <el-col :span="18">美食饗宴</el-col>
        <el-col :span="6" class="text-right">
          <img src="@/assets/images/gift/smile.svg" alt="">
          <span>4.5</span>
        </el-col>
      </el-row>
      <div class="text-left">708台南市安平區府前路二段624號</div>
      <el-row type="flex" justify="space-between">
        <el-col :span="10" class="">
          <el-button circle class="store-phone-btn" icon="el-icon-phone-outline"></el-button>
          <span>06-2930-118</span>
        </el-col>
        <el-col :span="8" class="text-right">
          <el-button class="navigation" round>規劃路線</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreMap",
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
.map {
  width: 100%;
  height: calc(100vh - 60px);
  img {
    height: 100%;
    object-fit: cover;
  }
}
.footer {
  position: absolute;
  bottom: 0px;
  padding: 20px;
  padding-top: 10px;
  width: 100%;
  text-align: left;
  z-index: 5;
  background: #fff;
  .evaluation {
    border-bottom: 2px solid #F6F5F4;
    margin-bottom: 10px;
  }
  img {
    width: 20px;
    margin-right: 5px
  }
}
.store-phone-btn {
  padding: 5px;
  margin-right: 10px
}
.navigation {
  padding: 8px 20px;
}
/deep/ [class^=el-icon-] {
  font-size: 20px;
}
</style>