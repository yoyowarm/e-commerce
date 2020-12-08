<template>
  <el-container @click.native="openedPopup = false" class="cover is-vertical" :class="{show: openedPopup}">
    <transition name="slide" mode="out-in">
      <div v-if="openedPopup" class="main is-vertical">
        <slot/>
        <el-button class="back" @click="openedPopup = false" round>返回</el-button>
      </div>
    </transition>
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
  display: none;
}
.show {
  display: block;
}
.slide-enter, .slide-leave-active {
  bottom: -200%;
}
.slide-leave-to {
  bottom: -200%;
}

@keyframes oxxo{
  from{
      bottom: -200%;
  }
  to{
      bottom: 0%;
  }
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55vh;
  background: rgba(0,0,0,.8);
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
  transition: all .5s ease-in-out;
  animation-name:oxxo;
  animation-duration:0.5s;
  animation-timing-function: cubic-bezier(.03,.98,.87,1);
  .back {
    background: #E4DFDD;
    width: 210px;
    position: absolute;
    bottom: 30px
  }
}
</style>