import User from "@/model/User";

export default class Auth {
    private static _instance: Auth;
    private _user!: User;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public get user(){
        return this._user || (this._user = new User());
    }

    public setup(){
        this.user.setToken(window.localStorage.getItem('token') || '').
                  setNickName(window.localStorage.getItem('nickName') || '').
                  setUserCode(window.localStorage.getItem('userCode') || '');
    }

    public isSignIn(): boolean{
        return this.user.getToken() !== '';
    }

    public clearToken(){
        this.user.setToken('').
                setNickName('').
                setUserCode('');

        window.localStorage.setItem('token', '');
        window.localStorage.setItem('nickName', '');
        window.localStorage.setItem('userCode', '');
    }
}