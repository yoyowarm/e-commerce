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
        <img v-if="agree" src="@/assets/images/qrcode/mock-img.png" alt="">
        <div v-else class="disagree">
          <img  src="@/assets/images/qrcode/no-allowed.svg" alt="">
          <p>尚未同意使用條款<br>無法使用此功能喔</p>
        </div>
        
      </div>
      <p>掃描條碼分享個人聯絡資訊給他人</p>
      <p>
        <label class="agree">
          <span>我已同意</span>
          <input type="checkbox"  v-model="agree" >
          <span class="checkmark"></span>
        </label>
        <el-button class="rule" type="text" @click="openedPrivacy = true">使用QR通訊錄功能暨使用條款</el-button>
      </p>
      <div class="footer">
        <el-button class="confirm" @click="openedShare = true" round>分享</el-button>
        <el-button type="primary" @click="openedSave = true" round>保存</el-button>
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <privacy v-show="openedPrivacy" :opened.sync="openedPrivacy"/>
    </transition>
    <popup-model
      :opened.sync="openedShare"
    >
      <div class="popup">
        <img src="@/assets/images/qrcode/qrCode-share-icon.png" alt="">
        <p class="description">QR通訊錄讓好友直接<br>將您的通訊加入手機連絡簿</p>
        <p class="text">請注意，此分享會讓他人獲得您設置的個人聯絡資訊，請謹慎使用。</p>
        <el-row type="flex" justify="start" class="icon-group">
          <el-col :span="6">
            <div class="icon-block">
              <img src="@/assets/images/qrcode/app-logo.png" alt="">
            </div>
            <span>OIN好友</span>
          </el-col>
          <el-col :span="6">
            <div class="icon-block">
              <img src="@/assets/images/qrcode/line-logo.png" alt="">
            </div>
            <span>Line</span>
          </el-col>
          <el-col :span="6">
            <div class="icon-block">
              <img src="@/assets/images/qrcode/message-logo.png" alt="">
            </div>
            <span>Message</span>
          </el-col>
        </el-row>
      </div>
    </popup-model>
    <popup-model
      :opened.sync="openedSave"
    >
      <div class="popup">
        <img src="@/assets/images/qrcode/qrCode-download-icon.png" alt="">
        <p class="description">將QR通訊錄QRCODE另存成圖檔</p>
        <img style="width: 144px" src="@/assets/images/qrcode/mock-img.png" alt="">
        <p class="text text-center">下載條碼 JPG│PNG│SVG</p>
      </div>
    </popup-model>
  </el-container>
</template>

<script>
import Privacy from '@/components/privacy.vue'
import PopupModel from '@/components/popupModel.vue'

export default {
  name: "QrCode",
  components: { Privacy, PopupModel },
  data() {
    return {
      agree: true,
      openedPrivacy: false,
      openedSave: false,
      openedShare: false
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
      .disagree {
        line-height: 24px;
        margin-top: 30%;
        img {
          width: 60px;
        }
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
  .popup {
    text-align: center;
    img {
      width: 65px;
    }
    p {
      margin-top: auto;
    }
    .description{
      color: #F0D870;
      font-size: 18px;
      text-align: center;
      margin-top: 20px
    }
    .text{
      color: #F6F5F4;
      font-size: 16px;
      text-align: left;
      margin-top: 20px
    }
    .icon-group {
      margin-top: 30px;
      text-align: center;
      .icon-block {
        background: #000;
        width: 57px;
        height: 57px;
        border-radius: 57px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 40px;
      }
    }
    
  }
}

</style>