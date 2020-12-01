<template>
  <el-dialog
  :visible.sync="value"
  :show-close="false"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
  top="60%"
  width="70%"
  custom-class="logout"
>
<div class="container">
  <img src="@/assets/images/logout_confirm.svg" alt="">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
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
  }
  img {
    width: 68px;
  }
}
/deep/ .el-dialog {
  border-radius: 20px!important;
}
/deep/ .el-dialog__header {
  display: none;
}
</style>