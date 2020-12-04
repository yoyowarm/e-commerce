<template>
  <el-card class="box-card">
    <slot/>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CustomCard extends Vue {

}
</script>

<style lang="less" scoped>
.box-card {
  margin-bottom: 10px;
  border-radius: 0px;
  border: 0px
}
</style>