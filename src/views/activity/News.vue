<template>
    <div class="News container">
        <div class="list-style" v-for="(item,index) in dataList" :key="index">
            <router-link :to="{ name: 'NewsDetail', query:{id:item.id}}" class="router">
                <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic3"></el-image>
                <div class="content">
                    <h4>{{item.title}}</h4>
                    <p class="date2">{{item.createdAt}}</p>
                    <p class="detail">{{item.content}}</p>
                </div>
            </router-link>
            <NewsFunction :viewCount="item.viewCount" :messageCount="item.messageCount"/>
        </div>
    </div>
</template>

<script>
    import NewsFunction from '@/components/NewsFunction.vue'

    export default {
        name: 'News',
        components: {NewsFunction},
        data() {
            return {
                id: this.$route.query.id,
                dataList: [],
            }
        },
        created() {
            this.setupData();
        },
        methods: {
            setupData: function () {
                this.$http.fetch`GetOinActivityAnnouncementList${{
                    'id': parseInt(this.id),
                }}
                ${json => {
                    this.dataList = json.data;
                }}`;
            },
        }
    }
</script>
