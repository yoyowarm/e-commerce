<template>
  <div class="list-header" :class="{ 'between':to }">
    <slot name="title">
      <span>{{ title }}</span>
    </slot>
    <span
      v-if="to"
      @click="$router.push(to)"
    >
      <slot name="more">
        <img src="@/assets/images/more.svg" alt="">
      </slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Head extends Vue {
   @Prop({required: false, type: String, default: ''}) title = '';
   @Prop({required: false, type: Object, default: null}) to = null;
}
</script>

<style lang="less" scoped>
.list-header {
  display: flex;
  align-items: center;
  justify-content: start-flex;
  margin: 0 20px;
  &.between {
    justify-content: space-between
  }
}
</style>