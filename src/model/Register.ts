
import {Http, Responses} from '../util/Http';

export default class Register extends Http {
    private isRegister = 1;

    getRegisterState(): number {
        return this.isRegister
    }

    public checkRegister(parameters: {},  funcSuccess: (success: boolean, message: string, register: Register) => void) {
        this.fetch('IsRegister', parameters, (success, message, json) => {
            funcSuccess(success, message, this);
        });
    }

}