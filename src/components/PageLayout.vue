<template>
<transition name="slide" mode="out-in">
    <el-container class="slidIn is-vertical">
      <navigation-bar noSearch>
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
export default class PageLayout extends Vue {
  get title () {
    return this.$route.meta.title
  }
}
</script>

<style scoped>
.back {
  width: 20px
}
.main {
  padding: 0px 0px 10px 0px;
  border-top: 1px solid #E6E3E0;
  overflow-x: auto
}
</style>