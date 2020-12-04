<template>
  <el-main>
    <user-info />
    <div class="menu">
      <el-row type="flex" justify="space-between">
        <el-col :span="8">
          <router-link :to="{ name: 'BusinessCard' }">
            <img src="@/assets/images/card.svg" alt="">
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link :to="{ name: 'QrCode' }">
            <img src="@/assets/images/qrcode.svg" alt="">
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link :to="{ name: 'History' }">
            <img src="@/assets/images/history.svg" alt="">
          </router-link>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="8">
          <router-link :to="{ name: 'PrivacyPolicy' }">
            <img src="@/assets/images/privacy_policy.svg" alt="">
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link :to="{ name: 'Settings' }">
            <img src="@/assets/images/settings.svg" alt="">
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link :to="{ name: 'ResetPassword' }">
            <img src="@/assets/images/change_password.svg" alt="">
          </router-link>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="8">
          <span @click="logoutDialog = true">
            <img src="@/assets/images/logout.svg" alt="">
          </span>
        </el-col>
        <el-col :span="8">
        </el-col>
        <el-col :span="8">
        </el-col>
      </el-row>
    </div>
    <logout :value="logoutDialog" @close="(value) => { logoutDialog = value }" />
  </el-main>
</template>

<script>
import userInfo from './components/user-info'
import logout from './components/logout'
export default {
  components: {
    userInfo,
    logout
  },
  data () {
    return {
      logoutDialog: false
    }
  }

}
</script>

<style lang="less" scoped>
.el-main {
  padding: 0px!important
}
.menu {
  padding: 20px
}
.el-col {
  padding: 6px
}
</style>