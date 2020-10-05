<template>
    <div class="News container">

        <div class="list-style">
            <router-link :to="{ name: 'NewsDetail'}" class="router">
                <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic3"></el-image>
                <div class="content">
                    <h4>標題標題標題標題標題標題標題標題標題標題標題標題</h4>
                    <p class="date2">2020-11-15</p>
                    <p class="detail">活動內容文字活動內容文字活動 內容文字活動內容文字活動文...</p>
                </div>
            </router-link>
            <NewsFunction/>
        </div>
        <div class="list-style">
            <router-link :to="{ name: 'NewsDetail'}" class="router">
                <el-image :src="require('@/assets/images/test1.jpg')" fit="cover" class="pic3"></el-image>
                <div class="content">
                    <h4>標題標題標題標題標題標題標題標題標題標題標題標題</h4>
                    <p class="date2">2020-11-15</p>
                    <p class="detail">活動內容文字活動內容文字活動 內容文字活動內容文字活動文...</p>
                </div>
            </router-link>
            <NewsFunction/>
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

            }
        },
    }
</script>
