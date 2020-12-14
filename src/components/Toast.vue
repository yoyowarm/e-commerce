<template>
    <div>
        <div :class="['toast-show', isShow ? '' : 'toast-hidden']" >{{message}}</div>
    </div>
</template>

<script>

import MutationTypes from '@/store/mutationTypes';
export default {
  name: "Toast",
  data() {
    return {
        message: '',
        isShow: false,
        timer: 0
    }
  },
  created() {
    this.$store.subscribe((mutation, state) => {
        if(mutation.type === MutationTypes.SHOW_TOAST){
            this.message = state.toast.message;
            this.show();
        }
    })
  },
  mounted() {
    
  },
  methods: {
    show() {
        clearTimeout(this.timer);
        this.isShow = true; 
        
        this.timer = setTimeout(() => {
            this.isShow = false;
        }, 4000) ;
    }
  }
}
</script>

<style lang="less" scoped>
.toast-show {
  position: fixed;
  background: #666;
  color: #fff;
  border-radius: 50px;
  height: 48px;
  width: 210px;
  text-align: center;
  line-height: 48px;
  left: 0px;
  right: 0px;
  bottom: 120px;
  margin: 0 auto;
  animation-name:oxxo;
  animation-delay:2s;
  animation-duration:2s;
}

.toast-hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
}
</style>