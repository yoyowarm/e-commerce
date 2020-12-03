<template>
    <el-footer class="footerMenu">
        <router-link :to="{ name: 'Home'}" class="home">
        </router-link>
        <router-link :to="{ name: 'Gifts'}" class="coin">
        </router-link>
        <router-link :to="{ name: 'ScanCode'}" class="scanner">
        </router-link>
        <router-link :to="{ name: 'Nearby'}" class="ticket">
        </router-link>
        <router-link :to="{ name: 'MyPage'}" class="setup">
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
