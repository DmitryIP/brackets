module.exports = function check(str, bracketsConfig) {
    let strConfig = bracketsConfig.map(item => item.join(''));
    for (let i = 0; i < strConfig.length; i++) {
        if (str.indexOf(strConfig[i]) != -1) {
            str = str.replace(strConfig[i], '');
            i = -1;
        };
    }
    if (str.length > 0)
        return false;
    else
        return true;
}
