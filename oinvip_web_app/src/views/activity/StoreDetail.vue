<template>
    <div class="StoreDetail container">
        <div class="marquee">
            <img src="../../assets/images/Loudly.svg">
            <p>這是跑馬燈</p>
        </div>
        <div class="store-info">
            <el-carousel class="scroll-banner" :autoplay="true" :items="1" :autoplayHoverPause="true">
                <el-carousel-item v-for="(item,index) in imageAry" :key="index">
                    <el-image :src="item" fit="cover" class="pic"></el-image>
                </el-carousel-item>
            </el-carousel>
            <div class="list-style">
                <div class="content">
                    <h3>{{name}}</h3>
                    <h4>
                        <!--                        <span>—碳佐麻里台南府前店</span>-->
                        <span class="distance text-right"><img src="@/assets/images/location_blue_line.svg">{{distance}}km</span>
                    </h4>
                    <a :href="'tel:'+tel" class="phone-btn mt-3">
                        <img src="@/assets/images/phone.svg">
                        <span>{{tel}}</span>
                    </a>
                    <a href="#" class="location-btn">
                        <img src="@/assets/images/location_blue.svg">
                        <span>{{city}}{{township}}{{address}}</span>
                    </a>
                </div>
            </div>
<!--            <div class="btn-function-list">-->
<!--                &lt;!&ndash;TODO 加入&ndash;&gt;-->
<!--                <el-button type="text" class="share ml-3">-->
<!--                    <img src="@/assets/images/add.png">加入-->
<!--                </el-button>-->

<!--                <div class="text-right mr-2">-->
<!--                    &lt;!&ndash;TODO 留言&ndash;&gt;-->
<!--                    <el-button type="text" class="message" @click="openMessage()">-->
<!--                        <img src="@/assets/images/message.svg">888-->
<!--                    </el-button>-->

<!--                    &lt;!&ndash;TODO 按喜歡後增加樣式 active&ndash;&gt;-->
<!--                    <el-button type="text" class="heart"><i/>888</el-button>-->
<!--                </div>-->
<!--            </div>-->

<!--            &lt;!&ndash;TODO 留言區塊&ndash;&gt;-->
<!--            <Message v-if="open===true"/>-->
        </div>
        <div class="input-group business-info">
            <div class="text-left" @click="openTime()">
                <span class="red">{{businessStatus}}．</span>結束營業時間{{businessEndTime}} <i class="el-icon-caret-bottom"></i>
            </div>
            <div class="text-right">
                <a :href="facebook"><img src="../../assets/images/store_FB.png"></a>
                <a :href="instagram"><img src="../../assets/images/store_IG.png"></a>
                <a :href="officialWebsite"><img src="../../assets/images/store_web.png"></a>
            </div>
        </div>
        <div class="business-time" v-if="businessTime===true">
            <p><span class="day">星期一</span><span class="time" v-for="(item, index) in businessHours.monday"
                                                 :key="index">{{item}}/</span></p>
            <p><span class="day">星期二</span><span class="time" v-for="(item, index) in businessHours.tuesday"
                                                 :key="index">{{item}}/</span></p>
            <p><span class="day">星期三</span><span class="time" v-for="(item, index) in businessHours.wednesday"
                                                 :key="index">{{item}}/</span></p>
            <p><span class="day">星期四</span><span class="time" v-for="(item, index) in businessHours.thursday"
                                                 :key="index">{{item}}/</span></p>
            <p><span class="day">星期五</span><span class="time" v-for="(item, index) in businessHours.friday"
                                                 :key="index">{{item}}/</span></p>
            <p><span class="day">星期六</span><span class="time" v-for="(item, index) in businessHours.saturday"
                                                 :key="index">{{item}}/</span></p>
            <p><span class="day">星期日</span><span class="time" v-for="(item, index) in businessHours.sunday"
                                                 :key="index">{{item}}/</span></p>
            <el-divider></el-divider>
        </div>
