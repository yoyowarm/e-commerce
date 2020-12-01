<template>
  <el-header class="app-header">
    <el-row type="flex" :justify="flexType" class="h-100 items-center">
      <slot name="left">
        <el-col v-if="!noLeft" :span="5">
          <img class="logo" src="@/assets/images/logo_nav.svg" alt="">
        </el-col>
      </slot>
      <slot name="center">
        <el-col v-if="!noLeft" :span="14" class="text-center">
          <span>{{ title }}</span>
        </el-col>
      </slot>
      <slot name="right">
        <el-col v-if="!noRight" :span="5" class="text-right">
          <img  class="ball" src="@/assets/images/balls.svg" alt="">
        </el-col>
      </slot>
    </el-row>
  </el-header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    noLeft: {
      type: Boolean,
      default: false
    },
    noRight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    flexType () {
      if (this.noLeft) {
        return 'end'
      }
      if (this.noRight && this.noLeft) {
        return 'center'
      }
      return 'space-between'
    }
  }

}
</script>

<style lang="less" scoped>
.logo {
  width: 39px;
  height: 39px
}
.ball {
  width: 20px;
  height: 20px;
}
.items-center {
  align-items: center;
}
</style>