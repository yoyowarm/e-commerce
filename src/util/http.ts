import router from '../router/Index'
import auth from './Auth'
import crypt from './Crypt'

export interface Responses {
    data: object;
    message: string;
    status: boolean;
}

export class Http {
    private csrfToken!: string;
    private fileHost!: string;
    private notSaveArray!: [string];

    public constructor() {
        this.csrfToken = process.env.VUE_APP_CSRF_TOKEN;
        this.csrfToken = process.env.VUE_APP_FILE_HOST + '/api';
        this.notSaveArray = ['SignIn'];
    }

    protected fetchWithEncrypt(action: string, parameter: {}, funcSuccess: (json: Responses) => void) {
        this.send(action, parameter, '', true, funcSuccess);
    }

    protected fetchWithAuthEncrypt(action: string, parameter: {}, funcSuccess: (json: Responses) => void) {
        this.send(action, parameter, '/auth', true, funcSuccess);
    }

    protected fetchWithAuth(action: string, parameter: {}, funcSuccess: (json: Responses) => void) {
        this.send(action, parameter, '/auth', false, funcSuccess);
    }

    protected fetch(action: string, parameter: {}, funcSuccess: (json: Responses) => void) {
        this.send(action, parameter, '', false, funcSuccess);
    }

    private async send(action: string, parameter: {}, authPath: string, isEncrypt: boolean, funcSuccess: (json: Responses) => void) {
        let parameterStr = JSON.stringify(parameter);

        if(isEncrypt){
            parameterStr = (new crypt()).encryptText(parameterStr);
        }

        const paramJsonStr = JSON.stringify({
            'action': action,
            'parameters': parameterStr,
        });

        await fetch(process.env.VUE_APP_API_HOST  + authPath, {
            body: paramJsonStr,
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Csrf-Token': this.csrfToken === '' || typeof this.csrfToken === 'undefined' ? process.env.VUE_APP_CSRF_TOKEN : this.csrfToken,
                'appName': 'com.lifelink.oin'
            }),
            method: 'POST'
        }).then(response => {
            return response.text();
        // }).catch(() => {
           
        })
        .then((text) => {
            // JSON Hijacking while(1);
            if(text){
                const jsonStr = text.replace('while(1);', '');
                const json = JSON.parse(jsonStr);
   
                if (!json.status && json.message === "logout") {
                    auth.Instance.clearToken();
                    router.push({path: '/'});
                    return;
                }

                if(!(json.data instanceof Array)) {
                    const dataKeys = Object.keys(json.data);
                    for (const dataKey of dataKeys) {
                        if(Object.prototype.hasOwnProperty.call(this, dataKey)){
                            console.log(dataKey);
                            Object.defineProperty(this, dataKey, {
                                value: json.data[dataKey],
                                writable: true
                            });
                        }
                    }
                } else {
                    Object.defineProperty(this, "data", {
                        value: json.data,
                        writable: true
                    });
                }
                
                funcSuccess(json);
            }
        });
    }
}