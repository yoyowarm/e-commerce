<template>
  <el-card :body-style="{ padding: '0px' }" class="article">
    <img src="@/assets/images/comment/card-cover.png" class="image">
    <div style="padding: 8px;">
      <el-row type="flex" justify="space-between">
        <el-col :span="16" class="comment-text">
          評論內容評論容評容評論內容評論評論內容評論容評容評論內容評論
        </el-col>
        <el-col :span="8" class="start">
          <img src="@/assets/images/comment/start.png" alt=""><span style="margin-left: 4px">5</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" class="store">
        <el-col :span="6">
          <div class="avatar">
            <img src="@/assets/images/comment/store-avatar.png" alt="">
          </div>
        </el-col>
        <el-col :span="18">
          <ul>
            <li class="name">麵聚場Noodle ART</li>
            <li class="branch">—台南府前店</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    </el-card>
</template>

<script>
export default {
  name: "ArticleCard",
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
.article {
  min-width: 232px;
  margin-right: 20px;
  margin-top: 6px;
  border-radius: 10px;
  .comment-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    height: 55px;
    font-size: 18px;
    line-height: 26px;
  }
  .start {
    display: flex;
    align-items: center;
    padding-left: 10px;
    img {
      width: 25px;
      height: 22px;
    }
    
  }
  .store {
    display: flex;
    justify-content: start;
    align-items: center;
    align-items: flex-start;
    font-size: 18px;
    margin-top: 4px;
    li { line-height: 22px }
    .name {
      color: #B29D98;
    }
    .branch {
      color: #5F5E5E
    }
    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 48px;
      box-shadow: 1px 5px 8px #dcdcdc;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>