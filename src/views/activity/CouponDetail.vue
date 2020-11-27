<template>
    <div class="CouponDetail container">
        <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic"></el-image>
        <div class="input-group pages">
            <img src="../../assets/images/coupon.svg">
            <div class="text-right">
                剩餘 <span class="red">89</span> 張
            </div>
        </div>
        <h4 class="mt-2 mr-3 ml-3">振興有感乾拌麵三兄弟</h4>
        <div class="input-group mr-3 ml-3" id="branch">
            <h6 class="mt-2">適用分店</h6>
            <div class="branch-list">
                <router-link :to="{ name: ''}">
                    台南府前店
                </router-link>
                <router-link :to="{ name: ''}">
                    台南府前店
                </router-link>
                <router-link :to="{ name: ''}">
                    台南府前店
                </router-link>
                <router-link :to="{ name: ''}">
                    台南府前店
                </router-link>
            </div>
            <div class="arrow-btn" @click="openBranch()"><i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="input-group mr-3 ml-3">
            <h6 class="mt-2">使用期限</h6>
            <div>
                2020-11-01 ~ 2020-11-30 止
            </div>
        </div>
        <el-divider></el-divider>
        <h6 class="mr-3 ml-3">活動說明</h6>
        <div class="mr-3 ml-3">
            我是活動說明，我是活動說明，我是活動說明，我是活動 說明，我是活動說明，我是活動說明，我是活動說明，我 是活動說明。
        </div>

        <h6 class="mr-3 ml-3 mt-4">注意事項</h6>
        <ol class="mr-3 ml-3 list-ol">
            <li>我是注意事項，我是注意事項，我是注意事項，我是注 意事項，我是注意事項，我是注意事項。</li>
            <li>我是注意事項，我是注意事項。</li>
            <li>我是注意事項，我是注意事項，我是注意事項，我是注 意事項，我是注意事項，我是注意事項。</li>
        </ol>

        <div class="text-center bottom-btn">
            <el-button type="primary" round class="w-50">我要搶券</el-button>
        </div>


    </div>
</template>

<script>

export default {
    name: 'CouponDetail',
    data() {
        return {

        }
    },
    methods:{
        openBranch(){
            //document.querySelector('.branch').classList.toggle("closeBox");
            document.getElementById("branch").classList.toggle("open");
        }
    }
}
</script>
