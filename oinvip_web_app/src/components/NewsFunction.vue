<template>
    <div class="w-100">
        <div  class="function-list NewsFunction">
            <!--TODO 按喜歡後增加樣式 active-->
            <el-button type="text" class="heart"><i/>888</el-button>

            <!--TODO 分享-->
            <el-button type="text" class="share" @click="ShareModal = true">
                <img src="@/assets/images/share.svg">888
            </el-button>

            <div class="text-right">
                <!--TODO 留言-->
                <el-button type="text" class="message" >
                    <img src="@/assets/images/message.svg">888
                </el-button>

                <span class="ml-2 pageviews">瀏覽 180</span>
            </div>

        </div>

        <!--TODO 分享-->
        <el-dialog
                title="分享留言"
                :visible.sync="ShareModal"
                class="md"
                center>
            <div class="share-block">
                <div class="icon">
                    <img src="../assets/images/icon_Line.svg">
                    <span>LINE</span>
                </div>
                <div class="icon">
                    <img src="../assets/images/icon_FB.svg">
                    <span>FacebooK</span>
                </div>
                <div class="icon">
                    <img src="../assets/images/icon_Messenger.svg">
                    <span>Messenger</span>
                </div>
                <div class="icon">
                    <img src="../assets/images/icon_IG.svg">
                    <span>Instagram</span>
                </div>
                <div class="icon">
                    <img src="../assets/images/icon_AirDrop.svg">
                    <span>AirDrop</span>
                </div>
                <div class="icon">
                    <img src="../assets/images/icon_newsletter.svg">
                    <span>訊息</span>
                </div>
                <div class="icon">
                    <img src="../assets/images/icon_email.svg">
                    <span>郵件</span>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="ShareModal = false" round class="w-75">取 消</el-button>
              </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "NewsFunction",
        data() {
            return {
                ShareModal: false,//分享文章彈框
            }
        },
    }
</script>

<style scoped>

</style>
