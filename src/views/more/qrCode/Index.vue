<template>
  <el-container class="qr-code is-vertical">
    <el-row type="flex" justify="end">
      <el-col :span="4" class="text-right">
            <el-button @click="$router.push({name: 'EditQrCode'})" type="text"><img src="@/assets/images/edit_black.svg" alt=""></el-button>
          </el-col>
    </el-row>
    <div class="main">
      <div class="avatar"></div>
      <div class="code">
        <p class="name">串門子user name</p>
        <img src="@/assets/images/qrcode/mock-img.png" alt="">
      </div>
      <p>掃描條碼分享個人聯絡資訊給他人</p>
      <p>
        <label class="agree">
          <span>我已同意</span>
          <input type="checkbox"  v-model="agree" >
          <span class="checkmark"></span>
        </label>
        <el-button class="rule" type="text">使用QR通訊錄功能暨使用條款</el-button>
      </p>
      <div class="footer">
        <el-button class="confirm" round>分享</el-button>
        <el-button type="primary" round>保存</el-button>
      </div>
    </div>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class QrCode extends Vue {
  agree = false
}
</script>

<style lang="less" scoped>
.qr-code {
  min-height: calc(100vh - 60px);
  background: url('../../../assets/images/qrcode/qrcode-bg.png') left top;
  background-size: cover;
  padding: 20px;
  .main {
    width: 80%;
    margin: 0 auto;
    margin-top: 16%;
    text-align: center;
    position: relative;
    .avatar {
      width: 76px;
      height: 76px;
      background: #D4D5D5;
      border-radius: 80px;
      position: absolute;
      left: 0px;
      right: 0px;
      top: -38px;
      margin: 0 auto;
    }
    .code {
      width: 100%;
      background: #fff;
      border-radius: 20px;
      height: 332px;
      padding-top: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.16);
      .name {
        color: #836F75;
        font-size: 22px;
      }
      img {
        width: 70%;
      }
    }
    
    p {
      margin-top: 25px;
      font-size: 16px;
      color: #727171
    }
    .rule {
      color: #7EABD6;
      cursor: pointer;
      padding: 0px;
      font-size: 14px;
    }
    .agree {
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-size: 14px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .checkmark {
        position: absolute;
        top: 8px;
        left: -22px;
        height: 15px;
        width: 15px;
        background-color: #eee;
        border-radius: 10px;
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px #666;
        &::after {
          position: absolute;
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: 3px solid white;
        }
      }
      input:checked ~ .checkmark {
        background-color: #CBAE97;
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px #666
      }
      input:checked ~ .checkmark:after {
        display: block;
      }
    }
    .footer {
      margin: 30px auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      button {
        width: 120px;
      }
      .confirm {
        background: #F0F0ED;
        border: 0px
      }
    }
  }
  @media( max-width: 360px) {
      .code {
        height: 45vh
      }
      p {
        font-size: 14px!important;
      }
    }
}
</style>