<template>
  <div class="my-store">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <el-button class="edit" round>編輯</el-button>
      </el-col>
      <el-col :span="18" class="buttons">
        <img class="filter" src="@/assets/images/store/filter.svg" alt="">
        <img class="calendar" src="@/assets/images/store/calendar.svg" alt="">
      </el-col>
    </el-row>
    <category-content class="content" v-for="o in 6" :key="o">
      <el-row type="flex" class="store">
        <el-col :span="7" type="flex" justify="center" >
          <div class="avatar"></div>
        </el-col>
        <el-col :span="14">
          <ul>
            <li><h2 class="brand">品牌 Brand</h2></li>
            <li><p class="branch-name">— 門市分店 branch store</p></li>
            <li class="business-hours"><span class="status">營業中．</span>結束營業時間14：30<i class="el-icon-caret-bottom"></i></li>
          </ul>
        </el-col>
        <el-col :span="3" class="icons">
          <el-button icon="el-icon-phone-outline" class="phone" circle></el-button><br>
          <el-button icon="el-icon-location" class="location" circle></el-button>
        </el-col>
      </el-row>
      <tag-list />
    </category-content>
  </div>
</template>

<script>
import CategoryContent from '@/components/category/Content.vue';
import TagList from '@/components/TagList.vue'

export default {
  name: "MyStore",
  components: {
    CategoryContent,
    TagList
  },
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
.my-store {
  padding: 10px 20px 20px 20px;
  .edit {
    background: #F0D870;
    color: #fff;
    border: 0px;
    padding: 8px 14px
  }
  .buttons {
    display: flex;
    justify-content: flex-end
  }
  .filter {
    width: 80px;
    margin-right: 20px
  }
  .calendar {
    width: 25px;
  }
}
.content {
  padding: 12px 0px 8px 0px;
  margin-top: 10px;
  .store {
    padding: 10px 0px 14px 0px
  }
}
.avatar {
  background: #F6F5F4;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  box-sizing: content-box;
  box-shadow:
      0 0 0 5px #fff,
      0 0 0 6px #D4D5D5;
  img {
    width: 100%;
  }
}

.business-hours {
  font-size: 13px;
  color: #5F5E5E;
  .status {
    color: #E37E84;
  }
}
.icons {
  button {
    padding: 5px;
    margin: 6px 0px;
  }
  /deep/ [class^=el-icon-] {
    font-size: 20px;
  }
  .phone {
    color: #2FB092;
    border-color: #2FB092
  }
  .location {
    color: #7EABD6;
    border-color: #7EABD6
  }
}
</style>