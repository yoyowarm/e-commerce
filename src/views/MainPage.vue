<template>
	<el-container class="BigPage is-vertical">
		<navigation-bar/>
		
		<router-view :key="$route.fullPath"/>

		<!--TODO 總ＡＰＰ的底部-->
		<tab-bar/>

	</el-container>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import TabBar from '@/components/TabBar.vue';

export default {
  name: "MainPage",
  components:{ NavigationBar, TabBar },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    scrollToTop: function() {
		//跳轉頁面時捲動至最上
		window.scrollTo(0, 0);
	}
  }
}
</script>

<style scoped>

</style>
