/**
 * Created by sudarshan on 17/1/18.
 */

import {Merchants} from './mockData'

const getMerchantList = (pageSize, pageIndex) => {
    var list = [];
    for(var i=pageIndex;i<pageSize;i++){
        list.push(Merchants[i]);
    }

    return list;
}

const getTotalCount = () => {
    return Merchants.length;
}

const deleteMerchant = (id) => {
    return Merchants;
}


export const apis = {
    getMerchantList : getMerchantList,
    deleteMerchant : deleteMerchant,
    getTotalCount : getTotalCount

}
