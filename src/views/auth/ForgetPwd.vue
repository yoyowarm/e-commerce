<template>
    <div class="login">
      <div class="back">
        <img @click="$router.back()" src="@/assets//images/close.svg" alt="">
      </div>
        <div class="main-content">
            <div class="logo"><img :src="require('@/assets/images/login_logo.svg')"></div>
            <div class="tab">
              <button class="tablinks selected">忘記密碼</button>
            </div>
            <el-form class="textBox" :model="passwordForm" ref="loginForm" >
            <el-form-item>
                <el-input type="tel" placeholder="輸入手機" v-model="passwordForm.tel" autocomplete="off"/>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="輸入驗證碼" v-model="passwordForm.verificationCode" autocomplete="off">
                    <el-button slot="append" class="send-btn">發送驗證碼</el-button>
                </el-input>
            </el-form-item>
            </el-form>
            <div class="btn_box">
            <p><el-button round @click="$router.replace({ name: 'SetPwd'})">下一步</el-button></p>
            </div>
        </div>
        <toast/>
        <div class="brand">
          <span>LIFE LINK 品牌服務系統</span>
        </div>
    </div>
</template>

<script>
import { checkPhone } from '@/util/validators';
import Toast from '@/components/Toast.vue';
import {SHOW_TOAST} from "@/store/mutationTypes";

export default {
  name: "App",
  components:{ Toast },
  data() {
    return {
      passwordForm: {
        tel: '',
        verificationCode: '',
      },
      error: {
        phone: false,
        verificationCode: false,
        timer: 0
      }
    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    submit: function() {
      clearTimeout(this.error.timer)
      if(!checkPhone(this.passwordForm.tel)) {
          // this.error.phone = true;
          this.$store.commit(SHOW_TOAST, '手機號碼必須是10位數');
          // return this.error.timer = setTimeout(() => {
          //     this.error.phone = false
          // },4000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__nav-wrap::after {
  height: 0px
}
/deep/ .el-input__inner {
  border-radius: 50px!important;
  height: 48px
}

/deep/ .el-input-group__append {
    height: 35px;
    display: inline;
    padding: 3px 0px;
    position: absolute;
    width: 90px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    border: 0px;
    background: none;
    .send-btn {
        border-radius: 40px;
        background: #999;
        color: #fff;
        padding:8px 8px;
        margin: 0px;
        font-size: 12px;
    }
}

p {
  margin-bottom: 0px
}
.brand {
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
  color: rgb(137,137,137);
  padding-bottom: 8px;
  font-size: 16px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 0px;
    left: 0px;
    background: #F0D870
  }
}
.tab {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  .tablinks {
    margin: 0px 15px;
    border: 0px;
    background: 0px;
    color: #727171;
    font-weight: 600;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0px;
      left: 0px;
      background: #F0D870
    }
  }
}
.error-message {
  position: fixed;
  background: #666;
  color: #fff;
  border-radius: 50px;
  height: 48px;
  width: 210px;
  text-align: center;
  line-height: 48px;
  left: 0px;
  right: 0px;
  bottom: 120px;
  margin: 0 auto;
  animation-name:oxxo;
  animation-delay:2s;
  animation-duration:2s;
}
@keyframes oxxo {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

