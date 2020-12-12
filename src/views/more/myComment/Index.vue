<template>
  <div class="my-comment">
    <category-content>
      <image-group :imgList="imgList.slice(0,1)"/>
      <commnet-detail />
    </category-content>
    <category-content>
      <image-group :imgList="imgList.slice(0,2)"/>
      <commnet-detail />
    </category-content>
    <category-content>
      <image-group :imgList="imgList.slice(0,3)"/>
      <commnet-detail />
    </category-content>
    <category-content>
      <image-group :imgList="imgList.slice(0,4)"/>
      <commnet-detail />
    </category-content>
    <category-content>
      <image-group :imgList="imgList.slice(0,5)"/>
      <commnet-detail />
    </category-content>
    <category-content>
      <image-group :imgList="imgList.slice(0,6)"/>
      <commnet-detail />
    </category-content>
  </div>
</template>

<script lang="ts">
import ImageGroup from '@/components/ImageGroup.vue'
import CommnetDetail from '@/components/CommentDetail.vue'
import CategoryContent from '@/components/category/Content.vue'
import { Vue, Component } from 'vue-property-decorator';

@Component({ components: {
  ImageGroup,
  CategoryContent,
  CommnetDetail
}})
export default class MyComment extends Vue {
  imgList = [1,2,3,4,5,6]
}
</script>

<style lang="less" scoped>
.my-comment {
 .content {
   padding-top: 10px
 }
}
</style>