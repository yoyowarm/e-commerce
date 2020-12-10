<template>
  <div class="article-cover">
    <div class="cover">
      <img src="@/assets/images/article-cover.png" alt="">
      <span class="address"><slot name="address"/></span>
    </div>
    <el-row type="flex" class="info" :justify="flexType">
      <el-col :span="10">
        <slot name="left"/>
      </el-col>
      <el-col :span="14">
        <slot name="right"/>
      </el-col>
    </el-row>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class ArticleCover extends Vue {
get flexType () {
  if (this.$slots.left && this.$slots.right) {
    return 'between'
  } else if (this.$slots.right) {
    return 'end'
  } else return 'start'
}
}
</script>

<style lang="less" scoped>
.article-cover {
  margin: 20px;
  margin-top: 0px;
  border-bottom: 2px solid #F6F5F4;
  .cover {
    width: 100%;
    height: 240px;
    background: #F6F5F4;
    position: relative;
    .address {
      position: absolute;
      padding: 2px 15px;
      color: #fff;
      background: rgba(0,0,0,0.7);
      border-radius: 50px;
      right: 15px;
      bottom: 15px;
      font-size: 14px;
      line-height: 28px;
    }
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  .info {
    width: 100%;
  }
}
</style>