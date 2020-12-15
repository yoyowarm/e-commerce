<template>
  <div class="issue">
    <el-row type="flex" justify="end" class="filter">
      <img src="@/assets/images/gift/filter.png" alt="">
    </el-row>
    <category-content v-for="c in 6" :key="c">
      <el-row type="flex" justify="space-between">
        <el-col :span="18" class="date text-left">
          <span style="margin-right: 20px">2020.07.17</span>
          <span>18:00</span>
        </el-col>
        <el-col :span="6" class="text-right">
          <span class="amount">X10</span>
        </el-col>
      </el-row>
      <div class="store text-left">
        發放：碳佐麻里-府前店
      </div>
    </category-content>
  </div>
</template>

<script>
import CategoryContent from '@/components/category/Content.vue'
export default {
  name: "IssueDate",
  components: {
    CategoryContent
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
/deep/ .content {
  padding: 12px 0px
}
.issue {
  padding: 20px;
}
.filter {
  margin-bottom: 15px;
  img {width: 75px;}
}
.date {
  color: #C1AE8A
}
.amount {
  color: #E37E84;
  font-size: 14px;
}
.store {
  color: #474645;
  font-size: 16px;
}
</style>