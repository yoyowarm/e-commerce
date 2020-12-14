<template>
  <div class="display">
    <div class="head">
      <img src="@/assets/images/setting/display-img.svg" alt="">
      <p>將顯示於個人名片頁</p>
    </div>
    <list-container>
      <template v-for="(s, index) in listsMenu">
        <list-item :key="index" :title="s.name">
          <template slot="right">
            <el-switch
              v-model="s.switch"
              active-color="#F0D870"
              inactive-color="#D4D5D5"
              >
            </el-switch>
          </template>
        </list-item>
      </template>
    </list-container>
  </div>
</template>

<script>
import ListItem from '@/components/lists/ListItem.vue'
import ListContainer from '@/components/lists/Container.vue'

export default {
  name: "DisplaySetting",
  components:{ ListItem, ListContainer },
  data() {
    return {
      listsMenu: [
        { name: '我的評論',
          switch: false
        },
        { name: '喜愛文章',
          switch: false
        },
        { name: '收藏文章',
          switch: false
        },
        { name: '我的店家',
          switch: false
        },
        { name: '喜愛店家',
          switch: false
        }]
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
.display {
  .head {
    height: 173px;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 61px;
    }
    p {
      margin-top: 20px;
      color: #FFB11B;
      font-size: 26px;
      text-align: center;
    }
  }
}
</style>