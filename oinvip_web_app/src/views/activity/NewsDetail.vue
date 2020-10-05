<template>
    <div class="NewsDetail container">
        <h4 class="line mb-3">標題/介紹</h4>
        <p class="ml-3 mb-4">2020-11-15</p>
        <div class="ml-3 mr-3 content">
            在組成人數方面將沒有限制，其次我們鼓勵參賽學生組隊時，找尋非在校人士一起參與，但比例不得超過組隊成員的二分之一。由於競賽地點是在雲林，因此我們也將與農民大學合作，由農民大學建議農友名單，參賽者可以邀請這些農民大學的學員一起參加。最後我們也鼓勵在第一次參訪之後，不同的隊伍可以根據彼此的專長來進行合併，共同提案。以上是與第一屆CITA競賽第一個不同之處。
         </div>
        <NewsFunction/>
    </div>

</template>

<script>
    import NewsFunction from '@/components/NewsFunction.vue'
    export default {
        name: 'NewsDetail',
        components: {NewsFunction},
        data() {
            return {

            }
        },

    }
</script>
