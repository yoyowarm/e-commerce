<template>
  <div>
    <custom-card class="user-block">
      <div class="avatar">
        <img v-bind:src="`${form.avatar}`" alt="" @click="switchImage">
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
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/name.svg" alt="">
        <el-row slot="label" type="flex" justify="space-between">
          <el-col :span="8">姓名</el-col>
          <el-col :span="16" class="text-right">核對身份用</el-col>
        </el-row>
        <div slot="input">
          <span v-if="form.name">{{form.name}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input noBorder>
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/nickname.svg" alt="">
        <el-row slot="label" type="flex" justify="space-between">
          <el-col :span="8">暱稱</el-col>
          <el-col :span="16" class="text-right">顯示於APP中</el-col>
        </el-row>
        <div slot="input">
          <span v-if="form.nickname">{{form.nickname}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="手機" noBorder>
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/phone.svg" alt="">
        <div slot="input">
          <span v-if="form.phone">{{form.phone}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="生日" noBorder>
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/birth.svg" alt="">
        <div slot="input">
          <span v-if="form.birth">{{form.birth}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="性別" noBorder>
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/name.svg" alt="">
        <div slot="input">
          <span v-if="form.gender">{{form.gender}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="信箱" noBorder>
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/email.svg" alt="">
        <div slot="input">
          <span v-if="form.email">{{form.email}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
      <border-input labelText="聯絡地址" noBorder>
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/house.svg" alt="">
        <div slot="input">
          <span v-if="form.address">{{form.address}}</span>
          <span v-else class="empty">尚未輸入</span>
        </div>
      </border-input>
    </custom-card>
  </div>
</template>

<script>
import CustomCard from '@/components/CustomCard.vue';
import BorderInput from '@/components/BorderInput.vue'

export default {
  name: "Profile",
  components:{ CustomCard, BorderInput },
  data() {
    return {
      form: {
        avatar: '',
        name: '熊麻吉',
        nickname: 'bearly',
        phone: '+886 11234567',
        birth: '1990-10-22',
        gender: '男',
        email: '',
        address: '台南市安平區光州路52號'
      }
    }
  },
  created() {

  },
  mounted() {
    const userData = JSON.parse(JSON.stringify(localStorage.getItem('userInfo')) || "");
    if (userData) {
      this.form.avatar = userData.picture
      this.form.name = userData.name
      this.form.nickname = userData.nickName
      this.form.phone = localStorage.getItem('phone') || ""
      this.form.birth = userData.birthdayAt
      switch (userData.gender) {
        case 0:
          this.form.gender = '?'
          break
        case 1:
          this.form.gender = '男'
          break
        case 2:
          this.form.gender = '女'
          break
      }
      this.form.email = userData.email
      this.form.address = userData.address
    }
    
  },
  methods: {
    switchImage: function() {
      //
    }
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
      border-radius:50px;
      width: 100%;
      object-fit: cover;
    }
  }
}
.empty {
  color: #A6A7A7
}
</style>