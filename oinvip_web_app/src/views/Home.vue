<template>
    <div class="home container">
        <a class="position"><img src="../assets/images/location_red.svg">重新定位</a>
        <div class="list-style">
            <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic"></el-image>
            <div class="content">
                <span class="city">台南市</span>
                <h4>愛在南國有你真好</h4>
                <p class="date">2020.07.07~2020.10.10</p>
                <p class="detail">活動內容文字活動內容文字活動內容文字活動內容文字活動文文字活動內容文字活動文</p>
            </div>
            <a class="clock" @click="remindModel = true"></a>
        </div>
        <div class="list-style">
            <el-image :src="require('@/assets/images/test2.jpg')" fit="cover" class="pic"></el-image>
            <div class="content">
                <span class="city">縣市名</span>
                <h4>標題</h4>
                <p class="date">2020.07.07~2020.10.10</p>
                <p class="detail">活動內容文字活動內容文字活動內容文字活動內容文字活動文文字活動內容文字活動文</p>
            </div>
            <!--TODO 有開啟提醒狀態-->
            <a class="clock active" @click="remindModel = true"></a>
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
