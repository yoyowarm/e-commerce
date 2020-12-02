<template>
  <div class="list-header" :class="{ 'between' : to }">
    <slot name="title">
      <span>{{ title }}</span>
    </slot>
    <span
      v-if="to"
      @click="() => $router.push(to)"
    >
      <slot name="more">更多…</slot>
    </span>
  </div>
</template>

<script>
export default {
props: {
  title: {
      type: String,
      default: ''
    },
  to: {
    type: Object,
    default: null
  }
}
}
</script>

<style lang="less" scoped>
.list-header {
  display: flex;
  align-items: center;
  justify-content: start;
  & .between {
    justify-content: space-between
  }
}
</style>