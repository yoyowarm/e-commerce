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
            <el-button @click="$router.back()" type="text" class="edit-btn"><img src="@/assets/images/edit-profile.svg" alt=""></el-button>
          </el-col>
      </el-row>
      <border-input labelText="姓名">
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/name.svg" alt="">
        <div slot="input">
          <input v-model="form.name" placeholder="請輸入姓名">
        </div>
      </border-input>
      <border-input labelText="暱稱">
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/nickname.svg" alt="">
        <div slot="input">
          <input v-model="form.nickname" placeholder="請輸入暱稱">
        </div>
      </border-input>
      <border-input labelText="手機"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/phone.svg" alt="">
        <div slot="input">
          <input v-model="form.phone" placeholder="請輸入手機">
        </div>
      </border-input>
      <border-input labelText="生日"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/birth.svg" alt="">
        <div slot="input">
          <input v-model="form.birth" placeholder="請輸入生日">
        </div>
      </border-input>
      <border-input labelText="性別"  noBorder>
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/name.svg" alt="">
        <div slot="input">
          <el-radio v-model="form.gender" label="男">男</el-radio>
          <el-radio v-model="form.gender" label="女">女</el-radio>
          <el-radio v-model="form.gender" label="？">？</el-radio>
        </div>
      </border-input>
      <border-input labelText="信箱"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/email.svg" alt="">
        <div slot="input">
          <input v-model="form.email" placeholder="請輸入電子信箱">
        </div>
      </border-input>
      <border-input labelText="城市"  >
        <img slot="icon" style="width: 20px" src="@/assets/images/profile/house.svg" alt="">
        <div slot="input">
          <input v-model="form.city" placeholder="請輸入縣市">
        </div>
      </border-input>
      <border-input labelText="鄉鎮市區"  >
        <div slot="input">
          <input v-model="form.town" placeholder="請輸入鄉鎮市區">
        </div>
      </border-input>
      <border-input labelText="地址"  >
        <div slot="input">
          <input v-model="form.address" placeholder="請輸入地址">
        </div>
      </border-input>
      <div class="footer">
        <el-button @click="$router.back()" class="cancel" round>取消</el-button>
        <el-button @click="save" class="confirm" round>送出</el-button>
      </div>
    </custom-card>
  </div>
</template>

<script>
import CustomCard from '@/components/CustomCard.vue';
import BorderInput from '@/components/BorderInput.vue'
// import UserData from '@/model/UserInfo';

export default {
  name: "App",
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
        city: '台南市',
        town: '安平區',
        address: '光州路52號'
      }
    }
  },
  created() {

  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem('userInfo') || "");
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
    this.form.city = userData.city
    this.form.town = userData.township
    this.form.address = userData.address
  },
  methods: {
    switchImage: function() {
      console.log(navigator);
    },
    save: function() {
      // const test = new UserData()
      // test.picture = this.form.avatar
      // test.name = this.form.name
      // test.nickName = this.form.nickname
      // test.birthdayAt = this.form.birth
      // switch (this.form.gender) {
      //   case "?":
      //     test.gender = 0
      //     break
      //   case '男':
      //     test.gender = 1
      //     break
      //   case '女':
      //     test.gender = 2
      //     break
      // }
      // test.email = this.form.email
      // test.city = this.form.city
      // test.township = this.form.town
      // test.address = this.form.address
      // console.log(test);
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
input {
  border: 0;
  outline: 0;
}
.footer {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  button {
    width: 125px;
    border: 0px;
    color: #302D2C;
  }
  .confirm {
    background: #E4DFDD
  }
  .cancel {
    background: #F0F0ED
  }
}
</style>