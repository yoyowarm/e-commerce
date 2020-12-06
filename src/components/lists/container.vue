<template>
  <div class="container">
      <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Container extends Vue {
}
</script>

<style lang="less" scoped>
.container {
    padding: 0px 20px
}
</style>