<template>
  <div class="user-info ">
    <el-row type="flex" justify="center" class="h-100 w-100'">
      <el-col :span="7">
        <img v-bind:src="`${userModel.userImage}`">
      </el-col>
      <el-col :span="17">
        <ul class="account">
          <li>{{userModel.nickName}}</li>
          <li><span>會員：{{userModel.userCode}}</span></li>
          <li><el-button @click="$router.push({ name: 'Profile'})" class="edit" round>編輯我的資料 <img src="@/assets/images/edit.svg" alt=""></el-button></li>
        </ul>
      </el-col>
      <!-- <el-col v-else>
        <ul class="account">
          <li><el-button @click="$router.push({ name: 'Login'})" class="edit" round>登入</el-button></li>
        </ul>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userModel: {
        nickName: "",
        userCode: "",
        userImage: "",
      }
    }
  },
  created() {

  },
  mounted() {
    this.getLoginState();
      // this.$root.$on('isLogout', (isLogout) => {
      //   if (isLogout) {
      //     this.getLoginState();
      //   }
      // });
  },
  methods: {
    getLoginState: function() {
      // this.isLogout = this.$auth.isSignIn();
      // if (this.$auth.isSignIn()) {
      //   const userData = JSON.parse(localStorage.getItem('userInfo') || "");
      //   this.userModel.userImage = userData.picture;
      //   this.userModel.nickName = this.$auth.user.getNickName();
      //   this.userModel.userCode = this.$auth.user.getUserCode();
      // }else {
      //   this.userModel.nickName = "";
      //   this.userModel.userCode = "";
      //   this.userModel.userImage = "";
      //   console.log('no user login');
      // }
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