<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

   <el-input
              id="exampleFormControlTextarea1"
              type="textarea"
              placeholder="請輸入問題內容"
              v-model="detail"
              :autosize="{ minRows: 6}"
      >
  </el-input>

    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import User from './model/user';
import Store from './model/store'

@Component
export default class App extends Vue {

  public detail = "";

  created(){
    
    (new User()).signIn({
        countryCode: '+886',
        phone: '0900000001',
        password: 'a11111111'
    }, (user: User) => {
        console.log(user.getToken());
    });

    (new Store()).storeList({
        searchType: 0,
        offset: 0,
        lng: 0,
        lat: 0,  
    }, (store: Store) => {
        console.log(store.data);
    });

    this.$auth.setup();
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
