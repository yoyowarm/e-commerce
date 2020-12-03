<template>
  <div class="user-info ">
    <el-row type="flex" justify="center" class="h-100 w-100">
      <el-col :span="7">
        <img src="@/assets/images/avatar.svg" alt="">
      </el-col>
      <el-col :span="17">
        <ul class="account">
          <li>User name</li>
          <li><span>會員：user1234</span></li>
          <li><el-button @click="$router.push({ name: 'EditProfile'})" class="edit" round>編輯我的資料 <img src="@/assets/images/edit.svg" alt=""></el-button></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.user-info {
  height: 169px;
  width: 100%;
  padding: 35px 30px;
  display: flex;
  align-items: center;;
  background: url("../../../assets/images/user-info-bg.svg")no-repeat;
  img {
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