<template>
	<el-container class="BigPage is-vertical">
		<app-header :title="title"/>
		<router-view :key="$route.fullPath"/>
			<!--TODO 總ＡＰＰ的底部-->
		<foot-menu/>

	</el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/header.vue'
import FootMenu from '@/components/FootMenu.vue';
import { component } from 'vue/types/umd';

@Component({components:{AppHeader, FootMenu}})
export default class App extends Vue {
	get title(){
		return this.$route.meta.title
	}

	scrollToTop() {
		//跳轉頁面時捲動至最上
		window.scrollTo(0, 0);
	}
}
// export default {
// 	name: "MainPage",
// 	components: {
// 			FootMenu,
// 			AppHeader
// 	},
// 	data() {
// 			return {

// 			}
// 	},
// 	computed: {
// 		title () {
// 			return this.$route.meta.title
// 		}
// 	},
// 	created() {
// 	},
// 	methods: {
			// scrollToTop() {
			// 		//跳轉頁面時捲動至最上
			// 		window.scrollTo(0, 0);
			// },
// 	},
}
</script>

<style scoped>

</style>
