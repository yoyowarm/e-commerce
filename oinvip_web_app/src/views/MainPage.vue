<template>
    <div class="BigPage">

        <nav class="navBarTop">
            <div class="logo">
                <a href="#" @click="goBack"><img src="../assets/images/top_bar_back.svg"></a>
            </div>
            <div class="title">主題活動</div>
            <div>

                <!--<a>
                    <img src="../assets/images/top_bar_search.svg">
                </a>-->
<!--                <a>-->
<!--                    <img src="../assets/images/top_bar_bell.svg">-->
<!--                </a>-->
            </div>
        </nav>
        <nav class="side-bar">
            <div class="content">
                <router-link :to="{ name: 'Home', query:{id: id}}" v-bind:class="{'active': $route.name ==='Home'}">
                    首頁
                </router-link>
                <router-link :to="{ name: 'Map', query:{id: id}}" v-bind:class="{'active': $route.name ==='Map'}">
                    友善地圖
                </router-link>
                <router-link :to="{ name: 'Store', query:{id: id}}" v-bind:class="{'active': $route.name ==='Store'}">
                    參與店家
                </router-link>
                <router-link :to="{ name: 'News', query:{id: id}}" v-bind:class="{'active': $route.name ==='News'}">
                    活動公告
                </router-link>
<!--                <router-link :to="{ name: 'Coupon', query:{id: id}}" v-bind:class="{'active': $route.name ==='Coupon'}">-->
<!--                    優惠領取-->
<!--                </router-link>-->
<!--                <router-link :to="{ name: 'Traffic', query:{id: id}}"-->
<!--                             v-bind:class="{'active': $route.name ==='Traffic'}">-->
<!--                    交通資訊-->
<!--                </router-link>-->
<!--                <router-link :to="{ name: 'RecommendCode', query:{id: id}}"-->
<!--                             v-bind:class="{'active': $route.name ==='RecommendCode'}">-->
<!--                    My推薦碼-->
<!--                </router-link>-->
            </div>
        </nav>

        <div class="mainBlock">
            <router-view/>
        </div>
    </div>

</template>

<script>

    export default {
        name: "MainPage",
        data() {
            return {
                id: this.$route.query.id,
            }
        },
        created() {
        },
        methods: {
            scrollToTop() {
                //跳轉頁面時捲動至最上
                window.scrollTo(0, 0);
            },
            goBack() {

                let u = navigator.userAgent.toLowerCase();
                let isApple = /iphone|ipad|ipod|ios/i.test(u);
                let isAndroid = /android/i.test(u);

                if(isApple){
                    window.history.back();return false;
                }else if(isAndroid){
                    this.$router.go(-1)
                }
            },
        },
    }
</script>

<style scoped>

</style>
