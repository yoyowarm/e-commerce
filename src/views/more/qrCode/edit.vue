<template>
  <el-container class="qr-code is-vertical">
    <el-row type="flex" justify="end" class="button-line">
      <div>
        <img src="@/assets/images/qrcode/camera.png" alt="">
        <img style="width: 40px" src="@/assets/images/qrcode/edit.png" alt="">
      </div>
    </el-row>
    <div>
      <border-input labelText="姓氏">
        <input slot="input" type="text" :value="form.lastName" readonly>
      </border-input>
      <border-input labelText="名字">
        <input slot="input" type="text" :value="form.firstName" readonly>
      </border-input>
      <border-input labelText="公司">
        <input slot="input" type="text" :value="form.company" readonly>
      </border-input>
      <border-input labelText="生日" noBorder>
        <input slot="input" type="text" :value="form.birth" readonly>
        <el-switch
          slot="right-icon"
          v-model="form.showBirth"
          active-color="#F0D870"
          inactive-color="#D4D5D5">
        </el-switch>
      </border-input>
      <border-input labelText="新增電話" noInput>
        <el-button slot="icon" icon="el-icon-plus" class="add" circle @click="addItem('phone')"></el-button>
        <add-line
          v-for="(item, index) in form.phone"
          :key="`phone-${index}`"
          @deleteItem="(index) => deleteItem('phone', index)"
          :itemIndex="index"
        >
          <input slot="left" type="text" placeholder="行動電話" v-model="item.key">
          <input slot="right" type="text" placeholder="電話" v-model="item.value">
        </add-line>
      </border-input>
      <border-input labelText="新增電子郵件" noInput>
        <el-button slot="icon" icon="el-icon-plus" class="add" circle @click="addItem('email')"></el-button>
        <add-line
          v-for="(item, index) in form.email"
          :key="`email-${index}`"
          @deleteItem="(index) => deleteItem('email', index)"
          :itemIndex="index"
        >
          <input slot="left" type="text" placeholder="公司" v-model="item.key">
          <input slot="right" type="text" placeholder="電子郵件" v-model="item.value">
        </add-line>
      </border-input>
      <border-input labelText="新增地址" noInput>
        <el-button slot="icon" icon="el-icon-plus" class="add" circle @click="addItem('address')"></el-button>
        <add-line
          v-for="(item, index) in form.address"
          :key="`address-${index}`"
          @deleteItem="(index) => deleteItem('address', index)"
          :itemIndex="index"
          flexStart
        >
          <input slot="left" type="text" placeholder="住家" v-model="item.key">
          <div slot="right">
            <input type="text" placeholder="台灣" v-model="item.country">
            <input type="text" placeholder="郵遞區號│縣市" v-model="item.country">
            <input type="text" placeholder="鄉鎮市區" v-model="item.town">
            <input type="text" placeholder="街名" v-model="item.road">
          </div>
        </add-line>
      </border-input>
      <border-input labelText="新增URL" noInput>
        <el-button slot="icon" icon="el-icon-plus" class="add" circle @click="addItem('url')"></el-button>
        <add-line
          v-for="(item, index) in form.url"
          :key="`url-${index}`"
          @deleteItem="(index) => deleteItem('url', index)"
          :itemIndex="index"
        >
          <input slot="left" type="text" placeholder="首頁" v-model="item.key">
          <input slot="right" type="text" placeholder="URL" v-model="item.value">
        </add-line>
      </border-input>
      <border-input labelText="新增社群網站個人檔案" noInput>
        <el-button slot="icon" icon="el-icon-plus" class="add" circle @click="addItem('socialUrl')"></el-button>
        <add-line
          v-for="(item, index) in form.socialUrl"
          :key="`socialUrl-${index}`"
          @deleteItem="(index) => deleteItem('socialUrl', index)"
          :itemIndex="index"
        >
          <input slot="left" type="text" placeholder="Twitter" v-model="item.key">
          <input slot="right" type="text" placeholder="社群網站個人檔案" v-model="item.value">
        </add-line>
      </border-input>
      <border-input labelText="新增即時訊息名稱" noInput>
        <el-button slot="icon" icon="el-icon-plus" class="add" circle @click="addItem('socialName')"></el-button>
        <add-line
          v-for="(item, index) in form.socialName"
          :key="`socialName-${index}`"
          @deleteItem="(index) => deleteItem('socialName', index)"
        >
          <input slot="left" type="text" placeholder="Line" v-model="item.key">
          <input slot="right" type="text" placeholder="即時訊息名稱" v-model="item.value">
        </add-line>
      </border-input>
      <border-input labelText="備註">
        <input slot="input" placeholder="請輸入備註" type="text" v-model="form.note" > 
      </border-input>
    </div>
    <div class="footer">
      <el-button class="confirm" round>取消</el-button>
      <el-button type="primary" round>儲存</el-button>
    </div>
  </el-container>
</template>

<script>
import BorderInput from '@/components/BorderInput.vue'
import AddLine from '@/components/addLine.vue'

export default {
  name: "Edit",
  data() {
    return {
      form: {
        lastName: '串',
        firstName: '門子',
        company: 'xxxx',
        birth: '2020-09-10',
        phone: [],
        email: [],
        address: [],
        url: [],
        socialUrl: [],
        socialName: [],
        showBirth: false,
        note: ''
      },
      template: {
        key: '',
        value: ''
      },
      addressTemplate: {
        key: '',
        country: '',
        county: '',
        town: '',
        road: ''
      }
    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    addItem: function(type) {
      // if (type === 'address') this.form[type].push(this.addressTemplate)
      // this.form[type].push(this.template)
    },
    deleteItem: function(type, index) {
    //   this.form[type].splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.qr-code {
  min-height: calc(100vh - 60px);
  background: url('../../../assets/images/qrcode/qrcode-bg.png') left top;
  background-size: cover;
  padding: 20px;
  .button-line {
    img {
      width: 48px;
      margin-left: 10px;
    }
  }
  input {
    border: 0px;
    outline: 0;
    line-height: 18px;
    color: #3E3A39;
    background: initial;
    width: 100%;
  }
  .add {
    background: #2FB092;
    color: #fff;
    outline: none;
  }
}
.footer {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  button {
    width: 125px;
  }
}
</style>