<template>
  <el-row type="flex" class="tag-list">
    <el-button type="text" class="button">
      <img src="@/assets/images/homepage/broadcast.png" alt="">
      <span>公告</span>
    </el-button>
    <el-button type="text" class="button">
      <img src="@/assets/images/homepage/tableware.png" alt="">
      <span>點餐</span>
    </el-button>
    <el-button type="text" class="button">
      <img src="@/assets/images/homepage/mirror.png" alt="">
      <span>預定</span>
    </el-button>
    <el-button type="text" class="button">
      <img src="@/assets/images/homepage/bath.png" alt="">
      <span>候位</span>
    </el-button>
    <el-button type="text" class="button">
      <img src="@/assets/images/homepage/cup.png" alt="">
      <span>評論</span>
    </el-button>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class TagList extends Vue {

}
</script>

<style lang="less" scoped>
.tag-list {
  margin-bottom: 10px;
  overflow: auto;
  width: 100%;
  .button {
    padding: 0px;
    min-width: 64px;
    height:24px;
    background: url("../assets/images/store/ticket-line.svg");
    background-size: cover;
    border: 0px;
    margin-right: 10px;
    margin-left: 0px;
    img {
      width: 16px;
      margin-right: 3px;
    }
    span {
      color: #8E8E8F;
      font-size: 16p;
    }
  }
}
</style>