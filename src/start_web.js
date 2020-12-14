import Vue from 'vue'

export default {
    mountVue(store, router, App){
        new Vue({
            el: "#app",
            store,
            router,
            render: h => h(App)
        }).$mount('#app');
    }
}