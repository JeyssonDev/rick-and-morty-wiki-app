import { TYPES } from '../actions/fetchActions';

export const handleOnSubmitId = (e, searchData, state, cb) => {
   e.preventDefault();
   if (searchData.searchBy === 'id' && searchData.searchBar) {
      cb({ type: TYPES.ONCHANGESTATE, payload: { ...state } });
   }
};

export const handleOnSubmitName = (data, cb) => {
   cb({
      type: TYPES.ONCHANGESTATE,
      payload: { data: data, isLoading: false, err: { error: false } },
   });
};

export const handleVisibility = (e, info, cb) => {
   if (info.searchBy === 'name' && e.target.value) cb(true);
   if (info.searchBy === 'name' && !e.target.value) cb(false);
};
