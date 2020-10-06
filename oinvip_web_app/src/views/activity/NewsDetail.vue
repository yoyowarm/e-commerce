<template>
    <div class="NewsDetail container">
        <h4 class="line mb-3 mt-3">標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題</h4>
        <p class="date2 ml-3">2020-11-15</p>
        <div class="ml-3 mr-3 content">
            在組成人數方面將沒有限制，其次我們鼓勵參賽學生組隊時，找尋非在校人士一起參與，但比例不得超過組隊成員的二分之一。由於競賽地點是在雲林，因此我們也將與農民大學合作，由農民大學建議農友名單，參賽者可以邀請這些農民大學的學員一起參加。最後我們也鼓勵在第一次參訪之後，不同的隊伍可以根據彼此的專長來進行合併，共同提案。以上是與第一屆CITA競賽第一個不同之處。
         </div>
        <NewsFunction/>
        <el-divider></el-divider>
        <h5 class="line" id="M1">相關留言</h5>
        <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="輸入留言"
                maxlength="500"
                show-word-limit
                v-model="message">
        </el-input>
        <div class="text-right mt-2">
            <el-button type="primary" round size="mini">送出</el-button>
        </div>

        <!--todo 沒有留言狀態-->
        <div class="no-data" hidden>
            沒有留言
        </div>

        <!--todo 留言狀態-->
        <div class="list-message">
            <div class="member-form">
                <el-avatar :src="require('../../assets/images/user.svg')"></el-avatar>
                <div class="right-block">
                    <span class="name">周周周</span>
                    <span class="date2">2020-11-15 13:00</span>
                </div>
            </div>
            <div class="con">
                我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
            </div>
            <div class="function-list NewsFunction m-0">
                <!--TODO 按喜歡後增加樣式 active-->
                <el-button type="text" class="heart"><i/>88</el-button>
                <el-button type="text" @click="ReportModal = true">檢舉</el-button>
                <el-button type="text" @click="reply()">回覆 2</el-button>
            </div>

            <template v-if="replyBtn">
                <!--todo 回覆的留言-->
                <div class="reply-block">
                    <div class="member-form">
                        <el-avatar :src="require('../../assets/images/user.svg')"></el-avatar>
                        <div class="right-block">
                            <span class="name">wenwen</span>
                            <span class="date2">2020-11-15 13:00</span>
                        </div>
                    </div>
                    <div class="con">
                        我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
                    </div>
                </div>
                <div class="reply-block">
                    <div class="member-form">
                        <el-avatar :src="require('../../assets/images/test1.jpg')"></el-avatar>
                        <div class="right-block">
                            <span class="name">小白</span>
                            <span class="date2">2020-11-15 13:00</span>
                        </div>
                    </div>
                    <div class="con">
                        我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
                    </div>
                </div>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 1, maxRows: 4}"
                        placeholder="輸入回覆"
                        maxlength="500"
                        show-word-limit
                        v-model="message">
                </el-input>
                <div class="text-right mb-3 mt-2">
                    <el-button type="primary" round size="mini">送出</el-button>
                </div>
            </template>

        </div>
        <div class="list-message">
            <div class="member-form">
                <el-avatar :src="require('../../assets/images/user.svg')"></el-avatar>
                <div class="right-block">
                    <span class="name">周周周</span>
                    <span class="date2">2020-11-15 13:00</span>
                </div>
            </div>
            <div class="con">
                我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
            </div>
            <div class="function-list NewsFunction m-0">
                <!--TODO 按喜歡後增加樣式 active-->
                <el-button type="text" class="heart"><i/>0</el-button>
                <el-button type="text" class="share">檢舉</el-button>
                <el-button type="text" class="share">回覆 0</el-button>
            </div>
        </div>
        <div class="list-message">
            <div class="member-form">
                <el-avatar :src="require('../../assets/images/user.svg')"></el-avatar>
                <div class="right-block">
                    <span class="name">周周周</span>
                    <span class="date2">2020-11-15 13:00</span>
                </div>
            </div>
            <div class="con">
                我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
            </div>
            <div class="function-list NewsFunction m-0">
                <!--TODO 按喜歡後增加樣式 active-->
                <el-button type="text" class="heart"><i/>0</el-button>
                <el-button type="text" class="share">檢舉</el-button>
                <el-button type="text" class="share">回覆 0</el-button>
            </div>
        </div>

        <!--TODO 檢舉-->
        <el-dialog
                title="檢舉留言"
                :visible.sync="ReportModal"
                class="md"
                center>
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="請輸入回報問題描述，例如：廣告訊息、色情訊息、暴力言論"
                    v-model="input">
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="ReportModal = false" round>取 消</el-button>
                <el-button type="primary" @click="ReportModal = false" round>確 定</el-button>
              </span>
        </el-dialog>

    </div>

</template>

<script>
    import NewsFunction from '@/components/NewsFunction.vue'
    export default {
        name: 'NewsDetail',
        components: {NewsFunction},
        data() {
            return {
                message:'',
                replyBtn: false,
                ReportModal: false,//檢舉留言彈框

                input:'',
            }
        },
        methods: {
            reply(){
                this.replyBtn=true;
            },
            hideReportModal() {
                this.$refs['ReportModal'].hide();
            },
            showReportModal() {
                this.$refs['ReportModal'].show();
            },
        },

    }
</script>
