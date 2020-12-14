<template>
  <el-container class="slidIn is-vertical">
    <navigation-bar noRight noLeft>
      <template slot="center">
        <div>
          <el-button type="text" @click="openedPrivacy = false" class="back">
            <img src="@/assets/images/close.svg" alt="">
          </el-button>
          <div>移動通訊錄使用條款</div>
        </div>
      </template>
    </navigation-bar>
    <div class="main">
      <p>本公司，LIFELINK串門子雲盟事業股份有限公司（下稱「LIFELINK」、「OIN」、「本公司」或「我們」），認為保護用戶個人資料至關重要。<br>本公司只會在取得用戶同意後，開放通訊入掃碼功能。您可隨時至「個人中心」>「QR通訊錄」>隨時變更「使用移動通訊錄功能暨使用條款」，若不同意此使用條款，則無法使用此功能。<br>業經同意後，本公司將會把您欲揭露之個人資料生成條碼，由您自主分享、提供給他人掃描取得您的個資。<br>請注意，您與他人分享的「QR通訊錄」由於具數位資料的性質，因而可以被接收人複製、儲存或散布，並且可能被其他非意想中的第三方接收人看到。我們希望您在建立以及與他人分享您的個人資訊或內容時對此注意警惕。</p>
    </div>
  </el-container>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';

export default {
  name: "Privacy",
  components: { NavigationBar },
  props: {
    openedPrivacy: Boolean,
  },
  computed: {
    title: function() {
      return this.$route.meta.title;
    }
  },
  data() {
    return {
      agree: 'unagree'
    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.back {
  width: 20px;
  position: absolute;
  left: 0px;
  top: 20px;
  padding: 0px!important
}
.main {
  padding: 0px 0px 10px 0px;
  border-top: 1px solid #E6E3E0;
  overflow-x: auto;
  padding: 20px;
  .text {
    text-align: center;
    color: #7EABD6;
    font-size: 14px;
  }
}
.agree-block {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.agree {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 8px;
    left: -22px;
    height: 15px;
    width: 15px;
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff, 0 0 0 2px #666;
    &::after {
      position: absolute;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: 3px solid white;
    }
  }
  input:checked ~ .checkmark {
    background-color: #CBAE97;
    box-shadow: 0 0 0 1px #fff, 0 0 0 2px #666
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
}
</style>