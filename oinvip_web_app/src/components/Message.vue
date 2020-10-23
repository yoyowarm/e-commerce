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
            <el-button type="primary" round size="mini" @click="messageConfirm">送出</el-button>
        </div>

        <!--todo 沒有留言狀態-->
        <div class="no-data" v-if="messageList !== null && messageList.length <= 0">
            沒有留言
        </div>

        <!--todo 留言狀態-->
        <div class="list-message" v-for="(item, index) in messageList" :key="index">
            <div class="member-form">
                <el-avatar :src="require('@/assets/images/user.svg')"></el-avatar>
                <div class="right-block">
                    <span class="name">{{item.userName}}</span>
                    <span class="date2">{{item.createdAt}}</span>
                </div>
            </div>
            <div class="con">
                {{item.content}}
            </div>
            <div class="btn-function-list m-0">
                <!--TODO 按喜歡後增加樣式 active-->
<!--                <el-button type="text" class="heart"><i/>88</el-button>-->
<!--                <el-button type="text" @click="ReportModal = true">檢舉</el-button>-->
                <el-button type="text" @click="reply(item)">回覆 {{item.replyCount}}</el-button>
            </div>

            <template v-if="item.replyBtn">
                <!--todo 回覆的留言-->
                <div class="reply-block" v-for="(item1, index1) in item.replyList" :key="index1">
                    <div class="member-form">
                        <el-avatar :src="require('@/assets/images/user.svg')"></el-avatar>
                        <div class="right-block">
                            <span class="name">{{item1.userName}}</span>
                            <span class="date2">{{item1.createdAt}}</span>
                        </div>
                    </div>
                    <div class="con">
                        {{item1.content}}
                    </div>
                </div>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 1, maxRows: 4}"
                        placeholder="輸入回覆"
                        maxlength="500"
                        show-word-limit
                        v-model="item.message">
                </el-input>
                <div class="text-right mb-3 mt-2">
                    <el-button type="primary" round size="mini" @click="messageReply(item.id, item.message)">送出
                    </el-button>
                </div>
            </template>
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
        props: ['messageList'],
        data() {
            return {
                replyBtn: false,//回覆留言開關
                ReportModal: false,//檢舉留言彈框
                message: '',
                input: '',
            }
        },
        methods: {
            reply(replyDate) {
                if (replyDate.replyBtn === undefined) {//判斷此物件屬性是否存在
                    this.$set(replyDate, 'replyBtn', true)//若否，則新增屬性並給予預設值
                } else {
                    replyDate.replyBtn = !replyDate.replyBtn
                }
            },
            messageReply(id, message) {
                this.$emit('message-reply', {id: id, message: message});
                message = '';
            },
            messageConfirm() {
                this.$emit('message-confirm', this.message)
                this.message = '';
            },
        },
    }
</script>

<style scoped>

</style>
