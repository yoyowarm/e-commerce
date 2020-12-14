<template>
  <div class="list-item">
    <div class="left">
      <slot name="left">
        <span>{{ title }}</span>
      </slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: {
      required: false, 
      type: String, 
      default: '' 
    },
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
.list-item {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #F6F5F4;
    .left {
      color: #836F75
    }
}
</style>