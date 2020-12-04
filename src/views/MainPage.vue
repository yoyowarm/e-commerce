<template>
	<el-container class="BigPage is-vertical">
		<navigation-bar :title="title"/>
		
		<router-view :key="$route.fullPath"/>

		<!--TODO 總ＡＰＰ的底部-->
		<tab-bar/>

	</el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationBar from '@/components/NavigationBar.vue';
import TabBar from '@/components/TabBar.vue';

@Component({components:{ NavigationBar, TabBar }})
export default class App extends Vue {
	get title(){
		return this.$route.meta.title
	}

	scrollToTop() {
		//跳轉頁面時捲動至最上
		window.scrollTo(0, 0);
	}
}
</script>

<style scoped>

</style>
