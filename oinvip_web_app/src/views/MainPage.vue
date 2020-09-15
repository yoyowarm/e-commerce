<template>
    <div class="BigPage" >

        <nav class="navBarTop">
            <div class="logo">
                <router-link  :to="{ name: 'Home'}" ><img src="../assets/images/top_bar_back.svg"></router-link>
            </div>
            <div class="title">主題活動</div>
            <div class="menu-Box">
                <router-link  :to="{ name: 'Home'}">
                    <img src="../assets/images/top_bar_search.svg">
                </router-link>
                <router-link  :to="{ name: 'Home'}">
                    <img src="../assets/images/top_bar_bell.svg">
                </router-link>
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
