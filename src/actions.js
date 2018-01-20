/**
 * Created by sudarshan on 17/1/18.
 */
import {MERCHANT_ACTIONS} from './constants';
import {apis} from './apis/merchantApi'

export const getMerchantList = (data, type)=>{
    return {
        type : MERCHANT_ACTIONS.GET_LIST,
        data : apis.getMerchantList()     // In real this data will come from api call
    }
}

export const deleteMerchant = (id)=>{
    return {
        type : MERCHANT_ACTIONS.DELETE_MERCHANT,
        id : id     // In real this data will come from api call
    }
}

export const getMerchantInfo = (id)=>{
    return {
        type : MERCHANT_ACTIONS.EDIT_MERCHANT,
        id : id     // In real this data will come from api call
    }
}