<template>
  <div>
    <category-content>
      <category-header>
        <div slot="title" class="category-header">
            <span class="title">品牌推薦</span>
            <img src="@/assets/images/homepage/glasses.png" alt="">
          </div>
      </category-header>
      <item-grid height="136px">
        <store-item v-for="s in 6" :key="s"/>
      </item-grid>
      <category-header :to="{name: 'MyStore'}" class="marginTop">
        <div slot="title" class="category-header">
            <span class="title">入會店家</span>
            <img src="@/assets/images/homepage/user.png" alt="">
          </div>
      </category-header>
      <item-grid height="136px">
        <store-item v-for="s in 6" :key="s"/>
      </item-grid>
      <category-header class="marginTop">
        <div slot="title" class="category-header">
            <span class="title">快來串門子</span>
            <img src="@/assets/images/homepage/people.png" alt="">
        </div>
      </category-header>
      <el-row class="multiple-column">
        <el-col :span="6" v-for="a in 12" :key="a">
          <store-item />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6" class="text-center">
          <el-button type="text" @click="$router.push({ name: 'Visit'})">
            <img src="@/assets/images/more.svg" alt="">
          </el-button>
        </el-col>
      </el-row>
    </category-content>
    <category-content>
      <category-header>
        <div slot="title" class="category-header">
          <span class="title">好友串門子</span>
          <img src="@/assets/images/homepage/broadcast.png" alt="">
        </div>
      </category-header>
      <div class="article">
        <div class="cover"></div>
        <p class="title">標題名稱</p>
        <p class="description">內容填充文字，可支援emoji這些已經到十。回去走進，攤位文章想吃麼都大家就都，後就，樣的老人的店都可實在。以為喜歡異樣你看⋯是男會有，看完非常那時也沒的類，就可胡...</p>
      </div>
      <item-grid>
        <store-item v-for="o in 6" :key="o">
          <div slot="avatar" class="avatar-block"></div>
        </store-item>
      </item-grid>
    </category-content>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CategoryContent from '@/components/category/Content.vue';
import CategoryHeader from '@/components/category/Header.vue';
import ItemGrid from '@/components/category/ItemGrid.vue';
import StoreItem from '@/components/category/StoreItem.vue';
@Component({ components: {
  CategoryHeader,
  CategoryContent,
  StoreItem,
  ItemGrid
}})
export default class BrandWall extends Vue{

}
</script>

<style lang="less" scoped>
.marginTop {
  margin-top: 40px;
}
.category-header {
  display: flex;
  align-items: center;
  .title {
    position: relative;
    color: #727171;
    font-size: 18px;
  }
  img {
    margin-left: 5px;
    width: 20px
  }
}
.multiple-column {
  padding: 10px;
}
.avatar-block {
  border: 1px solid rgba(212,213,213,1);
  background: #fff;
  width: 85px;
  height: 85px;
  border-radius: 10px;
}
.article {
  padding: 20px;
  padding-top: 10px;
  .cover {
    width: 100%;
    height: 183px;
    background: rgb(246,246,246);
    margin-bottom: 10px
  }
  .title {
    font-size: 20px;
    color: rgb(114,113,113)
  }
  .description {
    font-size: 16px;
    color: rgb(159,160,160);
    margin-bottom: 0px;
  }
}

</style>