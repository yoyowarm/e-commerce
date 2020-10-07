<template>
    <div class="Store container">
        <div class="list-style">
            <router-link :to="{ name: 'StoreDetail'}" class="mr-3">
                <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic2"></el-image>
            </router-link>
            <div class="content">
                <router-link :to="{ name: 'StoreDetail'}">
                    <h3>碳佐麻里TZML</h3>
                    <h4>—碳佐麻里台南府前店</h4>
                </router-link>
                <a href="tel:062983377" class="phone-btn mt-3">
                    <img src="@/assets/images/phone.svg">
                    <span>06 298 3377</span>
                </a>
                <a href="#" class="location-btn">
                    <img src="@/assets/images/location_blue.svg">
                    <span>台南市安平區府前路二段630號</span>
                </a>
            </div>
            <p class="distance"><img src="@/assets/images/location_blue_line.svg">3.3km</p>
            <p class="coin">
                <img src="@/assets/images/coin.svg">
                享樂幣最高可抵用100%
                <img src="@/assets/images/tag.svg" class="tag">
                95折
            </p>


        </div>
        <div class="list-style">
            <router-link :to="{ name: 'StoreDetail'}" class="mr-3">
                <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic2"></el-image>
            </router-link>
            <div class="content">
                <router-link :to="{ name: 'StoreDetail'}">
                    <h3>碳佐麻里TZML</h3>
                    <h4>—碳佐麻里台南府前店</h4>
                </router-link>
                <a href="tel:062983377" class="phone-btn mt-3">
                    <img src="@/assets/images/phone.svg">
                    <span>06 298 3377</span>
                </a>
                <a href="#" class="location-btn">
                    <img src="@/assets/images/location_blue.svg">
                    <span>台南市安平區府前路二段630號</span>
                </a>
            </div>
            <p class="distance"><img src="@/assets/images/location_blue_line.svg">3.3km</p>
            <p class="coin">
                <img src="@/assets/images/coin.svg">
                享樂幣最高可抵用100%
                <img src="@/assets/images/tag.svg" class="tag">
                95折
            </p>


        </div>
    </div>
</template>

<script>

export default {
    name: 'Store',
    data() {
        return {

        }
    },
}
</script>
