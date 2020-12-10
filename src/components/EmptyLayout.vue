<template>
  <router-view :key="$route.fullPath"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class EmptyLayout extends Vue {
}
</script>

<style lang="less" scoped>

</style>