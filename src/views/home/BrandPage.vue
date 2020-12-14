<template>
  <div>
    <custom-card>
      <el-row class="marquee" type="flex">
        <el-col :span="2">
          <img src="@/assets/images/marquee.svg" alt="">
        </el-col>
        <el-col :span="22">
          <span>公告跑馬燈</span>
        </el-col>
      </el-row>
      <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/images/homepage/brand-cover0.png" class="image">
      <div class="card-body">
        <el-row type="flex" justify="space-between">
          <el-col :span="16">
            <ul>
              <li><h2 class="brand">品牌 Brand</h2></li>
              <li><p class="branch-name">— 門市分店 branch store</p></li>
            </ul>
          </el-col>
          <el-col :span="8" class="distance">
            <i class="el-icon-location-outline"></i>
            <span>3.3 km</span>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="4" class="card-icons">
            <el-button icon="el-icon-phone-outline" class="phone" circle></el-button><br>
            <el-button icon="el-icon-location" class="location" circle></el-button>
          </el-col>
          <el-col :span="20">
            <ul class="store-info">
              <li>06 298 3377</li>
              <li>台南市安平區府前路二段630號</li>
            </ul>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" style="margin-top:8px">
          <el-button class="join" round>
            <img src="@/assets/images/homepage/member-join.svg" alt="">
            <span>已為會員</span>
          </el-button>
          <el-col :span="20" class="comment">
            <span>
              <img src="@/assets/images/comment/comment-line.png" alt="">
              15
            </span>
            <span>
              <img src="@/assets/images/comment/heart-line.png" alt="">
              24
            </span>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-row type="flex" style="margin: 10px 0px">
      <el-col :span="16" class="business-hours"><span class="status">營業中．</span>結束營業時間14：30<i class="el-icon-caret-bottom"></i></el-col>
      <el-col :span="8" class="icons">
        <img src="@/assets/images/homepage/fb-icon.svg" alt="">
        <img src="@/assets/images/homepage/ig-icon.svg" alt="">
        <img src="@/assets/images/homepage/global-icon.svg" alt="">
      </el-col>
    </el-row>
    <el-row type="flex" class="wrap-menu">
      <div class="item">
        <img src="@/assets/images/homepage/menu1.svg" alt="">
        <span>門市資訊</span>
      </div>
      <div class="item">
        <img src="@/assets/images/homepage/menu2.svg" alt="">
        <span>意見反映</span>
      </div>
      <div class="item">
        <img src="@/assets/images/homepage/menu3.svg" alt="">
        <span>評論</span>
      </div>
      <div class="item">
        <img src="@/assets/images/homepage/menu4.svg" alt="">
        <span>點餐</span>
      </div>
      <div class="item">
        <img src="@/assets/images/homepage/menu5.svg" alt="">
        <span>候位</span>
      </div>
    </el-row>
    <div class="about">
      <div slot="title" class="title">
        關於我們
      </div>
      <p>用心意煮出新意 ‧ 用美味留下回味<br>府前店輕奢雅緻顛滅傳統麵攤形式，以現代新時尚為您編寫壓軸好戲，詮釋出每一碗麵工藝的視覺系精品，將心意昇華為您味蕾上扣人心弦的回憶。</p>
    </div>
    </custom-card>
    <category-content>
      <category-header :to="{name: 'Home'}">
        <div slot="title" class="title">
          MENU
        </div>
        <img slot="more" src="@/assets/images/more2.svg" alt="">
      </category-header>
      <item-grid>
        <div class="menu-block" v-for="menu in 6" :key="menu">
          <div class="cover">
            <img src="@/assets/images/homepage/brand-cover.png" alt="">
          </div>
        </div>
      </item-grid>
    </category-content>
    <category-content>
      <category-header :to="{name: 'Home'}">
        <div slot="title" class="title">
          優惠券進行式
        </div>
        <img slot="more" src="@/assets/images/more2.svg" alt="">
      </category-header>
      <item-grid>
        <div class="menu-block coupon" v-for="coupon in 6" :key="coupon">
          <div class="cover">
            <img src="@/assets/images/homepage/brand-cover2.png" alt="">
          </div>
          <div class="mask">
            <p class="time">週一分享日八折</p>
            <p class="name">乾拌麵三兄弟套乾拌麵三兄弟套</p>
            <img src="@/assets/images/homepage/cut.svg" alt="">
          </div>
        </div>
      </item-grid>
    </category-content>
    <category-content>
      <category-header :to="{name: 'Home'}">
        <div slot="title" class="title">
          餐點推薦區
        </div>
        <img slot="more" src="@/assets/images/more2.svg" alt="">
      </category-header>
      <item-grid>
        <div class="menu-block recommend" v-for="recommend in 6" :key="recommend">
          <div class="cover"></div>
        </div>
      </item-grid>
    </category-content>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CategoryContent from '@/components/category/Content.vue';
