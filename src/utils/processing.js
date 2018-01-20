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

export const helper = {
    deleteMerchant : deleteMerchant,
    getMerchantDetail : getMerchantDetail
}