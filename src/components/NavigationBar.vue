<template>
  <el-header class="app-header">
    <el-row type="flex" :justify="flexType" class="h-100 items-center">
      <slot name="left">
        <el-col v-if="!noLeft" :span="5">
          <img class="logo" src="@/assets/images/logo_nav.svg" alt="">
        </el-col>
      </slot>
      <slot name="center">
        <el-col v-if="!noLeft" :span="12" class="text-center">
          <span>{{ title }}</span>
        </el-col>
      </slot>
      <slot name="right">
        <el-col v-if="!noRight" :span="7" class="text-right">
          <img v-if="!noSearch" class="icon" src="@/assets/images/search.svg" alt="">
          <img  class="icon ball" src="@/assets/images/balls.svg" alt="">
        </el-col>
      </slot>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    noLeft: Boolean,
    noRight: Boolean,
    noSearch: Boolean,
  },
  computed: {
    title: function(){
      return this.$route.meta.title;
    },
    flexType: {
      get: function(){
        if (this.noRight && this.noLeft) {
          return 'center'
        }
        if (this.noLeft) {
          return 'end'
        }
        if (this.noRight) {
          return 'start'
        }
        return 'space-between'
      }
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.logo {
  width: 39px;
  height: 39px
}
.icon {
  width: 20px;
  height: 20px;
  
}
.ball {
  margin-left: 15px
}
.items-center {
  align-items: center;
}
</style>