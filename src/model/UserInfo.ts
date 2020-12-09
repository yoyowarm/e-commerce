import {Http, Responses} from '../util/Http';

export default class UserData extends Http {

    name = "";
    nickName = "";
    birthdayAt = "";
    picture = "";
    userCode = "";
    gender = 0;
    email = "";
    city = "";
    township = "";
    address = "";
    bannerLink = "";
    bannerUpdatedAt = "";

    public getUserInfo(parameters: {},  funcSuccess: (success: boolean, message: string, userInfo: UserData) => void) {
        this.fetchWithAuth('GetUserInfoWithId', parameters, (success, message, json) => {
            funcSuccess(success, message, this);
        });
    }

}