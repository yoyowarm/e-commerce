<template>
  <div>
    <el-row type="flex" class="chart">
      <el-col :span="10">
        <div class="pie">
          <span>4.5</span>
          <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
          </div>
          <span class="count">380 則評論</span>
        </div>
      </el-col>
      <el-col :span="14">
        <el-row type="flex" class="bar-graph">
          <el-col :span="6" class="text">很棒</el-col>
          <el-col :span="18" class="bar">
            <div></div>
            <div class="fill"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="bar-graph">
          <el-col :span="6" class="text">非常好</el-col>
          <el-col :span="18" class="bar">
            <div></div>
            <div class="fill"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="bar-graph">
          <el-col :span="6" class="text">一般</el-col>
          <el-col :span="18" class="bar">
            <div></div>
            <div class="fill"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="bar-graph">
          <el-col :span="6" class="text">不好</el-col>
          <el-col :span="18" class="bar">
            <div></div>
            <div class="fill"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="bar-graph">
          <el-col :span="6" class="text">很差</el-col>
          <el-col :span="18" class="bar">
            <div></div>
            <div class="fill"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <image-group :imgList="imgList.slice(0,5)"/>
    <commnet-detail />
  </div>
</template>

<script>
import ImageGroup from '@/components/ImageGroup.vue'
import CommnetDetail from '@/components/CommentDetail.vue'

export default {
  name: "CommentPage",
  components: {
    ImageGroup,
    CommnetDetail 
  },
  data() {
    return {
      imgList: [1,2,3,4,5,6]
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
.chart {
  width: 100%;
  height: 140px;
  margin-top: 20px;
}
.pie {
  width: 74px;
  height: 74px;
  border-radius: 75%;
  background: #D4D5D5;
  position: relative;
  box-sizing: content-box;
  text-align: center;
  margin-left: 40px;
  span {
    position: absolute;
    z-index: 1;
    font-size: 33px;
    left: 0;
    right: 0;
    line-height: 70px;
    margin: auto;
    color: #6A6A67
  }
  .count {
    font-size: 12px;
    color: #8E8E8F;
    margin-top: 56px;
  }
  &::after {
    position: absolute;
    content: '';
    width: 68px;
    height: 68px;
    border-radius: 75%;
    background: #fff;
    top: 3px;
    left: 3px
  }
  .slice {
    clip: rect(auto, auto, auto, auto);
    position: absolute;
    width: 74px;
    height: 74px;
  }
  .bar {
    position: absolute;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: 3px solid #F0D870;
    clip: rect(0em, 37px, 74px, 0em);
    transform: rotate(270deg)
  }
  .fill {
    transform: rotate(180deg);
    position: absolute;
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: 3px solid #F0D870;
    clip: rect(0em, 37px, 74px, 0em);
  }
}

.bar-graph {
  line-height: 25px;
  .text {
    font-size: 14px;
    color: rgb(142,142,143)
  }
  .bar {
    display: flex;
    align-items: center;
    position: relative;
    > div {
      width: 100%;
      height: 4px;
      background: rgb(246,245,244);
      border-radius: 4px 0px 0px 4px;
    }
    .fill {
      background: #F0D870;
      position: absolute;
      width: 70%;
      right: 0px
    }
  }
}
</style>