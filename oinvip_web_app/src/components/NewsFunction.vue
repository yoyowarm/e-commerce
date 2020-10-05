<template>
    <div class="function-list NewsFunction">
        <!--TODO 按喜歡後增加樣式 active-->
        <el-button type="text" class="heart"><i/>888</el-button>

        <el-button type="text" class="share"><img src="@/assets/images/share.svg">888</el-button>
        <div class="text-right">
            <el-button type="text" class="message"><img src="@/assets/images/message.svg">888</el-button>
            <span class="ml-2 pageviews">瀏覽 180</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsFunction",
        data() {
            return {

            }
        },
    }
</script>

<style scoped>

</style>
