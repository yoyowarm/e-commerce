<template>
    <div class="BigPage" >

        <nav class="navBarTop">
            <div class="logo">
                <router-link  :to="{ name: 'EventsList'}" ><img src="../assets/images/top_bar_back.svg"></router-link>
            </div>
            <div>
                <a>
                    <img src="../assets/images/top_bar_search.svg">
                </a>
                <a>
                    <img src="../assets/images/top_bar_bell.svg">
                </a>
            </div>
        </nav>
        <nav class="side-bar">
            <div class="content">
                <!--TODO 點下的項目增加class="active"-->
                <router-link  :to="{ name: 'Home'}" class="active">首頁</router-link>
                <router-link  :to="{ name: 'Map'}">友善地圖</router-link>
                <router-link  :to="{ name: 'Store'}">參與店家</router-link>
                <router-link  :to="{ name: 'News'}">活動公告</router-link>
                <router-link  :to="{ name: 'Coupon'}">優惠領取</router-link>
                <router-link  :to="{ name: 'Traffic'}">交通資訊</router-link>
                <router-link  :to="{ name: 'RecommendCode'}">My推薦碼</router-link>
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

            }
        },
        mounted () {

        },
        methods: {
            scrollToTop() {
                //跳轉頁面時捲動至最上
                window.scrollTo(0,0);
            },
        },
    }
</script>

<style scoped>

</style>
