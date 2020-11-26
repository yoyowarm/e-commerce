<template>
    <div class="footerMenu">
        <router-link :to="{ name: 'Home'}" class="home">
            <span class="small">首頁</span>
        </router-link>
        <!--<router-link :to="{ name: 'ConsumptionList'}" class="coin">
            <span class="small">消費記錄</span>
        </router-link>-->
        <!--<router-link :to="{ name: 'PointList'}" class="coin">
            <span class="small">消費點數</span>
        </router-link>-->
        <!--<router-link :to="{ name: 'PointQrcode'}" class="QRcode">
            <span class="small">QRcode</span>
        </router-link>-->
        <router-link :to="{ name: 'TicketInfo'}" class="ticket" v-if="isPay">
            <span class="small">我的卡片</span>
        </router-link>
        <router-link :to="{ name: 'MyPage'}" v-if="!isAdmin" class="setup">
            <span class="small">個人中心</span>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "footMenu2",
        props: {
            isHome: Boolean,
            isWallet: Boolean,
            isTalk: Boolean,
            isCard: Boolean,
            isMyPage: Boolean,
        },
        data() {
            return {
                isPay: false,
                isAdmin:false,
            }
        },
        computed: {
        },created() {
            this.isAdmin = this.$auth.isAdmin();
        },
        mounted() {
            this.isPay = this.$store.state.userInfo.isPay;
            this.$store.subscribe((_, state) => {
                this.isPay = state.userInfo.isPay;
            });
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
