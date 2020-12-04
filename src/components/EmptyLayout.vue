<template>
<transition name="slide" mode="out-in">
    <el-container class="slidIn is-vertical">
      <navigation-bar>
        <template slot="left">
          <div class="el-col el-col-5">
            <el-button type="text" @click="$router.back()" class="back">
              <img src="@/assets/images/top_bar_back.svg" alt="">
            </el-button>
          </div>
        </template>
      </navigation-bar>
      <div class="main">
        <router-view :key="$route.fullPath"/>
      </div>
    </el-container>
</transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavigationBar from '@/components/NavigationBar.vue';

@Component({components:{ NavigationBar }})
export default class App extends Vue {
  get title () {
    return this.$route.meta.title
  }
}
</script>

<style scoped>
.slidIn {
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
  background: #fff
}

/* before the element is shown, start off the screen to the right */
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
.back {
  width: 20px
}
.main {
  padding: 0px 0px 10px 0px;
  border-top: 1px solid #E6E3E0;
  overflow-x: auto
}
</style>