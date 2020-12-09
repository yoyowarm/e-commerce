<template>
  <div class="coupon">
    <div class="cover" @click="() => { if(to) $router.push(to)}">
      <img src="@/assets/images/homepage/cover1.png" alt="">
      <div class="icon">
        <slot/>
      </div>
    </div>
    <div class="brand">品牌名稱</div>
    <div class="store">分店名稱</div>
    <div class="text">優惠券名稱優惠券名稱優惠券優惠券名稱</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class CouponItem extends Vue {
  @Prop({type: Object}) to!: null

}
</script>

<style lang="less" scoped>
.coupon {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 6px;
  .cover {
    width: 130px;
    height: 130px;
    position: relative;
    .icon {
      position: absolute;
      width: 37px;
      height: 37px;
      bottom: 6px;
      right: 6px;
      z-index: 9;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .brand, .store {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 130px;
    height: 24px;
    font-size: 18px;
    line-height: 19px;
    margin-top: 8px;
    color: #595757
  }
  .store {
    height: 20px;
    font-size: 14px;
    line-height: 14px;;
    color: #898989;
    margin-top: 0px
  }
  .text {
    color: #CBAE97;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 130px;
    height: 40px;
    font-size: 16px;
    line-height: 19px;
  }
}
</style>