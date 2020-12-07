<template>
  <el-container class="qr-code is-vertical">qr 通訊馬</el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class EditQrCode extends Vue {

}
</script>

<style lang="less" scoped>
.qr-code {
  min-height: calc(100vh - 60px);
  background: url('../../../assets/images/qrcode/qrcode-bg.png') left top;
  background-size: cover;
  padding: 20px;
}
</style>