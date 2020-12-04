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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FootMenu extends Vue {

}
</script>

<style scoped>

</style>
