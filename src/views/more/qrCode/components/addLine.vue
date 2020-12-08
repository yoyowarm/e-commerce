<template>
  <el-row type="flex" class="add-line">
    <el-col :span="4" :class="{flexStart}">
      <slot name="icon">
        <el-button @click="deleteItem" icon="el-icon-minus" class="less" circle></el-button>
      </slot>
    </el-col>
    <el-col :span="8" :class="{flexStart}">
      <slot name="left" />
    </el-col>
    <el-col :span="1" :class="{flexStart}">
      <i class="el-icon-arrow-right arrow" style="font-size: 18px; font-weight: 800"></i>
    </el-col>
    <el-col :span="11" style="padding-left: 5px" >
      <slot name="right" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator';
@Component
export default class AddLine extends Vue {
  @Prop({type:Number}) itemIndex !: null
  @Prop({type: Boolean}) flexStart !: false
  @Emit('deleteItem')
  deleteItem() {
    return this.itemIndex
  }
}
</script>

<style lang="less" scoped>
.add-line {
  width: 100%;
  margin-top: 10px;
  line-height: 22px;
}
.less {
  background-color: #E37E84!important;
  color: #fff!important;
  border: 0px!important;
  outline: none;
}
.arrow {
  color: #F0D870;
  margin-right: 10px
}
.el-col {
  display: flex;
  align-items: center;
}
.flexStart {
  align-items: flex-start
}
</style>