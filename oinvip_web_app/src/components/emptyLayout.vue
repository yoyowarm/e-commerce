<template>
<transition name="slide">
    <div class="slidein">
      <router-view/>
    </div>
</transition>
</template>

<script>
export default {

}
</script>

<style scoped>
.slidein {
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
  background: #ddd
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
</style>