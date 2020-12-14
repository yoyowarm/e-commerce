<template>
  <div class="store">
    <div class="tabs">
      <div :class="{active: activeName === 'first'}" @click="activeName = 'first'"><span>熱門推薦</span></div>
      <div :class="{active: activeName === 'second'}" @click="activeName = 'second'"><span>最新店家</span></div>
      <div :class="{active: activeName === 'third'}" @click="activeName = 'third'"><span>最近店家</span></div>
      <div :class="{active: activeName === 'fourth'}" @click="activeName = 'fourth'"><span>高度評價</span></div>
    </div>
    <custom-card v-if="activeName === 'first'">
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
  name: "Store",
  components: {
    QuickMenu,
    CustomCard,
    CategoryContent,
    ArticleCover,
    TagList
  },
  data() {
    return {
      activeName: 'first'
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
.store {
  width: 100%;
  .tabs {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    overflow: auto;
    >div {
      padding: 5px 0px;
      min-width: 28%;
      text-align: center;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: 0px;
        left: 0px;
        background: #F6F5F4
      }
    }
    .active {
      position: relative;
      &::after {
        background: #F0D870;
        z-index: 2;
        width: 70%;
        left: 15%;
        border-radius: 5px;
      }
    }
  }
  .tab-body {
    padding: 20px
  }
  .tag-btn {
    color: #7EABD6;
  }
  .drop-down {
    border: 1px solid #D4D5D5;
    border-radius: 30px;
  }
  button { padding: 0px }
}
.info-line {
  img {
    width: 20px;
    margin-right: 5px
  }
}
</style>
