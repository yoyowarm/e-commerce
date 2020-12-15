<template>
  <div>
    <item-grid class="counties">
      <el-button circle>
        <img class="landmark" src="@/assets/images/gift/landmark.svg" alt="">
      </el-button>
      <el-button circle>
        台南市
      </el-button>
      <el-button circle>
        高雄市
      </el-button>
      <el-button circle>
        台北市
      </el-button>
      <el-button circle>
        新北市
      </el-button>
      <el-button circle>
        台中市
      </el-button>
    </item-grid>
    <category-content v-for="b in 6" :key="b">
      <two-column class="branch">
        <div class="store-pic" slot="left">
          <img src="@/assets/images/gift/pic.png" alt="">
        </div>
        <div slot="right">
          <ul>
            <li class="brand">
              品牌 Brand
            </li>
            <li class="branch-name">
              — 門市分店 branch store
            </li>
          </ul>
          <el-row type="flex">
            <el-col :span="5" class="buttons">
              <el-button icon="el-icon-phone-outline" class="store-phone-btn" circle></el-button><br>
              <el-button icon="el-icon-location" class="store-location-btn" @click="$router.push({ name: 'StoreMap'})" circle></el-button>
            </el-col>
            <el-col :span="19">
              <ul>
                <li>06 298 3377</li>
                <li>3.3 km</li>
              </ul>
            </el-col>
          </el-row>
          <div>台南市安平區府前路二段630號</div>
        </div>
      </two-column>
    </category-content>
  </div>
</template>

<script>
import CategoryContent from '@/components/category/Content.vue'
import ItemGrid from '@/components/category/ItemGrid.vue'
import TwoColumn from '@/components/category/TwoColumn.vue'
export default {
  name: "Branch",
  components: {
    CategoryContent,
    ItemGrid,
    TwoColumn
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
.counties {
  margin: 20px 0px;
  button {
    margin-right: 10px;
    min-width: 60px;
    height: 60px;
    padding: 0px;
    >span {
      text-align: center;
    }
    .landmark {
      width: 25px;
    }
  }
}
.branch {
  /deep/.cover {
    width: 28%;
    background: none;
    display: flex;
    align-items: center;
    .store-pic {
      height: 88px;
    }
    img {
      height: 100%;
      object-fit: contain;
    }
  }
  /deep/.right{
    width: 72%;
    text-align: left;
  }
}
.buttons {
  button {
    padding: 5px;
    margin-bottom: 5px;
  }
  /deep/ [class^=el-icon-] {
    font-size: 20px;
  }
}
/deep/.two-column {
  padding: 0px
}
/deep/.content {
  padding: 15px 0px;
  margin: 0px 20px
}
</style>