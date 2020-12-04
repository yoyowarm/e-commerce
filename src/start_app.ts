import Vue from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mountVue(router: any, store: any, App: any){
    document.addEventListener('deviceready', function () {
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }, false);
}