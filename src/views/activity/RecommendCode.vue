<template>
    <div class="RecommendCode container">
        <div class="input-group mt-3">
            <h6>即將失效點數</h6>
            <h6 class="text-right" style="flex: 1">
                0點
            </h6>
        </div>
        <p class="date2 text-right">2021.07.30即將失效，請務必在期限內使用完畢</p>
        <div class="code-list">
            <div class="block">
                <span>已累積</span>
                <div class="blue num">
                    10,000
                </div>
            </div>
            <div class="block">
                <span>目前點數</span>
                <div class="red num">
                    10,000
                </div>
            </div>
            <div class="block">
                <span>已使用／失效</span>
                <div class="dark num">
                    10,000
                </div>
            </div>
        </div>

        <h3>邀請好友賺點數</h3>
        <div class="text-content mb-4 mt-3">
            只要好友在此活動頁面填入推薦碼，就可以參加主題活 動一起享受活動期間內的消費紅利回饋！推薦越多人 ，你的點數累積的就越快喔！還不快揪起來
        </div>

        <div class="input-group push">
            <h3>誰推薦你 <span class="info">?</span></h3>
            <div class="num1">USER1234</div>
        </div>

        <div class="input-group push">
            <h3>專屬推薦碼 </h3>
            <div class="num2">USER1234</div>
            <el-button type="text"><img src="../../assets/images/copy.svg"></el-button>
        </div>

        <div class="bottom-btn text-center">
            <el-button type="primary" round>立即邀請</el-button>
            <el-button type="success" round>顯示QR Code</el-button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'RecommendCode',
    data() {
        return {

        }
    },
}
</script>
