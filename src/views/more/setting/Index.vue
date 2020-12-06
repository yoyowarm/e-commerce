<template>
  <div class="setting">
    <div class="tabs">
      <div :class="{active: activeName === 'first'}" @click="activeName = 'first'">顯示設定</div>
      <div :class="{active: activeName === 'second'}" @click="activeName = 'second'">推播設定</div>
      <div :class="{active: activeName === 'third'}" @click="activeName = 'third'">授權管理</div>
    </div>
    <div class="tab-body">
      <display-setting v-if="activeName === 'first'" />
      <push-setting v-if="activeName === 'second'"/>
      <authoriztion v-if="activeName === 'third'" />
    </div>
  </div>
</template>

<script lang="ts">
import authoriztion from './components/Authoriztion.vue'
import displaySetting from './components/displaySetting.vue'
import pushSetting from './components/pushSetting.vue'
import { Vue, Component } from 'vue-property-decorator';

@Component({components:{ authoriztion, displaySetting, pushSetting }})
export default class Setting extends Vue {
  activeName = 'first'

}
</script>

<style lang="less" scoped>
.setting {
  width: 100%;
  .tabs {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    position: relative;
    >div {
      padding: 5px 0px;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: 0px;
        left: 0px;
        background: #F6F5F4
      }
    }
    .active {
      position: relative;
      &::after {
        background: #F0D870;
        z-index: 2;
        border-radius: 5px;
      }
    }
    .tab-body {
    }
  }
}
</style>