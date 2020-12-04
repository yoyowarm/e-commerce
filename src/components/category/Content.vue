<template>
  <div class="content">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Content extends Vue {

}
</script>

<style lang="less" scoped>
.content {
    padding: 10px 0px;
    padding-bottom: 20px;
    border-bottom: 2px solid #F6F5F4
}
</style>