<template>
  <el-row type="flex" class="menu">
    <div class="item">
      <img src="@/assets/images/homepage/food.png" alt="">
      <span>美食饕客</span>
    </div>
    <div class="item">
      <img src="@/assets/images/homepage/drink.png" alt="">
      <span>大家愛喝</span>
    </div>
    <div class="item">
      <img src="@/assets/images/homepage/coffee.png" alt="">
      <span>咖啡故事</span>
    </div>
    <div class="item">
      <img src="@/assets/images/homepage/fun.png" alt="">
      <span style="font-size:13px">FUN開玩</span>
    </div>
    <div class="item">
      <img src="@/assets/images/homepage/live.png" alt="">
      <span>來住一晚</span>
    </div>
    <div class="item">
      <img src="@/assets/images/homepage/play.png" alt="">
      <span>大娛樂家</span>
    </div>
    <div class="item">
      <img src="@/assets/images/homepage/life.png" alt="">
      <span>品味生活</span>
    </div>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class QuickMenu extends Vue {
}
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  align-items: center;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding: 4px 0px;
  .item {
    min-width: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    color: #8E8E8F;
    font-size: 14px;
  }
}
</style>