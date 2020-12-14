<template>
  <div>
    <custom-card>
      <quick-menu/>
      <el-row>
        <el-button type="text" class="tag-btn">#速食</el-button>
        <el-button type="text" class="tag-btn">#日式美食</el-button>
        <el-button type="text" class="tag-btn">#中式料理</el-button>
        <el-button type="text" class="tag-btn">#美式美食</el-button>
        <el-button type="text" class="tag-btn">#健康餐</el-button>

        <el-button type="text" class="tag-btn">#義式料理</el-button>
        <el-button type="text" class="tag-btn">#泰國美食</el-button>
        <el-button type="text" class="tag-btn">#異國料理</el-button>
        <el-button type="text" class="tag-btn">#南洋料理</el-button>
        <el-button type="text" class="drop-down" icon="el-icon-arrow-down"></el-button>
      </el-row>
    </custom-card>
    <category-content style="margin-bottom: 20px">
      <article-cover v-for="a in 4" :key="a">
        <span slot="address">台南市 中西區 500m</span>
        <el-row slot="right" type="flex" justify="space-between" class="info-line">
          <el-col :span="18">
            <img src="@/assets/images/store/coin.svg" alt="">
            <span>$100~$300</span>
          </el-col>
          <el-col :span="6">
            <img src="@/assets/images/store/emoji.svg" alt="">
            <span>4.5</span>
          </el-col>
        </el-row>
        <div class="title">
          <h2 class="brand">品牌 Brand</h2>
          <p class="branch-name">— 門市分店 branch store</p>
          <tag-list />
        </div>
      </article-cover>
    </category-content>
  </div>
</template>

<script>
import CategoryContent from '@/components/category/Content.vue';
import QuickMenu from '@/components/QuickMenu.vue'
import CustomCard from '@/components/CustomCard.vue';
import ArticleCover from '@/components/article/ArticleCover.vue'
import TagList from '@/components/TagList.vue'

export default {
  name: "Visit",
  components: {
    QuickMenu,
    CustomCard,
    CategoryContent,
    ArticleCover,
    TagList
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
.tag-btn {
  color: #7EABD6;
}
.drop-down {
  border: 1px solid #D4D5D5;
  border-radius: 30px;
}
button { padding: 0px }
.info-line {
  img {
    width: 20px;
    margin-right: 5px
  }
}
</style>