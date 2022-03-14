import { TYPES } from '../actions/fetchActions';

export const fetchInitialState = {
   data: null,
   isLoading: true,
   err: null,
};

export const fetchReducer = (state, action) => {
   switch (action.type) {
      case TYPES.ONCHANGESTATE:
         return {
            ...action.payload,
         };
      case TYPES.ONSUCCESSFETCH:
         return {
            data: action.payload,
            isLoading: false,
            err: {
               error: false,
            },
         };
      case TYPES.ONERRORFETCH:
         return {
            data: null,
            isLoading: false,
            err: action.payload,
         };

      default:
         return state;
   }
};