import CategoryHeader from '@/components/category/Header.vue';
import ItemGrid from '@/components/category/ItemGrid.vue';
import CustomCard from '@/components/CustomCard.vue';

@Component({ components: {
  CategoryContent,
  CategoryHeader,
  ItemGrid,
  CustomCard
}})
export default class BrandPage extends Vue{

}
</script>

<style lang="less" scoped>
/deep/ .el-card {
  border-radius: 0px;
}
/deep/ .el-card__body {
  padding-top: 5px
}
.marquee {
  color: #A6A7A7;
  font-size: 14px;
  .el-col {
    display: flex;
    align-items: center;
  }
  img {
    width: 26px;
  }
}
.title {
  color: #727171;
  font-size: 20px;
  padding-left: 15px;
  position: relative;
  margin-bottom: 12px;
  &::after {
    position: absolute;
    content: '';
    width: 8px;
    height: 18px;
    background: #CBAE97;
    left: 0px;
    top: 8px;
  }
}
.about {
  color: #5F5E5E;
  font-size: 15px;
  
  p {
    margin-bottom: 0px;
  }
}
.menu-block {
  min-width: 136px;
  min-height: 136px;
  margin: 0px 12px 0px 0px;
  position: relative;
  &.recommend {
    min-width: 240px;
  }
  &.coupon {
    min-height: 200px;
    .mask {
      width: 100%;
      min-height: 100px;
      border-radius: 0px 0px 10px 10px;
      position: absolute;
      bottom: 0px;
      background: rgba(62,58,57,.9);
      padding: 10px;
      font-size: 16px;
      text-align: center;
      p {
        margin-bottom: 0px;
        line-height: 22px;
      }
      .time {
        color: #F0D870
      }
      .name {
        color: #fff;
        overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
        width: 100%;
      }
      img {
        width: 37px;
        margin-top: 10px
      }
    }
    
  }
  .cover {
    width: 100%;
    height: 100%;
    background: #F6F5F4;
    border-radius: 10px;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
}
.card-body {
  padding: 15px 20px
}
.wrap-menu {
  display: flex;
  align-items: center;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding: 4px 0px;
  .item {
    min-width: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    color: #8E8E8F;
    font-size: 14px;
  }
}
.business-hours {
  font-size: 13px;
  color: #5F5E5E;
  padding-left: 5px;
  .status {
    color: #E37E84;
  }
}
.icons {
  img {
    width: 26px;
    margin-left: 10px
  }
}
.card-icons {
  button {
    padding: 5px;
    margin: 6px 0px;
  }
  /deep/ [class^=el-icon-] {
    font-size: 20px;
  }
  .phone {
    color: #2FB092;
    border-color: #2FB092
  }
  .location {
    color: #7EABD6;
    border-color: #7EABD6
  }
}
.store-info {
  color: #8E8E8F;
  font-size: 14px;
  li {
    line-height: 42px;
  }
}
.distance {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: #6C9FCB;
  font-size: 16px;
  line-height: 22px;
  i {
    line-height: 22px;
    margin-right: 8px
  }
}
.join {
  background: #F0D870;
  color: #8E8E8F;
  padding: 0px;
  border: 0px;
  display: flex;
  align-items: center;
  &.is-round {
    padding: 5px 15px
  }
  img {
    width: 23px;
    margin-right: 20px
  }
}
.comment {
  color: #8E8E8F;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  span {
    margin-left: 10px
  }
  img {
    width: 26px;
  }
}
</style>