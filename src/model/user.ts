import {Http, Responses} from '../util/http';

export default class User extends Http {
    private token = "";
    private nickName = "";
    private userCode = "";

    public getToken(): string {
        return this.token;
    }

    public getNickName(): string {
        return this.nickName;
    }

    public getUserCode(): string {
        return this.userCode;
    }

    public setToken(token: string): User {
        this.token = token;
        return this;
    }

    public setNickName(nickName: string): User {
        this.nickName = nickName;
        return this;
    }

    public setUserCode(userCode: string): User {
        this.userCode = userCode;
        return this;
    }

    public signIn(parameters: {},  funcSuccess: (user: User) => void) {
        this.fetchWithEncrypt('SignIn', parameters, (json: Responses) => {
            funcSuccess(this);
        });
    }
}