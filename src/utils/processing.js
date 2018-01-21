/**
 * Created by sudarshan on 18/1/18.
 */

const deleteMerchant = (list, id) => {

    for(var i=0;i<list.length;i++){
        if(list[i].id === id){
           list.splice(i,1);
        break;
        }
    }

    return list;
}

const getMerchantDetail = (list, id) => {

    var detail = {};
    for(var i=0;i<list.length;i++){
        if(list[i].id === id){
            detail = list[i];
            break;
        }
    }

    return detail;
}

const updateDetails = (list, detail) => {

    for(var i=0;i<list.length;i++){
        if(list[i].id === detail.id){
            list[i] = detail;
            break;
        }
    }

    return list;
}

const addMerchant = (list, detail) => {

    detail.id = 'merchant_' + new Date().valueOf();
    detail.bids = [];

    return list.push(detail);
}

const getBids = (list, id) => {

    var detail = {};
    for(var i=0;i<list.length;i++){
        if(list[i].id === id){
            detail = list[i];
            break;
        }
    }

    return detail.bids;
}

export const helper = {
    deleteMerchant : deleteMerchant,
    getMerchantDetail : getMerchantDetail,
    updateDetails : updateDetails,
    addMerchant : addMerchant,
    getBids : getBids
}