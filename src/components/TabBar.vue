<template>
    <el-footer class="footerMenu">
        <router-link :to="{ name: 'Home'}" class="home">
        </router-link>
        <router-link :to="{ name: 'Gift'}" class="gift">
        </router-link>
        <router-link :to="{ name: 'Scan'}" class="scanner">
        </router-link>
        <router-link :to="{ name: 'Store'}" class="landmark">
        </router-link>
        <router-link :to="{ name: 'More'}" class="user">
        </router-link>
    </el-footer>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
