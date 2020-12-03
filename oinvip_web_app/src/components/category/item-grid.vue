<template>
  <div class="gird" :style="{ 'height': height }">
      <slot />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style lang="less" scoped>
.gird {
  display: flex;
  overflow-y: auto;
  width: 100vw;
  padding: 0px 20px;
}
</style>