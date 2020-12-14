<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import User from './model/user';
// import Store from './model/store'
// import "cordova-plugin-camera";
// import {Camera, CameraPopoverOptions} from 'cordova-plugin-camera';
// import {Camera, CameraPopoverOptions} from 'node_modules/cordova-plugin-camera/types/index';
// <reference types="node_modules/cordova-plugin-camera/types/index.d.ts" />
// import * as moment from 'cordova-plugin-camera';



@Component
export default class App extends Vue {

  public detail = "";

  created(){
    // (new User()).signIn({
    //     countryCode: '+886',
    //     phone: '0900000001',
    //     password: 'a11111111'
    // }, (user: User) => {
    //     console.log(user.getToken());
    // });

    // (new Store()).storeList({
    //     searchType: 0,
    //     offset: 0,
    //     lng: 0,
    //     lat: 0,  
    // }, (store: Store) => {
    //     console.log(store.data);
    // });

    this.$auth.setup();
    this.click();
  }

  click(){
  // eslint-disable-next-line no-undef
    // if( navigator != undefined){
       // eslint-disable-next-line no-undef
      // const destinationType = Camera.DestinationType.FILE_URI;
        navigator.camera.getPicture(this.onSuccess, this.onFail,
    {
        // eslint-disable-next-line no-undef
        destinationType: Camera.DestinationType.FILE_URI,
 // eslint-disable-next-line no-undef
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      // eslint-disable-next-line no-undef
        popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });
    // }
  }

  onSuccess(){
    //  cons image = document.getElementById('myImage');
    // image.src = imageURI;
    // console.log(imageURI);
    console.log('onSuccess');
  }

  onFail(){
    console.log('onSuccess');
  }
}
</script>

<style lang="less">


</style>
