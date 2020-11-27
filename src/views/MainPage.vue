<template>
    <div class="BigPage">

            <router-view/>

        <!--TODO 總ＡＰＰ的底部-->
        <foot-menu/>

    </div>

</template>

<script>
    import FootMenu from '@/components/FootMenu.vue';
    export default {
        name: "MainPage",
        components: {
           FootMenu,
        },
        data() {
            return {

            }
        },
        created() {
        },
        methods: {
            scrollToTop() {
                //跳轉頁面時捲動至最上
                window.scrollTo(0, 0);
            },
        },
    }
</script>

<style scoped>

</style>
