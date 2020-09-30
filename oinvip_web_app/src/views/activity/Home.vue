<template>
    <div class="Home container">
        <img :src="contentImage">
        <div class="input-group mt-4 pl-3">
            <h4 style="flex: 1">{{name}}</h4>
            <!--TODO 開啟提醒狀態-->
            <a class="clock-btn" @click="remindModel = true"></a>
        </div>
        <a href="tel:062983377" class="phone-btn ml-3">
            <img src="@/assets/images/phone.svg">
            {{phone}}
        </a>
        <a href="#" class="location-btn ml-3">
            <img src="@/assets/images/location_blue.svg">
            {{cityName}}{{townName}}{{address}}
        </a>
        <div class="shadow-line"></div>
        <h4 class="line mb-4">{{showStartAt}}~{{showEndAt}}</h4>
        <h4 class="line mb-3">標題/介紹</h4>
        <div class="ml-3 mr-3">
            {{content}}
        </div>


        <el-dialog
                title="設置鬧鐘提醒"
                :visible.sync="remindModel"
                width="90%"
                center>
            <p class="text-center">我要設置鬧鐘提醒，絕不錯過「活動」</p>
            <span slot="footer" class="dialog-footer">
                        <el-button @click="remindModel = false">取消</el-button>
                <!--TODO 然後連到手機鬧鐘(這邊就看使用者自己要怎麼設置提醒)APP的行事曆也會連動記錄這天有活動-->
                        <el-button @click="remindModel = false">前往設置鬧鐘</el-button>
                    </span>
        </el-dialog>

    </div>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                id: this.$route.query.id,
                remindModel: false,

                name: '',
                content: '',
                address: '',
                phone: '',
                contentImage: '',
                showStartAt: '',
                showEndAt: '',
                townName: '',
                cityName: '',
            }
        },
        created() {
            this.setupData();
        },
        methods: {
            setupData: function () {
                this.$http.fetchWithAuth`GetOinActivityInfo${{
                    'id': parseInt(this.id),
                }}
                ${json => {
                    this.name = json.name;
                    this.content = json.content;
                    this.address = json.address;
                    this.phone = json.phone;
                    this.contentImage = json.contentImage;
                    this.showStartAt = json.showStartAt;
                    this.showEndAt = json.showEndAt;
                    this.townName = json.townName;
                    this.cityName = json.cityName;
                }}`;
            }
        }
    }
</script>
