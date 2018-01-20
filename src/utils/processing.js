/**
 * Created by sudarshan on 18/1/18.
 */

const deleteMerchant = (list, id) => {
    debugger;
    for(var i=0;i<list.length;i++){
        if(list[i].id === id){
           list.splice(i,1);
        break;
        }
    }

    return list;
}

export const helper = {
    deleteMerchant : deleteMerchant
}