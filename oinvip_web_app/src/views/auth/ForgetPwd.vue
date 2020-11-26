<template>
    <div class="login">
        <div class="main-content">
            <div class="logo"><img :src="require('@/assets/images/logo.svg')"></div>
            <ul class="top_nav">
                <li class="now" style="width: 100%"><a>忘記密碼</a></li>
            </ul>

            <div class="btn_box">
                <p><el-button   type="primary" class="w-100" round >下一步</el-button></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ForgetPwd",

    }
</script>

<style scoped>

</style>

