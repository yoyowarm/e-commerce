<template>
  <div>
    <custom-card class="user-block">
      <div class="avatar">
        <img src="@/assets/images/avatar.svg" alt="">
        <img class="camera" src="@/assets/images/camera.svg" alt="">
      </div>
    </custom-card>
    <custom-card>
      <el-row type="flex" justify="end">
          <el-col :span="4" class="text-right">
            <el-button @click="$router.back()" type="text" class="edit-btn"><img src="@/assets/images/edit-profile.svg" alt=""></el-button>
          </el-col>
      </el-row>
    </custom-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomCard from '@/components/CustomCard.vue';

@Component({components:{ CustomCard }})
export default class EditProfile extends Vue {

}
</script>

<style lang="less" scoped>
.user-block {
  position: relative;
  height: 169px;
  width: 100%;
  background: url("../../../assets/images/user-info-bg.svg")no-repeat;
  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    .camera {
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: -7px;
      right: -6px
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
.edit-btn {
  width: 40px;
  height: 40px;
  background: url("../../../assets/images/active-edit.svg")no-repeat;
  background-size: 38px;
  padding: 0px;
  img {
    width: 20px
  }
}
</style>