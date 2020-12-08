<template>
  <el-container @click.native="openedPopup = false" class="cover is-vertical">

  </el-container>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator';

@Component
export default class PopupModel extends Vue {
  @PropSync('opened',{ type:Boolean }) openedPopup!: false;
}
</script>

<style lang="less" scoped>
.cover {
  background: rgba(0,0,0,.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0%;
  right: 0;
  transition: all .5s ease-in-out;
  animation-name:oxxo;
  animation-duration:0.5s;
  animation-timing-function: cubic-bezier(.03,.98,.87,1);
}
.slide-enter, .slide-leave-active {
  top: 200%;
}

@keyframes oxxo{
  from{
      top: 200%;
  }
  to{
      top: 0%;
  }
}
</style>