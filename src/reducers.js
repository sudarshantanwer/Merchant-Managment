
import {MERCHANT_ACTIONS} from './constants';
import {helper} from './utils/processing';

 const merchantReducer = (state = {}, action) =>{

  switch (action.type){
      case MERCHANT_ACTIONS.GET_LIST :
        return {...state, list : action.data}
        break;
      case MERCHANT_ACTIONS.DELETE_MERCHANT:
          return {...state, list : helper.deleteMerchant(state.list, action.id)}
          break;
      case MERCHANT_ACTIONS.EDIT_MERCHANT:
          return {...state, detail : helper.getMerchantDetail(state.list, action.id)}
          break;
      case MERCHANT_ACTIONS.UPDATE_MERCHANT:
          return {...state, list : helper.updateDetails(state.list, action.details)}
          break;
      case MERCHANT_ACTIONS.ADD_MERCHANT:
          return {...state, list : helper.addMerchant(state.list, action.details)}
          break;
      default :
        return state;

  }


}

export default {
    merchantReducer : merchantReducer
}
