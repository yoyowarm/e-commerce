import Vue from 'vue'
import VEditor from 'yimo-vue-editor'


Vue.use(VEditor, {

    name: 'v-editor-app',//Custom name
    config: {
        uploadImgUrl: process.env.VUE_APP_FILE_HOST + '/api',
        uploadParams: {
            folder: "/editor",
            apiKey: "41e1ac4a1ad16b11275cd9121b572225",
        },
        // uploadHeaders: {
        //     'token': url === '/auth' ? auth.getToken() : ''
        // }
         uploadHeaders: {
            'Access-Control-Allow-Origin': '*',
        }
    },//wagnEditor config
    uploadHandler: (type, resTxt) => {//Upload processing hook
        // console.log(type)
        // console.log(resTxt)
        if (type === 'success') {
            let res = JSON.parse(resTxt)//Do not process the default look at the return value bit image path
            if (res.status == 1) {
                return process.env.VUE_APP_FILE_HOST + "/" + res.data[0]
            }else{
                return null
            }
        } else if (type === 'error') {
            return '圖片上傳失敗__'
        } else if (type === 'timeout') {
            return '圖片上傳超時'
        }
        return '圖片上傳失敗__'
    }
});

export default {}
