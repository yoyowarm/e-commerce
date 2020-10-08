<template>
    <div class="Traffic container">
        <h4 class="mt-3"><img src="../../assets/images/title_high_speed_rail.svg">高鐵真方便 <a href="" class="more">前往購票/查詢 ></a></h4>
        <div class="text-content">
            159高鐵台中站→中國醫藥大學→臺中公園，於科學博物館—植物園站下車。
        </div>
        <el-divider></el-divider>

        <h4><img src="../../assets/images/title_bus.svg">我要搭公車 <a href="" class="more">前往購票/查詢 ></a></h4>
        <div class="text-content">
            公車路線
            <div class="bus-number">
                <span>11</span>
                <span>18</span>
                <span>35</span>
                <span>37</span>
                <span>45</span>
                <span>70</span>
                <span>71</span>
                <span>75</span>
                <span>159</span>
                <span>300</span>
                <span>301</span>
                <span>305</span>
            </div>
        </div>
        <el-divider></el-divider>

        <h4><img src="../../assets/images/title_car1.svg">自己開車Go </h4>
        <div class="text-content">
            國道一號(中山高速公路)→國道一號(中山高速公路)國道 一號(中山高速公路)→國道一號(中山高速公路)→國道一 號(中山高速公路)→國道一號(中山高速公路)→國道一號 (中山高速公路)
        </div>
        <el-divider></el-divider>

        <h4><img src="../../assets/images/title_car2.svg">隨時想開就開 </h4>
        <div class="list-meal-store">
            <a class="router" href="#" target="_blank">
                <el-image
                        fit="cover"
                        :src="require('@/assets/images/test1.jpg')">
                </el-image>
            </a>
            <a class="router" href="#" target="_blank">
                <el-image
                        fit="cover"
                        :src="require('@/assets/images/test1.jpg')">
                </el-image>
            </a>
        </div>
        <el-divider></el-divider>


    </div>
</template>

<script>

export default {
    name: 'Traffic',
    data() {
        return {

        }
    },
}
</script>
