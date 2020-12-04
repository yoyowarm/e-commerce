<template>
    <div class="Store container">
        <div class="list-style" v-for="(item, index) in dataList" :key="index">
            <router-link :to="{ name: 'StoreDetail', query:{id:item.id}}" class="mr-3">
                <el-image :src="item.imgUrl" fit="cover" class="pic2"></el-image>
            </router-link>
            <div class="content">
                <router-link :to="{ name: 'StoreDetail', query:{id:item.id}}">
                    <h3>{{item.name}}</h3>
                    <!--                    <h4>—碳佐麻里台南府前店</h4>-->
                </router-link>
                <a :href="'tel:'+item.tel" class="phone-btn mt-3">
                    <img src="@/assets/images/phone.svg">
                    <span>{{item.tel}}</span>
                </a>
                <a href="#" class="location-btn">
                    <img src="@/assets/images/location_blue.svg">
                    <span>{{item.city}}{{item.township}}{{item.address}}</span>
                </a>
            </div>
            <p class="distance"><img src="@/assets/images/location_blue_line.svg">{{getFloatFix(item.distance)}} km</p>
            <!--            <p class="coin">-->
            <!--                <img src="@/assets/images/coin.svg">-->
            <!--                享樂幣最高可抵用100%-->
            <!--                <img src="@/assets/images/tag.svg" class="tag">-->
            <!--                95折-->
            <!--            </p>-->
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Store',
        data() {
            return {
                id: this.$route.query.id,
                dataList: [],
            }
        },
        created() {
            this.setupData();
        },
        methods: {
            setupData: function () {
                this.$http.fetch`GetOinActivityJoinStoreList${{
                    'id': parseInt(this.id),
                }}
                ${json => {
                    this.dataList = json;
                }}`;
            },
            getFloatFix: function (distance) {
                let num = parseFloat(distance);
                return num.toFixed(2); // 輸出結果為 2.45
            }
        }
    }
</script>
