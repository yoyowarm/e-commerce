<template>
    <div class="login">
      <div class="back">
        <img @click="$router.back()" src="@/assets/images/close.svg" alt="">
      </div>
        <div class="main-content">
            <div class="logo"><img :src="require('@/assets/images/login_logo.svg')"></div>
            <div class="tab">
              <button class="tablinks" @click="selected = 'login'" :class="{selected: selected === 'login'}" >登入</button>
              <button class="tablinks" @click="selected = 'registered'" :class="{selected: selected === 'registered'}">註冊</button>
            </div>
            <div class="tabs-login" v-if="selected === 'login'">
              <el-form class="textBox" :model="loginform" ref="loginForm" >
                <el-form-item>
                  <el-input type="tel" placeholder="輸入手機" v-model="loginform.tel" autocomplete="off"/>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="輸入密碼" v-model="loginform.password" show-password autocomplete="off" />
                </el-form-item>
              </el-form>
              <div class="btn_box">
                <p><router-link :to="{ name: 'ForgetPwd'}"><a>忘記密碼?</a></router-link></p>
                <p><el-button round @click="login">登入</el-button></p>
              </div>
            </div>
            <div class="tabs-registered" v-else>
              <el-form class="textBox" :model="registeredForm" ref="registeredForm">
                <el-form-item>
                  <el-input type="tel" placeholder="輸入手機" v-model="registeredForm.tel" autocomplete="off" />
                </el-form-item>
              </el-form>
              <div class="btn_box">
                <p><el-button round @click="registered">註冊</el-button></p>
              </div>
            </div>
        </div>
        <div class="error-message" v-if="error.phone">手機號碼必須是10位數</div>
        <div class="error-message" v-if="error.password">密碼必須為6-12英文數字混合</div>
        <div class="brand">
          <span>LIFE LINK 品牌服務系統</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { CheckPhone, CheckPassword } from '@/util/validators'

interface Loginform {
  tel: string;
  password: string;
}

interface RegisteredForm {
  tel: string;
}

interface Error {
  phone: boolean;
  password: boolean;
  timer: number;
}

@Component
export default class Login extends Vue {
  public selected = 'login';
  public loginform!: Loginform;
  public registeredForm!: RegisteredForm;
  public error!: Error;

  public login() {

  }

  public registered() {

  }
}

// export default {
//   name: "Login",
//   data() {
//     return {
//         selected: 'login',
//         loginform: {
//           tel: null,
//           password: '',
//         },
//         registeredForm: {
//           tel: null
//         },
//         error: {
//           phone: false,
//           password: false,
//           timer: null
//         }
//     };
//   },
//   methods: {
//     login () {
//       clearTimeout(this.error.timer)
//       if(!checkPhone(this.loginform.tel)) { this.error.phone = true; return this.error.timer =setTimeout(() => {this.error.phone = false},4000) }
//       if(!checkPassword(this.loginform.password)) { this.error.password = true; return  this.error.timer = setTimeout(() => {this.error.password = false},4000)}
//     },
//     registered () {
//       clearTimeout(this.error.timer)
//       if(!checkPassword(this.registered.tel)) { this.error.password = true; return  this.error.timer = setTimeout(() => {this.error.password = false},4000)}
//     }
//   }
// }
</script>

<style lang="less" scoped>
/deep/ .el-tabs__nav-wrap::after {
  height: 0px
}
/deep/ .el-input__inner {
  border-radius: 50px;
  height: 48px
}
.btn_box {
  button {
    background: #E4DFDD;
    color: #474747;
    width: 210px;
    height: 48px;
    font-size: 18px
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
  color: #F0D870;
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
  form {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

