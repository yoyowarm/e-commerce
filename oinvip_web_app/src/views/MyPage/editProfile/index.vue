<template>
  <div>
    <custom-card class="user-block">
      <div class="avatar">
        <img src="@/assets/images/avatar.svg" alt="">
      </div>
    </custom-card>
    <custom-card>
      s
    </custom-card>
  </div>
</template>

<script>
import customCard from '@/components/custom-card'
export default {
  components: {
    customCard
  }
}
</script>

<style lang="less" scoped>
.user-block {
  position: relative;
  height: 169px;
  width: 100%;
  background: url("../../../assets/images/user-info-bg.svg")no-repeat;
  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 10px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>