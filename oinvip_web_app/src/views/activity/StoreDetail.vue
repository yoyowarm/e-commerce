<template>
    <div class="StoreDetail container">
        <div class="marquee">
            <img src="../../assets/images/Loudly.svg">
            <p>這是跑馬燈</p>
        </div>
        <div class="store-info">
            <carousel class="scroll-banner" :autoplay="true" :items="1"  :autoplayHoverPause="true">
                <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic"></el-image>
                <el-image :src="require('@/assets/images/test2.jpg')" fit="cover" class="pic"></el-image>
                <el-image :src="require('@/assets/images/test3.jpg')" fit="cover" class="pic"></el-image>
            </carousel>
            <div class="list-style">
                <div class="content">
                    <h3>碳佐麻里TZML</h3>
                    <h4>
                        <span>—碳佐麻里台南府前店</span>
                        <span class="distance text-right"><img src="@/assets/images/location_blue_line.svg">3.3km</span>
                    </h4>
                    <a href="tel:062983377" class="phone-btn mt-3">
                        <img src="@/assets/images/phone.svg">
                        <span>06 298 3377</span>
                    </a>
                    <a href="#" class="location-btn">
                        <img src="@/assets/images/location_blue.svg">
                        <span>台南市安平區府前路二段630號</span>
                    </a>
                </div>
            </div>
            <div  class="btn-function-list">
                <!--TODO 加入-->
                <el-button type="text" class="share ml-3">
                    <img src="@/assets/images/add.png">加入
                </el-button>

                <div class="text-right mr-2">
                    <!--TODO 留言-->
                    <el-button type="text" class="message" @click="openMessage()">
                        <img src="@/assets/images/message.svg">888
                    </el-button>

                    <!--TODO 按喜歡後增加樣式 active-->
                    <el-button type="text" class="heart"><i/>888</el-button>
                </div>
            </div>

            <!--TODO 留言區塊-->
            <Message v-if="open===true"/>
        </div>
        <div class="input-group business-info">
            <div class="text-left" @click="openTime()">
                <span class="red">營業中．</span>結束營業時間14:30 <i class="el-icon-caret-bottom"></i>
            </div>
            <div class="text-right">
                <a href="#"><img src="../../assets/images/store_FB.png"></a>
                <a href="#"><img src="../../assets/images/store_IG.png"></a>
                <a href="#"><img src="../../assets/images/store_web.png"></a>
            </div>
        </div>
        <div class="business-time" v-if="businessTime===true">
            <p><span class="day">星期一</span><span class="time">11:30-14:30 / 17:30-21:30</span></p>
            <p><span class="day">星期二</span><span class="time">11:30-14:30 / 17:30-21:30</span></p>
            <p><span class="day">星期三</span><span class="time">11:30-14:30 / 17:30-21:30</span></p>
            <p><span class="day">星期四</span><span class="time">11:30-14:30 / 17:30-21:30</span></p>
            <p><span class="day">星期五</span><span class="time">11:30-14:30 / 17:30-21:30</span></p>
            <p><span class="day">星期六</span><span class="time">11:30-14:30 / 17:30-21:30</span></p>
            <p><span class="day">星期日</span><span class="time">休息日</span></p>
            <el-divider></el-divider>
        </div>
        <div class="business-btn">
            <router-link :to="{ name: ''}">
                <img src="../../assets/images/store_menu_about.svg">
                <span>店家資訊</span>
            </router-link>
            <router-link :to="{ name: ''}">
                <img src="../../assets/images/store_menu_comment.svg">
                <span>意見反映</span>
            </router-link>
            <router-link :to="{ name: ''}">
                <img src="../../assets/images/store_menu_opinion.svg">
                <span>評論</span>
            </router-link>
            <router-link :to="{ name: ''}">
                <img src="../../assets/images/store_menu_order.svg">
                <span>點餐</span>
            </router-link>
            <router-link :to="{ name: ''}">
                <img src="../../assets/images/store_menu_waitting.svg">
                <span>候位</span>
            </router-link>

        </div>
        <h4 class="line">關於我們</h4>
        <div class="text-content mb-4">
            用心意煮出新意 ‧ 用美味留下回味 府前店輕奢雅緻顛滅傳統麵攤形式，以現代新時尚為您編寫壓軸好戲，詮釋出每一碗麵工藝的視覺系精品，將心意昇華為您味蕾上扣人心弦的回憶。
        </div>

        <div class="shadow-line"></div>

        <h4 class="line">MENU</h4>
        <div class="image-preview">
            <el-image
                    fit="cover"
                    :src="require('@/assets/images/test2.jpg')"
                    :preview-src-list="srcList">
            </el-image>
            <el-image
                    fit="cover"
                    :src="require('@/assets/images/test1.jpg')"
                    :preview-src-list="srcList">
            </el-image>
            <el-image
                    fit="cover"
                    :src="require('@/assets/images/test3.jpg')"
                    :preview-src-list="srcList">
            </el-image>
        </div>
        <el-divider></el-divider>

        <h4 class="line">優惠券進行式 <router-link :to="{ name: 'Coupon'}" class="more">查看更多 ></router-link></h4>
        <div class="list-coupon-store">
            <router-link :to="{ name: 'CouponDetail'}" class="router">
                <el-image
                        fit="cover"
                        :src="require('@/assets/images/test1.jpg')">
                </el-image>
                <div class="info">
                    <h6>週一分享日八折</h6>
                    <p>乾拌麵三兄弟套餐套餐套餐</p>
                    <img src="@/assets/images/tag_3.svg" class="tag">
                </div>
            </router-link>
            <router-link :to="{ name: 'CouponDetail'}" class="router">
                <el-image
                        fit="cover"
                        :src="require('@/assets/images/test3.jpg')">
                </el-image>
                <div class="info">
                    <h6>週一分享日八折</h6>
                    <p>乾拌麵三兄弟套餐套餐套餐</p>
                    <img src="@/assets/images/tag_3.svg" class="tag">
                </div>
            </router-link>
            <router-link :to="{ name: 'CouponDetail'}" class="router">
                <el-image
                        fit="cover"
                        :src="require('@/assets/images/test3.jpg')">
                </el-image>
                <div class="info">
                    <h6>週一分享日八折</h6>
                    <p>乾拌麵三兄弟套餐套餐套餐</p>
                    <img src="@/assets/images/tag_3.svg" class="tag">
                </div>
            </router-link>
        </div>
        <el-divider></el-divider>

        <h4 class="line">餐點推薦區 <router-link :to="{ name: ''}" class="more">查看更多 ></router-link></h4>
        <div class="list-meal-store">
            <router-link :to="{ name: ''}" class="router">
                <el-image
                        fit="cover"
                        :src="require('@/assets/images/test1.jpg')">
                </el-image>
                <p>餐點名稱</p>
            </router-link>
            <router-link :to="{ name: ''}" class="router">
                <el-image
                        fit="cover"
                        :src="require('@/assets/images/test1.jpg')">
                </el-image>
                <p>餐點名稱</p>
            </router-link>
        </div>

    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    import Message from '@/components/Message.vue'
    export default {
        name: 'StoreDetail',
        components: {
            carousel,
            Message,
        },
        data() {
            return {
                open:false,
                businessTime:false,
                //菜單大圖預覽
                srcList: [
                    'https://placem.at/places',
                    'https://placem.at/things?w=500&h=800',
                    'https://placem.at/places?w=800&h=800'
                ]
            }
        },
        methods:{
            openMessage(){//開啟留言
                if(this.open === false){
                    this.open = true;
                }
                else{
                    this.open = false;
                }
            },
            openTime(){//開啟詳細營業時間
                if(this.businessTime === false){
                    this.businessTime = true;
                }
                else{
                    this.businessTime = false;
                }
            }
        }
    }
</script>
