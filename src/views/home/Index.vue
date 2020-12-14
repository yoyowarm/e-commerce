<template>
  <el-container class="Home BigPage is-vertical">
    <navigation-bar>
      <el-input slot="center" placeholder="請输入内容" v-model="search" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" type="text"></el-button>
      </el-input>
      <el-col slot="right" :span="7" class="text-right">
        <img @click="$router.push({ name: 'BrandWall'})" class="icon" src="@/assets/images/homepage/pro.svg" alt="">
        <img  class="icon ball" src="@/assets/images/balls.svg" alt="">
      </el-col>
    </navigation-bar>
    <div class="main">
      <custom-card>
      <banner :list="bannerList"/>
      <quick-menu />
      </custom-card>
      <category-content>
        <category-header :to="{ name: 'MyComment'}">
          <div slot="title" class="category-header">
            <span class="title">來喲~領取優惠</span>
            <img src="@/assets/images/homepage/gift.png" alt="">
          </div>
        </category-header>
        <item-grid height="240px">
          <coupon-item v-for="s in 6" :key="s">
            <img src="@/assets/images/homepage/ticket-icon.svg" alt="">
          </coupon-item>
        </item-grid>
         <item-grid height="240px">
          <coupon-item v-for="s in 6" :key="s">
            <img src="@/assets/images/homepage/ticket-icon.svg" alt="">
          </coupon-item>
        </item-grid>
      </category-content>
      <category-content>
        <category-header :to="{ name: 'MyComment'}">
          <div slot="title" class="category-header">
            <span class="title">專屬折扣</span>
            <img src="@/assets/images/homepage/ticket.png" alt="">
          </div>
        </category-header>
        <item-grid height="240px">
          <coupon-item v-for="s in 6" :key="s">
            <img src="@/assets/images/homepage/coupon-icon.svg" alt="">
          </coupon-item>
        </item-grid>
      </category-content>
      <category-content>
        <category-header :to="{ name: 'MyComment'}">
          <div slot="title" class="category-header">
            <span class="title">主題活動</span>
            <img src="@/assets/images/homepage/balloon.png" alt="">
          </div>
        </category-header>
        <two-column v-for="t in 3" :key="t"/>
      </category-content>
      <category-content>
        <category-header :to="{ name: 'MyComment'}">
          <div slot="title" class="category-header">
            <span class="title">熱門貼文</span>
            <img src="@/assets/images/homepage/book.png" alt="">
          </div>
        </category-header>
        <item-grid height="256px">
          <article-card v-for="t in 6" :key="t"/>
        </item-grid>
      </category-content>
      <category-content>
        <category-header :to="{ name: 'MyComment'}">
          <div slot="title" class="category-header">
            <span class="title">美食特派員</span>
            <img src="@/assets/images/homepage/ring.png" alt="">
          </div>
        </category-header>
        <item-grid height="256px">
          <article-card v-for="t in 6" :key="t"/>
        </item-grid>
      </category-content>
      <tab-bar/>
    </div>
  </el-container>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import CategoryContent from '@/components/category/Content.vue';
import CategoryHeader from '@/components/category/Header.vue';
import TabBar from '@/components/TabBar.vue';
import Banner from '@/components/BannerSlider.vue'
import CustomCard from '@/components/CustomCard.vue';
import QuickMenu from '@/components/QuickMenu.vue'
import CouponItem from '@/components/CouponItem.vue'
import ItemGrid from '@/components/category/ItemGrid.vue';
import ArticleCard from '@/components/category/ArticleCard.vue';
import TwoColumn from '@/components/category/TwoColumn.vue'

export default {
  name: "Home",
  components: {
    Banner,
    NavigationBar,
    TabBar,
    CustomCard,
    QuickMenu,
    CategoryContent,
    CategoryHeader,
    ItemGrid,
    CouponItem,
    ArticleCard,
    TwoColumn
  },
  data() {
    return {
      bannerList: [1,2,3,4,5],
      search: ''
    }
  },
  created() {

  },
  mounted() {
    
  },
  methods: {
    scrollToTop: function() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-input__inner {
  background: #F6F5F4;
  border-radius: 50px;
  border: 0px;
  border-top-right-radius: 50px!important;
  border-bottom-right-radius: 50px!important
}
/deep/ .el-input-group__append {
  position: absolute;
  right: 0px;
  top: 12px;
  border: 0px;
  height: 20px;
  background: none;
  button {
    padding: 0px;
    font-size: 20px;
  }
}
.icon {
  width: 20px;
  height: 20px;
  
}
.ball {
  margin-left: 15px
}
.main {
  padding: 0px 0px 10px 0px;
  border-top: 1px solid #E6E3E0;
  overflow-x: auto;
  height: calc(100vh - 60px);
  padding-bottom: 60px
}
.category-header {
  display: flex;
  align-items: center;
  .title {
    position: relative;
    color: #727171;
    font-size: 18px;
    &::after {
      position: absolute;
      content: '';
      height: 3px;
      width: 100%;
      left: 0px;
      bottom: 0px;
      background: #F0D870;
    }
  }
  img {
    margin-left: 5px;
    width: 20px
  }
}
</style>
