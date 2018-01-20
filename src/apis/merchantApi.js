/**
 * Created by sudarshan on 17/1/18.
 */

import {Merchants} from './mockData'

const getMerchantList = () => {
    return Merchants;
}

const deleteMerchant = (id) => {
    return Merchants;
}


export const apis = {
    getMerchantList : getMerchantList,
    deleteMerchant : deleteMerchant

}
