import Vue from 'vue'

export default {
    // eslint-disable-next-line no-unused-vars
    mountVue(store, router, App, Sqlite){
        new Vue({
            el: "#app",
            store,
            router,
            render: h => h(App)
        }).$mount('#app');
    }
}