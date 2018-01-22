/**
 * Created by sudarshan on 17/1/18.
 */

import {Merchants} from './mockData'

const getMerchantList = (pageSize, pageIndex) => {
    // var list = [];
    // for(var i=(pageSize*pageIndex);i<((pageSize*pageIndex) + pageSize);i++){
    //     list.push(Merchants[i]);
    // }
    //
    // return list;
    return Merchants;
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
