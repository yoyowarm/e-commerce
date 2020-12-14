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
                <p><el-button :class="{hasValue: loginForm.tel || loginForm.password}" @click="login" round plain >登入</el-button></p>
                <p><router-link :to="{ name: 'ForgetPwd'}" class="forget"><a>忘記密碼?</a></router-link></p>
              </div>
            </div>
            <div class="tabs-registered" v-else>
              <el-form class="textBox" :model="registeredForm" ref="registeredForm">
                <el-form-item>
                  <el-input type="tel" placeholder="輸入手機" v-model="registeredForm.tel" autocomplete="off" />
                </el-form-item>
              </el-form>
              <div class="btn_box">
                <p><el-button :class="{hasValue: registeredForm.tel}" round @click="$router.push({name: 'PhoneVerify'})">註冊</el-button></p>
              </div>
            </div>
        </div>
        <toast/>
        <div class="brand">
          <span>LIFE LINK 品牌服務系統</span>
        </div>
    </div>
</template>

<script>
// import User from '@/model/User';
// import Register from '@/model/Register';
// import UserData from '@/model/UserInfo';
import { checkPhone, checkPassword } from '@/util/validators';
import Toast from '@/components/Toast.vue';
import {MutationTypes} from '@/store/mutationTypes';

export default {
  name: "App",
  components:{ Toast },
  data() {
    return {
      selected: 'login',
      // user: new User(),
      loginform: {
        tel: '',
        password: ''
      },
      registeredForm: {
        tel: ''
      }
    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    login: function() {
      if(!checkPhone(this.loginform.tel)) {
        this.$store.commit(MutationTypes.SHOW_TOAST, '手機號碼必須是10位數');
        return
      }
      if(!checkPassword(this.loginform.password)) { 
        this.$store.commit(MutationTypes.SHOW_TOAST, '密碼必須為6-12英文數字混合');
        return
      }
      this.user.signIn({
          countryCode: '+886',
          phone: this.loginform.tel,
          password: this.loginform.password
      }, (success, message, user) => {
        if (success) {
          localStorage.setItem('phone', this.loginform.tel);
          localStorage.setItem('token', user.getToken());
          localStorage.setItem('nickName', user.getNickName());
          localStorage.setItem('userCode', user.getUserCode());
          this.$auth.setup();
          this.getUserInfo();
        }else {
          this.$store.commit(MutationTypes.SHOW_TOAST, message);
        }
      });
    },
    getUserInfo: function() {
      // new UserData().getUserInfo({
      // }, (success, message, userInfo) => {
      //   this.saveUserData(userInfo);
      //   this.$router.back();
      // });
    },

    saveUserData: function(userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },

    registered: function() {
      // if(!checkPhone(this.loginform.tel)) { 
      //   this.$store.commit(MutationTypes.SHOW_TOAST, '手機號碼必須是10位數');
      //   return
      // }
      // (new Register()).checkRegister({
      //     countryCode: '+886',
      //     phone: this.registeredForm.tel,
      // }, (success, message, register) => {
      //   if (success) {
      //     console.log(register.getRegisterState());
      //   }else {
      //     this.$store.commit(MutationTypes.SHOW_TOAST, message);
      //   }
      // });
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__nav-wrap::after {
  height: 0px
}
/deep/ .el-input__inner {
  border-radius: 50px;
  height: 48px
}
/deep/ .el-form-item {
  margin-bottom: 35px;
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
  margin-bottom: 40px;
  .tablinks {
    margin: 0px 15px;
    border: 0px;
    padding: 8px 30px;
    outline: none;
    background: none;
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

@keyframes oxxo {
  form {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