<!--        <div class="business-btn">-->
<!--            <router-link :to="{ name: ''}">-->
<!--                <img src="../../assets/images/store_menu_about.svg">-->
<!--                <span>店家資訊</span>-->
<!--            </router-link>-->
<!--            <router-link :to="{ name: ''}">-->
<!--                <img src="../../assets/images/store_menu_comment.svg">-->
<!--                <span>意見反映</span>-->
<!--            </router-link>-->
<!--            <router-link :to="{ name: ''}">-->
<!--                <img src="../../assets/images/store_menu_opinion.svg">-->
<!--                <span>評論</span>-->
<!--            </router-link>-->
<!--            <router-link :to="{ name: ''}">-->
<!--                <img src="../../assets/images/store_menu_order.svg">-->
<!--                <span>點餐</span>-->
<!--            </router-link>-->
<!--            <router-link :to="{ name: ''}">-->
<!--                <img src="../../assets/images/store_menu_waitting.svg">-->
<!--                <span>候位</span>-->
<!--            </router-link>-->
<!--        </div>-->
        <h4 class="line">關於我們</h4>
        <div class="text-content mb-4">
            {{description}}
        </div>

        <div class="shadow-line"></div>
        <h4 class="line">MENU</h4>
        <div class="image-preview">
            <el-image v-for="(item, index) in menuImageAry"
                      :key="index"
                      fit="cover"
                      :src="item"
                      :preview-src-list="menuImageAry">
            </el-image>
        </div>
        <el-divider></el-divider>

        <!--        <h4 class="line">優惠券進行式-->
        <!--            <router-link :to="{ name: 'Coupon'}" class="more">查看更多 ></router-link>-->
        <!--        </h4>-->
        <!--        <div class="list-coupon-store">-->
        <!--            <router-link :to="{ name: 'CouponDetail'}" class="router">-->
        <!--                <el-image-->
        <!--                        fit="cover"-->
        <!--                        :src="require('@/assets/images/test1.jpg')">-->
        <!--                </el-image>-->
        <!--                <div class="info">-->
        <!--                    <h6>週一分享日八折</h6>-->
        <!--                    <p>乾拌麵三兄弟套餐套餐套餐</p>-->
        <!--                    <img src="@/assets/images/tag_3.svg" class="tag">-->
        <!--                </div>-->
        <!--            </router-link>-->
        <!--            <router-link :to="{ name: 'CouponDetail'}" class="router">-->
        <!--                <el-image-->
        <!--                        fit="cover"-->
        <!--                        :src="require('@/assets/images/test3.jpg')">-->
        <!--                </el-image>-->
        <!--                <div class="info">-->
        <!--                    <h6>週一分享日八折</h6>-->
        <!--                    <p>乾拌麵三兄弟套餐套餐套餐</p>-->
        <!--                    <img src="@/assets/images/tag_3.svg" class="tag">-->
        <!--                </div>-->
        <!--            </router-link>-->
        <!--            <router-link :to="{ name: 'CouponDetail'}" class="router">-->
        <!--                <el-image-->
        <!--                        fit="cover"-->
        <!--                        :src="require('@/assets/images/test3.jpg')">-->
        <!--                </el-image>-->
        <!--                <div class="info">-->
        <!--                    <h6>週一分享日八折</h6>-->
        <!--                    <p>乾拌麵三兄弟套餐套餐套餐</p>-->
        <!--                    <img src="@/assets/images/tag_3.svg" class="tag">-->
        <!--                </div>-->
        <!--            </router-link>-->
        <!--        </div>-->
        <!--        <el-divider></el-divider>-->

        <!--        <h4 class="line">餐點推薦區-->
        <!--            <router-link :to="{ name: ''}" class="more">查看更多 ></router-link>-->
        <!--        </h4>-->
        <!--        <div class="list-meal-store">-->
        <!--            <router-link :to="{ name: ''}" class="router">-->
        <!--                <el-image-->
        <!--                        fit="cover"-->
        <!--                        :src="require('@/assets/images/test1.jpg')">-->
        <!--                </el-image>-->
        <!--                <p>餐點名稱</p>-->
        <!--            </router-link>-->
        <!--            <router-link :to="{ name: ''}" class="router">-->
        <!--                <el-image-->
        <!--                        fit="cover"-->
        <!--                        :src="require('@/assets/images/test1.jpg')">-->
        <!--                </el-image>-->
        <!--                <p>餐點名稱</p>-->
        <!--            </router-link>-->
        <!--        </div>-->

    </div>
</template>

<script>
    // import carousel from 'vue-owl-carousel'
    // import Message from '@/components/Message.vue'

    export default {
        name: 'StoreDetail',
        components: {
            // carousel,
            // Message,
        },
        data() {
            return {
                id: this.$route.query.id,

                name: '',
                description: '',
                distance: 0,
                tel: '',
                city: '',
                township: '',
                address: '',
                facebook: '',
                instagram: '',
                officialWebsite: '',
                businessHours: '',
                monday: '',
                imageAry: [],
                businessStatus:'',
                businessEndTime:'',

                open: false,
                businessTime: false,
                //菜單大圖預覽
                menuImageAry: []
            }
        },
        created() {
            this.setupData();
        },
        methods: {
            setupData: function () {
                this.$http.fetch`GetStoreInfoById${{
                    'id': parseInt(this.id),
                }}
                ${json => {
                    this.name = json.data.name;
                    this.description = json.data.description;
                    this.distance = json.data.distance;
                    this.tel = json.data.tel;
                    this.city = json.data.city;
                    this.township = json.data.township;
                    this.address = json.data.address;
                    this.facebook = json.data.facebook;
                    this.instagram = json.data.instagram;
                    this.officialWebsite = json.data.officialWebsite;
                    this.businessHours = json.data.businessHours;
                    this.monday = json.data.monday;
                    this.imageAry = json.data.imageAry;
                    this.menuImageAry = json.data.menuImageAry;
                    this.businessStatus = json.data.businessStatus;
                    this.businessEndTime = json.data.businessEndTime;
                }}`;
            },
            openMessage() {//開啟留言
                if (this.open === false) {
                    this.open = true;
                } else {
                    this.open = false;
                }
            },
            openTime() {//開啟詳細營業時間
                if (this.businessTime === false) {
                    this.businessTime = true;
                } else {
                    this.businessTime = false;
                }
            }
        }
    }
</script>
