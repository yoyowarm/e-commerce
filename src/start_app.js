import Vue from 'vue'

export default {
    mountVue(store, router, App, Sqlite){
        document.addEventListener("resume", function () {
    
        }, false);
        
        document.addEventListener('deviceready', function () {
            Sqlite.init();
            new Vue({
                el: "#app",
                store,
                router,
                render: h => h(App)
            }).$mount('#app');
        
        }, false);
    }
}