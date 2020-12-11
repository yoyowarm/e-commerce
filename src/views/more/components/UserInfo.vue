<template>
  <div class="user-info ">
    <el-row type="flex" justify="center" :class="isLogout? 'h-100 w-100' : ''">
      <el-col :span="7" v-if="isLogout">
        <img v-bind:src="`${userModel.userImage}`">
      </el-col>
      <el-col :span="17" v-if="isLogout">
        <ul class="account">
          <li>{{userModel.nickName}}</li>
          <li><span>會員：{{userModel.userCode}}</span></li>
          <li><el-button @click="$router.push({ name: 'Profile'})" class="edit" round>編輯我的資料 <img src="@/assets/images/edit.svg" alt=""></el-button></li>
        </ul>
      </el-col>
      <el-col v-else>>
        <ul class="account">
          <li><el-button @click="$router.push({ name: 'Login'})" class="edit" round>登入</el-button></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserData from '../../../model/UserInfo';

@Component
export default class UserInfo extends Vue {
  userModel = {
    nickName: "",
    userCode: "",
    userImage: "",
  }
  isLogout = this.$auth.isSignIn();
  mounted() {
    this.getLoginState();
    this.$root.$on('isLogout', (isLogout: boolean) => {
      if (isLogout) {
        this.getLoginState();
      }
    });
  }

  getLoginState() {
   this.isLogout = this.$auth.isSignIn();
   if (this.$auth.isSignIn()) {
     const userData: UserData = JSON.parse(localStorage.getItem('userInfo') || "");
     this.userModel.userImage = userData.picture;
     this.userModel.nickName = this.$auth.user.getNickName();
     this.userModel.userCode = this.$auth.user.getUserCode();
   }else {
     this.userModel.nickName = "";
     this.userModel.userCode = "";
     this.userModel.userImage = "";
     console.log('no user login');
   }
  }
}
</script>

<style lang="less" scoped>
.user-info {
  height: 169px;
  width: 100%;
  padding: 35px 30px;
  display: flex;
  align-items: center;
  background: url("../../../assets/images/user-info-bg.svg")no-repeat;
  img {
    border-radius:50px;
    width: 100px;
  };
  .account {
    padding-left: 30px;
    .edit {
      background: #A9A29B;
      color: #fff;
      padding: 5px 12px;
      font-size: 14px;
      img {
        width: 12px;
        margin-bottom: 2px
      }
    }
  }
}
</style>