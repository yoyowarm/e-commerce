<template>
  <div class="store">
    <slot name="avatar">
    <div class="avatar" @click="() => { if(to) $router.push(to)}">
      <img src="@/assets/images/comment/store-avatar.png" alt="">
    </div>
    </slot>
    <slot name="info">
    <div class="info">
      店家名稱可兩行店家名稱可兩行
    </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StoreItem extends Vue {
   @Prop({required: false, type: Object, default: null}) to!: null;
   @Prop({ type: String}) name !: ''
}
</script>

<style lang="less" scoped>
.store {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 6px;
  .avatar {
    width: 85px;
    height: 85px;
    border: 1px solid #D4D5D5;
    border-radius: 85px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .info {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 85px;
    height: 38px;
    font-size: 14px;
    line-height: 19px;
    margin-top: 8px;
  }
}
</style>