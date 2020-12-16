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
        <div slot="more" class="buttons">
          <el-button type="text">
            <img src="@/assets/images/gift/qrcode.svg" alt="">
          </el-button>
          <el-button type="text">
            <img src="@/assets/images/gift/scan.svg" alt="">
          </el-button>
        </div>
      </category-header>
      <el-input class="border-input" placeholder="請輸入對方會員ID或電話號碼" v-model="phone"></el-input>
      <category-header>
        <div slot="title" class="title">
          轉贈數量
        </div>
        <span slot="more"></span>
      </category-header>
      <category-header>
        <div slot="title" class="title">
          備註欄
        </div>
      </category-header>
      <el-input
        class="border-input"
        placeholder="此備註欄位僅您本人可以查看"
        type="textarea"
        :rows="4"
        v-model="remarks"></el-input>
      <category-header>
        <div slot="title" class="title">
          留言給對方
        </div>
      </category-header>
      <el-input
        class="border-input"
        placeholder="請輸入文字內容"
        type="textarea"
        :rows="4"
        v-model="message"></el-input>
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
      phone: '',
      remarks: '',
      message: ''
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
  margin: 0px;
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
  margin-bottom: 10px;
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
.buttons {
  button {
    margin-left: 20px
  }
}
.border-input {
  border: 1px solid #D4D5D5;
  border-radius: 20px;
  min-height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  /deep/ .el-input__inner, /deep/ .el-textarea__inner {
    border: 0px;
    background-color: inherit
  }
}
</style>