<template>
    <div class="NewsDetail container">
        <h4 class="line mb-3 mt-3">{{title}}</h4>
        <p class="date2 ml-3">2020-11-15</p>
        <div class="ml-3 mr-3 text-content">
            {{content}}
        </div>
        <NewsFunction :viewCount="viewCount" :messageCount="messageList.length"/>
        <el-divider></el-divider>

        <!--TODO 留言區塊-->
        <Message :messageList="messageList" @message-reply="messageReply" @message-confirm="messageConfirm"/>

    </div>

</template>

<script>
    import NewsFunction from '@/components/NewsFunction.vue'
    import Message from '@/components/Message.vue'
    // import auth from '../../util/auth'

    export default {
        name: 'NewsDetail',
        components: {
            NewsFunction,
            Message,
        },
        data() {
            return {
                id: this.$route.query.id,

                title: '',
                content: '',
                viewCount: 0,
                titleImage: '',
                createdAt: '',
                messageList: '',
            }
        },
        created() {
            this.setupData();
        },
        mounted() {

        },
        methods: {
            setupData: function () {
                this.$http.fetch`GetOinActivityAnnouncementInfo${{
                    'id': parseInt(this.id),
                }}
                ${json => {
                    this.title = json.title;
                    this.content = json.content;
                    this.viewCount = json.viewCount;
                    this.titleImage = json.titleImage;
                    this.createdAt = json.createdAt;
                    this.messageList = json.messageList;
                }}`;
            },
            // getIosUserToken: function (token) {
            //     auth.setUserToken(token);
            // },
            messageReply: function (arg) {
                this.$http.fetchWithAuth`ReplyOinActivityAnnouncementListMessage${{
                    'id': parseInt(arg.id),
                    'content': arg.message,
                }}
                ${json => {
                    this.$public.showNotify(json.message, json.status);
                    if (json.status) {
                        this.setupData();
                    }
                }}`;
            },
            messageConfirm: function (message) {
                this.$http.fetchWithAuth`ReplyOinActivityAnnouncementList${{
                    'id': parseInt(this.id),
                    'content': message,
                }}
                ${json => {
                    this.$public.showNotify(json.message, json.status);
                    if (json.status) {
                        this.setupData();
                    }
                }}`;
            },
        },

    }
</script>
