<template>
  <div class="Home">
    <el-row type="flex">
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <div class="tabs">
      <div :class="{active: activeName === 'first'}" @click="activeName = 'first'"><span>可使用</span></div>
      <div :class="{active: activeName === 'second'}" @click="activeName = 'second'"><span>紀錄</span></div>
    </div>
    <div class="gits-container">
      <el-row type="flex" justify="end" class="filter">
        <img src="@/assets/images/gift/filter.png" alt="">
      </el-row>
      <el-card class="coupon-card sticker" @click.native="$router.push({name: 'CouponPage'})">
        <span class="sticker-text">117</span>
        <span class="coupon-type exchange">兌</span>
        <two-column class="">
          <img slot="left" src="@/assets/images/gift/cover.png" alt="">
          <div slot="right">
            <ul class="info">
              <li>2020.12.22 止</li>
              <li>台南府前站</li>
            </ul>
            <p class="name">振興有感乾拌麵三兄弟</p>
            <el-row type="flex" justify="space-between" class="footer">
              <el-col :span="12">
                <ul class="detail">
                  <li>註冊禮</li>
                  <li>店家發放</li>
                </ul>
              </el-col>
              <el-col :span="12">
                <el-button class="donate-btn" round @click.stop="$router.push({name: 'TransferCoupon'})">
                  <img src="@/assets/images/gift/donate-icon.svg" alt="">
                  轉贈
                </el-button>
              </el-col>
            </el-row>
          </div>
        </two-column>
      </el-card>
      <el-card class="coupon-card sticker" @click.native="$router.push({name: 'CouponPage'})">
        <span class="sticker-text">117</span>
        <span class="coupon-type discount">折</span>
        <two-column class="">
          <img slot="left" src="@/assets/images/gift/cover.png" alt="">
          <div slot="right">
            <ul class="info">
              <li>2020.12.22 止</li>
              <li>台南府前站</li>
            </ul>
            <p class="name">振興有感乾拌麵三兄弟</p>
            <el-row type="flex" justify="space-between" class="footer">
              <el-col :span="12">
                <ul class="detail">
                  <li>註冊禮</li>
                  <li>店家發放</li>
                </ul>
              </el-col>
              <el-col :span="12">
                <el-button class="donate-btn" round @click.stop="$router.push({name: 'TransferCoupon'})">
                  <img src="@/assets/images/gift/donate-icon.svg" alt="">
                  轉贈
                </el-button>
              </el-col>
            </el-row>
          </div>
        </two-column>
      </el-card>
      <el-card class="coupon-card sticker" @click.native="$router.push({name: 'CouponPage'})">
        <span class="sticker-text">117</span>
        <span class="coupon-type plus">加</span>
        <two-column class="">
          <img slot="left" src="@/assets/images/gift/cover.png" alt="">
          <div slot="right">
            <ul class="info">
              <li>2020.12.22 止</li>
              <li>台南府前站</li>
            </ul>
            <p class="name">振興有感乾拌麵三兄弟</p>
            <el-row type="flex" justify="space-between" class="footer">
              <el-col :span="12">
                <ul class="detail">
                  <li>註冊禮</li>
                  <li>店家發放</li>
                </ul>
              </el-col>
              <el-col :span="12">
                <el-button class="donate-btn" round @click.stop="$router.push({name: 'TransferCoupon'})">
                  <img src="@/assets/images/gift/donate-icon.svg" alt="">
                  轉贈
                </el-button>
              </el-col>
            </el-row>
          </div>
        </two-column>
      </el-card>
    </div>
  </div>
</template>

<script>
import TwoColumn from '@/components/category/TwoColumn.vue'
export default {
  name: "Gift",
  components: {
    TwoColumn
  },
  data() {
    return {
      activeName: 'first'
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

<style lang="less" scope>
  .tabs {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    overflow: auto;
    >div {
      padding: 5px 0px;
      min-width: 45%;
      text-align: center;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: 0px;
        left: 0px;
        background: #F6F5F4
      }
    }
    .active {
      position: relative;
      &::after {
        background: #C1AE8A;
        z-index: 2;
        width: 80%;
        left: 15%;
        border-radius: 5px;
      }
    }
  }
  .filter {
    margin-bottom: 15px;
    img {width: 75px;}
  }
  .coupon-card {
    margin-bottom: 20px;
  }
  .sticker {
    position: relative;
    .sticker-text {
      color: #fff;
      position: absolute;
      left: 5px;
      font-size: 12px;
      z-index: 5;
    }
    &::before {
      content: '';
      clip-path: polygon(100% 0, 0 0, 0 100%);
      background:#D96771;
      width: 47px;
      height: 47px;
      position: absolute;
      left: 0px;
      z-index: 3;
    }
  }
  .coupon-type {
    position: absolute;
    top: 0px;
    right: 13px;
  }
  .gits-container {
    padding: 20px;
    /deep/ .el-card__body { padding: 0px}
    .two-column {
      padding: 15px;
      padding-right: 5px;
    }
    .donate-btn {
      background: #E4DFDD;
      color: #302D2C;
      padding: 4px 10px;
      >span {
        display: flex;
        align-items: center;
      }
      img {
        width: 16px;
        margin-left: 4px
      }
    }
    ul {
      text-align: left;
      color: #767676;
      font-size: 12px;
      li {
        line-height: 18px
      }
    }
    .detail {
      padding-left: 16px;
      li {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 2px;
          height: 12px;
          background: #A8A19A;
          left: -8px;
          top: 3px
        }
        &:first-child::before {
          background: #CD646C;
        }
      }
    }
    .name {
      width: 100%;
      overflow : hidden;
      text-overflow : ellipsis;
      white-space : nowrap;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .footer {
      align-items: flex-end;
    }
  }
</style>