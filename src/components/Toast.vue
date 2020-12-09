<template>
    <div>
        <div class="error-message" v-if="isShow">{{message}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import {MutationTypes} from '@/store/MutationTypes';

@Component
export default class Toast extends Vue {
    message = '';
    isShow = false;
    timer = 0;

    created(){
        this.$store.subscribe((mutation, state) => {
            if(mutation.type === MutationTypes.SHOW_TOAST){
                this.message = state.toast.message;
                this.show();
            }
        })
    }

    private show() {
        clearTimeout(this.timer);
        this.isShow = true; 
     
        this.timer = setTimeout(() => {
            this.isShow = false;
        }, 4000) ;
    }
}
</script>

<style lang="less" scoped>
.error-message {
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
</style>