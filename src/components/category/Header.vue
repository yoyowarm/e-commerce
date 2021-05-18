<template>
  <div class="list-header" :class="{ 'between': to }">
    <slot name="title">
      <span>{{ title }}</span>
    </slot>
    <span
      @click="() => { if(to) $router.push(to)}"
    >
      <slot name="more">
        <img v-if="to" src="@/assets/images/more.svg" alt="">
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: {
    title: String,
    to: Object,
  },
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

<style lang="less" scoped>
.list-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
  &.between {
    justify-content: space-between
  }
}
</style>