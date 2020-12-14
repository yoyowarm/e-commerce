export function checkPhone (value) {
    const isPhone = /^(09)[0-9]{8}$/;
    return isPhone.test(value)
}

export function checkPassword (value) {
    const passwordRule = /(?=.*\d)(?=.*[A-Za-z]).{6,12}$/
    return passwordRule.test(value)
}