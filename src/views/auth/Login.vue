<template>
    <div class="login">
        <div class="main-content">
            <div class="logo"><img :src="require('@/assets/images/logo.svg')"></div>
            <ul class="top_nav">
                <li class="now">
                    <router-link :to="{ name: 'Login'}"><a>會員登入</a></router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'SignUp'}"><a><i class="fas fa-mobile-alt"></i>會員註冊</a></router-link>
                </li>
            </ul>
            <div class="textBox">
                <ul>
                    <li>
                        <el-input type="tel" placeholder="輸入手機" prefix-icon="el-icon-mobile"></el-input>
                    </li>
                    <li>
                        <el-input placeholder="輸入密碼" prefix-icon="el-icon-lock" show-password></el-input>
                    </li>
                </ul>
            </div>
            <div class="btn_box">
                <p><el-button round type="primary"   class="w-100">登入</el-button></p>
                <p>
                    <router-link :to="{ name: 'ForgetPwd'}"><a>忘記密碼?</a></router-link>
                </p>
            </div>
            <b-modal ref="myModalRef" id="modal1" centered hide-footer title="系統維護">
                <div class="d-block text-center">
                    系統維護公告：
                    親愛的用戶您好：為提升服務品質，本公司將於【108/8/28(三) 13:30pm~18:00pm】進行系統維護作業，屆時將暫時停止系統服務，感謝您配合與支持。
                </div>
                <div class="row">
                    <div class="col-12">
                        <b-button class="mt-3" variant="warning" block >送出</b-button>
                    </div>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",


    }
</script>

<style scoped>

</style>

