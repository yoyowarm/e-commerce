<template>
  <div class="login">
    <div class="main-content">
        <div class="logo"><img :src="require('@/assets/images/login_logo.svg')"></div>
        <div class="tab">
          <button class="tablinks selected">更改密碼</button>
        </div>
        <el-form class="textBox" :model="form" ref="loginForm" >
        <el-form-item>
            <el-input placeholder="請輸入舊密碼" v-model="form.oldPassword" type="password" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="請輸入 6-12 碼英數混合" v-model="form.password" type="password" show-password>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="請再次確認新密碼" v-model="form.reconfirm" type="password" show-password></el-input>
        </el-form-item>
        </el-form>
        <div class="btn_box">
        <p><router-link :to="{ name: 'ForgetPwd'}" class="forget"><a>忘記密碼?</a></router-link></p>
        <p><el-button round>送出</el-button></p>
        </div>
    </div>
    <div class="brand">
      <span>LIFE LINK 品牌服務系統</span>
    </div>
  </div>
</template>

<script>
import { checkPhone, checkPassword } from '@/util/validators';

export default {
  name: "ResetPassword",
  data() {
    return {
      loginform: {
          tel: '',
          password: '',
      },
      registeredForm: {
        tel: ''
      },
      error: {
        phone: false,
        password: false,
        timer: 0
      },
      form: {
        oldPassword: '',
        password: '',
        reconfirm: ''
      }
    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    login: function() {
      clearTimeout(this.error.timer)
      if(!checkPhone(this.loginform.tel)) { this.error.phone = true; return this.error.timer =setTimeout(() => {this.error.phone = false},4000) }
      if(!checkPassword(this.loginform.password)) { this.error.password = true; return  this.error.timer = setTimeout(() => {this.error.password = false},4000)}
    },
    registered: function() {
      clearTimeout(this.error.timer)
      if(!checkPassword(this.registeredForm.tel)) { this.error.password = true; return  this.error.timer = setTimeout(() => {this.error.password = false},4000)}
    },
    submit () {
    // clearTimeout(this.error
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
.notice {
  font-size: 14px;
  text-align: center;
  span {
    color: #F0D870;
  }
}
.checked /deep/ .el-checkbox__label{
  font-size: 16px;
}
.terms {
  color: rgb(255,177,27);
  padding-left: 8px;
  font-size: 16px;
}
/deep/ .el-input-group__append {
  height: 35px;
  display: inline;
  padding: 3px 0px;
  position: absolute;
  width: 75px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  border: 0px;
  background: none;
  .send-btn {
    border-radius: 40px;
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

