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
      <border-input labelText="姓名">
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/name.svg" alt="">
        <div slot="input">
          <span v-if="form.name">{{form.name}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="暱稱">
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/nickname.svg" alt="">
        <div slot="input">
          <span v-if="form.nickname">{{form.nickname}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="手機"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/phone.svg" alt="">
        <div slot="input">
          <span v-if="form.phone">{{form.phone}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="生日"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/birth.svg" alt="">
        <div slot="input">
          <span v-if="form.birth">{{form.birth}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="性別"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/name.svg" alt="">
        <div slot="input">
          <span v-if="form.gender">{{form.gender}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="信箱"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/email.svg" alt="">
        <div slot="input">
          <span v-if="form.email">{{form.email}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="聯絡地址"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/house.svg" alt="">
        <div slot="input">
          <span v-if="form.address">{{form.address}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
    </custom-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CustomCard from '@/components/CustomCard.vue';
import BorderInput from '@/components/border-input.vue'

@Component({components:{ CustomCard, BorderInput }})
export default class EditProfile extends Vue {
  form = {
    name: '熊麻吉',
    nickname: 'bearly',
    phone: '+886 11234567',
    birth: '1990-10-22',
    gender: '男',
    email: '',
    address: '台南市安平區光州路52號'
  }
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