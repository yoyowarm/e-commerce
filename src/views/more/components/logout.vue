<template>
  <el-dialog
  :visible.sync="value"
  :show-close="false"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
  top="60%"
  width="80%"
  custom-class="logout"
>
<div class="container">
  <img src="@/assets/images/logout_confirm.svg" alt="">
  <span>忍心登出嗎？</span>
  <div slot="footer" class="dialog-footer">
    <el-button @click="confirm" class="confirm" round>登出</el-button>
    <el-button type="primary" @click="cancel" round>繼續留下</el-button>
  </div>
</div>
</el-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cancel () {
      this.$emit('close', false)
    },
    confirm () {
      this.$emit('close', false)
    }
  }

}
</script>

<style lang="less" scoped>
.logout {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px
  }
  img {
    width: 68px;
    margin-bottom: 15px
  }
  .confirm {
      background: #F0F0ED;
      border: 0px
  }
  button {
      width: 125px;
  }
  .dialog-footer {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}

/deep/ .el-dialog {
  border-radius: 20px!important;
}
/deep/ .el-dialog__header {
  display: none;
}
</style>