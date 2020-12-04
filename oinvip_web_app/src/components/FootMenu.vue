<template>
    <el-footer class="footerMenu">
        <router-link :to="{ name: 'Home'}" class="home">
        </router-link>
        <router-link :to="{ name: 'Gifts'}" class="gift">
        </router-link>
        <router-link :to="{ name: 'ScanCode'}" class="scanner">
        </router-link>
        <router-link :to="{ name: 'Nearby'}" class="landmark">
        </router-link>
        <router-link :to="{ name: 'MyPage'}" class="user">
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
