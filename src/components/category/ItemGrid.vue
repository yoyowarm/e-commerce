<template>
  <div class="gird" :style="{ 'height': height }">
      <slot />
  </div>
</template>

<script>
export default {
  name: "ItemGrid",
  props: {
    height: {
      required: false, 
      type: String, 
      default: 'auto'
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
.gird {
  display: flex;
  overflow-y: auto;
  width: 100vw;
  padding: 0px 20px;
}
</style>