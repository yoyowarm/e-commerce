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
            <el-button @click="$router.push({name: 'EditProfile'})" type="text"><img src="@/assets/images/edit_black.svg" alt=""></el-button>
          </el-col>
      </el-row>
      <border-input noBorder>
        <el-row slot="label" type="flex" justify="space-between">
          <el-col :span="8">姓名</el-col>
          <el-col :span="16" class="text-right">核對身份用</el-col>
        </el-row>
      </border-input>
      <border-input noBorder>
        <el-row slot="label" type="flex" justify="space-between">
          <el-col :span="8">暱稱</el-col>
          <el-col :span="16" class="text-right">顯示於APP中</el-col>
        </el-row>
      </border-input>
      <border-input labelText="手機" noBorder>
      </border-input>
      <border-input labelText="生日" noBorder>
      </border-input>
      <border-input labelText="性別" noBorder>
      </border-input>
      <border-input labelText="信箱" noBorder>
      </border-input>
      <border-input labelText="聯絡地址" noBorder>
      </border-input>
    </custom-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomCard from '@/components/CustomCard.vue';
import BorderInput from '@/components/border-input.vue'

@Component({components:{ CustomCard, BorderInput }})
export default class Profile extends Vue {

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
</style>