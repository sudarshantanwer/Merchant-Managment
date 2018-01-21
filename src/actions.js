/**
 * Created by sudarshan on 17/1/18.
 */
import {MERCHANT_ACTIONS} from './constants';
import {apis} from './apis/merchantApi'

export const getMerchantList = (pageSize, pageIndex)=>{
    return {
        type : MERCHANT_ACTIONS.GET_LIST,
        data : apis.getMerchantList(pageSize, pageIndex)     // In real this data will come from api call
    }
}

export const getTotalCount = ()=>{
    return {
        type : MERCHANT_ACTIONS.GET_TOTAL_COUNT,
        count : apis.getTotalCount()     // In real this data will come from api call
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

export const updateDetails = (details)=>{
    return {
        type : MERCHANT_ACTIONS.UPDATE_MERCHANT,
        details : details     // In real this data will come from api call
    }
}

export const addMerchant = (details)=>{
    return {
        type : MERCHANT_ACTIONS.ADD_MERCHANT,
        details : details     // In real this data will come from api call
    }
}

export const getBids = (id)=>{
    return {
        type : MERCHANT_ACTIONS.GET_BIDS,
        id : id     // In real this data will come from api call
    }
}