<template>
  <div class="img-group">
    <el-row>
      <el-col v-for="img in firstLine" :key="img" :span="24 / firstLine.length">
        <div class="img-block">
        </div>
      </el-col>
    </el-row>
    <template v-if="secondLine.length > 0">
      <el-row>
        <el-col v-for="img in secondLine" :key="img" :span="24 / secondLine.length">
        <div class="img-block">
          <img :src="img" alt="">
        </div>
      </el-col>
      </el-row>
    </template>
    
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ImageGroup extends Vue {
@Prop({type: Array}) imgList!: []
get firstLine () {
  return this.imgList.slice(0,3)
}
get secondLine () {
  return this.imgList.slice(3,6)
}
}
</script>

<style lang="less" scoped>
.img-group {
  padding: 5px 10px;
  .img-block {
    margin: 5px;
    height: 120px;
    background: rgb(246,245,244);
    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>