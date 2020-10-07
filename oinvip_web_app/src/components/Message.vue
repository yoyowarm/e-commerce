<template>
    <div class="message-block">
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
                <el-avatar :src="require('@/assets/images/user.svg')"></el-avatar>
                <div class="right-block">
                    <span class="name">周周周</span>
                    <span class="date2">2020-11-15 13:00</span>
                </div>
            </div>
            <div class="con">
                我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
            </div>
            <div class="btn-function-list m-0">
                <!--TODO 按喜歡後增加樣式 active-->
                <el-button type="text" class="heart"><i/>88</el-button>
                <el-button type="text" @click="ReportModal = true">檢舉</el-button>
                <el-button type="text" @click="reply()">回覆 2</el-button>
            </div>

            <template v-if="replyBtn === true">
                <!--todo 回覆的留言-->
                <div class="reply-block">
                    <div class="member-form">
                        <el-avatar :src="require('@/assets/images/user.svg')"></el-avatar>
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
                        <el-avatar :src="require('@/assets/images/test1.jpg')"></el-avatar>
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
                <el-avatar :src="require('@/assets/images/user.svg')"></el-avatar>
                <div class="right-block">
                    <span class="name">周周周</span>
                    <span class="date2">2020-11-15 13:00</span>
                </div>
            </div>
            <div class="con">
                我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
            </div>
            <div class="btn-function-list m-0">
                <!--TODO 按喜歡後增加樣式 active-->
                <el-button type="text" class="heart"><i/>0</el-button>
                <el-button type="text" class="share">檢舉</el-button>
                <el-button type="text" class="share">回覆 0</el-button>
            </div>
        </div>
        <div class="list-message">
            <div class="member-form">
                <el-avatar :src="require('@/assets/images/user.svg')"></el-avatar>
                <div class="right-block">
                    <span class="name">周周周</span>
                    <span class="date2">2020-11-15 13:00</span>
                </div>
            </div>
            <div class="con">
                我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！我覺得這活動很棒！
            </div>
            <div class="btn-function-list m-0">
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
    export default {
        name: "Message",
        data() {
            return {
                replyBtn: false,//回覆留言開關
                ReportModal: false,//檢舉留言彈框
                message:'',
                input:'',
            }
        },
        methods: {
            reply(){
                if(this.replyBtn === false){
                    this.replyBtn = true;
                }else {
                    this.replyBtn = false;
                }
            },
        },
    }
</script>

<style scoped>

</style>
