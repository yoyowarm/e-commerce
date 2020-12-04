<template>
  <div class="gird" :style="{ 'height': height }">
      <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ItemGrid extends Vue {
   @Prop({required: false, type: String, default: 'auto'}) height = 'auto';
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