<template>
    <el-footer class="footerMenu">
        <router-link :to="{ name: 'Home'}" class="home">
            <span class="small">首頁</span>
        </router-link>
        <router-link :to="{ name: 'BonusList'}" class="coin">
            <span class="small">回饋獎勵</span>
        </router-link>
        <router-link :to="{ name: 'PointScan'}" class="scanner">
            <span class="small">掃描</span>
        </router-link>
        <router-link :to="{ name: 'TicketInfo'}" class="ticket">
            <span class="small">我的卡片</span>
        </router-link>
        <!--<router-link :to="{ name: 'PointList'}" class="ticket">
            <span class="small">消費點數</span>
        </router-link>-->
        <!--<router-link :to="{ name: 'ConsumptionList'}" class="ticket">
            <span class="small">消費記錄</span>
        </router-link>--> 
        <router-link :to="{ name: 'MyPage'}" class="setup">
            <span class="small">個人中心</span>
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
