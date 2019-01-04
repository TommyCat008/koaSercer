/*
 * @Author: 汤米猫 
 * @Date: 2019-01-04 15:46:54 
 * @Last Modified by: 汤米猫
 * @Last Modified time: 2019-01-04 15:50:41
 */


function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

class Utils {
    constructor() {
        
    }

    static createGuid() {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

}

export {
    Utils
}