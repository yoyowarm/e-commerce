<template>
  <el-main>
    <user-info id="userInfoPanel"/>
    <div class="menu" v-if="login">
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
          <router-link :to="{ name: 'Login' }">
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

    <!-- 未登入時的選單 -->
    <div v-else>
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
        </el-col>
      </el-row>
    </div>

    <logout :value="logoutDialog" @close="(value) => { logoutDialog = value }" />
  </el-main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserInfo from './components/UserInfo.vue';
import Logout from './components/Logout.vue';
import UserData from "@/model/UserInfo";
import router from "@/router";
import {MutationTypes} from "@/store/MutationTypes";

@Component({components:{ UserInfo, Logout }})
export default class More extends Vue {
  login = false;
  logoutDialog = false;

  created() {
    if (this.$auth.isSignIn()) {
      this.callGetUserInfoApi();
    }
  }

  /** 取得個人資料 */
  callGetUserInfoApi() {
    new UserData().getUserInfo({
    }, (success: boolean, message: string, userInfo: UserData) => {
      if(success) {



        //儲存個人資料物件
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        this.$store.commit(MutationTypes.SHOW_TOAST, message + userInfo.nickName);
      } else {
        this.$store.commit(MutationTypes.SHOW_TOAST, message);
      }
    });
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