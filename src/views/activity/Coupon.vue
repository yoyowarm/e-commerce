<template>
    <div class="Coupon container">
        <h4 class="mb-3 mt-3">發燒店家 <img src="../../assets/images/title_hot.svg"></h4>
        <div class="w-100">
            <div class="input-group">
                <router-link :to="{ name: 'StoreDetail'}">
                    <el-image :src="require('@/assets/images/test2.jpg')" fit="cover"></el-image>
                </router-link>
                <router-link :to="{ name: 'StoreDetail'}">
                    <el-image :src="require('@/assets/images/test1.jpg')" fit="cover"></el-image>
                </router-link>
            </div>
        </div>

        <h4 class="mb-3 mt-5">來喲~領取優惠 <img src="../../assets/images/title_coupon.svg"></h4>
        <div class="row">
            <div class="list-coupon col-4 col-lg-3 col-xl-2">
                <router-link :to="{ name: 'CouponDetail'}" class="router">
                    <img src="@/assets/images/tag_2.svg" class="tag">
                    <el-image :src="require('@/assets/images/test1.jpg')" fit="cover"></el-image>
                    <div class="content">
                        <h3>品牌名稱</h3>
                        <h4>分店名稱</h4>
                        <p class="detail">優惠券名稱優券名稱優惠</p>
                    </div>
                </router-link>
            </div>
            <div class="list-coupon col-4 col-lg-3 col-xl-2">
                <router-link :to="{ name: 'CouponDetail'}" class="router">
                    <img src="@/assets/images/tag_2.svg" class="tag">
                    <el-image :src="require('@/assets/images/test2.jpg')" fit="cover"></el-image>
                    <div class="content">
                        <h3>品牌名稱</h3>
                        <h4>分店名稱</h4>
                        <p class="detail">優惠券名稱優券名稱優惠</p>
                    </div>
                </router-link>
            </div>
            <div class="list-coupon col-4 col-lg-3 col-xl-2">
                <router-link :to="{ name: 'CouponDetail'}" class="router">
                    <img src="@/assets/images/tag_2.svg" class="tag">
                    <el-image :src="require('@/assets/images/test3.jpg')" fit="cover"></el-image>
                    <div class="content">
                        <h3>品牌名稱</h3>
                        <h4>分店名稱</h4>
                        <p class="detail">優惠券名稱優券名稱優惠</p>
                    </div>
                </router-link>
            </div>
            <div class="list-coupon col-4 col-lg-3 col-xl-2">
                <router-link :to="{ name: 'CouponDetail'}" class="router">
                    <img src="@/assets/images/tag_2.svg" class="tag">
                    <el-image :src="require('@/assets/images/test1.jpg')" fit="cover"></el-image>
                    <div class="content">
                        <h3>品牌名稱</h3>
                        <h4>分店名稱</h4>
                        <p class="detail">優惠券名稱優券名稱優惠</p>
                    </div>
                </router-link>
            </div>
            <div class="list-coupon col-4 col-lg-3 col-xl-2">
                <router-link :to="{ name: 'CouponDetail'}" class="router">
                    <img src="@/assets/images/tag_2.svg" class="tag">
                    <el-image :src="require('@/assets/images/test1.jpg')" fit="cover"></el-image>
                    <div class="content">
                        <h3>品牌名稱</h3>
                        <h4>分店名稱</h4>
                        <p class="detail">優惠券名稱優券名稱優惠</p>
                    </div>
                </router-link>
            </div>
        </div>



    </div>
</template>

<script>

export default {
    name: 'Coupon',
    data() {
        return {

        }
    },
}
</script>
