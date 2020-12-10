<template>
  <div class="display">
    <div class="head">
      <img src="@/assets/images/setting/push-img.svg" alt="">
      <p>將接收來自以下品牌的推播通知</p>
    </div>
    <list-container>
      <template v-for="(s, index) in listsMenu">
        <list-item :key="index" :title="s.name">
          <template slot="left">
            <el-row type="flex" class="store">
              <el-col :span="10">
                <div class="avatar"></div>
              </el-col>
              <el-col :span="14">
                <ul>
                  <li>品牌名稱</li>
                  <li>—分店名稱</li>
                </ul>
              </el-col>
            </el-row>
          </template>
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

<script lang="ts">
import ListItem from '@/components/lists/ListItem.vue'
import ListContainer from '@/components/lists/container.vue'
import { Vue, Component } from 'vue-property-decorator';

@Component({components:{ ListItem, ListContainer }})
export default class DisplaySetting extends Vue {
listsMenu = [
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
      font-size: 24px;
      text-align: center;
    }
  }
  .store {
    .avatar {
      width: 48px;
      height: 48px;
      background: #F6F5F4;
      border-radius: 10px;
    }
    ul {
      white-space: nowrap;
      margin-bottom: 0px;
      margin: auto 0px;
      margin-left: 8px;
    }
    li {
      line-height: 22px;
    }
  }
}
</style>