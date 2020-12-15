<template>
  <el-row type="flex" justify="space-between" class="two-column">
    <el-col :span="10" class="cover">
      <slot name="left">
      <img src="@/assets/images/homepage/cover-3.png" alt="">
      </slot>
    </el-col>
    <el-col :span="14" class="right">
      <slot name="right">
      <el-row class="title">
        <el-col :span="10"><span class="tag">縣市名稱</span></el-col>
        <el-col :span="14" class="text">標題標題標題標題標題標題標題標題</el-col>
      </el-row>
      <p class="date">2020.07.07~2020.10.10</p>
      <p class="description">活動內容文字活動內容文字活動內容文字活動內容文字活動文活動內容文字活動內容文字活動內容文字活動內容文字活動文</p>
      </slot>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TwoColumn",
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
.two-column {
  padding: 20px;
}
.right {
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
.cover {
  width: 130px;
  height: 130px;
  background: #F6F5F4;
  img {
    object-fit: cover;
  }
}
.title {
  color: #727171;
  font-size: 18px;
  width: 100%;
  .tag {
    color: #fff;
    padding: 2px 6px;
    background: #FFB11B;
    border-radius: 15px;
    font-size: 14px
  }
  .text {
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
  }
}
.date {
  color: #898989;
  font-size: 14px;
}
.description {
  color: #898989;
  font-size: 14px;
  color: #CBAE97;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 32px;
  line-height: 16px;
  margin-bottom: 0px
}
</style>