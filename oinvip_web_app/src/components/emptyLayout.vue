<template>
<transition name="slide">
    <el-container class="slidIn is-vertical">
      <mp-Header :title="title">
        <template slot="left">
          <div class="el-col el-col-5">
            <el-button type="text" @click="$router.back()" class="back">
              <img src="@/assets/images/top_bar_back.svg" alt="">
            </el-button>
          </div>
        </template>
      </mp-Header>
      <router-view/>
    </el-container>
</transition>
</template>

<script>
import mpHeader from './header'
export default {
  components: {
    mpHeader
  },
  computed: {
		title () {
			return this.$route.meta.title
		}
	},
}
</script>

<style scoped>
.slidIn {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0%;
  right: 0;
  transition: all .5s ease-in-out;
  animation-name:oxxo;
  animation-duration:0.5s;
  animation-timing-function: cubic-bezier(.03,.98,.87,1);
}

/* before the element is shown, start off the screen to the right */
.slide-enter, .slide-leave-active {
  top: 200%;
}

@keyframes oxxo{
  from{
      top: 200%;
  }
  to{
      top: 0%;
  }
}
.back {
  width: 20px
}
</style>