<template>
    <div class="login">
        <div class="main-content">
            <div class="logo"><img :src="require('@/assets/images/login_logo.svg')"></div>
            <div class="tab">
              <button class="tablinks" @click="selected = 'login'" :class="{selected: selected === 'login'}" >登入</button>
              <button class="tablinks" @click="selected = 'registered'" :class="{selected: selected === 'registered'}">註冊</button>
            </div>
            <div class="tabs-login" v-if="selected === 'login'">
              <el-form class="textBox" :model="login" :rules="rules" ref="loginForm" >
                <el-form-item prop="phone">
                  <el-input type="tel" placeholder="輸入手機" v-model="login.tel" autocomplete="off"/>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input placeholder="輸入密碼" v-model="login.password" show-password autocomplete="off" />
                </el-form-item>
              </el-form>
              <div class="btn_box">
                <p><router-link :to="{ name: 'ForgetPwd'}"><a>忘記密碼?</a></router-link></p>
                <p><el-button round>登入</el-button></p>
              </div>
            </div>
            <div class="tabs-registered" v-else>
              <el-form class="textBox" :model="registered" :rules="rules" ref="registeredForm">
                <el-form-item prop="phone">
                  <el-input type="tel" placeholder="輸入手機" v-model="registered.tel" autocomplete="off" />
                </el-form-item>
              </el-form>
              <div class="btn_box">
                <p><el-button round>註冊</el-button></p>
              </div>
            </div>
        </div>
        <div class="brand">
          <span>LIFE LINK 品牌服務系統</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        selected: 'login',
        login: {
          tel: null,
          password: ''
        },
        registered: {
          tel: null
        },
        rules: {
          phone: [{ required: true, message: '必填欄位', trigger: 'blur'  }],
          password: [{ required: true, message: '必填欄位', trigger: 'blur'  }]
        }
    };
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
</style>

