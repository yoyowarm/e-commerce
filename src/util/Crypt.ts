import CryptoJS from 'crypto-js';

export default class Crypt {
    private keyStr!: string;

    public constructor() {
        this.keyStr = '2oinakpeiy87ggla';
    }

    encryptText(text: string): string {
        const data = '0000000000000000' + text;
        const iv = CryptoJS.lib.WordArray.random(128/8);

        const encrypted = CryptoJS.AES.encrypt(
            data,
            CryptoJS.SHA256(this.keyStr),
            {
                iv: iv,
                mode: CryptoJS.mode.CFB,
                padding: CryptoJS.pad.ZeroPadding,
            }
        );

        return encrypted.toString();
    }

    decryptText(text: string): string {
        const iv = CryptoJS.lib.WordArray.random(128/8);

        const decrypted = CryptoJS.AES.decrypt(
            text,
            CryptoJS.SHA256(this.keyStr),
            {
                iv: iv,
                mode: CryptoJS.mode.CFB,
            }
        ).toString();

        let zeroCount = 0;
        for (let i = decrypted.length - 1; i >= 0; i--) {
            if(decrypted.charAt(i) === '0'){
                zeroCount++;
            } else {
                break;
            }
        }

        const data = decrypted.substring(0, decrypted.length - zeroCount).substring(32);
        return this.hex2s(data);
    }

    private hex2s(hexx: string): string {
        const hex = hexx.toString();
        let str = '';
        for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    }
}