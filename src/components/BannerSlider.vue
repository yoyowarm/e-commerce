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

<script>
export default {
  name: "BannerSlider",
  props: {
    list: Array,
  },
  data() {
    return {
      selectedCover: 0,
      slick: 0,
      startTime: 0
    }
  },
  computed() {
    translate3d: {
      get: function(){
        return `transform: translate3d(${-(ITEM_WIDTH * (this.selectedCover + 0.5))}px, 0px, 0px)`;
      }
    }
  },
  created() {
    this.animate = this.animate.bind(this);

  },
  mounted() {
    this.startTime = new Date().getTime();
    this.animate();
  },
  beforeDestroy () {
    cancelAnimationFrame(this.slick);
  },
  methods: {
    animate: function() {
      const duration = 3500;
      const currentTime = new Date().getTime();
      const progress = currentTime - this.startTime;
      if (progress > duration) {
        this.startTime = currentTime
        if (this.selectedCover < this.list.length - 1) {
          this.selectedCover++;
        } else {
          this.selectedCover = 0;
        }
      } else {
        cancelAnimationFrame(this.slick);
      }
      this.slick = requestAnimationFrame(this.animate);
    }
  },
  handleClick (index) {
    this.selectedCover = index
    this.startTime = new Date().getTime()
  }
}
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
  height: 400px;
  display: flex;
  overflow: hidden;
  touch-action: none;
  position: relative;
  .slick-track {
    display: flex;
    position: relative;
    left: 50%;
    transition: all 500ms ease-out;
    > div {
      position: relative;
      margin: 6px 0px;
      width: 300px;
      transition: height;
      transform: translateX(0);
      .img-block {
        position: relative;
        width: 100%;
        min-height: 82%;
        margin-top: 5px;
        border: 0px;
        border-radius: 10px;
        transition: border 300ms ease-out;
        img {
          width: 92%;
          margin: 0px auto;
        }
      }
      .active {
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
}
</style>
