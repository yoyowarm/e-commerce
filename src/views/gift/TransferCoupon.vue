<template>
  <div class="transfer">
    <category-content class="text-left">
      <ul>
        <li class="date">2020-12-22 止</li>
        <li><h2 class="brand overflow-omitted">振興有感乾拌麵三兄弟兌換券</h2></li>
        <li><p class="branch-name">— 門市分店 branch store</p></li>
      </ul>
    </category-content>
    <div>
      <category-header>
        <div slot="title" class="title">
          轉贈對象
        </div>
        <div slot="more">
          <el-button type="text">
            <img src="@/assets/images/gift/qrcode.svg" alt="">
          </el-button>
          <el-button type="text">
            <img src="@/assets/images/gift/scan.svg" alt="">
          </el-button>
        </div>
      </category-header>
      <category-header>
        <div slot="title" class="title">
          轉贈數量
        </div>
      </category-header>
      <category-header>
        <div slot="title" class="title">
          備註欄
        </div>
      </category-header>
      <category-header>
        <div slot="title" class="title">
          留言給對方
        </div>
      </category-header>
    </div>
  </div>
</template>

<script>
import CategoryContent from '@/components/category/Content.vue'
import CategoryHeader from '@/components/category/Header.vue';
export default {
  name: "Coupon",
  components: {
    CategoryContent,
    CategoryHeader
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
/deep/ .content {
  padding: 10px 0px
}
/deep/ .list-header {
  margin-left: 0px;
  font-weight: 600;
}
.transfer {
  padding: 20px;
  .date {
    color: #767676;
    font-size: 14px;
  }
  .brand { font-weight: 600;}
}
.title {
  color: #727171;
  font-size: 20px;
  padding-left: 15px;
  position: relative;
  margin-bottom: 12px;
  &::after {
    position: absolute;
    content: '';
    width: 8px;
    height: 18px;
    background: #CBAE97;
    left: 0px;
    top: 8px;
  }
}
</style>