<template>
  <div
    class="carousel"
    ref="carousel"
  >
    <div
      class="slick-track"
      :style="translate3d"
      ref="slick-track"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="column items-center"
        @click="handleClick(index)"
      >
        <div
          class="column items-center justify-center img-block"
          :class="{active: index === selectedCover}"
        >
          <img src="@/assets/images/homepage/banner.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const ITEM_WIDTH = 165
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Banner extends Vue {
  @Prop({type: Array}) list!: []

  selectedCover = 0
  slick = 0
  startTime = 0

  get translate3d () {
    return `transform: translate3d(${-(ITEM_WIDTH * (this.selectedCover + 0.5))}px, 0px, 0px)`
  }
  animate () {
    const duration = 2500
    const currentTime = new Date().getTime()
    const progress = currentTime - this.startTime
    if (progress > duration) {
      this.startTime = currentTime
      if (this.selectedCover < this.list.length - 1) {
        this.selectedCover++
      } else {
        this.selectedCover = 0
      }
    } else {
      cancelAnimationFrame(this.slick)
    }
    this.slick = requestAnimationFrame(this.animate)
  }
  handleClick (index: number) {
    this.selectedCover = index
    this.startTime = new Date().getTime()
  }
  created () {
    this.animate = this.animate.bind(this)
  }
  mounted () {
    this.startTime = new Date().getTime()
    this.animate()
  }
  beforeDestroy () {
    cancelAnimationFrame(this.slick)
  }
}
// export default {
//   props: {
//     list: {
//       type: Array,
//       default () {
//         return []
//       }
//     }
//   },
//   data () {
//     return {
//       selectedCover: 0,
//       slick: null,
//       startTime: null
//     }
//   },
//   computed: {
//     translate3d () {
//       return `transform: translate3d(${-(ITEM_WIDTH * (this.selectedCover + 0.5))}px, 0px, 0px)`
//     }
//   },
//   methods: {
    
// }
</script>

<style scoped lang="less">
.row {
    display: flex;
}
.justify-center {
    justify-content: center;
}
.items-center {
    align-items: center;
}
.carousel {
  width: 100%;
  height: 268px;
  display: flex;
  overflow: hidden;
  touch-action: none;
  background: #2c2c2c;
  position: relative;
  .slick-track {
    display: flex;
    position: relative;
    left: 50%;
    transition: all 500ms ease-out;
    > div {
      position relative;
      margin: 6px 0px;
      width: 165px;
      transition: height;
      transform: translateX(0);
      .img-block {
        position: relative;
        width: 100%;
        min-height: 82%;
        margin-top: 5px;
        border: 0px;
        border: 5px solid #2c2c2c;
        background: #000;
        border-radius: 10px;
        transition: border 300ms ease-out;
        img {
          width: 92%;
          margin: 0px auto;
        }
      }
      .active {
        border: 5px solid #ff962c;
        width: 100%;
        margin-top: 0px;
        min-height: 87%;
        img {
          width: 96%;
          margin: 0 auto
        }
      }
      p {
        margin-bottom: 0px;
        color: #fff
      }
    }
  }
  .slick-dots {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    width: 100%;
    z-index: 9;
    > div {
      width: 30px;
      height: 30px
    }
    .dot {
      width: 7px;
      height: 7px;
      background: #ccc;
      border-radius: 10px;
    }
    .active {
      background: #ff962c;
    }
  }
  .name {
    position: absolute;
    height: 22px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow : hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #eee;
    bottom: 0px;
    font-size: 12px;
    text-align: left;
    padding: 0px 5px;
    line-height: 22px;
  }
}
</style>
