<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import User from './model/user';
// import Store from './model/store'

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
  }
}
</script>

<style lang="less">


</style>
