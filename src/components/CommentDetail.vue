<template>
  <div class="detail">
    <el-row type="flex" justify="space-between">
      <el-col>
        <el-row type="flex">
          <el-col :span="4">
            <img src="@/assets/images/comment/store-avatar.png" alt="">
          </el-col>
          <el-col :span="20">
            <ul class="store">
              <li class="brand">品牌 Brand</li>
              <li class="name">— 門市分店 branch store</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
      <div class="starts">
        <img src="@/assets/images/comment/start.svg" alt="">
        <img src="@/assets/images/comment/start.svg" alt="">
        <img src="@/assets/images/comment/start.svg" alt="">
        <img src="@/assets/images/comment/start.svg" alt="">
        <img src="@/assets/images/comment/start-line.svg" alt="">
      </div>
    </el-row>
    <div class="comment">
      評論內容評論容評容評論評論容評容評論容評容評容容評論容評容容評容評論容容評容評論評容容評評論內容評論容評容評論評論容評容評論容評容評容評論容評容容評容評論容容評容評論評容容評
    </div>
    <el-row type="flex" justify="space-between" class="feedback">
      <el-col>
        <img style="width: 56px" src="@/assets/images/more.svg" alt="">
        <p class="time">2020.07.13 14:23</p>
      </el-col>
      <el-col :span="11">
        <el-row type="flex" justify="end">
          <el-col :span="12">
            <img src="@/assets/images/comment/comment-line.png" alt="">15</el-col>
          <el-col :span="12"><img src="@/assets/images/comment/heart-line.png" alt="">32</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CommentDetail",
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
.detail {
  padding: 0px 15px;
  position: relative;
  img {
    width: 48px;
  }
}
.starts {
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  img {
    width: 20px;
    margin-left: 3px
  }
}
.store {
  .brand {
    color:#595757;
    font-size: 22px;
    line-height: 26px;
  }
  .name {
    color: #A48B78;
    font-size: 16px;
    line-height: 19px;
  }
}
.comment {
  width: 100%;
  height: 44px;
  overflow: hidden;
  color: #8E8E8F;
  font-size: 16px;
  line-height: 22px;
}
.feedback {
  margin-top: 5px;
  img {
    width: 22px;
    margin-right: 4px;
    margin-bottom:4px
  }
  .time {
    color: #A6A7A7;
    font-size: 12px;
    margin-bottom: 0px;
    line-height: 16px;

  }
}

</style>