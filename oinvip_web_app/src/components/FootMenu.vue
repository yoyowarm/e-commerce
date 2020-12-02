<template>
    <el-footer class="footerMenu">
        <router-link :to="{ name: 'Home'}" class="home">
            <span class="small">首頁</span>
        </router-link>
        <router-link :to="{ name: 'Gifts'}" class="coin">
            <span class="small">禮物</span>
        </router-link>
        <router-link :to="{ name: 'ScanCode'}" class="scanner">
            <span class="small">掃碼</span>
        </router-link>
        <router-link :to="{ name: 'Nearby'}" class="ticket">
            <span class="small">附近</span>
        </router-link>
        <router-link :to="{ name: 'MyPage'}" class="setup">
            <span class="small">個人</span>
        </router-link>
    </el-footer>
</template>

<script>
    export default {
        name: "footMenu",
        props: {

        },
        data() {
            return {

            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
