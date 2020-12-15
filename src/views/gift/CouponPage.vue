<template>
  <div>
    <div class="cover">
      <img src="@/assets/images/gift/cover2.png" alt="">
    </div>
    <category-content class="coupon-body">
      <el-row type="flex">
        <span class="coupon-type exchange">兌</span>
      </el-row>
      <el-row type="flex" justify="center" class="button-line">
        <el-button round>我要兌換</el-button>
        <el-button class="donate-btn" round @click="$router.push({name: 'TransferCoupon'})"><img src="@/assets/images/gift/donate-icon.svg" alt="">轉贈</el-button>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="20" class="name overflow-omitted">
          振興有感乾拌麵三兄弟
        </el-col>
        <el-col :span="4" class="amount overflow-omitted text-right">
          X117
        </el-col>
      </el-row>
      <el-row type="flex" class="info-line">
        <el-col :span="6" class="text-left">
          適用分店
        </el-col>
        <el-col :span="16" class="overflow-omitted">
          <span class="branch-name">台南府前店</span>|
          <span class="branch-name">台南中華店</span>|
          <span class="branch-name">高雄大勇店</span>|
          <span class="branch-name">高雄大勇店</span>
        </el-col>
        <el-col :span="2">
          <el-button circle @click="$router.push({name: 'Branches'})">
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </el-col>
      </el-row>
      <el-row type="flex" class="info-line">
        <el-col :span="6" class="text-left">
          使用期限
        </el-col>
        <el-col :span="16" class="overflow-omitted">
          2020.06.16~2020.12.22 止
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
      <el-row type="flex" class="info-line">
        <el-col :span="6" class="text-left">
          發放日期
        </el-col>
        <el-col :span="16" class="overflow-omitted">
          2020.07.17 18:00 <span class="amount">X10</span>
        </el-col>
        <el-col :span="2">
          <el-button circle @click="$router.push({name: 'IssueDate'})">
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </el-col>
      </el-row>
    </category-content>
    <el-row class="description">
      <p class="title">活動說明</p>
      <p class="text">我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明。</p>
    </el-row>
    <el-row class="description">
      <p class="title">注意事項</p>
      <p class="text">我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明，我是活動說明。</p>
    </el-row>
  </div>
</template>

<script>
import CategoryContent from '@/components/category/Content.vue'
export default {
  name: "CouponPage",
  components: {
    CategoryContent
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
.cover {
  height: 242px;
  img {
    height: 100%;
    object-fit: cover;
  }
}
.coupon-type {
  margin: 5px 0px;
  text-align: center;
  position: relative;
}
.coupon-body {
  padding-top: 0px;
  padding-bottom: 15px; 
  margin: 0px 20px;
  text-align: left;
  .name {
    color: #3E3A39;
    font-size: 16px;
    text-align: left;
  }
  .amount {
    color: #E37E84;
    font-size: 14px;
  }
  .branch-name {
    color: #7EABD6;
    margin-right: 2px
  }
  .button-line {
    margin: 6px 0px 15px 0px;
    button {
      padding: 10px 15px;
      margin: 0px 15px;
      width: 145px;
      border: 0px;
      background: #F0F0ED;
    }
    .donate-btn {
      background: #E4DFDD;
      color: #302D2C;
      >span {
        display: flex;
        align-items: center;
      }
      img {
        width: 16px;
        margin-right: 6px
      }
    }
  }
  .info-line {
    color: #8E8E8F;
    button {
      padding: 4px
    }
  }
}
.description {
  color: #8E8E8F;
  padding: 15px;
  p {
    text-align: left;
    margin-bottom: 5px;
    line-height: 22px;
  }
}
</style>