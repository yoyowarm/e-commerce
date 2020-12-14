<template>
  <div>
    <custom-card class="user-block">
      <el-row type="flex" justify="space-between" class="button-list">
        <el-col>
          <el-button type="text">分享 <img class="share-icon" src="@/assets/images/share.svg" alt=""></el-button>
        </el-col>
        <el-col class="text-right">
          <el-button @click="$router.push({name: 'EditProfile'})" type="text"><img src="@/assets/images/edit_black.svg" alt=""></el-button>
        </el-col>
      </el-row>
      <div class="avatar">
        <img src="@/assets/images/avatar.svg" alt="">
      </div>
      <div class="name">
        user name
      </div>
    </custom-card>
    <custom-card>
      <div>150字以內的短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字方塊短介紹文字</div>
    </custom-card>
    <category-content>
      <category-header :to="{ name: 'MyComment'}">
        <div slot="title">
          <span>我的評價</span>
        </div>
      </category-header>
      <item-grid height="256px">
        <article-card v-for="t in 6" :key="t"/>
      </item-grid>
    </category-content>
    <category-content>
      <category-header :to="{ name: 'MyComment'}">
        <div slot="title">
          <span>喜愛店家</span>
        </div>
      </category-header>
      <item-grid height="256px">
        <article-card v-for="t in 6" :key="t"/>
      </item-grid>
    </category-content>
    <category-content>
      <category-header :to="{ name: 'MyComment'}">
        <div slot="title">
          <span>我的店家</span>
        </div>
      </category-header>
      <item-grid height="136px">
        <store-item :to="{name: 'BrandPage'}" v-for="s in 6" :key="s"/>
      </item-grid>
    </category-content>
    <category-content>
      <category-header :to="{ name: 'MyComment'}">
        <div slot="title">
          <span>喜愛店家</span>
        </div>
      </category-header>
      <item-grid height="136px">
        <store-item :to="{name: 'BrandPage'}" v-for="s in 6" :key="s"/>
      </item-grid>
    </category-content>
  </div>
</template>

<script>
import CategoryContent from '@/components/category/Content.vue';
import CategoryHeader from '@/components/category/Header.vue';
import CustomCard from '@/components/CustomCard.vue';
import ItemGrid from '@/components/category/ItemGrid.vue';
import StoreItem from '@/components/category/StoreItem.vue';
import ArticleCard from '@/components/category/ArticleCard.vue';

export default {
  name: "BusinessCard",
  components:{ 
    CategoryHeader,
    CategoryContent,
    CustomCard,
    StoreItem,
    ItemGrid,
    ArticleCard 
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
.user-block {
  position: relative;
  height: 169px;
  width: 100%;
  background: url("../../../assets/images/user-info-bg.svg")no-repeat;
  .button-list {
    position: absolute;
    width: calc(100% - 40px);
    left: 20px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 10px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .name {
    text-align: center;
  }
  .share-icon {
    width: 14px;
    margin-top: -5px;
  }
}
</style>