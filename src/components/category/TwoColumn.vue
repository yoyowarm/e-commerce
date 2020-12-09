<template>
  <el-row type="flex" justify="between" class="two-column">
    <el-col :span="10" class="cover">
      <img src="@/assets/images/homepage/cover-3.png" alt="">
    </el-col>
    <el-col :span="14">
      <el-row class="title">
        <el-col :span="10"><span class="tag">縣市名稱</span></el-col>
        <el-col :span="14" class="text">標題標題標題標題標題標題標題標題</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class TwoColumn extends Vue{

}
</script>

<style lang="less" scoped>
.two-column {
  padding: 20px;
}
.cover {
  width: 130px;
  height: 130px;
  img {
    object-fit: cover;
  }
}
.title {
  color: #727171;
  font-size: 18px;
  width: 100%;
  .tag {
    color: #fff;
    padding: 2px 6px;
    background: #FFB11B;
    border-radius: 15px;
    font-size: 14px
  }
  .text {
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
  }
}
</style>