<template>
    <div class="Home container">
        <img src="@/assets/images/test2.jpg">
        <div class="input-group mt-4 pl-3">
            <h4 style="flex: 1">活動名稱活動名稱活動名稱活動名動 名稱活活動名稱活動名稱活</h4>
            <!--TODO 開啟提醒狀態-->
            <a class="clock-btn" @click="remindModel = true"></a>
        </div>
        <a href="tel:062983377" class="phone-btn ml-3">
            <img src="@/assets/images/phone.svg">
            06 298 3377
        </a>
        <a href="#" class="location-btn ml-3">
            <img src="@/assets/images/location_blue.svg">
            台南市安平區府前路二段630號
        </a>
        <div class="shadow-line"></div>
        <h4 class="line mb-4">2020.07.07~2020.10.10</h4>
        <h4 class="line mb-3">標題/介紹</h4>
        <div class="ml-3 mr-3">
            文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容。
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
            remindModel: false,
        }
    },
}
</script>
